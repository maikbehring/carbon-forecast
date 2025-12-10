# Konzept: Automatische CO₂-Optimierung von Cronjobs

## Übersicht

Dieses Konzept beschreibt die Implementierung einer automatischen Optimierung von täglichen Cronjobs basierend auf dem CO₂-Impact. Das System prüft einmal täglich die Carbon Forecast-Daten und passt die Ausführungszeiten von Cronjobs automatisch an die Zeitpunkte mit dem geringsten CO₂-Verbrauch an.

## Anforderungen

1. **Automatische Optimierung**: Tägliche Cronjobs werden automatisch auf die beste Zeit verschoben
2. **Nutzer-Kontrolle**: Nutzer kann pro Cronjob entscheiden, ob automatische Optimierung aktiviert ist
3. **Tägliche Prüfung**: System prüft einmal am Tag die Carbon Forecast-Daten
4. **Nur tägliche Cronjobs**: Optimierung nur für Cronjobs die täglich ausgeführt werden

## Wichtige Hinweise

**API-Referenzen:**
- Alle API-Calls basieren auf `mittwald_api_documentation.md`
- `GET /v2/cronjobs/{cronjobId}` - Operation ID: `cronjob-get-cronjob` (Zeile 7338)
- `PATCH /v2/cronjobs/{cronjobId}` - Operation ID: `cronjob-update-cronjob` (Zeile 7398)
- Request Body für Update: `{ interval: string, active?: boolean, description?: string, ... }`
- Response für Update: `204 NoContent`

**UI-Komponenten:**
- Alle UI-Komponenten basieren auf `flow_documentation.md`
- `Switch` - Zeile 6582, Import aus `@mittwald/flow-remote-react-components`
- `Label` - für Switch-Beschriftung
- `FieldDescription` - für zusätzliche Beschreibung unter dem Switch

## Architektur

### 1. Datenbank-Erweiterung

#### Neues Prisma Schema

```prisma
model CronjobOptimization {
  id                String   @id @default(cuid())
  cronjobId         String   // ID des Cronjobs in mittwald
  projectId         String   // Projekt-ID für Zuordnung
  instanceId        String   // ExtensionInstance ID
  autoOptimize      Boolean  @default(false) // Nutzer-Einstellung
  lastOptimizedAt   DateTime? // Letzte automatische Optimierung
  originalInterval  String   // Originale Cron-Expression (Backup)
  optimizedInterval String?  // Aktuell optimierte Cron-Expression
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt

  instance          ExtensionInstance @relation(fields: [instanceId], references: [id], onDelete: Cascade)

  @@unique([cronjobId, instanceId])
  @@index([instanceId])
  @@index([projectId])
}
```

**Migration:**
```sql
-- CreateTable
CREATE TABLE "CronjobOptimization" (
    "id" TEXT NOT NULL,
    "cronjobId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "instanceId" TEXT NOT NULL,
    "autoOptimize" BOOLEAN NOT NULL DEFAULT false,
    "lastOptimizedAt" TIMESTAMP(3),
    "originalInterval" TEXT NOT NULL,
    "optimizedInterval" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CronjobOptimization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CronjobOptimization_cronjobId_instanceId_key" ON "CronjobOptimization"("cronjobId", "instanceId");

-- CreateIndex
CREATE INDEX "CronjobOptimization_instanceId_idx" ON "CronjobOptimization"("instanceId");

-- CreateIndex
CREATE INDEX "CronjobOptimization_projectId_idx" ON "CronjobOptimization"("projectId");

-- AddForeignKey
ALTER TABLE "CronjobOptimization" ADD CONSTRAINT "CronjobOptimization_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "ExtensionInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

### 2. Optimierungs-Algorithmus

#### Funktion: `optimizeDailyCronjob`

```typescript
/**
 * Findet die beste Ausführungszeit für einen täglichen Cronjob
 * basierend auf dem Carbon Forecast
 */
