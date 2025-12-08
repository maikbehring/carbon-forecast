# Developer Documentation: mittwald Extension - Best Practices & Learnings

## Projekt-Übersicht

Dieses Dokument sammelt wichtige Learnings, Best Practices und Lösungen für die Entwicklung von mittwald Extensions.

**Aktuelle Projekt-Konfiguration:**
- **Projekt**: containerpro
- **TanStack Start**: v1.131.48
- **Zod**: v3.25.76
- **React**: v19.2.1
- **TypeScript**: v5.9.3

**Projekt-Struktur:**
```
src/
├── components/         # React-Komponenten (Loader, ErrorMessage, etc.)
├── middlewares/        # TanStack Middleware (verify-access-to-instance)
├── routes/            # TanStack Router Routes
│   ├── containers.tsx # Container-Übersichtsseite
│   └── index.tsx      # Startseite
├── server/
│   └── functions/     # Server-Funktionen
│       ├── getContainers.ts
│       └── getHelloWorld.ts
└── router.tsx         # Router-Konfiguration
```

---

# Developer Documentation: TanStack Start POST + Middleware + Body Bug

## ⚠️ WICHTIG: Die finale Lösung (TanStack Start v1.131.48)

**Das Hauptproblem war nicht der Body-Parsing, sondern der falsche Aufruf der Server-Funktion!**

### Der kritische Bug: Falscher Aufruf-Signatur

`createServerFn` erwartet ein Objekt mit einer `data`-Property, nicht die Daten direkt!

```typescript
// ❌ FALSCH - Daten gehen verloren!
await updateCronjob(cleanedData);

// ✅ RICHTIG - Daten werden korrekt übertragen
await updateCronjob({ data: cleanedData });
```

### Warum passiert das?

Intern passiert folgendes:
1. `cleanedData` wird als `opts` interpretiert
2. `opts.data` ist `undefined`, weil `cleanedData.data` nicht existiert
3. Der HTTP-Request geht ohne `data` raus → `data` auf dem Server ist `null`

### Die komplette Lösung für v1.131.48

**1. Client-Aufruf korrigieren:**

```typescript
// In der Komponente (z.B. EditCronjobForm.tsx)
const cleanedData = {
  cronjobId: cronjob.id,
  description: description || undefined,
  interval: interval || undefined,
  destination: destination || undefined,
  timeout: timeoutValue ? Number.parseInt(timeoutValue, 10) : undefined,
  active,
};

// ✅ RICHTIG: Daten in { data: ... } wrappen
await updateCronjob({ data: cleanedData } as any);
```

**2. Middleware muss `data` explizit weitergeben:**

```typescript
// src/middlewares/verify-access-to-instance.ts
.server(async ({ next, context, data }) => {
  const contextWithToken = context as unknown as {
    sessionToken: string;
    projectId?: string;
  };

  const res = await verify(contextWithToken.sessionToken);

  // ✅ WICHTIG: data explizit weitergeben
  return (next as any)({
    context: {
      extensionInstanceId: res.extensionInstanceId,
      extensionId: res.extensionId,
      userId: res.userId,
      contextId: res.contextId,
      projectId: contextWithToken.projectId,
    },
    data, // ← Daten explizit weitergeben!
  });
});
```

**3. Server-Funktion validiert Daten manuell:**

```typescript
// src/server/functions/updateCronjob.ts
export const updateCronjob = createServerFn({ method: "POST" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }: { context: any; data: unknown }) => {
    if (!context) {
      throw new Error("Context is required");
    }
    const ctx = context as { sessionToken: string };

    // Manuelle Validierung (inputValidator nicht verfügbar in v1.131.48)
    if (!data || typeof data !== "object") {
      throw new Error("Invalid data: expected object");
    }
    const validatedBody = UpdateCronjobSchema.parse(data);

    // Weiterer Code...
  });
```

### Checkliste für POST-Requests mit Middleware (v1.131.48)

- [ ] **Client-Aufruf**: `await myServerFn({ data: myData })` statt `await myServerFn(myData)`
- [ ] **Middleware**: `data` explizit weitergeben mit `(next as any)({ context, data })`
- [ ] **Handler**: Manuelle Validierung mit Zod Schema
- [ ] **TypeScript**: `as any` für Type-Assertions (nötig wegen Middleware-Typen)

### Erwartetes Verhalten nach dem Fix

