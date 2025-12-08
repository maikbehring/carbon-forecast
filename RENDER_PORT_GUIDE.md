# Render.com Port-Konfiguration - Anleitung für andere Projekte

Diese Anleitung hilft dir, häufige Port-Probleme bei Render.com-Deployments zu vermeiden.

## Das Problem

Render.com weist Web Services automatisch einen Port zu (standardmäßig Port 10000). Wenn deine Anwendung nicht korrekt konfiguriert ist, kann sie:

- ❌ Nicht starten ("Port already in use" oder "EADDRINUSE")
- ❌ Auf dem falschen Port lauschen
- ❌ Nicht erreichbar sein (Health Checks schlagen fehl)

## Die Lösung

### 1. Verwende die `PORT` Environment Variable

**Wichtig:** Render.com setzt automatisch eine `PORT` Environment Variable. Deine Anwendung **muss** diese Variable lesen.

#### Node.js/Express Beispiel

```javascript
// server.js oder server.mjs
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;
const host = process.env.HOST || "0.0.0.0";

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
```

#### Vite/TanStack Start Beispiel

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5173,
    host: true, // Wichtig: Listen on all addresses
  },
});
```

#### Custom Server (wie in diesem Projekt)

```javascript
// server.mjs
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;
const host = process.env.HOST || "0.0.0.0";

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
```

### 2. Konfiguriere `render.yaml` korrekt

Verwende die `fromService`-Syntax, um den Port automatisch zu setzen:

```yaml
services:
  - type: web
    name: dein-service-name
    runtime: node
    buildCommand: pnpm install && pnpm build
    startCommand: pnpm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: HOST
        value: "0.0.0.0"  # Wichtig: Listen on all addresses
      - key: PORT
        fromService:
          type: web
          name: dein-service-name
          property: port
```

**Wichtig:** 
- Setze `HOST` auf `"0.0.0.0"` (nicht `localhost` oder `127.0.0.1`)
- Verwende `fromService` für `PORT` - setze es **nicht** manuell
- Der `name` in `fromService` muss mit dem `name` des Services übereinstimmen

### 3. Manuelle Konfiguration (wenn keine `render.yaml`)

Wenn du die Render-UI verwendest:

1. **Setze `HOST` Environment Variable:**
   - Key: `HOST`
   - Value: `0.0.0.0`

2. **Setze `PORT` Environment Variable:**
   - **NICHT** manuell setzen!
   - Render setzt `PORT` automatisch
   - Deine Anwendung muss `process.env.PORT` lesen

3. **Start Command:**
   - Stelle sicher, dass dein Start-Command die `PORT` Variable verwendet
   - Beispiel: `node server.mjs` (nicht `node server.mjs --port 10000`)

## Häufige Fehler

### ❌ Falsch: Port hardcoded

```javascript
// FALSCH - Port ist hardcoded
server.listen(10000, "localhost", () => {
  console.log("Server listening");
});
```

### ✅ Richtig: Port aus Environment Variable

```javascript
// RICHTIG - Port wird aus Environment Variable gelesen
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;
const host = process.env.HOST || "0.0.0.0";
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
```

### ❌ Falsch: Host auf localhost

```javascript
// FALSCH - localhost funktioniert nicht auf Render
server.listen(port, "localhost", () => {
  console.log("Server listening");
});
```

### ✅ Richtig: Host auf 0.0.0.0

```javascript
// RICHTIG - 0.0.0.0 erlaubt externe Verbindungen
const host = process.env.HOST || "0.0.0.0";
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
```

### ❌ Falsch: PORT manuell in render.yaml setzen

```yaml
# FALSCH - Port sollte nicht manuell gesetzt werden
envVars:
  - key: PORT
    value: 10000  # ❌ Falsch!
```

### ✅ Richtig: PORT mit fromService

```yaml
# RICHTIG - Port wird automatisch von Render gesetzt
envVars:
  - key: PORT
    fromService:
      type: web
      name: dein-service-name
      property: port
```

## Framework-spezifische Anleitungen

### Express.js

```javascript
const express = require('express');
const app = express();

