# Problem: TanStack Start v1.131.48 - POST Request Body geht in Middleware verloren

## Kurzbeschreibung

Bei POST-Requests mit Middleware geht der Request-Body (`data`) verloren. Obwohl der Client die Daten korrekt sendet, kommt in der Server-Middleware und im Handler `null` oder `undefined` an.

## Technischer Kontext

- **Framework**: TanStack Start v1.131.48
- **Projekt**: mittwald Extension (Carbon Forecast)
- **Betroffene Funktion**: `updateCronjob` Server Function
- **Middleware**: `verifyAccessToInstance` (Custom Middleware)

## Symptome

### Browser-Konsole (Client)
```
EditCronjobForm - calling updateCronjob with data: {
  cronjobId: '9c4c7764-05b4-460f-8f24-3113177ab9df',
  description: 'Test',
  interval: '50 8 * * *',
  destination: 'www.google.de',
  timeout: 3600,
  active: true
}

verifyAccessToInstance.client - data: undefined  // ❌ Daten gehen verloren!
```

### Server-Logs
```
verifyAccessToInstance.server - full context: {
  "sessionToken": "eyJhbGci..."
}
verifyAccessToInstance.server - data: null  // ❌ Daten sind null
verifyAccessToInstance.server - context._data: undefined  // ❌ sendContext wird nicht weitergegeben
verifyAccessToInstance.server - context keys: [ 'sessionToken' ]  // ❌ Nur sessionToken vorhanden

updateCronjob - data: null
updateCronjob - context._data: undefined
updateCronjob - Invalid data: { data: null, contextData: undefined, parsedData: null }

Error: Invalid data: expected object, received null or invalid type
```

## Root Cause (laut Dokumentation)

TanStack Start v1.131.48 parst den Request-Body **erst nach** der Middleware, wenn kein `inputValidator` verwendet wird. Die Middleware läuft also bevor der Body eingelesen wurde.

### Interner Ablauf (ohne inputValidator)
```
1. Client sendet POST Request mit Body
2. Request erreicht Server
3. Middleware läuft (data ist noch null!)  ← Problem hier
4. Handler läuft (data ist noch null!)     ← Problem hier
5. TanStack Start parst Body (zu spät!)
```

### Interner Ablauf (mit inputValidator - nicht verfügbar in v1.131.48)
```
1. Client sendet POST Request mit Body
2. Request erreicht Server
3. inputValidator parst Body VOR Middleware  ← Würde funktionieren
4. Middleware läuft (data ist verfügbar!)
5. Handler läuft (data ist verfügbar!)
```

## Versuchte Lösungen

### 1. sendContext Workaround (laut Dokumentation)
**Implementierung:**
- Client-Middleware: Daten in `sendContext._data` speichern
- Server-Middleware: Daten aus `context._data` lesen, wenn `data` null ist

**Ergebnis:** ❌ Funktioniert nicht
- `sendContext` wird nicht korrekt weitergegeben
- `context._data` ist immer `undefined`
- Context enthält nur `sessionToken`, kein `_data` oder `projectId`

**Code:**
```typescript
// Client-Middleware
.client(async ({ next, data }) => {
  const sendContext = {
    sessionToken,
    projectId: config.projectId,
    _data: data, // Daten hier speichern
  };
  return (next as any)({ sendContext, data });
})

// Server-Middleware
.server(async ({ next, context, data }) => {
  const contextData = (context as any)?._data; // ❌ Immer undefined
  // ...
})
```

### 2. method: "POST" entfernen
**Ergebnis:** ❌ Funktioniert nicht
- Request wird dann als GET mit Query-Parametern gesendet
- Daten gehen weiterhin verloren

### 3. Debug-Logging
**Ergebnis:** ✅ Bestätigt das Problem
- Client-Middleware erhält `data: undefined`
- Server-Middleware erhält `data: null`
- `sendContext` wird nicht weitergegeben

## Code-Struktur

### Server Function
```typescript
export const updateCronjob = createServerFn({ method: "POST" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }) => {
    // data ist hier immer null/undefined
    // context._data ist auch undefined
  });
```

### Client-Aufruf
```typescript
const cleanedData = {
  cronjobId: cronjob.id,
  description: description || undefined,
  interval: interval || undefined,
  destination: destination || undefined,
  timeout: timeoutValue ? Number.parseInt(timeoutValue, 10) : undefined,
  active,
};

await updateCronjob(cleanedData); // Daten werden korrekt übergeben
```

## Vergleich mit anderen Funktionen

### `createCronjob` (gleiche Struktur)
- Verwendet `method: "POST"`
- Verwendet die gleiche Middleware
- **Status:** Unbekannt, ob es funktioniert oder nicht

### `getCarbonForecast` (GET-Request)
- Verwendet `method: "GET"`
- **Status:** ✅ Funktioniert korrekt

## Bekannte Issues & Referenzen

- **TanStack Start Issue #3429**: "Server functions assume JSON payloads"
- **TanStack Start Issue #5913**: "Context not passed to server middleware with FormData"
- **Dokumentation**: `updatenotification.md` beschreibt das Problem und den Workaround

## Mögliche Lösungsansätze

### 1. TanStack Start aktualisieren (wenn verfügbar)
- Neuere Versionen haben `inputValidator` Support
- Würde das Problem nachhaltig lösen

### 2. Alternative: Daten direkt im Handler aus Request-Body lesen
- Problem: Handler hat keinen direkten Zugriff auf `request`
- Nicht möglich laut Dokumentation

### 3. Alternative: Middleware-Struktur ändern
- Daten über einen anderen Mechanismus übergeben
- Würde die Middleware-Struktur komplett ändern

### 4. Alternative: POST-Request ohne Middleware
- Middleware-Logik in den Handler verschieben
- Würde die Architektur ändern

## Fragen für die Diskussion

1. **Funktioniert `createCronjob`?** Falls ja, was ist der Unterschied?
2. **Gibt es eine neuere TanStack Start Version?** Können wir aktualisieren?
3. **Können wir die Middleware umgehen?** Für diese spezielle Funktion?
4. **Gibt es einen anderen Workaround?** Der besser funktioniert als `sendContext`?

## Relevante Dateien

- `src/server/functions/updateCronjob.ts` - Betroffene Server Function
- `src/middlewares/verify-access-to-instance.ts` - Middleware mit Workaround
- `src/components/EditCronjobForm.tsx` - Client-Komponente
- `updatenotification.md` - Dokumentation des Problems

## Nächste Schritte

1. Prüfen, ob `createCronjob` funktioniert (gleiche Struktur)
2. Prüfen, ob eine neuere TanStack Start Version verfügbar ist
3. Alternative Lösungsansätze diskutieren
4. Falls nötig: Middleware-Struktur anpassen oder umgehen