- ✅ Client-Middleware erhält `data`: `verifyAccessToInstance.client - data: {cronjobId: '...', ...}`
- ✅ Server-Middleware erhält `data`: `verifyAccessToInstance.server - data: {cronjobId: '...', ...}`
- ✅ Handler erhält `data`: `updateCronjob.handler - data: {cronjobId: '...', ...}`

---

## Problembeschreibung (ursprüngliches Problem)

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

**Aktuelle Projekt-Versionen:**
- `@tanstack/react-start`: 1.131.48
- `zod`: 3.25.76 (kompatibel mit `@tanstack/zod-adapter`)
- `@tanstack/zod-adapter`: **NICHT installiert** (nur für neuere TanStack Start Versionen)

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

**Für TanStack Start v1.131.48 (aktuelles Projekt):**
- [ ] Workaround mit `sendContext._data` implementiert?
- [ ] Daten in Client-Middleware über `sendContext` weitergegeben?
- [ ] Daten in Server-Middleware aus `context._data` gelesen?
- [ ] Fallback-Logik für `data === null` implementiert?
- [ ] Fehlerbehandlung implementiert?

**Für neuere TanStack Start Versionen (wenn verfügbar):**
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

---

# Weitere Learnings aus dem PageSpeed Insights Projekt

## 1. POST-Requests ohne Middleware - `data` kann trotzdem `undefined` sein

### Problem

Auch bei POST-Requests **ohne Middleware** kann `data` im Handler `undefined` sein, wenn kein `inputValidator` verwendet wird.

### Beispiel

```typescript
// ❌ FUNKTIONIERT NICHT IMMER
export const runPageSpeedCheck = createServerFn({ method: "POST" })
  .handler(async ({ data }) => {
    // data kann undefined sein!
    if (!data) {
      throw new Error("No data provided");
    }
  });
```

### Lösung

Auch ohne Middleware sollte `inputValidator` verwendet werden, wenn `data` benötigt wird:

```typescript
// ✅ RICHTIG
export const runPageSpeedCheck = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(pageSpeedCheckParamsSchema))
  .handler(async ({ data }) => {
    // data ist jetzt garantiert verfügbar
  });
```

### Alternative: `method: "POST"` entfernen

Laut Dokumentation kann das Entfernen von `method: "POST"` helfen, dass TanStack Start den Body automatisch parst:

```typescript
// ⚠️ FUNKTIONIERT MANCHMAL, ABER NICHT ZUVERLÄSSIG
export const runPageSpeedCheck = createServerFn()
  .handler(async ({ data }) => {
    // Kann funktionieren, ist aber nicht dokumentiert
  });
```

**Nachteil**: Nicht dokumentiert, fragil und abhängig von Framework-Version.

## 2. Zod-Version-Kompatibilität mit `@tanstack/zod-adapter`

### Problem

`@tanstack/zod-adapter` erwartet **Zod Version 3.x**, nicht 4.x. Bei Verwendung von Zod 4.x erhält der `inputValidator` `undefined`.

### Fehlermeldung

```
ZodError: [
  {
    "code": "invalid_type",
    "expected": "object",
    "received": "undefined",
    "path": [],
    "message": "Required"
  }
]
```

### Lösung

Zod auf Version 3 downgraden:

```bash
pnpm add 'zod@^3.23.8'
```

### Verifizierung

Nach dem Downgrade sollte `inputValidator` korrekt funktionieren:

```typescript
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod"; // Version 3.x

const schema = z.object({
  url: z.string().url(),
  strategy: z.enum(["DESKTOP", "MOBILE"]),
});

export const myFn = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(schema))
  .handler(async ({ data }) => {
    // data ist jetzt verfügbar
  });
```

## 3. `inputValidator` erhält `undefined` - Debugging

### Problem

Wenn der `inputValidator` `undefined` erhält, bedeutet das, dass TanStack Start den Request-Body nicht korrekt an den Validator übergibt.

### Debugging

```typescript
const myInputValidator = async (input: unknown, request?: Request) => {
  console.log("inputValidator - input:", input);
  console.log("inputValidator - request:", request);
  
  // Beide können undefined sein!
  if (!input && !request) {
    throw new Error("No data and no request available");
  }
  
  // Fallback-Logik...
};
```

### Mögliche Ursachen

1. **Zod-Version inkompatibel**: Siehe Abschnitt 2
2. **Request-Body wurde bereits gelesen**: Body kann nur einmal gelesen werden
3. **API-Client-Methode existiert nicht**: Manche Endpunkte haben keine direkte Methode im API-Client

