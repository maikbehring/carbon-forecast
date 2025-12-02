# Carbon Forecast Extension für mittwald

Eine mittwald Extension zur Visualisierung der CO₂-Intensität des deutschen Stromnetzes. Diese Extension hilft Agenturen und Webentwicklern dabei, energieintensive Workloads zu Zeiten mit niedriger CO₂-Intensität auszuführen, um den ökologischen Fußabdruck zu reduzieren.

## Features

- 📊 **Interaktive Visualisierung**: CartesianChart mit grünem Flächendiagramm zur Darstellung der CO₂-Intensität über Zeit
- ⏰ **24-Stunden-Vorhersage**: Zeigt die prognostizierte CO₂-Intensität für die nächsten 24 Stunden
- 🔄 **Automatische Aktualisierung**: Daten werden alle 15 Minuten aktualisiert
- 💡 **Tooltip-Informationen**: Detaillierte Werte beim Hovern über Datenpunkte
- 📱 **Responsive Design**: Optimiert für die Darstellung im mittwald Studio
- 🔒 **Sicher**: Server-seitige API-Calls mit Authentifizierung und Validierung

## Datenquelle

Die CO₂-Prognosedaten basieren auf öffentlich verfügbaren Energiedaten des Fraunhofer ISE (Energy Charts) und der ENTSO-E Transparenzplattform. Das Projekt „Carbon Aware Computing" bereitet diese Daten auf und stellt sie als frei nutzbare Forecasts bereit.

**API-Endpunkt**: `https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json`

## Getting Started

### Prerequisites

- Node.js v20.11.1 or higher
- pnpm v10.4.1 or higher
- PostgreSQL database (non-pooling connection)

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up your environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

3. Generate Prisma client and run migrations:
   ```bash
   pnpm db:generate
   pnpm db:migrate:deploy
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

Your extension will be available at `http://localhost:10000`

## Verwendung

Die Extension zeigt ein Diagramm mit der CO₂-Intensität des deutschen Stromnetzes für die nächsten 24 Stunden. Die Werte werden in g CO₂/kWh angezeigt:

- **Grüne Bereiche**: Niedrige CO₂-Intensität (< 200 g CO₂/kWh) - optimal für energieintensive Workloads
- **Orange Bereiche**: Mittlere CO₂-Intensität (200-300 g CO₂/kWh)
- **Rote Bereiche**: Hohe CO₂-Intensität (> 300 g CO₂/kWh)

### Empfehlung

Planen Sie energieintensive Workloads für Zeitfenster mit niedriger CO₂-Intensität, um den ökologischen Fußabdruck Ihrer Anwendungen zu reduzieren.

## Project Structure

```
src/
├── components/              # React components
│   ├── CarbonForecast.tsx  # Hauptkomponente für die Visualisierung
│   ├── ErrorMessage.tsx    # Fehleranzeige
│   └── Loader.tsx          # Ladeanzeige
├── middlewares/            # TanStack middleware
│   └── verify-access-to-instance.ts  # Authentifizierung
├── routes/                 # TanStack Router routes
│   ├── api/               # API endpoints
│   │   └── webhooks.mittwald.ts  # Webhook-Handler
│   ├── index.tsx          # Hauptroute
│   └── __root.tsx         # Root layout
├── server/                 # Server functions
│   └── functions/
│       └── getCarbonForecast.ts  # API-Call für Carbon Forecast
├── client.tsx             # Client entry point
├── db.ts                  # Prisma client configuration
├── env.ts                 # Environment validation
├── global-middleware.ts   # Global middleware
└── router.tsx             # Router configuration
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Run Biome checks
- `pnpm lint` - Lint code
- `pnpm format` - Format code
- `pnpm test` - Run tests
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:migrate:dev` - Run migrations in development
- `pnpm db:migrate:deploy` - Deploy migrations
- `pnpm db:studio` - Open Prisma Studio

## Extension Setup

### For Contributors

1. **Configure Webhooks**: Set your webhook URL in mStudio Contributor UI
2. **Set Scopes**: Configure required scopes and extension context
3. **Configure Anchors**: Point anchors to `http://localhost:5173`
4. **Install Extension**: Perform first installation via API
5. **Start Development**: Run `pnpm dev` and open your extension

### Documentation

