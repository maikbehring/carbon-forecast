# POST Request Body Handling - Lösung

## Problem

Nach der Migration auf TanStack Start v1.139.14 funktionierten POST-Requests für Server-Aktionen nicht mehr. Der `inputValidator` erhielt `undefined` statt der erwarteten Daten, was zu Zod-Validierungsfehlern führte:

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

## Ursache

Das Problem hatte mehrere Ursachen:

1. **TanStack Start v1.139 Änderungen**: Die Server-Build-Ausgabe hat sich geändert
2. **HTTP Server Wrapper fehlte**: TanStack Start exportiert nur einen `fetch` Handler, startet aber keinen HTTP-Server
3. **Request Body Handling**: Der Body wurde nicht korrekt als ReadableStream übergeben
4. **Data Wrapping**: Die Daten mussten in `{ data: ... }` gewrappt werden

## Lösungsschritte

### 1. HTTP Server Wrapper (`server.mjs`)

TanStack Start v1.139 exportiert nur einen `fetch` Handler, aber keinen HTTP-Server. Wir mussten einen eigenen Node.js HTTP-Server erstellen:

```javascript
import http from "node:http";
import { Readable } from "node:stream";
import * as serverModule from "./dist/server/server.js";

const server = http.createServer(async (req, res) => {
  // Convert Node.js request to Fetch API Request
  const request = new Request(url, {
    method: req.method,
    headers,
    body: bodyStream, // ReadableStream
    duplex: "half"    // Required for ReadableStream
  });
  
  const response = await serverEntry.fetch(request);
  // Stream response back to client
});
```

### 2. Request Body als ReadableStream

TanStack Start ruft `request.json()` auf, um den Body zu extrahieren (Zeile 5523 in `dist/server/server.js`). Der Body muss als ReadableStream übergeben werden:

```javascript
// Read body buffer first
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

// Create ReadableStream from buffer
if (body) {
  const bodyStream = new ReadableStream({
    start(controller) {
      controller.enqueue(body);
      controller.close();
    }
  });
  requestInit.body = bodyStream;
  requestInit.duplex = "half"; // Required for ReadableStream in Node.js
}
```

**Wichtig**: 
- Der Body muss als Buffer gelesen werden, bevor der Request erstellt wird
- Dann wird ein neuer ReadableStream aus dem Buffer erstellt
- Die `duplex: "half"` Option ist erforderlich für ReadableStream in Node.js

### 3. inputValidator mit Zod

Der `inputValidator` muss VOR dem Middleware ausgeführt werden, um den Body zu parsen:

```typescript
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

const ServerActionSchema = z.object({
  serverId: z.union([z.string(), z.number()]).transform((val) => 
    typeof val === "string" ? parseInt(val, 10) : val
  ),
  action: z.enum(["poweron", "poweroff", "reboot", "shutdown"]),
});

export const performServerAction = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(ServerActionSchema))  // Wird VOR Middleware ausgeführt
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }) => {
    // data ist bereits validiert und geparst
    const parsed = data as z.infer<typeof ServerActionSchema>;
    // ...
  });
```

**Wichtig**: 
- `inputValidator` wird VOR dem Middleware ausgeführt
- Der Body wird automatisch von TanStack Start mit `request.json()` gelesen
- Die validierten Daten sind dann im Middleware und Handler verfügbar

### 4. Data Wrapping im Client

Die Daten müssen in `{ data: ... }` gewrappt werden:

```typescript
const serverActionMutation = useMutation({
  mutationFn: async ({ serverId, action }) => {
    const dataToSend = { serverId: String(serverId), action };
    
    // WICHTIG: Daten müssen in { data: ... } gewrappt werden
    const result = await performServerAction({ data: dataToSend });
    return result;
  },
});
```

**Wichtig**: 
- TypeScript erfordert `{ data: ... }` für Server Functions mit `inputValidator`
- TanStack Start serialisiert das `data` Objekt als JSON-Body
- Der `inputValidator` extrahiert die Daten aus `request.json()`

## Ablauf

1. **Client**: Ruft `performServerAction({ data: { serverId, action } })` auf
2. **TanStack Start Client**: Serialisiert `{ data: { serverId, action } }` als JSON-Body
3. **HTTP Server (`server.mjs`)**: 
   - Liest den Body als Buffer
   - Erstellt einen ReadableStream aus dem Buffer
   - Erstellt einen Fetch API Request mit `duplex: "half"`
4. **TanStack Start Server**: 
   - Ruft `request.json()` auf, um den Body zu lesen
   - Ruft `parsePayload(jsonPayload)` auf, um die Daten zu deserialisieren
   - Extrahiert `data` aus dem Payload
5. **inputValidator**: 
   - Erhält die Daten aus `ctx.data`
   - Validiert mit Zod
   - Gibt validierte Daten zurück
6. **Middleware**: Erhält die validierten Daten
7. **Handler**: Erhält die validierten Daten und führt die Aktion aus

## Wichtige Erkenntnisse

1. **ReadableStream vs String**: Der Body muss als ReadableStream übergeben werden, nicht als String, damit `request.json()` ihn lesen kann

2. **duplex Option**: Node.js Fetch API erfordert `duplex: "half"` für ReadableStream Bodies

3. **Body Buffer**: Der Body muss als Buffer gelesen werden, bevor der Request erstellt wird, da der Stream nur einmal gelesen werden kann

4. **inputValidator Reihenfolge**: `inputValidator` wird VOR dem Middleware ausgeführt, sodass die Daten bereits validiert sind, wenn das Middleware läuft

5. **Data Wrapping**: TypeScript erfordert `{ data: ... }` für Server Functions mit `inputValidator`

## Dateien

- `server.mjs`: HTTP Server Wrapper mit ReadableStream Body Handling
- `src/server/functions/hetzner/serverActions.ts`: Server Function mit `inputValidator`
- `src/routes/index.tsx`: Client-Code mit korrektem Data Wrapping
- `package.json`: `start` Script verwendet `node server.mjs`

## Testing

Nach dem Deployment sollten die Server-Aktionen (Start, Stop, Reboot) funktionieren. Die Logs zeigen:
- `[server.mjs] POST request to serverActions` - Body wird empfangen
- `[verifyAccessToInstance.server] Received data: {...}` - Daten kommen im Middleware an
- `[performServerAction] Received validated data: {...}` - Daten sind validiert






