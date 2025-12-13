# Roadmap: Automatische CO₂-Optimierung von Cronjobs

## Übersicht
Diese Roadmap beschreibt Schritt für Schritt, wie die automatische CO₂-Optimierung von Cronjobs implementiert wird.

## Phase 1: Datenbank Setup

### Schritt 1.1: Prisma Schema erweitern
- [ ] Öffne `prisma/schema.prisma`
- [ ] Füge `CronjobOptimization` Model hinzu (siehe Konzept)
- [ ] Prüfe: Relation zu `ExtensionInstance` korrekt?

### Schritt 1.2: Migration erstellen
- [ ] Führe aus: `pnpm db:migrate:dev --name add_cronjob_optimization`
- [ ] Prüfe generierte Migration-Datei
- [ ] Teste Migration lokal

### Schritt 1.3: Prisma Client generieren
- [ ] Führe aus: `pnpm db:generate`
- [ ] Prüfe: Neue Types verfügbar?

## Phase 2: Optimierungs-Algorithmus

### Schritt 2.1: Optimierungs-Funktion erstellen
- [ ] Erstelle `src/server/functions/optimizeDailyCronjob.ts`
- [ ] Implementiere Funktion (siehe Konzept)
- [ ] Nutze `getCarbonForecast` aus bestehender Datei
- [ ] Teste Funktion mit verschiedenen Cron-Expressions

### Schritt 2.2: Validierung
- [ ] Prüfe: Nur tägliche Cronjobs (`* * * * *`)
- [ ] Prüfe: Forecast-Daten verfügbar?
- [ ] Prüfe: UTC-Zeit korrekt?

## Phase 3: Toggle-Funktion (Nutzer kann aktivieren/deaktivieren)

### Schritt 3.1: Server Function erstellen
- [ ] Erstelle `src/server/functions/toggleAutoOptimize.ts`
- [ ] Nutze `verifyAccessToInstance` Middleware
- [ ] Implementiere:
  - [ ] Validierung mit Zod Schema
  - [ ] API-Call: `client.cronjob.getCronjob` (mittwald_api_documentation.md Zeile 7338)
  - [ ] Prisma Upsert für `CronjobOptimization`
- [ ] Prüfe: `extensionInstanceId` aus context korrekt?

### Schritt 3.2: Testen
- [ ] Teste: Aktivierung funktioniert?
- [ ] Teste: Deaktivierung funktioniert?
- [ ] Prüfe: Original Interval wird gespeichert?

## Phase 4: UI-Integration

### Schritt 4.1: Daten laden
- [ ] Erweitere `getAllCronjobs` oder erstelle neue Funktion
- [ ] Joine `CronjobOptimization` Daten mit Cronjobs
- [ ] Prüfe: Optimierungs-Status wird geladen?

### Schritt 4.2: Switch in CronjobList hinzufügen
- [ ] Öffne `src/components/CronjobList.tsx`
- [ ] Importiere `Switch`, `Label`, `FieldDescription` aus `@mittwald/flow-remote-react-components`
- [ ] Füge Switch in TableCell hinzu (neue Spalte oder in bestehender)
- [ ] Nutze `toggleAutoOptimize` Server Function
- [ ] Prüfe: Flow-Dokumentation Zeile 6582 für Switch-Usage

### Schritt 4.3: Status anzeigen
- [ ] Zeige "Letzte Optimierung" an (wenn vorhanden)
- [ ] Zeige Badge "Auto-optimiert" wenn aktiviert
- [ ] Optional: Zeige original vs. optimiertes Interval

## Phase 5: Automatischer Optimierungs-Job

### Schritt 5.1: Server Function für Batch-Optimierung
- [ ] Erstelle `src/server/functions/optimizeCronjobs.ts`
- [ ] Implementiere:
  - [ ] Hole alle aktiven Extension Instances
  - [ ] Für jede Instance:
    - [ ] Hole alle Cronjobs mit `autoOptimize: true`
    - [ ] Hole Carbon Forecast
    - [ ] Für jeden Cronjob:
      - [ ] Hole aktuellen Cronjob via API (`client.cronjob.getCronjob`)
      - [ ] Prüfe: Ist täglich?
      - [ ] Optimiere mit `optimizeDailyCronjob`
      - [ ] Prüfe: Änderung notwendig?
      - [ ] Update via API (`client.cronjob.updateCronjob` - Zeile 7398)
      - [ ] Update Datenbank
- [ ] Error Handling: Fehler nicht weiterwerfen, loggen