## 4. Flow-Komponenten - Wichtige Unterschiede

### Badge-Farben

```typescript
// ❌ FALSCH
<Badge color="success" />
<Badge color="warning" />
<Badge color="danger" />

// ✅ RICHTIG
<Badge color="green" />
<Badge color="orange" />
<Badge color="red" />
```

### Button-Varianten

```typescript
// ❌ FALSCH
<Button variant="ghost" disabled={true} />

// ✅ RICHTIG
<Button variant="plain" isDisabled={true} />
```

### Button-Varianten Übersicht

- `"solid"` - Standard-Button mit Hintergrundfarbe
- `"plain"` - Transparenter Button ohne Hintergrund
- `"outline"` - Button mit Rahmen

## 5. Tabs-Komponente verwenden

### Import

```typescript
import {
  Tabs,
  Tab,
  TabTitle,
  Content,
} from "@mittwald/flow-remote-react-components";
```

### Verwendung

```typescript
<Tabs>
  <Tab>
    <TabTitle>Tab 1</TabTitle>
    <Content>
      <Heading>Inhalt Tab 1</Heading>
      {/* Tab-Inhalt */}
    </Content>
  </Tab>
  <Tab>
    <TabTitle>Tab 2</TabTitle>
    <Content>
      <Heading>Inhalt Tab 2</Heading>
      {/* Tab-Inhalt */}
    </Content>
  </Tab>
</Tabs>
```

### Wichtig

- Jeder `Tab` benötigt ein `TabTitle`
- Der Tab-Inhalt sollte in `Content` gewrappt werden
- Tabs kollabieren automatisch bei geringer Breite

## 6. API-Client-Methoden - Fallback auf direkten fetch

### Problem

Nicht alle API-Endpunkte haben direkte Methoden im `MittwaldAPIV2Client`. Manche Methoden existieren nicht im TypeScript-Typ.

### Beispiel: LeadFyndr unlocked-leads

```typescript
// ❌ FUNKTIONIERT NICHT - Methode existiert nicht
const result = await client.customer.listUnlockedLeads({
  customerId,
  queryParameters: { limit: 100 },
});
```

### Lösung: Fallback auf direkten fetch

```typescript
let result;
try {
  // Versuche API-Client-Methode
  result = await (client.customer as any).listUnlockedLeads({
    customerId,
    queryParameters: { limit: 100 },
  });
  assertStatus(result, 200);
  return result.data;
} catch (apiClientError) {
  // Fallback: Direkter fetch-Aufruf
  const apiUrl = new URL(
    `https://api.mittwald.de/v2/customers/${customerId}/unlocked-leads`,
  );
  apiUrl.searchParams.set("limit", "100");

  const fetchResult = await fetch(apiUrl.toString(), {
    method: "GET",
    headers: {
      "x-access-token": accessToken, // Wichtig: x-access-token, nicht Authorization
      "Content-Type": "application/json",
    },
  });

  if (!fetchResult.ok) {
    throw new Error(`API error: ${fetchResult.status}`);
  }

  return await fetchResult.json();
}
```

### Wichtig: Authentifizierung

Die mittwald API verwendet `x-access-token` Header, nicht `Authorization: Bearer`:

```typescript
// ❌ FALSCH
headers: {
  Authorization: `Bearer ${accessToken}`,
}

// ✅ RICHTIG
headers: {
  "x-access-token": accessToken,
}
```

## 7. `context.contextId` für Project-ID verwenden

### Problem

Bei API-Aufrufen, die eine `projectId` benötigen, sollte `context.contextId` verwendet werden, nicht `context.projectId` oder `context.customerId`.

### Beispiel

```typescript
export const getContainers = createServerFn({ method: "GET" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context }) => {
    // ✅ RICHTIG - contextId ist die Project-ID
    const projectId = context.contextId;
    
    // ❌ FALSCH - existiert nicht im Context
    const projectId = context.projectId;
    
    // ❌ FALSCH - existiert nicht im Context
    const projectId = context.customerId;
    
    // API-Aufruf mit projectId
    const result = await client.container.listServices({
      projectId: context.contextId,
    });
  });
