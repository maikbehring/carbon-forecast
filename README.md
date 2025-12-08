# Help Documentation Repository

Eine Sammlung wiederverwendbarer Dokumentationen, Guides und Best Practices für verschiedene Projekte.

## 📚 Inhaltsverzeichnis

- [Übersicht](#übersicht)
- [Verfügbare Dokumentationen](#verfügbare-dokumentationen)
- [Installation & Verwendung](#installation--verwendung)
- [Kategorien](#kategorien)
- [Beitragen](#beitragen)

## Übersicht

Dieses Repository enthält praktische Dokumentationen, die aus realen Projekten entstanden sind und für andere Projekte wiederverwendet werden können. Alle Guides basieren auf tatsächlichen Problemen und deren Lösungen.

## Verfügbare Dokumentationen

### 🚀 Deployment & Infrastructure

#### [DEPLOYMENT.md](./DEPLOYMENT.md)
**Render.com Deployment Guide**

Vollständige Anleitung zum Deployment von Node.js-Anwendungen auf Render.com:
- Blueprint-Konfiguration mit `render.yaml`
- Environment Variables Setup
- Datenbank-Konfiguration (PostgreSQL)
- Custom Domain Setup
- Troubleshooting

**Verwendung:** Für alle Projekte, die auf Render.com deployed werden sollen.

---

#### [RENDER_PORT_GUIDE.md](./RENDER_PORT_GUIDE.md)
**Render.com Port-Konfiguration Guide**

Lösung für häufige Port-Probleme bei Render.com-Deployments:
- Port-Konfiguration mit `fromService`
- Framework-spezifische Beispiele (Express, Fastify, Vite, TanStack Start)
- Häufige Fehler und Lösungen
- Troubleshooting-Checkliste

**Verwendung:** Wenn deine App auf Render.com nicht startet oder Port-Fehler auftreten.

---

### 🔧 Framework & Migration

#### [TANSTACK_START_MIGRATION.md](./TANSTACK_START_MIGRATION.md)
**TanStack Start v1.139 Migration Guide**

Detaillierte Anleitung für die Migration von TanStack Start v1.131 auf v1.139:
- Breaking Changes
- Client Entry Point Änderungen
- Server Function Updates
- Middleware Migration
- Code-Beispiele für alle Änderungen

**Verwendung:** Beim Upgrade von TanStack Start auf neuere Versionen.

---

#### [POST_REQUEST_FIX.md](./POST_REQUEST_FIX.md)
**POST Request Body Handling - Lösung**

Lösung für POST-Request-Probleme nach TanStack Start Migration:
- Problembeschreibung
- Root Cause Analyse
- HTTP Server Wrapper (`server.mjs`)
- Request Body Handling
- Data Wrapping

**Verwendung:** Wenn POST-Requests nach TanStack Start Migration nicht funktionieren.

---

#### [DEVELOPER.md](./DEVELOPER.md)
**Developer Documentation: TanStack Start POST + Middleware + Body Bug**

Detaillierte Dokumentation eines spezifischen Bugs:
- Problembeschreibung
- Root Cause Analyse
- Workarounds
- Best Practices

**Verwendung:** Für Entwickler, die mit TanStack Start Middleware und POST-Requests arbeiten.

---

### 🔒 Security

#### [SECURITY_AUDIT.md](./SECURITY_AUDIT.md)
**Security Audit Report**

Umfassender Security Audit mit gefundenen Problemen und Lösungen:
- Kritische Sicherheitsprobleme
- Path Traversal Schutz
- Input Validation
- Best Practices
- Code-Beispiele

**Verwendung:** Als Checkliste für Security Reviews und zur Implementierung von Sicherheitsmaßnahmen.

---

### 🛠️ Development Tools

#### [CURSOR_GUIDE.md](./CURSOR_GUIDE.md)
**Cursor IDE Konfiguration**

Anleitung zur optimalen Nutzung von Cursor IDE:
- Workspace-Konfiguration
- AI Agent Setup
- Best Practices
- Tipps & Tricks

**Verwendung:** Für alle Entwickler, die Cursor IDE verwenden.

---

#### [AGENTS.md](./AGENTS.md)
**AI Agent Konfiguration**

Konfiguration und Best Practices für AI Agents:
- Agent-Setup
- Prompt Engineering
- Kontext-Management
- Workflow-Optimierung

**Verwendung:** Für die Konfiguration von AI-basierten Entwicklungstools.

---

## Installation & Verwendung

### Als separates Verzeichnis klonen

```bash
git clone https://github.com/maikbehring/help.git docs/help
```

### Als Git Submodule (empfohlen)

```bash
# Submodule hinzufügen
git submodule add https://github.com/maikbehring/help.git docs/help

# Initialisieren (nach dem Klonen eines Repos mit Submodule)
git submodule update --init --recursive
```

### Aktualisieren

```bash
cd docs/help
git pull origin main
```

Oder für Submodules:

```bash
git submodule update --remote docs/help
```

### Verlinken in deinem Projekt

Du kannst die Dokumentationen direkt verlinken oder kopieren:

```markdown
<!-- In deinem README.md -->
Siehe [Deployment Guide](../docs/help/DEPLOYMENT.md) für Details.
```

## Kategorien

### 🚀 Deployment & Infrastructure
- `DEPLOYMENT.md` - Render.com Deployment
- `RENDER_PORT_GUIDE.md` - Port-Konfiguration

### 🔧 Framework & Migration
- `TANSTACK_START_MIGRATION.md` - TanStack Start Migration
- `POST_REQUEST_FIX.md` - POST Request Fixes
- `DEVELOPER.md` - Developer Documentation

### 🔒 Security
- `SECURITY_AUDIT.md` - Security Best Practices

### 🛠️ Development Tools
- `CURSOR_GUIDE.md` - Cursor IDE Guide
- `AGENTS.md` - AI Agent Configuration

## Beitragen

Wenn du neue Dokumentationen hinzufügen möchtest:

1. Forke dieses Repository
2. Erstelle einen neuen Branch
3. Füge deine Dokumentation hinzu
4. Erstelle einen Pull Request

**Richtlinien:**
- Dokumentationen sollten wiederverwendbar sein
- Code-Beispiele sollten vollständig und funktionsfähig sein
- Erkläre das Problem und die Lösung klar
- Füge Troubleshooting-Sektionen hinzu, wenn relevant

## Lizenz

Diese Dokumentationen stehen unter der MIT-Lizenz zur Verfügung. Du kannst sie frei in deinen Projekten verwenden.

## Support

Bei Fragen oder Problemen:
- Öffne ein Issue in diesem Repository
- Kontaktiere den Maintainer

---

**Letzte Aktualisierung:** Dezember 2024
