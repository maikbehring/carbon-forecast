# TanStack Start v1.139 Migration Guide

Diese Dokumentation beschreibt alle Breaking Changes und notwendigen Anpassungen beim Update von TanStack Start v1.131.48 auf v1.139.14.

## Übersicht der Änderungen

### Package Updates
- `@tanstack/react-start`: `1.131.48` → `1.139.14`
- `@tanstack/react-router`: `1.131.48` → `1.139.14`
- `@tanstack/react-router-devtools`: `1.131.48` → `1.139.14`
- `@tanstack/react-router-with-query`: `1.130.17` → `1.139.14` (für Konsistenz)
- `@tanstack/react-start-server`: `^1.139.14` (neu als devDependency)
- `@tanstack/zod-adapter`: `^1.139.14` (für `inputValidator`)
- `vite`: `6.4.1` → `^7.2.6`
- `react`: `19.2.0` → `^19.2.1`
- `react-dom`: `19.2.0` → `^19.2.1`

## Breaking Changes

### 1. Client Entry Point: StartClient → RouterProvider

**Vorher (v1.131.48):**
```typescript
// src/client.tsx
import { StartClient } from "@tanstack/react-start";
import { createRouter } from "./router";

const router = createRouter();

hydrateRoot(document, <StartClient router={router} />);
```

**Nachher (v1.139.14):**
```typescript
// src/client.tsx
import { RouterProvider } from "@tanstack/react-router";
import { hydrateRoot } from "react-dom/client";
import { createRouter } from "./router";

const router = createRouter();

hydrateRoot(document, <RouterProvider router={router} />);
```

**Wichtig:** `StartClient` existiert nicht mehr. Verwende direkt `RouterProvider` aus `@tanstack/react-router`.

---

### 2. Middleware: validateClient entfernt

**Vorher (v1.131.48):**
```typescript
// src/middlewares/verify-access.ts
import { createMiddleware } from "@tanstack/react-start";

export const verifyAccess = createMiddleware({
  type: "function",
  validateClient: true, // ❌ Entfernt in v1.139
})
  .client(async ({ next }) => {
    // ...
  })
  .server(async ({ next, context }) => {
    // ...
  });
```

**Nachher (v1.139.14):**
```typescript
// src/middlewares/verify-access.ts
import { createMiddleware } from "@tanstack/react-start";

export const verifyAccess = createMiddleware({
  type: "function",
  // validateClient entfernt - nicht mehr verfügbar
})
  .client(async ({ next }) => {
    // ...
  })
  .server(async ({ next, context }) => {
    // ...
  });
```

**Wichtig:** Die `validateClient` Option existiert nicht mehr. Entferne sie aus allen Middleware-Definitionen.

---

### 3. Server Routes: createServerFileRoute API geändert

**Vorher (v1.131.48):**
```typescript
// src/routes/api/webhooks.ts
import { createServerFileRoute } from "@tanstack/react-start/server";

export const Route = createServerFileRoute("/api/webhooks")({
  POST: async ({ request }) => {
    // ...
  },
});
```

**Nachher (v1.139.14):**
```typescript
// src/routes/api/webhooks.ts
// @ts-ignore - Neue API noch nicht vollständig typisiert
export const ServerRoute = {
  path: "/api/webhooks",
  methods: {
    POST: async ({ request }: { request: Request }) => {
      // ...
    },
  },
};
```

**Wichtig:** 
- `createServerFileRoute` existiert nicht mehr
- Verwende ein Plain-Object-Export mit `path` und `methods`
- Explizit `request: Request` typisieren

---

### 4. Router Export: getRouter() hinzufügen

**Vorher (v1.131.48):**
```typescript
// src/router.tsx
export function createRouter() {
  // ...
  return router;
}
```

**Nachher (v1.139.14):**
```typescript
// src/router.tsx
export function createRouter() {
  // ...
  return router;
}

// TanStack Start v1.139+ erwartet getRouter()
export function getRouter() {
  return createRouter();
}
```

**Wichtig:** TanStack Start v1.139 erwartet, dass der Router-Export eine `getRouter()` Funktion hat. Diese muss `createRouter()` aufrufen.

---

### 5. Server Output-Struktur geändert

**Vorher (v1.131.48):**
- Build erstellt: `.output/server/index.mjs`
- Start-Befehl: `node .output/server/index.mjs`

**Nachher (v1.139.14):**
- Build erstellt: `dist/server/server.js`
- Start-Befehl: `node server.mjs` (benötigt HTTP Server Wrapper)

**package.json Anpassung:**
```json
{
  "scripts": {
    "start": "node server.mjs"
  }
}
```

---

### 6. HTTP Server Wrapper benötigt

TanStack Start v1.139 erstellt nur ein Modul mit `fetch` Funktion, aber keinen HTTP-Server. Ein Wrapper ist notwendig:

