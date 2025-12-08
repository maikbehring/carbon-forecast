# Developer Documentation: TanStack Start POST + Middleware + Body Bug

## Problembeschreibung

Bei TanStack Start Server Functions mit Middleware und POST-Requests geht der Request-Body (`data`) verloren. Obwohl der Client die Daten korrekt sendet, kommt in der Server-Middleware und im Handler `null` oder `undefined` an.

### Symptome

- ✅ GET-Requests funktionieren korrekt
- ✅ POST-Requests ohne Middleware funktionieren korrekt
- ❌ POST-Requests mit Middleware: `data` ist `null` in Middleware und Handler

### Beispiel

```typescript
// Client sendet:
performServerAction({ serverId: "123", action: "reboot" })

// Server-Middleware erhält:
data === null  // ❌ Sollte { serverId: "123", action: "reboot" } sein

// Handler erhält:
data === null  // ❌ Sollte { serverId: "123", action: "reboot" } sein
```

## Root Cause

TanStack Start parst den Request-Body **erst nach** der Middleware, wenn kein `inputValidator` verwendet wird. Die Middleware läuft also bevor der Body eingelesen wurde, daher ist `data` in der Middleware `null` oder `undefined`.

### Interner Ablauf (ohne inputValidator)

```
1. Client sendet POST Request mit Body
2. Request erreicht Server
3. Middleware läuft (data ist noch null!)
4. Handler läuft (data ist noch null!)
5. TanStack Start parst Body (zu spät!)
```

### Interner Ablauf (mit inputValidator)

```
1. Client sendet POST Request mit Body
2. Request erreicht Server
3. inputValidator parst Body VOR Middleware
4. Middleware läuft (data ist verfügbar!)
5. Handler läuft (data ist verfügbar!)
```

## Lösung: inputValidator verwenden (nur in neueren Versionen)

⚠️ **WICHTIG**: `inputValidator` ist **nicht** in TanStack Start v1.131.48 verfügbar! Diese Lösung funktioniert nur in neueren Versionen.

Die **empfohlene und nachhaltige Lösung** für neuere Versionen ist die Verwendung von `inputValidator` mit `zodValidator`. Der Validator parst den Body **vor** der Middleware und stellt die Daten in `data` bereit.

### Installation

```bash
pnpm add @tanstack/zod-adapter
```

### Implementierung (nur für neuere Versionen)

```typescript
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

// Schema definieren
const ServerActionSchema = z.object({
  serverId: z.union([z.string(), z.number()]).transform((val) => 
    typeof val === "string" ? parseInt(val, 10) : val
  ),
  action: z.enum(["poweron", "poweroff", "reboot", "shutdown"]),
});

// inputValidator VOR Middleware einfügen
export const performServerAction = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(ServerActionSchema))
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }) => {
    // data ist jetzt validiert und verfügbar!
    const parsed = data as z.infer<typeof ServerActionSchema>;
    
    // Weiterer Code...
  });
```

### Vorteile

- ✅ **Nachhaltig**: Offizielle Lösung von TanStack Start (wenn verfügbar)
- ✅ **Typ-sicher**: Zod validiert und typisiert die Daten
- ✅ **Sicherheit**: Validierung verhindert fehlerhafte Eingaben
- ✅ **Einfach**: Keine Workarounds nötig
- ✅ **Dokumentiert**: Datenstruktur ist im Schema definiert

### Wichtig

- `inputValidator` muss **vor** `.middleware()` aufgerufen werden
- Der Validator läuft **vor** der Middleware
- Daten sind in Middleware und Handler verfügbar
- **Nur verfügbar in neueren TanStack Start Versionen** (nicht in v1.131.48)

## Lösung für TanStack Start v1.131.48: sendContext Workaround

Da `inputValidator` in v1.131.48 nicht verfügbar ist, müssen wir einen Workaround verwenden: Daten über `sendContext` weiterleiten.

### Implementierung

**Client-Middleware:**
```typescript
.client(async ({ next, data }) => {
  const sessionToken = await getSessionToken();
  const config = await getConfig();

  const sendContext: {
    sessionToken: string;
    projectId: string | undefined;
    _data?: unknown;
  } = {
    sessionToken,
    projectId: config.projectId,
  };
  
  // Pass data in sendContext as workaround for middleware bug
  if (data && typeof data === "object") {
    sendContext._data = data;
  }
  
  return (next as any)({
    sendContext,
    data, // Also pass as data parameter (may be lost due to bug)
  });
})
```

**Server-Middleware:**
```typescript
.server(async ({ next, context, data }) => {
  const contextWithToken = context as unknown as { 
    sessionToken: string; 
    projectId?: string;
    _data?: unknown; // Workaround: data passed via sendContext
  };
  
  const res = await verify(contextWithToken.sessionToken);

  // WORKAROUND: Use data from sendContext if data parameter is null
  let parsedData: unknown = data;
  
  if ((parsedData === null || parsedData === undefined) && contextWithToken._data !== undefined) {
    parsedData = contextWithToken._data;
  }
  
  return (next as any)({
    context: {
      extensionInstanceId: res.extensionInstanceId,
      // ... other context fields
    },
    data: parsedData, // Use data from sendContext if data parameter is null
  });
});
```

**Handler:**
```typescript
.handler(async ({ context, data }) => {
  // data sollte jetzt verfügbar sein (entweder direkt oder aus sendContext)
  if (!data || typeof data !== "object") {
    throw new Error("Data is required");
  }
  
  const parsed = ServerActionSchema.parse(data);
  // Weiterer Code...
});
```