- [mittwald API Documentation](https://api.mittwald.de/v2/docs/)
- [Extension Development Guide](https://developer.mittwald.de/docs/v2/contribution/)
- [Frontend Fragment Anchors](https://developer.mittwald.de/de/docs/v2/contribution/reference/frontend-fragment-anchors/)

## Technology Stack

- **Framework**: TanStack Start (React-based full-stack framework)
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: mittwald Flow Remote React Components
  - CartesianChart für Datenvisualisierung
  - Flow Components (Content, Heading, Text, Button, etc.)
- **Data Visualization**: mittwald Flow CartesianChart mit Area-Chart
- **Data Validation**: Zod für Schema-Validierung
- **Authentication**: mittwald Extension Bridge
- **Webhooks**: mitthooks library
- **Code Quality**: Biome (linting & formatting)
- **Testing**: Vitest

## Sicherheit

Die Extension implementiert mehrere Sicherheitsmaßnahmen:

- ✅ Input-Validierung mit Zod
- ✅ Environment-Variablen-Validierung
- ✅ Session-Token-Verifizierung
- ✅ Timeout für externe API-Calls (10 Sekunden)
- ✅ Generische Fehlermeldungen (keine internen Details)
- ✅ XSS-Schutz durch React

Siehe [SECURITY.md](./SECURITY.md) für Details.

## Entwicklung

### Lokale Entwicklung

1. Repository klonen:
   ```bash
   git clone https://github.com/maikbehring/carbon-forecast.git
   cd carbon-forecast
   ```

2. Dependencies installieren:
   ```bash
   pnpm install
   ```

3. Environment-Variablen konfigurieren (siehe `.env.example`)

4. Development-Server starten:
   ```bash
   pnpm dev
   ```

### Build für Production

```bash
pnpm build
pnpm start
```

## Deployment auf Render.com

### Option 1: Automatisches Deployment mit render.yaml

1. **Service-Typ wählen**: **Web Service** (nicht Static Site!)
2. **Repository verbinden**: GitHub-Repository verbinden
3. **render.yaml verwenden**: Render erkennt automatisch die `render.yaml` Datei

### Option 2: Manuelle Konfiguration

Wenn Sie manuell konfigurieren möchten:

1. **Service-Typ**: Wählen Sie **"Web Service"** (nicht Static Site!)
2. **Environment**: **Node**
3. **Build Command**: 
   ```bash
   pnpm install && pnpm db:generate && pnpm build
   ```
4. **Start Command**: 
   ```bash
   pnpm start
   ```
5. **Environment Variables** hinzufügen (wichtig - müssen manuell gesetzt werden):
   - `NODE_ENV=production`
   - `HOST=0.0.0.0` (damit der Server auf IPv4 läuft)
   - `DATABASE_URL` (wird automatisch von Render gesetzt, wenn die Datenbank erstellt wurde)
   - `EXTENSION_ID` (Ihre Extension ID von mittwald)
   - `EXTENSION_SECRET` (Ihr Extension Secret von mittwald)
   - `PRISMA_FIELD_ENCRYPTION_KEY` (muss manuell gesetzt werden - generieren Sie einen zufälligen String)

6. **PostgreSQL-Datenbank**:
   - Die Datenbank wird automatisch durch `render.yaml` erstellt
   - Nach dem ersten Deployment müssen Sie die Migrationen ausführen:
     - Gehen Sie zu Ihrem Render-Service
     - Öffnen Sie die Shell/Console
     - Führen Sie aus: `pnpm db:migrate:deploy`

**Wichtig**: Die Environment-Variablen `EXTENSION_ID`, `EXTENSION_SECRET` und `PRISMA_FIELD_ENCRYPTION_KEY` müssen Sie manuell in Render.com setzen, da sie nicht automatisch generiert werden können.

### Wichtige Hinweise

- ⚠️ **Nicht "Static Site" wählen** - die Extension benötigt einen Node.js-Server
- ✅ **"Web Service" wählen** - für Node.js-Anwendungen mit Server-Funktionen
- 🔒 Stellen Sie sicher, dass alle Environment-Variablen gesetzt sind
- 📦 Render unterstützt pnpm automatisch über die `packageManager` Angabe in `package.json`

## Lizenz

Dieses Projekt wurde mit mittvibes CLI von mittwald generiert.

## Links

- [GitHub Repository](https://github.com/maikbehring/carbon-forecast)
- [mittwald API Dokumentation](https://api.mittwald.de/v2/docs/)
- [Extension Development Guide](https://developer.mittwald.de/docs/v2/contribution/)
- [Carbon Aware Computing](https://github.com/Green-Software-Foundation/carbon-aware-sdk)