```

### Wichtig

- **`context.contextId` ist die Project-ID**: In mittwald Extensions ist `contextId` immer die Project-ID (kommt von `verify()`)
- **`context.projectId` existiert auch**: Wird von der Client-Middleware über `config.projectId` gesetzt
- **Für Container-APIs**: Alle Container-Endpunkte benötigen `projectId`, verwende `context.contextId` (empfohlen) oder `context.projectId`
- **Beide sind gleich**: `context.contextId` und `context.projectId` sollten den gleichen Wert haben

### Middleware-Struktur

Die `verifyAccessToInstance` Middleware stellt folgende Context-Felder bereit:
- `extensionInstanceId`: ID der Extension-Instanz
- `extensionId`: ID der Extension
- `userId`: ID des Benutzers
- `contextId`: Project-ID (von `verify()`)
- `projectId`: Project-ID (von `config.projectId` im Client)
- `sessionToken`: Session-Token (nur in Middleware verfügbar)

## 8. Typed Lists für Tabellen verwenden

### Pattern

```typescript
import { typedList } from "@mittwald/flow-remote-react-components";

interface Item {
  id: string;
  name: string;
}

const ItemList = typedList<Item>();

<ItemList.List
  aria-label="Items"
  defaultViewMode="table"
  batchSize={20}
>
  <ItemList.StaticData data={items} />
  <ItemList.Search />
  <ItemList.Table>
    <ItemList.TableHeader>
      <ItemList.TableColumn>Name</ItemList.TableColumn>
    </ItemList.TableHeader>
    <ItemList.TableBody>
      <ItemList.TableRow>
        <ItemList.TableCell>
          {(item) => <Text>{item.name}</Text>}
        </ItemList.TableCell>
      </ItemList.TableRow>
    </ItemList.TableBody>
  </ItemList.Table>
</ItemList.List>
```

### Features

- Automatische Suche mit `<ItemList.Search />`
- Filter mit `<ItemList.Filter property="name" />`
- Sortierung mit `<ItemList.Sorting property="name" />`
- Paginierung mit `batchSize`
- Responsive: Wechselt automatisch zwischen Table und List View

## 9. TypeScript-Fehler bei `useQuery` mit expliziten Typen

### Problem

Manchmal gibt TypeScript Fehler bei `useQuery`, wenn der Rückgabetyp nicht korrekt inferiert wird.

### Lösung

Explizite Typisierung mit Type Assertion:

```typescript
// Wenn TypeScript den Typ nicht korrekt inferiert
const {
  data: domains,
  isLoading,
  error,
} = useQuery({
  queryKey: ["domains"],
  queryFn: () => getDomains(),
}) as { data: Domain[] | undefined; isLoading: boolean; error: Error | null };
```

### Alternative: Type Guards im Handler

```typescript
const {
  data: domains,
  isLoading,
  error,
} = useQuery({
  queryKey: ["domains"],
  queryFn: () => getDomains(),
});

// Type Guard verwenden
const domain = domains && Array.isArray(domains) 
  ? domains.find((d: Domain) => d.id === domainId) 
  : undefined;
```

## 10. SessionStorage für temporäre Daten

### Verwendung

```typescript
// Daten speichern
sessionStorage.setItem(`key-${id}`, JSON.stringify(data));

// Daten abrufen
const stored = sessionStorage.getItem(`key-${id}`);
if (stored) {
  const data = JSON.parse(stored) as MyType;
}
```

### Wichtig

- SessionStorage ist nur für die aktuelle Browser-Session verfügbar
- Daten gehen verloren, wenn der Tab geschlossen wird
- Für persistente Daten sollte die Datenbank verwendet werden

## 11. Fehlerbehandlung bei API-Aufrufen

### Pattern

```typescript
export const myServerFn = createServerFn({ method: "GET" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context }) => {
    try {
      const { publicToken: accessToken } = await getAccessToken(
        context.sessionToken,
        env.EXTENSION_SECRET,
      );

      const client = await MittwaldAPIV2Client.newWithToken(accessToken);
      const result = await client.some.method({
        // Parameter
      });

      assertStatus(result, 200);
      return result.data;
    } catch (error) {
      console.error("Error in myServerFn:", error);
      
      // Spezifische Fehlerbehandlung
      if (error instanceof Error) {
        throw error;
      }
      
      // Generischer Fehler
      throw new Error("Failed to execute operation");
    }
  });
```

## 12. Zod Schema für API-Parameter

### Pattern

```typescript
import { z } from "zod";

const pageSpeedCheckParamsSchema = z.object({
  url: z.string().url(),
  strategy: z.enum(["DESKTOP", "MOBILE"]).default("MOBILE"),
  category: z.enum(["PERFORMANCE", "ACCESSIBILITY", "BEST_PRACTICES", "SEO"]).optional(),
});

