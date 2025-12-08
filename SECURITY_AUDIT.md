# Security Audit Report

## Gefundene Sicherheitsprobleme

### 🔴 KRITISCH

#### 1. Path Traversal in `server.mjs` (Zeile 24-48)
**Problem**: Die `serveStaticFile` Funktion prüft nicht auf Path Traversal Angriffe.

```javascript
// VULNERABLE CODE:
function serveStaticFile(filePath) {
  let fullPath = join(__dirname, "dist", "client", filePath);
  // Keine Validierung gegen ../ Angriffe!
}
```

**Risiko**: Angreifer könnten beliebige Dateien vom Server lesen (z.B. `/assets/../../../etc/passwd`).

**Lösung**: Path Traversal Validierung hinzufügen:
```javascript
function serveStaticFile(filePath) {
  // Normalize and resolve path
  const normalizedPath = join(__dirname, "dist", "client", filePath);
  const resolvedPath = resolve(normalizedPath);
  const allowedDir = resolve(__dirname, "dist", "client");
  
  // Check if resolved path is within allowed directory
  if (!resolvedPath.startsWith(allowedDir)) {
    return null; // Path traversal detected
  }
  
  // Rest of the function...
}
```

#### 2. Sensitive Daten in Logs (mehrere Dateien)
**Problem**: API Tokens und Request Bodies werden in Logs ausgegeben.

**Betroffene Dateien**:
- `server.mjs` Zeile 108: Body-Inhalt wird geloggt
- `src/server/functions/hetzner/setApiToken.ts` Zeile 18: API Token wird geloggt
- `src/middlewares/verify-access-to-instance.ts` Zeile 31-33: Sensitive Daten werden geloggt
- `src/server/functions/hetzner/serverActions.ts` Zeile 27: Validierte Daten werden geloggt

**Risiko**: 
- API Tokens könnten in Logs erscheinen
- Request Bodies könnten sensitive Informationen enthalten
- Logs könnten von Unbefugten eingesehen werden

**Lösung**: 
- Debug Logging nur in Development aktivieren
- Sensitive Daten maskieren (z.B. nur erste/last 4 Zeichen zeigen)
- Production Logs bereinigen

```typescript
// Beispiel für sicheres Logging:
const maskToken = (token: string) => 
  token.length > 8 ? `${token.substring(0, 4)}...${token.substring(token.length - 4)}` : "***";

if (env.NODE_ENV === "development") {
  console.log("[setHetznerApiToken] Token:", maskToken(apiToken));
}
```

#### 3. Fehlende Body Size Limits
**Problem**: Keine Begrenzung der Request Body Größe in `server.mjs`.

**Risiko**: 
- Denial of Service (DoS) durch große Requests
- Memory Exhaustion

**Lösung**: Body Size Limit hinzufügen:
```javascript
const MAX_BODY_SIZE = 1024 * 1024; // 1MB

if (req.method !== "GET" && req.method !== "HEAD") {
  const chunks = [];
  let totalSize = 0;
  
  for await (const chunk of req) {
    totalSize += chunk.length;
    if (totalSize > MAX_BODY_SIZE) {
      res.statusCode = 413;
      res.end("Request Entity Too Large");
      return;
    }
    chunks.push(chunk);
  }
  // ...
}
```

### 🟡 HOCH

#### 4. Fehlende Input Validation bei `setHetznerApiToken`
**Problem**: `setHetznerApiToken` verwendet kein `inputValidator`, obwohl es POST-Requests verarbeitet.

**Betroffene Datei**: `src/server/functions/hetzner/setApiToken.ts`

**Risiko**: 
- Ungültige Daten könnten durchkommen
- Keine Type-Safety

**Lösung**: `inputValidator` hinzufügen (wie bei `performServerAction`):
```typescript
export const setHetznerApiToken = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(SetApiTokenSchema))
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }) => {
    // data ist bereits validiert
  });
```

#### 5. Fehlende Rate Limiting
**Problem**: Keine Rate Limiting Implementierung sichtbar.

**Risiko**: 
- Brute Force Angriffe auf API Endpunkte
- Denial of Service (DoS)

**Lösung**: Rate Limiting Middleware hinzufügen (z.B. mit `express-rate-limit` oder ähnlich).