const port = process.env.PORT || 10000;
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
```

### Fastify

```javascript
import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 10000;
const host = process.env.HOST || "0.0.0.0";

fastify.listen({ port, host }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
```

### Vite Dev Server (Development)

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5173,
    host: true, // Wichtig für Render.com
  },
});
```

### TanStack Start

TanStack Start verwendet Vite unter der Haube. Stelle sicher, dass:

1. `vite.config.ts` `process.env.PORT` verwendet
2. Ein custom `server.mjs` die `PORT` Variable liest
3. `render.yaml` `fromService` für `PORT` verwendet

Siehe `server.mjs` in diesem Projekt als Beispiel.

## Troubleshooting

### Problem: "Port already in use"

**Ursache:** Die Anwendung versucht, auf einen bereits belegten Port zuzugreifen.

**Lösung:**
- Stelle sicher, dass `PORT` aus `process.env.PORT` gelesen wird
- Verwende `fromService` in `render.yaml`
- Setze `PORT` nicht manuell

### Problem: "EADDRINUSE"

**Ursache:** Ähnlich wie "Port already in use", aber spezifischer für Node.js.

**Lösung:**
- Prüfe, ob mehrere Server-Prozesse laufen
- Stelle sicher, dass `HOST` auf `0.0.0.0` gesetzt ist
- Verwende `process.env.PORT` statt hardcoded Port

### Problem: Health Checks schlagen fehl

**Ursache:** Die Anwendung läuft, aber Render kann sie nicht erreichen.

**Lösung:**
- Stelle sicher, dass `HOST` auf `0.0.0.0` gesetzt ist (nicht `localhost`)
- Prüfe, ob die Anwendung auf dem korrekten Port läuft
- Prüfe die Runtime-Logs in der Render-UI

### Problem: Anwendung startet nicht

**Ursache:** Verschiedene mögliche Ursachen.

**Lösung:**
1. Prüfe die Build-Logs
2. Prüfe die Runtime-Logs
3. Stelle sicher, dass `PORT` gesetzt ist:
   ```bash
   # In den Runtime-Logs sollte stehen:
   Server listening on http://0.0.0.0:10000
   ```
4. Prüfe, ob alle Environment Variables gesetzt sind

## Checkliste für Render.com Deployment

- [ ] `PORT` wird aus `process.env.PORT` gelesen (nicht hardcoded)
- [ ] `HOST` ist auf `0.0.0.0` gesetzt (nicht `localhost`)
- [ ] `render.yaml` verwendet `fromService` für `PORT`
- [ ] `render.yaml` setzt `HOST` auf `"0.0.0.0"`
- [ ] Start-Command verwendet keine hardcoded Ports
- [ ] Build-Command ist korrekt konfiguriert
- [ ] Alle Environment Variables sind gesetzt
- [ ] Health Checks sind konfiguriert (optional, aber empfohlen)

## Beispiel: Vollständige `render.yaml`

```yaml
services:
  - type: web
    name: mein-web-service
    runtime: node
    plan: free
    buildCommand: pnpm install && pnpm build
    startCommand: pnpm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: HOST
        value: "0.0.0.0"
      - key: PORT
        fromService:
          type: web
          name: mein-web-service
          property: port
      # Weitere Environment Variables...
      - key: DATABASE_URL
        fromDatabase:
          name: meine-datenbank
          property: connectionString

databases:
  - name: meine-datenbank
    plan: free
```

## Weitere Ressourcen

- [Render.com Dokumentation - Environment Variables](https://render.com/docs/environment-variables)
- [Render.com Dokumentation - Web Services](https://render.com/docs/web-services)
- [Render.com Dokumentation - Blueprint Spec](https://render.com/docs/blueprint-spec)

## Zusammenfassung

**Die drei wichtigsten Punkte:**

1. ✅ **Lese `PORT` aus `process.env.PORT`** - nie hardcoded
2. ✅ **Setze `HOST` auf `0.0.0.0`** - nie `localhost`
3. ✅ **Verwende `fromService` in `render.yaml`** - nie manuell setzen

Wenn du diese drei Regeln befolgst, sollten Port-Probleme auf Render.com der Vergangenheit angehören! 🚀