export type PageSpeedCheckParams = z.infer<typeof pageSpeedCheckParamsSchema>;
```

### Vorteile

- Automatische Validierung
- Type-Safety durch `z.infer`
- Default-Werte und optionale Felder
- Klare Fehlermeldungen bei ungültigen Daten

## Checkliste für neue Features

- [ ] Flow-Komponenten statt HTML-Elemente verwendet?
- [ ] Korrekte Badge-Farben (`green`, `orange`, `red`)?
- [ ] Korrekte Button-Varianten (`plain`, `solid`, `outline`)?
- [ ] `isDisabled` statt `disabled` verwendet?
- [ ] `context.contextId` für Project-ID verwendet? (⚠️ Wichtig: `contextId` ist die Project-ID!)
- [ ] `inputValidator` für POST-Requests verwendet? (nur für neuere Versionen)
- [ ] Workaround mit `sendContext._data` für POST-Requests implementiert? (für v1.131.48)
- [ ] Zod Version 3.x installiert (für `zodValidator`)?
- [ ] `assertStatus()` nach API-Aufrufen verwendet?
- [ ] Fehlerbehandlung implementiert?
- [ ] TypeScript-Typen korrekt?
- [ ] `aria-label` für alle interaktiven Komponenten gesetzt?
- [ ] Server-Funktionen verwenden `createServerFn()` mit `verifyAccessToInstance` Middleware?
- [ ] API-Client verwendet `MittwaldAPIV2Client.newWithToken(accessToken)`?
- [ ] Access Token wird über `getAccessToken()` aus `@mittwald/ext-bridge/node` geholt?

## 13. Debugging Server-Funktionen - Logging und Fehlerbehandlung

### Problem

Server-Funktionen können 500-Fehler werfen, ohne dass klar ist, was schiefgelaufen ist.

### Lösung: Umfassendes Logging

```typescript
export const myServerFn = createServerFn({ method: "GET" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context }) => {
    try {
      console.log(`Starting operation for customerId: ${context.contextId}`);
      
      // API-Aufruf
      const apiUrl = new URL(`https://api.mittwald.de/v2/endpoint`);
      console.log(`API URL: ${apiUrl.toString()}`);
      
      const fetchResult = await fetch(apiUrl.toString(), {
        method: "GET",
        headers: {
          "x-access-token": accessToken,
        },
      });
      
      console.log(`API Response status: ${fetchResult.status}`);
      
      if (!fetchResult.ok) {
        const errorText = await fetchResult.text();
        console.error(`API Error: ${fetchResult.status}`, errorText);
        throw new Error(`API error: ${fetchResult.status}. ${errorText}`);
      }
      
      const data = await fetchResult.json();
      console.log(`Successfully fetched data`);
      return data;
    } catch (error) {
      console.error("Error in myServerFn:", error);
      console.error("Error details:", {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        customerId: context.contextId,
      });
      
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Unknown error occurred");
    }
  });
```

### Wichtig

- **Logging vor kritischen Operationen**: Zeigt, was gerade passiert
- **Logging von API-URLs**: Hilft bei der Debugging von falschen Endpunkten
- **Logging von Response-Status**: Zeigt HTTP-Fehlercodes
- **Detaillierte Fehler-Logs**: Enthalten Stack-Traces und Kontext-Informationen
- **Fehler-Text aus API lesen**: API-Fehler enthalten oft hilfreiche Details

### Server-Logs anzeigen

Die Logs werden im Terminal ausgegeben, wo der Dev-Server läuft. Bei Production-Builds sollten Logs in einem Logging-System gespeichert werden.

## 14. React Hydration-Fehler vermeiden

### Problem

React Hydration-Fehler treten auf, wenn Server- und Client-Rendering nicht übereinstimmen.

### Häufige Ursachen

1. **Browser-Extensions**: Können HTML vor React-Hydration ändern
2. **Dynamische Inhalte**: `Date.now()`, `Math.random()`, etc.
3. **Locale-abhängige Formatierung**: Unterschiedliche Locale auf Server/Client
4. **Ungültige HTML-Struktur**: Falsche Tag-Nesting

### Lösung

```typescript
// ❌ FALSCH - Kann Hydration-Fehler verursachen
function Component() {
  return <Text>{new Date().toLocaleDateString()}</Text>;
}