**server.mjs erstellen:**
```javascript
import http from "node:http";
import * as serverModule from "./dist/server/server.js";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;
const host = process.env.HOST || "0.0.0.0";

// Get the server entry - handle both default export and named export
const serverEntry = serverModule.default || serverModule;

if (!serverEntry || !serverEntry.fetch) {
  console.error("Server module exports:", Object.keys(serverModule));
  console.error("Default export:", serverModule.default);
  throw new Error("Failed to load server module - fetch function not found");
}

const server = http.createServer(async (req, res) => {
  try {
    // Convert Node.js request to Fetch API Request
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const hostname = req.headers.host || `${host}:${port}`;
    const url = `${protocol}://${hostname}${req.url}`;
    
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }
    
    // Read request body if present
    let body = undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      if (chunks.length > 0) {
        body = Buffer.concat(chunks);
      }
    }
    
    const request = new Request(url, {
      method: req.method,
      headers,
      body,
    });
    
    const response = await serverEntry.fetch(request);
    
    // Copy response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    // Set status code
    res.statusCode = response.status;
    
    // Stream the response body
    if (response.body) {
      const reader = response.body.getReader();
      const pump = async () => {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(Buffer.from(value));
          }
          res.end();
        } catch (error) {
          console.error("Error streaming response:", error);
          if (!res.headersSent) {
            res.statusCode = 500;
          }
          res.end();
        }
      };
      await pump();
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Server error:", error);
    if (!res.headersSent) {
      res.statusCode = 500;
    }
    res.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
```

**Wichtig:** 
- Dieser Wrapper konvertiert Node.js HTTP Requests zu Fetch API Requests
- Handhabt Request Body korrekt
- Streamt Response Body für bessere Performance

---

### 7. POST + Middleware + Body Bug: inputValidator Lösung

**Problem:** In v1.131.48 ging Request Body bei POST-Requests mit Middleware verloren.

**Lösung in v1.139.14:** Verwende `inputValidator` mit `@tanstack/zod-adapter`:

**Vorher (Workaround mit sendContext):**
```typescript
// src/server/functions/action.ts
export const performAction = createServerFn({ method: "POST" })
  .middleware([verifyAccess])
  .handler(async ({ context, data }) => {
    // data war oft null/undefined
    // Workaround: Daten über sendContext übergeben
  });
```

**Nachher (Mit inputValidator):**
```typescript
// src/server/functions/action.ts
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

const ActionSchema = z.object({
  id: z.string(),
  action: z.enum(["start", "stop"]),
});

export const performAction = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(ActionSchema))
  .middleware([verifyAccess])
  .handler(async ({ context, data }) => {
    // data ist jetzt garantiert validiert und typisiert
    const { id, action } = data;
    // ...
  });
```

**Wichtig:**
- `inputValidator` muss VOR `.middleware()` aufgerufen werden
- Benötigt `@tanstack/zod-adapter` Package
- Validiert und transformiert Daten automatisch
- Daten sind im Handler garantiert vorhanden und typisiert

---

### 8. NITRO_PRESET Konfiguration

**render.yaml / Build-Konfiguration:**
```yaml
buildCommand: pnpm install && pnpm db:generate && NITRO_PRESET=node-server pnpm build && pnpm db:migrate:deploy
```

**Wichtig:** `NITRO_PRESET=node-server` muss für den `build` Befehl gesetzt werden, nicht nur für `db:generate`.

---

## Schritt-für-Schritt Migration

### Schritt 1: Packages aktualisieren

```bash
pnpm add @tanstack/react-start@1.139.14 \
  @tanstack/react-router@1.139.14 \
  @tanstack/react-router-devtools@1.139.14 \
  @tanstack/react-router-with-query@1.139.14 \
  @tanstack/zod-adapter@^1.139.14 \
  vite@^7.2.6 \
  react@^19.2.1 \
  react-dom@^19.2.1

