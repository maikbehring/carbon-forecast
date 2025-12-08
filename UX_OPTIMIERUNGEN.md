# UX-Optimierungsvorschläge für Carbon Forecast Extension

Basierend auf der Flow-Dokumentation wurden folgende Verbesserungen identifiziert:

## 🎯 Priorisierte Verbesserungen

### 1. **Header-Layout mit Flex optimieren** ⭐⭐⭐
**Problem:** Titel und Refresh-Button sind nicht optimal angeordnet.

**Lösung:** Verwende `Flex` für horizontale Anordnung mit `justify="space-between"`.

```typescript
import { Flex } from "@mittwald/flow-remote-react-components";

<Section>
  <Flex justify="space-between" align="center">
    <Heading level={1}>Carbon Forecast Deutschland</Heading>
    {onRefresh && (
      <Button onPress={onRefresh} isDisabled={isRefreshing}>
        {isRefreshing ? "Wird aktualisiert..." : "Aktualisieren"}
      </Button>
    )}
  </Flex>
</Section>
```

### 2. **Accordion für Erklärung verwenden** ⭐⭐⭐
**Problem:** Die "Erklärung der Werte" nimmt viel Platz ein und ist standardmäßig sichtbar.

**Lösung:** Verwende `Accordion` mit `defaultExpanded={false}`, um Platz zu sparen.

```typescript
import { Accordion } from "@mittwald/flow-remote-react-components";

<Accordion variant="outline">
  <Heading level={3}>Erklärung der Werte</Heading>
  <Content>
    <Text>
      <strong>CO₂-Intensität (g CO₂/kWh):</strong> Die geschätzte
      Emissionsintensität des Stroms...
    </Text>
    {/* weitere Erklärungen */}
  </Content>
</Accordion>
```

### 3. **AccentBox für Quellenangabe** ⭐⭐
**Problem:** Die Quellenangabe mit Sternchen ist nicht visuell hervorgehoben.

**Lösung:** Verwende `AccentBox` mit `color="green"` für die Quellenangabe.

```typescript
import { AccentBox } from "@mittwald/flow-remote-react-components";

<AccentBox color="green">
  <Section>
    <Text>
      Die CO₂-Prognosedaten basieren auf öffentlich verfügbaren Energiedaten
      des Fraunhofer ISE (Energy Charts) und der ENTSO-E
      Transparenzplattform...
    </Text>
  </Section>
</AccentBox>
```

### 4. **BigNumber für wichtige Metriken** ⭐⭐⭐
**Problem:** Wichtige Kennzahlen (aktueller Wert, Minimum, Durchschnitt) sind nicht prominent dargestellt.

**Lösung:** Verwende `BigNumber` für aktuelle CO₂-Intensität, Minimum und Durchschnitt.

```typescript
import { BigNumber, Flex } from "@mittwald/flow-remote-react-components";

// Berechne Metriken
const currentRating = futureEmissions[0]?.Rating || 0;
const minRating = Math.min(...futureEmissions.map(e => e.Rating));
const avgRating = futureEmissions.reduce((sum, e) => sum + e.Rating, 0) / futureEmissions.length;

<Section>
  <Flex gap="m" justify="space-around">
    <BigNumber>
      <Text>{currentRating.toFixed(1)}</Text>
      <Text>g CO₂/kWh</Text>
      <Text>Aktuell</Text>
    </BigNumber>
    <BigNumber>
      <Text>{minRating.toFixed(1)}</Text>
      <Text>g CO₂/kWh</Text>
      <Text>Minimum</Text>
    </BigNumber>
    <BigNumber>
      <Text>{avgRating.toFixed(1)}</Text>
      <Text>g CO₂/kWh</Text>
      <Text>Durchschnitt</Text>
    </BigNumber>
  </Flex>
</Section>
```

### 5. **Badge für Statusanzeige** ⭐⭐
**Problem:** Keine visuelle Statusanzeige für die Qualität des aktuellen CO₂-Werts.

**Lösung:** Verwende `Badge` mit Farben basierend auf CO₂-Intensität.

```typescript
import { Badge } from "@mittwald/flow-remote-react-components";

function getStatusBadge(rating: number) {
  if (rating < 200) return { color: "green" as const, label: "Sehr gut" };
  if (rating < 300) return { color: "teal" as const, label: "Gut" };
  if (rating < 400) return { color: "orange" as const, label: "Mittel" };
  return { color: "red" as const, label: "Hoch" };
}

const status = getStatusBadge(currentRating);
<Badge color={status.color}>{status.label}</Badge>
```