#### 6. Header Injection Risiko
**Problem**: Alle Request Headers werden ungefiltert weitergegeben (Zeile 79-87 in `server.mjs`).

**Risiko**: 
- Header Injection Angriffe
- Host Header Injection

**Lösung**: Sensitive Headers filtern:
```javascript
const headers = new Headers();
const sensitiveHeaders = ['host', 'x-forwarded-host', 'x-forwarded-proto'];
for (const [key, value] of Object.entries(req.headers)) {
  if (value && !sensitiveHeaders.includes(key.toLowerCase())) {
    // ...
  }
}
```

#### 7. Fehlende CORS Konfiguration
**Problem**: Keine explizite CORS Konfiguration sichtbar.

**Risiko**: 
- Unerwünschte Cross-Origin Requests könnten erlaubt sein
- CSRF Angriffe möglich

**Lösung**: CORS explizit konfigurieren (falls benötigt).

### 🟢 MITTEL

#### 8. Error Messages könnten zu viel Information preisgeben
**Problem**: Einige Error Messages enthalten Stack Traces oder interne Details.

**Betroffene Dateien**:
- `server.mjs` Zeile 174: Stack Traces werden geloggt
- `src/server/functions/hetzner/serverActions.ts` Zeile 54: API Error Details werden weitergegeben

**Risiko**: 
- Information Disclosure
- Angreifer könnten interne Struktur erkennen

**Lösung**: 
- Generische Error Messages für Clients
- Detaillierte Logs nur server-seitig
- Stack Traces nur in Development

```typescript
catch (error) {
  console.error("[server] Internal error:", error); // Server-side logging
  if (env.NODE_ENV === "production") {
    throw new Error("An error occurred"); // Generic message for client
  } else {
    throw error; // Full error in development
  }
}
```

#### 9. Fehlende Content-Type Validierung
**Problem**: Keine explizite Validierung des Content-Type Headers.

**Risiko**: 
- MIME Type Confusion Angriffe
- Unerwartete Datenformate

**Lösung**: Content-Type explizit validieren:
```javascript
if (req.method === "POST") {
  const contentType = headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    res.statusCode = 415;
    res.end("Unsupported Media Type");
    return;
  }
}
```

#### 10. Prisma Queries sind sicher
**✅ GUT**: Alle Datenbankabfragen verwenden Prisma, das automatisch Parameterized Queries verwendet. Kein SQL Injection Risiko.

#### 11. Field Encryption ist implementiert
**✅ GUT**: Sensitive Daten (API Tokens) werden mit Prisma Field Encryption verschlüsselt.

#### 12. Authentication Middleware ist vorhanden
**✅ GUT**: `verifyAccessToInstance` Middleware validiert Session Tokens vor jedem Request.

## Empfohlene Maßnahmen (Priorität)

### Sofort (Kritisch)
1. ✅ Path Traversal Schutz in `server.mjs` hinzufügen
2. ✅ Body Size Limits implementieren
3. ✅ Sensitive Logging entfernen/maskieren

### Kurzfristig (Hoch)
4. ✅ `inputValidator` für `setHetznerApiToken` hinzufügen
5. ✅ Rate Limiting implementieren
6. ✅ Header Filtering hinzufügen

### Mittelfristig (Mittel)
7. ✅ Error Message Handling verbessern
8. ✅ Content-Type Validierung hinzufügen
9. ✅ CORS explizit konfigurieren

## Best Practices bereits implementiert

✅ **Parameterized Queries**: Prisma verwendet automatisch Parameterized Queries  
✅ **Field Encryption**: Sensitive Daten werden verschlüsselt gespeichert  
✅ **Input Validation**: Zod Schemas für Validierung  
✅ **Authentication**: Middleware für Access Control  
✅ **Environment Variables**: Envalid für sichere Env-Variable Validierung  
✅ **Type Safety**: TypeScript für Type-Safety  

## Zusammenfassung

**Kritische Probleme**: 3  
**Hohe Probleme**: 4  
**Mittlere Probleme**: 3  
**Bereits sicher implementiert**: 6 Best Practices

Die Anwendung hat eine gute Sicherheitsbasis, aber es gibt einige kritische Probleme, die sofort behoben werden sollten, insbesondere:
- Path Traversal Schutz
- Body Size Limits
- Sensitive Logging