// ✅ RICHTIG - Verwende useEffect für client-seitige Inhalte
function Component() {
  const [date, setDate] = useState<string>("");
  
  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);
  
  return <Text>{date || "Loading..."}</Text>;
}
```

### Wichtig

- **Keine dynamischen Werte im initialen Render**: Verwende `useState` + `useEffect`
- **Konsistente Formatierung**: Verwende die gleiche Locale auf Server und Client
- **Browser-Extensions**: Können Hydration-Fehler verursachen - normalerweise harmlos

## 15. Accessibility - aria-label für interaktive Komponenten

### Problem

Flow-Komponenten benötigen `aria-label` für Accessibility.

### Lösung

```typescript
// ✅ RICHTIG
<DomainList.List aria-label="Domains">
  {/* ... */}
</DomainList.List>

<Button aria-label="Submit form">
  Submit
</Button>
```

### Wichtig

- **Immer `aria-label` setzen**: Für Screen-Reader und Accessibility-Tools
- **Beschreibende Labels**: Nicht nur "Button", sondern "Submit form"
- **Für Listen obligatorisch**: `typedList` benötigt `aria-label` auf `.List`

## 18. TanStack Start - Server Function Manifest Fehler im Development

### Problem

Im Development-Modus kann folgender Fehler auftreten:

```
Error: Server function info not found for src_server_functions_getHelloWorld_ts--getHelloWorld_createServerFn_handler
serverFnManifest {}
```

### Ursache

Das Server-Function-Manifest wird im Development-Modus manchmal nicht korrekt generiert oder ist leer. Dies passiert häufig nach:
- Code-Änderungen während der Dev-Server läuft
- Cache-Problemen
- Hot Module Replacement (HMR) Fehlern

### Lösung

**1. Cache leeren und Dev-Server neu starten:**

```bash
# Cache leeren
rm -rf .tanstack node_modules/.vite

# Dev-Server neu starten
pnpm dev
```

**2. Falls das Problem weiterhin besteht:**

```bash
# Kompletter Clean Build
rm -rf .tanstack node_modules/.vite node_modules/.cache
pnpm install
pnpm dev
```

**3. Prüfen, ob Server-Funktionen korrekt exportiert sind:**

- Server-Funktionen müssen mit `export const` exportiert werden
- Der Name muss eindeutig sein
- Middleware sollte korrekt konfiguriert sein

### Beispiel einer korrekten Server-Funktion

```typescript
import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";

// ✅ RICHTIG - Named Export
export const getHelloWorld = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		return { message: "Hello World" };
	});

// ❌ FALSCH - Default Export funktioniert nicht
export default createServerFn({ method: "GET" })
	.handler(async () => {
		return { message: "Hello World" };
	});