### Schritt 5.2: Background-Job Authentifizierung
- [ ] Problem: `verifyAccessToInstance` nutzt `sessionToken`
- [ ] Lösung: Separate Funktion ohne Middleware oder
- [ ] Lösung: Nutze `instance.secret` für Background-Jobs
- [ ] Prüfe: Wie wird `getAccessToken` mit secret aufgerufen?

### Schritt 5.3: Scheduled Endpoint erstellen
- [ ] Erstelle `src/server/functions/scheduledOptimize.ts`
- [ ] Ruft `optimizeCronjobs` für alle Instances auf
- [ ] Optional: Eigene Authentifizierung für Background-Jobs

## Phase 6: Testing

### Schritt 6.1: Unit Tests
- [ ] Teste `optimizeDailyCronjob` Funktion
- [ ] Teste mit verschiedenen Cron-Expressions
- [ ] Teste Edge Cases (keine Daten, ungültige Expression)

### Schritt 6.2: Integration Tests
- [ ] Teste `toggleAutoOptimize` End-to-End
- [ ] Teste Datenbank-Operationen
- [ ] Mock API-Calls für Tests

### Schritt 6.3: Manuelles Testing
- [ ] Erstelle Test-Cronjob
- [ ] Aktiviere Auto-Optimierung
- [ ] Prüfe: Wird in DB gespeichert?
- [ ] Führe Optimierung manuell aus
- [ ] Prüfe: Cronjob wurde aktualisiert?

## Phase 7: Deployment

### Schritt 7.1: Migration auf Production
- [ ] Prüfe: Migration funktioniert?
- [ ] Führe aus: `pnpm db:migrate:deploy` auf Production

### Schritt 7.2: Externer Cronjob einrichten
- [ ] Erstelle Cronjob in mittwald
- [ ] Interval: `0 2 * * *` (täglich um 2 Uhr UTC)
- [ ] Destination: `https://carbon-aware-computing.jetzt/_serverFn/scheduledOptimize`
- [ ] Teste: Wird Endpoint aufgerufen?

### Schritt 7.3: Monitoring
- [ ] Logs prüfen: Werden Optimierungen durchgeführt?
- [ ] Prüfe: Fehler werden geloggt?
- [ ] Optional: Alerting bei Fehlern

## Checkliste vor jedem Schritt

Vor jedem Schritt prüfen:
- [ ] Welche API wird benötigt? → Prüfe `mittwald_api_documentation.md`
- [ ] Welche UI-Komponente? → Prüfe `flow_documentation.md`
- [ ] Import aus `@mittwald/flow-remote-react-components` (nicht `flow-react-components`)
- [ ] `verifyAccessToInstance` Middleware verwendet?
- [ ] Error Handling vorhanden?
- [ ] TypeScript-Typen korrekt?

## Wichtige Dateien

**Zu erstellende Dateien:**
- `src/server/functions/optimizeDailyCronjob.ts` - Optimierungs-Algorithmus
- `src/server/functions/toggleAutoOptimize.ts` - Nutzer kann aktivieren/deaktivieren
- `src/server/functions/optimizeCronjobs.ts` - Batch-Optimierung für alle Cronjobs
- `src/server/functions/scheduledOptimize.ts` - Endpoint für externen Cronjob

**Zu ändernde Dateien:**
- `prisma/schema.prisma` - Neues Model hinzufügen
- `src/components/CronjobList.tsx` - Switch hinzufügen
- `src/server/functions/getAllCronjobs.ts` - Optional: Optimierungs-Daten joinen

**Referenz-Dateien:**
- `src/server/functions/getCarbonForecast.ts` - Carbon Forecast Daten
- `src/server/functions/updateCronjob.ts` - Beispiel für API-Call
- `src/middlewares/verify-access-to-instance.ts` - Authentifizierung

## Häufige Fehler vermeiden

1. **Falscher Import**: `@mittwald/flow-react-components` statt `@mittwald/flow-remote-react-components`
2. **Falsche API-Methode**: Prüfe immer Operation ID in Dokumentation
3. **Fehlende assertStatus**: Nach jedem API-Call `assertStatus` aufrufen
4. **Falsche Zeitzone**: Carbon Forecast ist UTC, Cronjobs auch UTC
5. **instanceId vs extensionInstanceId**: Middleware gibt `extensionInstanceId` zurück

## Nächster Schritt

**Starte mit Phase 1, Schritt 1.1**: Prisma Schema erweitern