### Vorteile

- ✅ **Funktioniert in v1.131.48**: Bewährter Workaround
- ✅ **Zuverlässig**: Daten kommen garantiert an
- ✅ **Einfach zu implementieren**: Keine zusätzlichen Dependencies

### Nachteile

- ❌ **Workaround**: Nicht die offizielle Lösung
- ❌ **TypeScript-Typen**: Muss `as any` verwenden
- ❌ **Fragil**: Abhängig von Framework-Interna

## Alternative Lösungen (nicht empfohlen)

### 1. Request-Body in Middleware manuell parsen

**Problem**: Middleware hat keinen direkten Zugriff auf `request` in TanStack Start.

**Workaround** (falls `request` verfügbar wäre):
```typescript
.server(async ({ next, context, request }) => {
  let body: any = null;
  if (request.method === "POST") {
    const cloned = request.clone(); // Wichtig: Body kann nur einmal gelesen werden
    body = await cloned.json().catch(() => null);
  }
  
  return next({
    context: { ...context, body },
  });
});
```

**Nachteil**: Nicht möglich, da `request` nicht verfügbar ist.

### 2. Daten über sendContext weiterleiten

**Workaround**:
```typescript
.client(async ({ next, data }) => {
  return (next as any)({
    sendContext: {
      sessionToken,
      projectId: config.projectId,
      _data: data, // Workaround: Daten in sendContext
    },
    data,
  });
})
.server(async ({ next, context, data }) => {
  const parsedData = data || (context as any)._data; // Fallback
  return (next as any)({ context, data: parsedData });
});
```

**Nachteil**: 
- Fragil und nicht dokumentiert
- Umgeht das Framework-Design
- TypeScript-Typen werden umgangen
- Nicht nachhaltig

### 3. method: "POST" entfernen

**Beobachtung**: Einige Entwickler berichten, dass `createServerFn()` ohne explizite `method: "POST"` den Body automatisch parst.

**Nachteil**:
- Nicht dokumentiert
- Fragil und abhängig von Framework-Version
- Keine Garantie für zukünftige Versionen

## Best Practices

### 1. Immer inputValidator für POST-Requests mit Middleware verwenden

```typescript
// ✅ RICHTIG
export const myServerFn = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(MySchema))
  .middleware([myMiddleware])
  .handler(async ({ data }) => {
    // data ist verfügbar
  });

// ❌ FALSCH
export const myServerFn = createServerFn({ method: "POST" })
  .middleware([myMiddleware])
  .handler(async ({ data }) => {
    // data ist null!
  });
```

### 2. Zod Schema für Validierung und Typisierung nutzen

```typescript
const MySchema = z.object({
  id: z.string(),
  action: z.enum(["create", "update", "delete"]),
  data: z.object({
    name: z.string().min(1),
    value: z.number().positive(),
  }),
});

// Schema validiert UND typisiert
type MyData = z.infer<typeof MySchema>;
```

### 3. Transformations im Schema definieren

```typescript
const ServerActionSchema = z.object({
  serverId: z.union([z.string(), z.number()]).transform((val) => 
    typeof val === "string" ? parseInt(val, 10) : val
  ),
  action: z.enum(["poweron", "poweroff", "reboot"]),
});
```

### 4. Fehlerbehandlung

```typescript
export const myServerFn = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(MySchema))
  .middleware([myMiddleware])
  .handler(async ({ data }) => {
    try {
      // data ist bereits validiert
      const result = await doSomething(data);
      return { success: true, result };
    } catch (error) {
      console.error("Error:", error);
      throw error; // TanStack Start behandelt Fehler automatisch
    }
  });
```

## Bekannte Issues & Referenzen

### TanStack Start Issues

- **Issue #3429**: "Server functions assume JSON payloads" - Diskussion über Body-Parsing
- **Issue #5913**: "Context not passed to server middleware with FormData" - Ähnliches Problem mit FormData
- **AnswerOverflow**: Mehrere Berichte über POST + Middleware + Body Probleme

### Dokumentation

- [TanStack Start Middleware Docs](https://tanstack.com/start/v0/docs/framework/react/middleware)
- [TanStack Start Server Functions](https://tanstack.com/start/v0/docs/framework/react/server-functions)
- [Zod Adapter](https://tanstack.com/router/v1/docs/framework/react/guide/data-loading#zod-adapter)

## Checkliste für neue POST-Requests mit Middleware

- [ ] `@tanstack/zod-adapter` installiert?
- [ ] Zod Schema definiert?
- [ ] `inputValidator(zodValidator(Schema))` vor `.middleware()` eingefügt?
- [ ] `@ts-expect-error` Kommentar hinzugefügt (falls TypeScript-Fehler)?
- [ ] Daten in Middleware und Handler getestet?
- [ ] Fehlerbehandlung implementiert?

## Zusammenfassung

**Problem**: POST-Request Body geht in Middleware verloren.

**Ursache**: TanStack Start parst Body erst nach Middleware (ohne inputValidator).

**Lösung**: `inputValidator` mit `zodValidator` verwenden - parst Body VOR Middleware.

**Code**:
```typescript
export const myFn = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(MySchema))  // ← WICHTIG: Vor Middleware!
  .middleware([myMiddleware])
  .handler(async ({ data }) => {
    // data ist jetzt verfügbar!
  });
```

Diese Lösung ist:
- ✅ Nachhaltig (offizielle Lösung)
- ✅ Typ-sicher (Zod)
- ✅ Sicher (Validierung)
- ✅ Einfach (keine Workarounds)

