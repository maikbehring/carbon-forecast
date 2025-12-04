# Extension Verifizierung und Veröffentlichung

Diese Anleitung zeigt, wie Sie die Extension zur Verifizierung einreichen und veröffentlichen können.

## ⚠️ WICHTIG: Contributor-Verifizierung zuerst!

**Bevor Sie eine Extension verifizieren können, muss Ihr Contributor-Account verifiziert werden.**

### Voraussetzungen für Contributor-Verifizierung:

1. ✅ **Impressum** muss im Contributor-Profil hinterlegt sein
2. ✅ **Supportdaten** müssen im Contributor-Profil hinterlegt sein
3. ✅ **Access Token** mit Contributor-Berechtigungen
4. ✅ **Contributor ID** (kann über die API abgerufen werden)

### Contributor-Verifizierung beantragen

**Option 1: Mit Script (empfohlen)**
```bash
./scripts/request-contributor-verification.sh
```

**Option 2: Mit curl**
```bash
curl -X POST \
  "https://api.mittwald.de/v2/contributors/{contributorId}/verification-process/" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

**Dokumentation:** https://developer.mittwald.de/docs/v2/reference/marketplace/contributor-request-verification/

Nach erfolgreicher Contributor-Verifizierung (durch Basti) können Sie Extensions verifizieren lassen.

---

## Extension-Verifizierung

### Voraussetzungen

1. ✅ **Contributor muss verifiziert sein** (siehe oben)
2. **Access Token**: Sie benötigen ein gültiges Access Token für die mittwald API
3. **Contributor ID**: Ihre Contributor-ID (kann über die API abgerufen werden)
4. **Extension ID**: Die ID Ihrer Extension (aus `EXTENSION_ID` Environment Variable)

## Access Token abrufen

Das Access Token können Sie über die mittwald API abrufen. Sie benötigen dafür Ihre API-Credentials.

## Contributor ID ermitteln

```bash
curl -X GET "https://api.mittwald.de/v2/user/me" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

Die `id` aus der Antwort ist Ihre `contributorId`.

## 1. Extension-Verifizierung beantragen

**WICHTIG:** Dieser Schritt funktioniert nur, wenn Ihr Contributor bereits verifiziert ist!

**Option 1: Mit Script (empfohlen)**
```bash
./scripts/request-verification.sh
```

**Option 2: Mit curl**
```bash
curl -X POST \
  "https://api.mittwald.de/v2/contributors/{contributorId}/extensions/{extensionId}/verification-process/" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

**Ersetzen Sie:**
- `{contributorId}` mit Ihrer Contributor-ID
- `{extensionId}` mit Ihrer Extension-ID
- `YOUR_ACCESS_TOKEN` mit Ihrem Access Token

**Antwort:**
- Status 200: Verifizierung erfolgreich eingereicht
- Status 412: Contributor muss zuerst verifiziert werden
- Die Prüfung dauert 3-5 Werktage

## 2. Extension veröffentlichen

**Wichtig:** Dieser Schritt kann nur nach erfolgreicher Verifizierung durchgeführt werden.

```bash
curl -X PUT \
  "https://api.mittwald.de/v2/contributors/{contributorId}/extensions/{extensionId}/published/" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

**Ersetzen Sie:**
- `{contributorId}` mit Ihrer Contributor-ID
- `{extensionId}` mit Ihrer Extension-ID
- `YOUR_ACCESS_TOKEN` mit Ihrem Access Token

**Antwort:**
- Status 200: Extension erfolgreich veröffentlicht
- Die Extension ist jetzt für alle mStudio-Nutzer verfügbar

## Verfügbare Scripts

### Contributor-Verifizierung
```bash
./scripts/request-contributor-verification.sh
```
Beantragt die Verifizierung Ihres Contributor-Accounts. **Muss zuerst durchgeführt werden!**

### Extension-Verifizierung
```bash
./scripts/request-verification.sh
```
Beantragt die Verifizierung Ihrer Extension. Funktioniert nur nach erfolgreicher Contributor-Verifizierung.

## Beispiel-Script (manuell)

Falls Sie die Scripts nicht verwenden möchten:

```bash
#!/bin/bash

# Konfiguration
CONTRIBUTOR_ID="your-contributor-id"
EXTENSION_ID="your-extension-id"
ACCESS_TOKEN="your-access-token"
API_BASE="https://api.mittwald.de/v2"

# 1. Contributor-Verifizierung (nur einmal nötig)
echo "Beantrage Contributor-Verifizierung..."
curl -X POST \
  "${API_BASE}/contributors/${CONTRIBUTOR_ID}/verification-process/" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json"

echo -e "\n\n"

# 2. Extension-Verifizierung (nach Contributor-Verifizierung)
echo "Beantrage Extension-Verifizierung..."
curl -X POST \
  "${API_BASE}/contributors/${CONTRIBUTOR_ID}/extensions/${EXTENSION_ID}/verification-process/" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json"

echo -e "\n\n"

# 3. Extension veröffentlichen (nur nach Verifizierung!)
# echo "Veröffentliche Extension..."
# curl -X PUT \
#   "${API_BASE}/contributors/${CONTRIBUTOR_ID}/extensions/${EXTENSION_ID}/published/" \
#   -H "Authorization: Bearer ${ACCESS_TOKEN}" \
#   -H "Content-Type: application/json"
```

## Alternative: Postman oder ähnliche Tools

Sie können die API-Aufrufe auch über Postman, Insomnia oder ähnliche Tools durchführen:

1. **Verifizierung:**
   - Method: `POST`
   - URL: `https://api.mittwald.de/v2/contributors/{contributorId}/extensions/{extensionId}/verification-process/`
   - Headers:
     - `Authorization: Bearer YOUR_ACCESS_TOKEN`
     - `Content-Type: application/json`

2. **Veröffentlichung:**
   - Method: `PUT`
   - URL: `https://api.mittwald.de/v2/contributors/{contributorId}/extensions/{extensionId}/published/`
   - Headers:
     - `Authorization: Bearer YOUR_ACCESS_TOKEN`
     - `Content-Type: application/json`

## Weitere Informationen

- API-Dokumentation: https://developer.mittwald.de/docs/v2/
- Extension-Verwaltung: https://developer.mittwald.de/docs/v2/contribution/