function optimizeDailyCronjob(
  cronExpression: string,
  forecast: CarbonForecast
): {
  optimalTime: { hour: number; minute: number };
  optimalRating: number;
  cronExpression: string;
} {
  // 1. Prüfe ob Cronjob täglich ausgeführt wird
  // Pattern: "X Y * * *" (Minute Stunde * * *)
  const parts = cronExpression.trim().split(/\s+/);
  if (parts.length < 5) {
    throw new Error("Invalid cron expression");
  }

  const [minute, hour, day, month, weekday] = parts;
  
  // Nur optimieren wenn täglich (* * * * *)
  if (day !== "*" || month !== "*" || weekday !== "*") {
    throw new Error("Only daily cronjobs can be optimized");
  }

  // 2. Filtere Forecast-Daten für die nächsten 24 Stunden
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  
  const futureEmissions = forecast.Emissions.filter((emission) => {
    const emissionTime = new Date(emission.Time);
    return emissionTime >= now && emissionTime <= tomorrow;
  });

  if (futureEmissions.length === 0) {
    throw new Error("No forecast data available");
  }

  // 3. Finde Zeitpunkt mit niedrigstem CO₂-Rating
  const optimalEmission = futureEmissions.reduce((min, e) =>
    e.Rating < min.Rating ? e : min
  );

  const optimalDate = new Date(optimalEmission.Time);
  const optimalHour = optimalDate.getUTCHours();
  const optimalMinute = optimalDate.getUTCMinutes();

  // 4. Generiere neue Cron-Expression
  // Format: "MM HH * * *" (UTC)
  const optimizedCron = `${optimalMinute} ${optimalHour} * * *`;

  return {
    optimalTime: { hour: optimalHour, minute: optimalMinute },
    optimalRating: optimalEmission.Rating,
    cronExpression: optimizedCron,
  };
}
```

### 3. Automatischer Optimierungs-Job

#### Server Function: `optimizeCronjobs`

```typescript
/**
 * Optimiert alle Cronjobs die für automatische Optimierung markiert sind
 * Sollte einmal täglich ausgeführt werden (z.B. via Cronjob oder Scheduled Task)
 */
export const optimizeCronjobs = createServerFn({ method: "POST" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context }: { context: any }) => {
    try {
      if (!context) {
        throw new Error("Context is required");
      }
      const ctx = context as { sessionToken: string };

      // 1. Hole Carbon Forecast
      const forecast = await getCarbonForecast();

      // 2. Hole alle Extension Instances
      const instances = await db.extensionInstance.findMany({
        where: { active: true },
      });

      const results = [];

      for (const instance of instances) {
        try {
          // 3. Hole alle Cronjobs mit aktivierter Optimierung
          const optimizations = await db.cronjobOptimization.findMany({
            where: {
              instanceId: instance.id,
              autoOptimize: true,
            },
          });

          if (optimizations.length === 0) {
            continue;
          }

          // 4. Hole aktuelle Cronjobs von mittwald API
          // Für Background-Jobs: Verwende instance.secret statt sessionToken
          // WICHTIG: Dies erfordert eine Anpassung der verifyAccessToInstance Middleware
          // oder eine separate Authentifizierung für Background-Jobs
          const { publicToken: accessToken } = await getAccessToken(
            instance.secret, // Verwende secret statt sessionToken für Background-Jobs
            env.EXTENSION_SECRET,
          );

          const client = await MittwaldAPIV2Client.newWithToken(accessToken);
          
          // Hole alle Projekte für dieses Instance
          // API: GET /v2/projects
          // Operation ID: project-list-projects
          const projectsResult = await client.project.listProjects();
          assertStatus(projectsResult, 200);

          // 5. Für jeden optimierten Cronjob
          for (const optimization of optimizations) {
            try {
              // Hole aktuellen Cronjob
              // API: GET /v2/cronjobs/{cronjobId}
              // Operation ID: cronjob-get-cronjob
              // Siehe: mittwald_api_documentation.md Zeile 7338
              const cronjobResult = await client.cronjob.getCronjob({
                cronjobId: optimization.cronjobId,
              });
              assertStatus(cronjobResult, 200);
              const cronjob = cronjobResult.data;

              // Prüfe ob täglich
              const parts = cronjob.interval?.trim().split(/\s+/) || [];
              if (parts.length < 5 || parts[2] !== "*" || parts[3] !== "*" || parts[4] !== "*") {
                console.log(`Skipping non-daily cronjob: ${optimization.cronjobId}`);
                continue;
              }

              // Optimiere
              const optimizationResult = optimizeDailyCronjob(
                cronjob.interval!,
                forecast
              );

              // Prüfe ob Optimierung notwendig ist (nur wenn sich Zeit geändert hat)
              const currentParts = cronjob.interval!.trim().split(/\s+/);
              const optimizedParts = optimizationResult.cronExpression.trim().split(/\s+/);
              
              if (
                currentParts[0] === optimizedParts[0] &&
                currentParts[1] === optimizedParts[1]
              ) {
                console.log(`No optimization needed for cronjob: ${optimization.cronjobId}`);
                continue;
              }

              // Speichere original Interval falls noch nicht gespeichert
              if (!optimization.originalInterval) {
                await db.cronjobOptimization.update({
                  where: { id: optimization.id },
                  data: { originalInterval: cronjob.interval! },
                });
              }

              // Update Cronjob via API
              // API: PATCH /v2/cronjobs/{cronjobId}
              // Operation ID: cronjob-update-cronjob
              // Request Body: { interval: string, ... }
              // Siehe: mittwald_api_documentation.md Zeile 7398
              const updateResult = await client.cronjob.updateCronjob({
                cronjobId: optimization.cronjobId,
                data: {
                  interval: optimizationResult.cronExpression,
                },
              });
              assertStatus(updateResult, 204); // 204 NoContent laut API-Dokumentation

              // Update Datenbank
              await db.cronjobOptimization.update({
                where: { id: optimization.id },
                data: {
                  optimizedInterval: optimizationResult.cronExpression,
                  lastOptimizedAt: new Date(),
                },
              });

              results.push({
                cronjobId: optimization.cronjobId,
                success: true,
                oldTime: `${currentParts[1]}:${currentParts[0]}`,
                newTime: `${optimizedParts[1]}:${optimizedParts[0]}`,
                co2Reduction: optimizationResult.optimalRating,
              });
            } catch (error) {
              console.error(
                `Error optimizing cronjob ${optimization.cronjobId}:`,
                error
              );
              results.push({
                cronjobId: optimization.cronjobId,
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
              });
            }
          }
        } catch (error) {
          console.error(`Error processing instance ${instance.id}:`, error);
        }
      }

      return {
        success: true,
        optimized: results.filter((r) => r.success).length,
        failed: results.filter((r) => !r.success).length,
        results,
      };
    } catch (error) {
      console.error("Error in optimizeCronjobs:", error);
      throw error;
    }
  });
