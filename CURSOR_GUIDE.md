# Hetzner Cloud API Dokumentation - Cursor Anleitung

Diese Anleitung erklärt, wie du die Hetzner Cloud API-Dokumentation am besten in Cursor verwendest.

## 📁 Dateistruktur

Die Dokumentation wurde in folgende Struktur heruntergeladen:

```
hetzner_api_docs/
├── HETZNER_CLOUD_API_COMPLETE.md  # Komplette Dokumentation in einer Datei
├── INDEX.md                        # Übersicht aller Dateien
├── index.md                        # Hauptübersicht
├── servers.md                      # Server-API
├── networks.md                     # Netzwerk-API
├── load-balancers.md               # Load Balancer API
├── volumes.md                      # Volume API
├── certificates.md                 # Certificate API
├── ssh-keys.md                     # SSH Keys API
├── firewalls.md                    # Firewall API
├── floating-ips.md                 # Floating IPs API
├── primary-ips.md                  # Primary IPs API
├── placement-groups.md             # Placement Groups API
├── zones.md                        # DNS Zones API
├── [endpoint-name].md              # Einzelne API-Endpunkte
└── download.log                    # Download-Log
```

## 🎯 Best Practices für Cursor

### 1. **Verwende die kombinierte Datei für allgemeine Fragen**

Für allgemeine Fragen über die Hetzner Cloud API verwende die Datei `HETZNER_CLOUD_API_COMPLETE.md`:

```
@HETZNER_CLOUD_API_COMPLETE.md Wie erstelle ich einen Server?
```

**Vorteile:**
- Enthält die komplette Dokumentation
- Cursor kann den gesamten Kontext sehen
- Ideal für komplexe Fragen, die mehrere Endpunkte betreffen

### 2. **Verwende spezifische Dateien für gezielte Fragen**

Für Fragen zu einem bestimmten Thema verwende die entsprechende Datei:

```
@servers.md Wie liste ich alle Server auf?
@networks.md Wie erstelle ich ein privates Netzwerk?
@load-balancers.md Wie konfiguriere ich einen Load Balancer?
```

**Vorteile:**
- Schneller, da weniger Text zu durchsuchen
- Fokussierter Kontext
- Weniger Token-Verbrauch

### 3. **Verwende mehrere Dateien für komplexe Workflows**

Für komplexe Aufgaben, die mehrere APIs betreffen:

```
@servers.md @networks.md @firewalls.md 
Erstelle ein Script, das einen Server mit privatem Netzwerk und Firewall-Regeln erstellt.
```

### 4. **Suche nach spezifischen Endpunkten**

Wenn du einen bestimmten API-Endpunkt suchst, verwende die Datei mit dem Endpunkt-Namen:

```
@server-actions-create-a-server.md Zeige mir ein Beispiel für die Server-Erstellung
@load-balancer-actions-add-service.md Wie füge ich einen Service zu einem Load Balancer hinzu?
```

## 💡 Praktische Beispiele

### Beispiel 1: Server erstellen

```
@servers.md @server-actions-create-a-server.md
Erstelle ein Python-Script, das einen neuen Hetzner Cloud Server erstellt.
Verwende die API-Dokumentation als Referenz.
```

### Beispiel 2: Netzwerk-Konfiguration

```
@networks.md @network-actions-add-a-subnet-to-a-network.md
Erkläre mir, wie ich ein privates Netzwerk mit Subnetzen konfiguriere.
```

### Beispiel 3: Load Balancer Setup

```
@load-balancers.md @load-balancer-actions-add-service.md @load-balancer-actions-add-target.md
Erstelle eine vollständige Load Balancer-Konfiguration mit Services und Targets.
```

### Beispiel 4: Firewall-Regeln

```
@firewalls.md @firewall-actions-set-rules.md
Zeige mir, wie ich Firewall-Regeln für einen Server konfiguriere.
```

## 🔍 Tipps für effektive Suche

### 1. **Verwende den INDEX.md**

Wenn du nicht weißt, welche Datei du brauchst:

```
@INDEX.md Welche Dateien gibt es für Server-Operationen?
```

### 2. **Suche nach Schlüsselwörtern**

Cursor kann auch innerhalb der Dateien suchen:

```
@HETZNER_CLOUD_API_COMPLETE.md Suche nach "authentication" oder "API token"
```

### 3. **Kombiniere mit Code-Beispielen**

```
@servers.md 
Erstelle ein Beispiel-Script basierend auf dieser Dokumentation.
Verwende Python mit der requests-Bibliothek.
```

## 📝 Code-Generierung mit der Dokumentation

### Beispiel: Vollständiges Script erstellen

```
@HETZNER_CLOUD_API_COMPLETE.md
Erstelle ein vollständiges Python-Script, das:
1. Einen Server erstellt
2. Ein privates Netzwerk erstellt
3. Den Server mit dem Netzwerk verbindet
4. Eine Firewall erstellt und auf den Server anwendet

Verwende die API-Dokumentation als Referenz für alle Endpunkte.
```

### Beispiel: API-Client erstellen