```

### Wichtig

- **Immer Named Exports verwenden**: `export const functionName = createServerFn(...)`
- **Cache regelmäßig leeren**: Bei Problemen immer zuerst Cache leeren
- **Dev-Server neu starten**: Nach Cache-Löschung immer neu starten
- **Production Build testen**: `pnpm build` sollte ohne Fehler laufen

## 20. Container-API - 403 Permission Denied Fehler

### Problem

Beim Abrufen von Container-Ressourcen kann folgender Fehler auftreten:

```
ApiClientError: Unexpected response status (expected 200, got: 403)
Access denied; verdict: abstain
```

### Ursache

Der 403-Fehler bedeutet, dass:
- Die Extension nicht die erforderlichen Scopes für Container-APIs hat
- Der Benutzer keine Berechtigung für Container-Operationen im Projekt hat
- Die Container-API spezielle Berechtigungen benötigt, die nicht konfiguriert sind

### Lösung

**1. Extension Scopes prüfen:**

In mStudio Contributor UI:
- Prüfe, ob die Extension die Container-Scopes hat
- Füge die erforderlichen Scopes hinzu (falls verfügbar)

**2. Projekt-Berechtigungen prüfen:**

- Prüfe, ob der Benutzer Container-Berechtigungen im Projekt hat
- Prüfe, ob das Projekt Container-Features aktiviert hat

**3. Fehlerbehandlung implementieren:**

```typescript
try {
  const result = await client.container.listServices({
    projectId: contextId,
  });
  
  if (result.status === 403) {
    throw new Error(
      "Access denied: You don't have permission to access container services."
    );
  }
  
  assertStatus(result, 200);
  return result.data;
} catch (error) {
  if (error instanceof ApiClientError && error.status === 403) {
    throw new Error(
      `Access denied (403): ${error.response?.data?.message || "Permission denied"}`
    );
  }
  throw error;
}
```

**4. Benutzerfreundliche Fehlermeldung:**

Die Extension zeigt jetzt eine hilfreiche Fehlermeldung mit Lösungsvorschlägen:
- Prüfe Extension-Scopes
- Prüfe Projekt-Berechtigungen
- Kontaktiere Administrator

### Wichtig

- **403-Fehler sind Berechtigungsprobleme**: Nicht technische Fehler, sondern fehlende Berechtigungen
- **Scopes müssen konfiguriert sein**: Die Extension benötigt die richtigen Scopes in mStudio
- **Projekt-Berechtigungen**: Der Benutzer muss Container-Berechtigungen im Projekt haben
- **Fehlerbehandlung**: Immer 403-Fehler speziell behandeln und hilfreiche Meldungen anzeigen

## 19. mittwald Extension - Remote URL Timeout Fehler

### Problem

Beim Laden der Extension in mStudio kann folgender Fehler auftreten:

```
RemoteError: Remote URL could not be loaded: Timeout reached
```

### Ursache

Dieser Fehler tritt auf, wenn:
- Der Dev-Server nicht läuft oder nicht erreichbar ist
- Die Extension-URL in mStudio nicht korrekt konfiguriert ist
- Netzwerk-Probleme zwischen mStudio und dem Dev-Server bestehen
- Der Dev-Server zu langsam startet oder hängt

### Lösung

**1. Dev-Server prüfen:**

```bash
# Prüfen, ob der Dev-Server läuft
# Sollte auf http://localhost:5173 laufen
pnpm dev
```

**2. Extension-URL in mStudio prüfen:**

- Die Extension-URL sollte auf `http://localhost:5173` zeigen
- Bei Verwendung von Tunnels (z.B. ngrok) sollte die Tunnel-URL verwendet werden
- Die URL muss öffentlich erreichbar sein (nicht nur localhost, wenn mStudio remote läuft)

**3. Netzwerk-Konfiguration:**

```bash
# Dev-Server mit --host starten, um von außen erreichbar zu sein
pnpm dev --host
```

**4. Timeout erhöhen (falls möglich):**

- In mStudio-Einstellungen kann möglicherweise der Timeout erhöht werden
- Standardmäßig ist der Timeout relativ kurz

**5. Alternative: Tunnel verwenden:**

```bash
# Mit ngrok (Beispiel)
ngrok http 5173

# Dann die ngrok-URL in mStudio konfigurieren
```

**6. Dev-Server neu starten:**

```bash
# Dev-Server stoppen (Ctrl+C)
# Cache leeren
rm -rf .tanstack node_modules/.vite

# Neu starten
pnpm dev
```

### Wichtig

- **Dev-Server muss laufen**: Die Extension muss während der Entwicklung erreichbar sein
- **URL muss korrekt sein**: Die in mStudio konfigurierte URL muss mit dem Dev-Server übereinstimmen
- **Netzwerk-Zugriff**: Bei Remote-mStudio muss der Dev-Server von außen erreichbar sein
- **Production Build**: In Production sollte die Extension auf einem öffentlich erreichbaren Server gehostet werden

### Debugging

**1. Dev-Server-Logs prüfen:**
- Prüfe die Terminal-Ausgabe des Dev-Servers auf Fehler
- Prüfe, ob der Server erfolgreich gestartet ist

**2. Browser-Konsole prüfen:**
- Prüfe die Browser-Konsole auf weitere Fehler
- Prüfe die Network-Tab auf fehlgeschlagene Requests

**3. Extension-URL testen:**
- Öffne die Extension-URL direkt im Browser
- Prüfe, ob die Extension-Seite lädt

### Häufige Ursachen

1. **Dev-Server läuft nicht**: Starte `pnpm dev`
2. **Falsche URL**: Prüfe die Extension-URL in mStudio
3. **Port-Konflikt**: Port 5173 ist bereits belegt
4. **Firewall**: Firewall blockiert Verbindungen
5. **CORS-Probleme**: CORS-Einstellungen blockieren Requests

## 16. Container-API Implementierung - Best Practices

### Pattern für Container-API-Aufrufe