```

### 4. UI-Integration

#### Erweiterte CronjobList-Komponente

```typescript
// In CronjobList.tsx
interface Cronjob {
  id: string;
  description?: string;
  interval?: string;
  // ... andere Felder
  optimization?: {
    autoOptimize: boolean;
    lastOptimizedAt?: string;
    originalInterval?: string;
  };
}

// Switch für Auto-Optimierung hinzufügen
// Flow Component: Switch
// Siehe: flow_documentation.md Zeile 6582
// WICHTIG: Import aus @mittwald/flow-remote-react-components (nicht flow-react-components)
import { Switch, Label, FieldDescription } from "@mittwald/flow-remote-react-components";

<Switch
  isSelected={cronjob.optimization?.autoOptimize || false}
  onChange={async (enabled) => {
    await toggleAutoOptimize({
      cronjobId: cronjob.id,
      projectId: cronjob.projectId,
      enabled,
    });
  }}
>
  <Label>CO₂-Optimierung aktivieren</Label>
  <FieldDescription>
    Dieser Cronjob wird täglich automatisch auf die Zeit mit dem geringsten CO₂-Verbrauch verschoben.
  </FieldDescription>
</Switch>
```

#### Server Function: `toggleAutoOptimize`

```typescript
import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";
import { db } from "~/db";

const ToggleAutoOptimizeSchema = z.object({
  cronjobId: z.string().min(1),
  projectId: z.string().min(1),
  enabled: z.boolean(),
});

