#!/bin/bash

# Script zum Beantragen der Extension-Verifizierung
# Verwendung: ./scripts/request-verification.sh

set -e

# Farben für Output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Extension-Verifizierung beantragen"
echo ""

# Prüfe ob .env Datei existiert
if [ ! -f .env ]; then
    echo -e "${RED}❌ .env Datei nicht gefunden${NC}"
    exit 1
fi

# Lade Environment-Variablen
source .env

# Prüfe notwendige Variablen
if [ -z "$EXTENSION_ID" ]; then
    echo -e "${RED}❌ EXTENSION_ID nicht gesetzt${NC}"
    exit 1
fi

# Versuche Contributor ID über API abzurufen, wenn nicht gesetzt
if [ -z "$CONTRIBUTOR_ID" ] && [ ! -z "$ACCESS_TOKEN" ]; then
    echo -e "${YELLOW}⚠️  CONTRIBUTOR_ID nicht gesetzt${NC}"
    echo "Versuche Contributor ID über API abzurufen..."
    
    USER_RESPONSE=$(curl -s -L -X GET "https://api.mittwald.de/v2/user/me" \
        -H "Authorization: Bearer $ACCESS_TOKEN")
    
    CONTRIBUTOR_ID=$(echo $USER_RESPONSE | grep -o '"id":"[^"]*' | cut -d'"' -f4)
    
    if [ ! -z "$CONTRIBUTOR_ID" ]; then
        echo -e "${GREEN}✅ Contributor ID abgerufen: $CONTRIBUTOR_ID${NC}"
    fi
fi

# Versuche Contributor ID aus Extensions-Liste zu ermitteln
if [ -z "$CONTRIBUTOR_ID" ] && [ ! -z "$ACCESS_TOKEN" ] && [ ! -z "$EXTENSION_ID" ]; then
    echo "Versuche Contributor ID über Extension-Details zu ermitteln..."
    
    # Versuche die Extension-Details abzurufen (könnte Contributor ID enthalten)
    EXT_RESPONSE=$(curl -s -L -X GET "https://api.mittwald.de/v2/extensions/$EXTENSION_ID" \
        -H "Authorization: Bearer $ACCESS_TOKEN" 2>/dev/null || echo "")
    
    if [ ! -z "$EXT_RESPONSE" ]; then
        CONTRIBUTOR_ID=$(echo $EXT_RESPONSE | grep -o '"contributorId":"[^"]*' | cut -d'"' -f4)
        if [ ! -z "$CONTRIBUTOR_ID" ]; then
            echo -e "${GREEN}✅ Contributor ID aus Extension-Details: $CONTRIBUTOR_ID${NC}"
        fi
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
echo "  Extension ID: $EXTENSION_ID"
echo "  Contributor ID: $CONTRIBUTOR_ID"
echo ""

# Sende Verifizierungsanfrage
echo "📤 Sende Verifizierungsanfrage..."
echo ""

# Folge Redirects automatisch mit -L Flag
RESPONSE=$(curl -s -w "\n%{http_code}" -L -X POST \
    "https://api.mittwald.de/v2/contributors/$CONTRIBUTOR_ID/extensions/$EXTENSION_ID/verification-process/" \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    -H "Content-Type: application/json")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

echo "HTTP Status: $HTTP_CODE"
echo ""

if [ "$HTTP_CODE" -eq 200 ] || [ "$HTTP_CODE" -eq 201 ] || [ "$HTTP_CODE" -eq 204 ]; then
    echo -e "${GREEN}✅ Verifizierungsanfrage erfolgreich eingereicht!${NC}"
    echo ""
    echo "Die Prüfung dauert in der Regel 3-5 Werktage."
    echo ""
    if [ ! -z "$BODY" ]; then
        echo "Response:"
        echo "$BODY" | jq '.' 2>/dev/null || echo "$BODY"
    fi
else
    echo -e "${RED}❌ Fehler bei der Verifizierungsanfrage${NC}"
    echo ""
    echo "Response:"
    echo "$BODY" | jq '.' 2>/dev/null || echo "$BODY"
    exit 1
fi