```typescript
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

export const getContainers = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		const { contextId } = context; // contextId ist die Project-ID

		// Get access token
		const { publicToken: accessToken } = await getAccessToken(
			context.sessionToken,
			env.EXTENSION_SECRET,
		);

		// Create API client
		const client = await MittwaldAPIV2Client.newWithToken(accessToken);

		// Fetch resources in parallel für bessere Performance
		const [servicesResult, stacksResult, volumesResult, registriesResult] =
			await Promise.all([
				client.container.listServices({
					projectId: contextId,
				}),
				client.container.listStacks({
					projectId: contextId,
				}),
				client.container.listVolumes({
					projectId: contextId,
				}),
				client.container.listRegistries({
					projectId: contextId,
				}),
			]);

		// Assert status codes für Type-Safety
		assertStatus(servicesResult, 200);
		assertStatus(stacksResult, 200);
		assertStatus(volumesResult, 200);
		assertStatus(registriesResult, 200);

		return {
			services: servicesResult.data,
			stacks: stacksResult.data,
			volumes: volumesResult.data,
			registries: registriesResult.data,
		};
	});
```

### Wichtig für Container-API-Aufrufe

- **`context.contextId` ist die Project-ID**: Verwende `contextId` für alle Container-API-Aufrufe
- **Parallel-Aufrufe**: Verwende `Promise.all()` für mehrere API-Aufrufe
- **`assertStatus()` verwenden**: Für Type-Safety und Fehlerbehandlung
- **GET-Requests**: Container-List-Endpunkte sind GET-Requests, keine POST-Requests nötig

### Container-API-Endpunkte im Projekt

Das Projekt verwendet folgende Container-API-Endpunkte:
- `client.container.listServices({ projectId })` - Liste aller Services
- `client.container.listStacks({ projectId })` - Liste aller Stacks
- `client.container.listVolumes({ projectId })` - Liste aller Volumes
- `client.container.listRegistries({ projectId })` - Liste aller Registries

### Typed Lists für Container-Daten

```typescript
import { typedList } from "@mittwald/flow-remote-react-components";

// Typen können als `any` definiert werden, da API-Typen komplex sind
type ContainerService = any;
type ContainerStack = any;
type ContainerVolume = any;
type ContainerRegistry = any;

const ServiceList = typedList<ContainerService>();

<ServiceList.List aria-label="Services">
	<ServiceList.StaticData data={services} />
	<ServiceList.Item>
		{(service) => (
			<ServiceList.ItemView>
				<Content>
					<Heading level={4}>{service.serviceName}</Heading>
					<Text>ID: {service.shortId}</Text>
					<Text>Status: {String(service.status)}</Text>
				</Content>
			</ServiceList.ItemView>
		)}
	</ServiceList.Item>
</ServiceList.List>
```

### Wichtig bei Container-Daten

- **Komplexe Typen**: API-Response-Typen sind komplex verschachtelt, `any` ist akzeptabel
- **String-Konvertierung**: Verwende `String()` für komplexe Objekte, die als String angezeigt werden sollen
- **Optionale Felder**: Prüfe auf `undefined` oder `null` vor der Verwendung
- **Arrays**: Prüfe `array.length > 0` vor der Iteration

## 17. Loader und ErrorMessage Komponenten verwenden

### Pattern für Loading States

```typescript
import { Loader } from "~/components/Loader";
import { ErrorMessage } from "~/components/ErrorMessage";
import { useQuery } from "@tanstack/react-query";

function MyComponent() {
	const {
		data,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ["myData"],
		queryFn: () => getMyData(),
	});

	// Loading State
	if (isLoading) {
		return <Loader />;
	}

	// Error State
	if (error) {
		return (
			<Content>
				<ErrorMessage
					message={
						error instanceof Error ? error.message : "Unknown error"
					}
					title="Error loading data"
				/>
				<Button onPress={() => refetch()}>Retry</Button>
			</Content>
		);
	}

	// Success State
	if (!data) {
		return (
			<Content>
				<Text>No data available</Text>
			</Content>
		);
	}

	// Render data
	return (
		<Content>
			{/* Render data */}
		</Content>
	);
}
```

### Wichtig

- **Loader-Komponente**: Zeigt einen einheitlichen Loading-Indikator
- **ErrorMessage-Komponente**: Zeigt Fehler mit Alert-Komponente an
- **Retry-Funktionalität**: Füge einen "Retry"-Button hinzu, der `refetch()` aufruft
- **Type Guards**: Prüfe `error instanceof Error` für Type-Safety
- **Null-Checks**: Prüfe `!data` bevor Daten gerendert werden

