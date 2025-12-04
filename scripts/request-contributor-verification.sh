#!/bin/bash

# Script zum Beantragen der Contributor-Verifizierung
# Verwendung: ./scripts/request-contributor-verification.sh
#
# WICHTIG: Voraussetzungen vor dem Ausführen:
# 1. Impressum muss im Contributor hinterlegt sein
# 2. Supportdaten müssen im Contributor hinterlegt sein
# 
# Siehe: https://developer.mittwald.de/docs/v2/reference/marketplace/contributor-request-verification/

set -e

# Farben für Output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Contributor-Verifizierung beantragen${NC}"
echo ""
echo -e "${YELLOW}⚠️  WICHTIG: Voraussetzungen prüfen!${NC}"
echo "Bevor Sie fortfahren, stellen Sie sicher, dass:"
echo "  1. ✅ Impressum im Contributor hinterlegt ist"
echo "  2. ✅ Supportdaten im Contributor hinterlegt sind"
echo ""
read -p "Sind alle Voraussetzungen erfüllt? (j/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[JjYy]$ ]]; then
    echo -e "${YELLOW}⚠️  Bitte erfüllen Sie zuerst die Voraussetzungen.${NC}"
    echo ""
    echo "Weitere Informationen:"
    echo "  https://developer.mittwald.de/docs/v2/reference/marketplace/contributor-request-verification/"
    exit 1
fi

# Prüfe ob .env Datei existiert
if [ ! -f .env ]; then
    echo -e "${RED}❌ .env Datei nicht gefunden${NC}"
    exit 1
fi

# Lade Environment-Variablen
source .env

# Versuche Contributor ID über API abzurufen, wenn nicht gesetzt
if [ -z "$CONTRIBUTOR_ID" ] && [ ! -z "$ACCESS_TOKEN" ]; then
    echo -e "${YELLOW}⚠️  CONTRIBUTOR_ID nicht gesetzt${NC}"
    echo "Versuche Contributor ID über API abzurufen..."
    
    USER_RESPONSE=$(curl -s -L -X GET "https://api.mittwald.de/v2/user/me" \
        -H "Authorization: Bearer $ACCESS_TOKEN")
    
    CONTRIBUTOR_ID=$(echo $USER_RESPONSE | jq -r '.id' 2>/dev/null || echo "")
    
    if [ ! -z "$CONTRIBUTOR_ID" ] && [ "$CONTRIBUTOR_ID" != "null" ]; then
        echo -e "${GREEN}✅ Contributor ID abgerufen: $CONTRIBUTOR_ID${NC}"
    fi
fi

if [ -z "$CONTRIBUTOR_ID" ]; then
    echo -e "${RED}❌ CONTRIBUTOR_ID konnte nicht ermittelt werden${NC}"
    echo ""
    echo "Bitte setzen Sie CONTRIBUTOR_ID in .env"
    echo "Sie finden diese in der mittwald API oder im mStudio."
    exit 1
fi

if [ -z "$ACCESS_TOKEN" ]; then
    echo -e "${RED}❌ ACCESS_TOKEN nicht gesetzt${NC}"
    echo ""
    echo "Bitte setzen Sie ACCESS_TOKEN in .env"
    echo "Sie können das Access Token über die mittwald API abrufen."
    exit 1
fi

echo ""
echo "📋 Konfiguration:"
echo "  Contributor ID: $CONTRIBUTOR_ID"
echo ""

# Prüfe Contributor-Details
echo "🔍 Prüfe Contributor-Details..."
CONTRIBUTOR_RESPONSE=$(curl -s -L -X GET \
    "https://api.mittwald.de/v2/contributors/$CONTRIBUTOR_ID" \
    -H "Authorization: Bearer $ACCESS_TOKEN")

HTTP_CODE=$(echo "$CONTRIBUTOR_RESPONSE" | grep -o '"statusCode":[0-9]*' | cut -d':' -f2 || echo "")

if [ ! -z "$HTTP_CODE" ] && [ "$HTTP_CODE" != "200" ]; then
    echo -e "${RED}❌ Fehler beim Abrufen der Contributor-Details${NC}"
    echo "$CONTRIBUTOR_RESPONSE" | jq '.' 2>/dev/null || echo "$CONTRIBUTOR_RESPONSE"
    exit 1
fi

echo -e "${GREEN}✅ Contributor-Details erfolgreich abgerufen${NC}"
echo ""

# Sende Verifizierungsanfrage
echo "📤 Sende Contributor-Verifizierungsanfrage..."
echo ""

RESPONSE=$(curl -s -w "\n%{http_code}" -L -X POST \
    "https://api.mittwald.de/v2/contributors/$CONTRIBUTOR_ID/verification-process/" \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    -H "Content-Type: application/json")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

echo "HTTP Status: $HTTP_CODE"
echo ""

if [ "$HTTP_CODE" -eq 200 ] || [ "$HTTP_CODE" -eq 201 ] || [ "$HTTP_CODE" -eq 204 ]; then
    echo -e "${GREEN}✅ Contributor-Verifizierungsanfrage erfolgreich eingereicht!${NC}"
    echo ""
    echo "Die Prüfung wird von Basti durchgeführt."
    echo "Nach erfolgreicher Verifizierung können Sie Extensions verifizieren lassen."
    echo ""
    if [ ! -z "$BODY" ]; then
        echo "Response:"
        echo "$BODY" | jq '.' 2>/dev/null || echo "$BODY"
    fi
else
    echo -e "${RED}❌ Fehler bei der Contributor-Verifizierungsanfrage${NC}"
    echo ""
    echo "Response:"
    echo "$BODY" | jq '.' 2>/dev/null || echo "$BODY"
    
    # Prüfe auf bekannte Fehler
    if echo "$BODY" | grep -q "impressum\|Impressum" 2>/dev/null; then
        echo ""
        echo -e "${YELLOW}💡 Hinweis: Impressum fehlt möglicherweise im Contributor-Profil.${NC}"
    fi
    
    if echo "$BODY" | grep -q "support\|Support" 2>/dev/null; then
        echo ""
        echo -e "${YELLOW}💡 Hinweis: Supportdaten fehlen möglicherweise im Contributor-Profil.${NC}"
    fi
    
    exit 1
fi