pnpm add -D @tanstack/react-start-server@^1.139.14
```

### Schritt 2: Client Entry Point anpassen

1. Öffne `src/client.tsx`
2. Ersetze `StartClient` durch `RouterProvider`
3. Importiere `RouterProvider` aus `@tanstack/react-router`

### Schritt 3: Middleware anpassen

1. Suche nach allen `createMiddleware` Aufrufen
2. Entferne `validateClient: true` falls vorhanden

### Schritt 4: Server Routes anpassen

1. Suche nach `createServerFileRoute` Verwendungen
2. Ersetze durch Plain-Object-Export mit `path` und `methods`
3. Füge `@ts-ignore` hinzu falls nötig

### Schritt 5: Router Export anpassen

1. Öffne `src/router.tsx`
2. Füge `getRouter()` Funktion hinzu:
   ```typescript
   export function getRouter() {
     return createRouter();
   }
   ```

### Schritt 6: Server Wrapper erstellen

1. Erstelle `server.mjs` im Projekt-Root
2. Kopiere den Server-Wrapper-Code (siehe oben)
3. Passe Port/Host-Logik an deine Bedürfnisse an

### Schritt 7: package.json anpassen

1. Ändere `start` Script zu: `"start": "node server.mjs"`
2. Stelle sicher, dass `build` Script korrekt ist

### Schritt 8: POST Server Functions mit inputValidator migrieren

1. Identifiziere alle POST Server Functions mit Middleware
2. Erstelle Zod Schema für Input-Validierung
3. Füge `.inputValidator(zodValidator(Schema))` VOR `.middleware()` hinzu
4. Entferne manuelle Daten-Validierung aus dem Handler

### Schritt 9: Build-Konfiguration anpassen

1. Stelle sicher, dass `NITRO_PRESET=node-server` für Build gesetzt ist
2. Prüfe `render.yaml` oder andere Deployment-Konfigurationen

### Schritt 10: Testen

1. Lokaler Build: `pnpm build`
2. Lokaler Start: `pnpm start`
3. Teste alle Server Functions, besonders POST-Requests
4. Teste Middleware-Funktionalität
5. Teste Server Routes (Webhooks, etc.)

---

## Bekannte Probleme und Lösungen

### Problem: "use client" Direktiven Warnungen

**Symptom:** Viele Warnungen während Build:
```
Module level directives cause errors when bundled, "use client" in "..."
```

**Lösung:** Diese Warnungen sind harmlos und können ignoriert werden. Sie kommen von Dependencies (z.B. framer-motion, @mittwald/flow-react-components) und beeinträchtigen die Funktionalität nicht.

---

### Problem: Server beendet sich sofort

**Symptom:** Server startet, aber beendet sich sofort ohne Fehler.

**Lösung:** Stelle sicher, dass:
1. `server.mjs` existiert und korrekt ist
2. `package.json` `start` Script auf `node server.mjs` zeigt
3. `dist/server/server.js` existiert nach Build

---

### Problem: routerEntry.getRouter is not a function

**Symptom:** Fehler beim Server-Start:
```
TypeError: routerEntry.getRouter is not a function
```

**Lösung:** Stelle sicher, dass `src/router.tsx` `getRouter()` exportiert:
```typescript
export function getRouter() {
  return createRouter();
}
```

**Wichtig:** Falls der Fehler nach dem Update weiterhin auftritt:
1. **Build-Cache löschen:** Auf Render.com kann es sein, dass der Build-Cache veraltet ist. Versuche einen "Clear Build Cache" auf Render.
2. **Lokalen Build prüfen:** Führe `pnpm build` lokal aus und prüfe, ob `dist/server/assets/router-*.js` die `getRouter` Funktion enthält:
   ```bash
   cat dist/server/assets/router-*.js | grep getRouter
   ```
3. **Git Commit prüfen:** Stelle sicher, dass die Änderungen committed und gepusht wurden:
   ```bash
   git log --oneline -5
   git push
   ```
4. **Render Build-Logs prüfen:** Schaue in die Render Build-Logs, ob der Build wirklich die neueste Version verwendet.

---

### Problem: POST Request Body ist null/undefined

**Symptom:** Server Functions erhalten `null` oder `undefined` als `data` Parameter.

**Lösung:** Verwende `inputValidator`:
```typescript
.inputValidator(zodValidator(YourSchema))
```

**Wichtig:** `inputValidator` muss VOR `.middleware()` aufgerufen werden.

---

### Problem: Module 'dist/server/server.js' hat keinen default Export

**Symptom:** Fehler beim Import in `server.mjs`:
```
Cannot read properties of undefined (reading 'fetch')
```

**Lösung:** Verwende Namespace-Import:
```javascript
import * as serverModule from "./dist/server/server.js";
const serverEntry = serverModule.default || serverModule;
```

---

## Deployment-Konfiguration (Render.com)

**render.yaml:**
```yaml
services:
  - type: web
    name: your-app
    runtime: node
    buildCommand: pnpm install && pnpm db:generate && NITRO_PRESET=node-server pnpm build && pnpm db:migrate:deploy
    startCommand: pnpm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: HOST
        value: "0.0.0.0"
      - key: PORT
        fromService:
          type: web
          name: your-app
          property: port
```

**Wichtig:**
- `NITRO_PRESET=node-server` muss für `build` gesetzt sein
- `HOST=0.0.0.0` für Render.com notwendig
- `PORT` wird automatisch von Render gesetzt

---

## Checkliste für Migration

- [ ] Packages aktualisiert
- [ ] `src/client.tsx` angepasst (StartClient → RouterProvider)
- [ ] Middleware `validateClient` entfernt
- [ ] Server Routes angepasst (createServerFileRoute → Plain Object)
- [ ] Router `getRouter()` hinzugefügt
- [ ] `server.mjs` erstellt
- [ ] `package.json` start Script angepasst
- [ ] POST Server Functions mit `inputValidator` migriert
- [ ] Build-Konfiguration angepasst (NITRO_PRESET)
- [ ] Lokaler Build erfolgreich
- [ ] Lokaler Start erfolgreich
- [ ] Alle Server Functions getestet
- [ ] Middleware getestet
- [ ] Server Routes getestet
- [ ] Deployment-Konfiguration angepasst

---

## Weitere Ressourcen

- [TanStack Start GitHub](https://github.com/TanStack/start)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [TanStack Start Discord](https://tanstack.com/discord)

---

## Notizen

- Diese Migration wurde erfolgreich durchgeführt in: `mstudio-hetzner`
- Datum: Dezember 2024
- TanStack Start Version: v1.139.14
- Alle Breaking Changes wurden dokumentiert und getestet