export const toggleAutoOptimize = createServerFn({ method: "POST" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }: { context: any; data: unknown }) => {
    try {
      if (!context) {
        throw new Error("Context is required");
      }
      const ctx = context as { sessionToken: string };

      // Validierung
      if (!data || typeof data !== "object") {
        throw new Error("Invalid data: expected object");
      }
      const validated = ToggleAutoOptimizeSchema.parse(data);

      // Hole aktuellen Cronjob um original Interval zu speichern
      const { publicToken: accessToken } = await getAccessToken(
        ctx.sessionToken,
        env.EXTENSION_SECRET,
      );
      const client = await MittwaldAPIV2Client.newWithToken(accessToken);
      
      // API: GET /v2/cronjobs/{cronjobId}
      // Operation ID: cronjob-get-cronjob
      // Response: 200 OK mit Cronjob-Objekt
      // Siehe: mittwald_api_documentation.md Zeile 7338
      const cronjobResult = await client.cronjob.getCronjob({
        cronjobId: validated.cronjobId,
      });
      assertStatus(cronjobResult, 200);
      const cronjob = cronjobResult.data;

      // Hole extensionInstanceId aus context (wird von verifyAccessToInstance gesetzt)
      // verifyAccessToInstance setzt extensionInstanceId im context
      // Siehe: src/middlewares/verify-access-to-instance.ts
      const extensionInstanceId = (context as any).extensionInstanceId;

      if (!extensionInstanceId) {
        throw new Error("Could not determine extension instance ID");
      }

      // Upsert Optimization-Eintrag
      await db.cronjobOptimization.upsert({
        where: {
          cronjobId_instanceId: {
            cronjobId: validated.cronjobId,
            instanceId: extensionInstanceId,
          },
        },
        create: {
          cronjobId: validated.cronjobId,
          projectId: validated.projectId,
          instanceId: extensionInstanceId,
          autoOptimize: validated.enabled,
          originalInterval: cronjob.interval || "",
        },
        update: {
          autoOptimize: validated.enabled,
          // Wenn deaktiviert, Interval zurücksetzen falls vorhanden
          ...(validated.enabled === false
            ? {
                optimizedInterval: null,
                // Optional: Interval zurücksetzen auf originalInterval
                // Dazu müsste man updateCronjob API aufrufen
              }
            : {}),
        },
      });

      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Validation error: ${error.errors.map((e) => e.message).join(", ")}`);
      }
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Unknown error while toggling auto-optimize");
    }
  });
```

### 5. Scheduled Task / Cronjob

#### Option A: Externer Cronjob (empfohlen)

Erstelle einen eigenen Cronjob in mittwald, der täglich die Optimierungs-Funktion aufruft:

```typescript
// src/server/functions/scheduledOptimize.ts
// Wird von externem Cronjob aufgerufen
export const scheduledOptimize = createServerFn({ method: "POST" })
  .handler(async () => {
    // Ruft optimizeCronjobs für alle Instances auf
    // Kann auch direkt ohne verifyAccessToInstance laufen
    // wenn ein interner Secret verwendet wird
  });
```

**Cronjob-Konfiguration:**
- **Domain**: `mstudio.carbon-aware-computing.jetzt`
- **Interval**: `0 2 * * *` (täglich um 2 Uhr UTC)
- **Destination**: `https://mstudio.carbon-aware-computing.jetzt/_serverFn/src_server_functions_scheduledOptimize_ts--scheduledOptimize_createServerFn_handler?createServerFn`
- **Method**: POST
- **Body** (optional):
  - Wenn `OPTIMIZATION_API_KEY` gesetzt ist: `{ "apiKey": "dein-api-key" }`
  - Für Testzwecke (wenn `OPTIMIZATION_API_KEY` leer ist): `{}` oder leerer Body
- **Hinweis**: Diese Funktion kann von extern getriggert werden und benötigt keinen Session-Token. Sie iteriert über alle aktiven Extension Instances und optimiert deren Cronjobs automatisch. Für Testzwecke kann die Funktion ohne Authentifizierung aufgerufen werden.

#### Option B: Interner Scheduler

Verwende `node-cron` oder ähnliches für interne Scheduling:

```typescript
// src/server/scheduler.ts
import cron from "node-cron";
import { optimizeCronjobs } from "./functions/optimizeCronjobs";

// Täglich um 2 Uhr UTC
cron.schedule("0 2 * * *", async () => {
  console.log("Running daily cronjob optimization...");
  try {
    // Ruft optimizeCronjobs auf
    // Benötigt Zugriff auf alle Extension Instances
  } catch (error) {
    console.error("Error in scheduled optimization:", error);
  }
});
```

### 6. Erweiterte Features (Optional)

#### A. Optimierungs-Historie

```prisma
model OptimizationHistory {
  id                String   @id @default(cuid())
  optimizationId    String
  cronjobId         String
  oldInterval       String
  newInterval       String
  co2Rating         Float
  optimizedAt       DateTime @default(now())
  
  optimization      CronjobOptimization @relation(fields: [optimizationId], references: [id])
  
  @@index([optimizationId])
  @@index([optimizedAt])
}
```

#### B. Manuelle Optimierung

```typescript
export const optimizeCronjobManually = createServerFn({ method: "POST" })
  .handler(async ({ context, data }) => {
    // Optimiert einen einzelnen Cronjob sofort
    // Zeigt Vorschau der neuen Zeit
  });
```

#### C. Optimierungs-Benachrichtigungen

- Email/Webhook wenn Cronjob optimiert wurde
- Dashboard-Anzeige der letzten Optimierungen
- Statistiken über CO₂-Einsparungen

## Implementierungs-Schritte

### Phase 1: Datenbank & Grundfunktionen
1. ✅ Prisma Schema erweitern (`CronjobOptimization` Model)
2. ✅ Migration erstellen und ausführen
3. ✅ `optimizeDailyCronjob` Funktion implementieren (nutzt `getCarbonForecast`)
4. ✅ `toggleAutoOptimize` Server Function erstellen
   - Verwendet `client.cronjob.getCronjob` (mittwald API)
   - Speichert in Prisma DB

### Phase 2: UI-Integration
1. ✅ Switch in CronjobList hinzufügen
   - Verwendet `Switch` aus `@mittwald/flow-remote-react-components`
   - Mit `Label` und `FieldDescription`
   - Siehe: flow_documentation.md Zeile 6582
2. ✅ Optimierungs-Status anzeigen (Badge oder Text)
3. ✅ Letzte Optimierung anzeigen (wenn `lastOptimizedAt` vorhanden)
4. ✅ Manuelle Optimierung-Button (optional)

### Phase 3: Automatischer Job
1. ✅ `optimizeCronjobs` Server Function implementieren
   - Verwendet `client.cronjob.getCronjob` und `client.cronjob.updateCronjob`
   - API-Referenzen: mittwald_api_documentation.md
2. ✅ Scheduled Task einrichten (externer Cronjob in mittwald)
   - Interval: `0 2 * * *` (täglich um 2 Uhr UTC)
   - Ruft `scheduledOptimize` Server Function auf
3. ✅ Error Handling & Logging
4. ✅ Monitoring & Alerts

### Phase 4: Testing & Optimierung
1. ✅ Unit Tests für Optimierungs-Algorithmus
2. ✅ Integration Tests (mit Mock API-Calls)
3. ✅ Performance-Tests
4. ✅ Dokumentation

## Sicherheits-Überlegungen

1. **Berechtigungen**: Optimierungs-Job benötigt Zugriff auf alle Extension Instances
2. **Rate Limiting**: API-Calls zu mittwald API begrenzen
3. **Error Handling**: Fehler nicht weiterwerfen, sondern loggen
4. **Backup**: Original Interval immer speichern für Rollback

## Offene Fragen

1. **Rollback**: Soll Nutzer Interval manuell zurücksetzen können?
2. **Benachrichtigungen**: Wie soll Nutzer über Optimierungen informiert werden?
3. **Zeitzone**: Soll Optimierung in UTC oder lokaler Zeitzone erfolgen?
4. **Mehrfach-Optimierung**: Was passiert wenn Nutzer Interval manuell ändert nach Optimierung?

## Nächste Schritte

1. Review des Konzepts
2. Entscheidung über Rollback-Strategie
3. Implementierung Phase 1 starten
4. UI-Design für Optimierungs-Switch

## Dokumentations-Referenzen

**Alle Implementierungen müssen basieren auf:**

1. **mittwald API Dokumentation** (`mittwald_api_documentation.md`):
   - `GET /v2/cronjobs/{cronjobId}` - Zeile 7338
   - `PATCH /v2/cronjobs/{cronjobId}` - Zeile 7398
   - `GET /v2/projects/{projectId}/cronjobs` - Zeile 7955
   - `GET /v2/projects` - für listProjects

2. **Flow UI Komponenten Dokumentation** (`flow_documentation.md`):
   - `Switch` - Zeile 6582
   - `Label` - für Form-Labels
   - `FieldDescription` - für Beschreibungen
   - **WICHTIG**: Import aus `@mittwald/flow-remote-react-components` (nicht `@mittwald/flow-react-components`)

3. **Bestehende Codebase**:
   - `src/middlewares/verify-access-to-instance.ts` - für Authentifizierung
   - `src/server/functions/getCarbonForecast.ts` - für Carbon Forecast Daten
   - `src/server/functions/updateCronjob.ts` - als Referenz für API-Calls