```
@HETZNER_CLOUD_API_COMPLETE.md
Erstelle eine Python-Klasse "HetznerCloudClient", die die wichtigsten 
API-Operationen kapselt. Verwende die Dokumentation für die korrekten 
Endpunkte, Parameter und Response-Strukturen.
```

## 🎨 Strukturierte Anfragen

### Für bessere Ergebnisse strukturiere deine Anfragen:

**❌ Schlecht:**
```
Wie erstelle ich einen Server?
```

**✅ Gut:**
```
@servers.md @server-actions-create-a-server.md
Erstelle ein Python-Script, das einen Hetzner Cloud Server erstellt.
Berücksichtige:
- Server-Typ: cx11
- Image: ubuntu-22.04
- Location: nbg1
- SSH Keys: Verwende vorhandene Keys
- Netzwerk: Optional privates Netzwerk
```

## 🔧 Troubleshooting

### Problem: Cursor findet bestimmte Informationen nicht

**Lösung:** Verwende spezifischere Dateien oder mehrere Dateien:

```
@HETZNER_CLOUD_API_COMPLETE.md @servers.md
Suche nach Informationen über Server-Metriken und Monitoring.
```

### Problem: Zu viele Ergebnisse

**Lösung:** Verwende spezifische Dateien statt der kompletten Dokumentation:

```
@server-actions-get-metrics-for-a-server.md
Wie hole ich Server-Metriken?
```

### Problem: Code-Beispiele fehlen

**Lösung:** Bitte explizit um Code-Beispiele:

```
@servers.md
Zeige mir ein vollständiges Python-Beispiel für die Server-Erstellung 
mit Fehlerbehandlung und allen notwendigen Parametern.
```

## 📚 Empfohlene Workflows

### Workflow 1: Neue API-Funktion implementieren

1. **Suche nach der relevanten Datei:**
   ```
   @INDEX.md Welche Dateien gibt es für [Thema]?
   ```

2. **Lese die Dokumentation:**
   ```
   @[relevant-file].md Erkläre mir die API-Endpunkte für [Funktion]
   ```

3. **Erstelle den Code:**
   ```
   @[relevant-file].md Erstelle ein Python-Script basierend auf dieser Dokumentation
   ```

### Workflow 2: Komplexe Infrastruktur erstellen

1. **Plane die Infrastruktur:**
   ```
   @HETZNER_CLOUD_API_COMPLETE.md
   Welche API-Endpunkte brauche ich für:
   - Server mit privatem Netzwerk
   - Load Balancer
   - Firewall-Regeln
   ```

2. **Erstelle das Script:**
   ```
   @servers.md @networks.md @load-balancers.md @firewalls.md
   Erstelle ein vollständiges Infrastructure-as-Code Script
   ```

## 🚀 Erweiterte Nutzung

### Mit anderen Dokumentationen kombinieren

```
@HETZNER_CLOUD_API_COMPLETE.md @terraform-docs.md
Erstelle Terraform-Konfigurationen basierend auf der Hetzner API-Dokumentation.
```

### Für Code-Reviews

```
@servers.md
Reviewe diesen Code und stelle sicher, dass er der Hetzner API-Dokumentation entspricht:
[Code einfügen]
```

### Für Tests

```
@servers.md @server-actions-create-a-server.md
Erstelle Unit-Tests für diese Server-Erstellungs-Funktion.
```

## 📌 Quick Reference

| Aufgabe | Datei verwenden |
|---------|----------------|
| Allgemeine API-Fragen | `@HETZNER_CLOUD_API_COMPLETE.md` |
| Server-Operationen | `@servers.md` |
| Netzwerk-Konfiguration | `@networks.md` |
| Load Balancer | `@load-balancers.md` |
| Firewall-Regeln | `@firewalls.md` |
| Spezifischer Endpunkt | `@[endpoint-name].md` |
| Übersicht aller Dateien | `@INDEX.md` |

## 💻 Beispiel: Komplettes Setup-Script

```
@HETZNER_CLOUD_API_COMPLETE.md

Erstelle ein vollständiges Python-Script "hetzner_setup.py", das:

1. Authentifizierung mit API-Token
2. Server-Erstellung mit allen Optionen
3. Netzwerk-Erstellung und Verbindung
4. Firewall-Erstellung und Anwendung
5. Load Balancer-Erstellung und Konfiguration
6. Fehlerbehandlung und Logging
7. Cleanup-Funktionen

Verwende die API-Dokumentation für:
- Korrekte Endpunkte
- Request-Parameter
- Response-Strukturen
- Fehlercodes
```

## 🎓 Lern-Tipp

Verwende die Dokumentation zum Lernen:

```
@HETZNER_CLOUD_API_COMPLETE.md
Erkläre mir die Hetzner Cloud API-Architektur:
- Wie sind die Endpunkte strukturiert?
- Welche Authentifizierung wird verwendet?
- Wie funktioniert das Action-System?
- Welche Best Practices gibt es?
```

---

**Hinweis:** Diese Dokumentation wird regelmäßig aktualisiert. Führe `./start.sh` aus, um die neueste Version herunterzuladen.