### 6. **Alert für Empfehlungen** ⭐⭐
**Problem:** Empfehlungen sind im Text versteckt.

**Lösung:** Verwende `Alert` mit `status="info"` für wichtige Empfehlungen.

```typescript
import { Alert } from "@mittwald/flow-remote-react-components";

<Alert status="info">
  <Heading level={3}>Empfehlung</Heading>
  <Content>
    <Text>
      Planen Sie energieintensive Workloads für Zeitfenster mit niedriger
      CO₂-Intensität (grüne Bereiche im Diagramm). Optimaler Zeitpunkt:
      {formatDateTime(optimalTime)} ({optimalRating.toFixed(1)} g CO₂/kWh)
    </Text>
  </Content>
</Alert>
```

### 7. **LayoutCard für Strukturierung** ⭐
**Problem:** Verschiedene Bereiche sind nicht klar voneinander getrennt.

**Lösung:** Verwende `LayoutCard` für verschiedene Bereiche (Metriken, Chart, Erklärung).

```typescript
import { LayoutCard } from "@mittwald/flow-remote-react-components";

<LayoutCard>
  <Section>
    {/* Metriken */}
  </Section>
</LayoutCard>

<LayoutCard>
  <Section>
    {/* Chart */}
  </Section>
</LayoutCard>
```

### 8. **Skeleton für Loading States** ⭐
**Problem:** Aktueller Loader ist generisch.

**Lösung:** Verwende `Skeleton` für spezifischere Loading States.

```typescript
import { Skeleton } from "@mittwald/flow-remote-react-components";

// In Loader-Komponente
<Skeleton width="100%" height="300px" />
```

### 9. **ChartTooltip verbessern** ⭐⭐
**Problem:** Tooltip zeigt nur den Wert, nicht den Zeitpunkt.

**Lösung:** Erweitere den Tooltip mit formatiertem Zeitpunkt.

```typescript
<ChartTooltip
  formatter={(value, name, props) => {
    const time = props.payload?.Zeit || "";
    return `${time}: ${typeof value === "number" ? value.toFixed(1) : value} g CO₂/kWh`;
  }}
/>
```

### 10. **Optimaler Zeitpunkt hervorheben** ⭐⭐⭐
**Problem:** Benutzer müssen selbst den optimalen Zeitpunkt im Chart finden.

**Lösung:** Zeige den optimalen Zeitpunkt (niedrigster CO₂-Wert) prominent an.

```typescript
// Finde optimalen Zeitpunkt
const optimalEmission = futureEmissions.reduce((min, e) => 
  e.Rating < min.Rating ? e : min
);

<Section>
  <AccentBox color="green">
    <Section>
      <Heading level={3}>Optimaler Zeitpunkt</Heading>
      <Text>
        <strong>{formatDateTime(optimalEmission.Time)}</strong>
        <br />
        CO₂-Intensität: {optimalEmission.Rating.toFixed(1)} g CO₂/kWh
      </Text>
    </Section>
  </AccentBox>
</Section>
```

## 📋 Implementierungsreihenfolge

1. **Sofort umsetzen:**
   - Header-Layout mit Flex (1)
   - Accordion für Erklärung (2)
   - BigNumber für Metriken (4)
   - Optimaler Zeitpunkt hervorheben (10)

2. **Kurzfristig:**
   - AccentBox für Quellenangabe (3)
   - Badge für Statusanzeige (5)
   - ChartTooltip verbessern (9)

3. **Mittelfristig:**
   - Alert für Empfehlungen (6)
   - LayoutCard für Strukturierung (7)
   - Skeleton für Loading States (8)

## 🎨 Design-Prinzipien

- **Hierarchie:** Wichtige Informationen (Metriken, optimaler Zeitpunkt) sollten prominent sein
- **Platzsparend:** Weniger wichtige Informationen (Erklärung) sollten ausklappbar sein
- **Visuelle Klarheit:** Status und Empfehlungen sollten visuell hervorgehoben sein
- **Konsistenz:** Flow-Komponenten verwenden für einheitliches Design

## 🔍 Weitere Überlegungen

- **Auto-Refresh:** Optional automatisches Aktualisieren alle 15 Minuten
- **Zeitraum-Auswahl:** Filter für 6h, 12h, 24h, 48h
- **Vergleich:** Vergleich mit vorherigem Tag/Woche
- **Export:** Möglichkeit, Daten als CSV zu exportieren




