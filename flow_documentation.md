# mittwald Flow Komponenten-Dokumentation

Diese Dokumentation wurde automatisch von https://mittwald.github.io/flow/03-components heruntergeladen.

---

## 03-components

### AccentBox

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/accent-box/overview](https://mittwald.github.io/flow/03-components/structure/accent-box/overview)

# AccentBox

Die AccentBox dient dazu, besondere Inhalte dekorativ hervorzuheben.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/AccentBox)

## Tipps & Tricks für mehr Klimaschutz

Dein Cronjob läuft in weniger als 5-Minuten-Intervallen. Das verbraucht mehr Ressourcen. Falls das nicht unbedingt nötig ist, kannst du ein längeres Intervall wählen - das spart Energie und schützt das KlimaBlogartikel zu mehr Nachhaltigkeit

## Playground

In der `<AccentBox />` lassen sich Inhalte platzieren, die sich bewusst vom restlichen Content abheben sollen. Die Component sorgt dabei für die Hintergrundfarbe und das Padding. Die Inhalte innerhalb der Box können mithilfe von Struktur-Components wie [Section](/flow/03-components/structure/section/overview) oder [Flex](/flow/03-components/structure/flex/overview) angeordnet werden.

## Tipps & Tricks für mehr Klimaschutz

Dein Cronjob läuft in weniger als 5-Minuten-Intervallen. Das verbraucht mehr Ressourcen. Falls das nicht unbedingt nötig ist, kannst du ein längeres Intervall wählen - das spart Energie und schützt das KlimaBlogartikel zu mehr Nachhaltigkeit
    
    
    import {
      AccentBox,
      Heading,
      Link,
      Section,
      Text,
    } from "@mittwald/flow-react-components";
    
    <AccentBox>
      <Section>
        <Heading>Tipps & Tricks für mehr Klimaschutz</Heading>
        <Text>
          Dein Cronjob läuft in weniger als
          5-Minuten-Intervallen. Das verbraucht mehr Ressourcen.
          Falls das nicht unbedingt nötig ist, kannst du ein
          längeres Intervall wählen - das spart Energie und
          schützt das Klima
        </Text>
        <Link href="#" target="_blank">
          Blogartikel zu mehr Nachhaltigkeit
        </Link>
      </Section>
    </AccentBox>
    

Code ausblenden

* * *

## Color

Je nach Anwendungsfall stehen für die AccentBox die Colors **Blue, Green, Neutral** und **Gradient** zur Verfügung. Blue ist dabei als Standard definiert.

### Blue, Green und Neutral

Die Colors haben unterschiedliche Wirkungen auf den User und sollten daher gezielt entsprechend der gewünschten Wirkung eingesetzt werden.

Bei Verwendung der Color Green erscheinen enthaltene Components automatisch in der Dark-Variante (siehe [Light und Dark Color](/flow/02-foundations/01-design/02-colors)) dargestellt, um die nötigen Kontraste sicherzustellen.

## Hilf uns, Flow noch besser zu machen!

Fehlt dir eine bestimmte Component oder etwas anderes? Hast du Feedback? Dann teile es uns gerne auf GitHub mit.Feedback zu Flow geben

## Tipps & Tricks für mehr Klimaschutz

Dein Cronjob läuft in weniger als 5-Minuten-Intervallen. Das verbraucht mehr Ressourcen. Falls das nicht unbedingt nötig ist, kannst du ein längeres Intervall wählen - das spart Energie und schützt das KlimaBlogartikel zu mehr Nachhaltigkeit

250 msDateioperationen

Geringer Optimierungsbedarf

100 msServeroperationen

Optimierungsbedarf

Code anzeigen

### Gradient

Eine AccentBox mit einem Gradient sticht besonders hervor und eignet sich daher gut für aufmerksamkeitsstarke Inhalte wie Werbemaßnahmen. Wichtig ist dabei, dass der Inhalt ausreichend Kontrast zum Hintergrund aufweist – gegebenenfalls sollte mit der [Light oder Dark Color](/flow/02-foundations/01-design/02-colors) gearbeitet werden.

## mStudio Extension selber entwickeln

**Veröffentliche eigene Features im mStudio**

Contributor Landingpage

Code anzeigen

* * *

## Kombiniere mit ...

### Icon

Ein direkt in der AccentBox platziertes [Icon](/flow/03-components/content/icon/overview) wird als dekoratives Hintergrundbild angezeigt.

## Tipps & Tricks für mehr Klimaschutz

Dein Cronjob läuft in weniger als 5-Minuten-Intervallen. Das verbraucht mehr Ressourcen. Falls das nicht unbedingt nötig ist, kannst du ein längeres Intervall wählen - das spart Energie und schützt das KlimaBlogartikel zu mehr Nachhaltigkeit

Code anzeigen

### LayoutCard

Befindet sich eine AccentBox als erstes Element innerhalb einer [LayoutCard](/flow/03-components/structure/layout-card/overview), füllt sie die gesamte Größe der LayoutCard aus.

## mStudio Extension selber entwickeln

**Veröffentliche eigene Features im mStudio**

Contributor Landingpage

Code anzeigen

#### Overview

---

### Accordion

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/accordion/overview](https://mittwald.github.io/flow/03-components/structure/accordion/overview)

# Accordion

Das Accordion dient dazu Content-Bereiche ein- und auszublenden und so Informationen strukturiert und platzsparend darzustellen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Accordion)

#### Accordion Titel

## Playground

Verwende `<Accordion />`, um ein Accordion darzustellen. Nutze als Titel entweder eine `<Heading />` oder ein `<Label />`.

#### Accordion Titel
    
    
    import {
      Accordion,
      Content,
      Heading,
    } from "@mittwald/flow-react-components";
    
    <Accordion>
      <Heading>Accordion Titel</Heading>
      <Content>Inhalt des Accordions</Content>
    </Accordion>
    

Code ausblenden

* * *

## DefaultExpanded

`defaultExpanded` wird verwendet, um ein oder mehrere Accordion-Elemente beim Laden der Seite standardmäßig geöffnet darzustellen.

#### Accordion Titel

Inhalt des Accordions
    
    
    import {
      Accordion,
      Content,
      Heading,
    } from "@mittwald/flow-react-components";
    
    <Accordion defaultExpanded>
      <Heading>Accordion Titel</Heading>
      <Content>Inhalt des Accordions</Content>
    </Accordion>
    

Code ausblenden

* * *

## Outline Variant

Verwende eine `outline` Variante, wenn das Accordion klar vom umgebenden Inhalt abgehoben oder inhaltlich stärker strukturiert werden soll.

#### Accordion Titel
    
    
    import {
      Accordion,
      Content,
      Heading,
    } from "@mittwald/flow-react-components";
    
    <Accordion variant="outline">
      <Heading>Accordion Titel</Heading>
      <Content>Inhalt des Accordions</Content>
    </Accordion>
    

Code ausblenden

* * *

## Mit Label

Statt einer [Heading](/flow/03-components/content/heading/overview) kann auch ein [Label](/flow/03-components/content/label/overview) verwendet werden. Ein Label eignet sich, wenn der Inhalt ergänzend oder sekundär ist und nicht im Fokus der Seite steht – zum Beispiel bei Filtern, Formularfeldern oder optionalen Einstellungen.

Accordion Titel
    
    
    import {
      Accordion,
      Content,
      Label,
    } from "@mittwald/flow-react-components";
    
    <Accordion>
      <Label>Accordion Titel</Label>
      <Content>Inhalt des Accordions</Content>
    </Accordion>
    

Code ausblenden

#### Overview

---

### Action

**Quelle:** [https://mittwald.github.io/flow/03-components/actions/action/overview](https://mittwald.github.io/flow/03-components/actions/action/overview)

# Action

Die Action wird um einen Button gelegt, um beispielsweise visuelles Feedback bei asynchronen Aktionen zu ermöglichen oder ein Bestätigungsmodal auszulösen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Action)

Speichern

## Playground

Lege `<Action />`, um einen [Button](/flow/03-components/actions/button/overview), um die States des Buttons zu steuern.

Speichern
    
    
    import {
      Action,
      Button,
    } from "@mittwald/flow-react-components";
    import { sleep } from "@/content/03-components/actions/action/examples/lib";
    
    <Action action={sleep}>
      <Button color="accent">Speichern</Button>
    </Action>
    

Code ausblenden

* * *

## Pending

Wenn eine asynchrone Aktion länger als 1000 Millisekunden dauert, wird der **Pending** State angezeigt.

Speichern

Code anzeigen

* * *

## Feedback

Wenn ein visuelles Feedback nach einer Userinteraktion angezeigt werden soll, kann das Property `showFeedback` genutzt werden.

Speichern

Code anzeigen

* * *

## Bestätigungsmodal

Um User vor unbeabsichtigten Aktionen zu schützen, kann ein Bestätigungsmodal angezeigt werden. Dafür muss innerhalb der Action ein [Modal](/flow/03-components/overlays/modal/overview) mit dem Attribut `slot="actionConfirm"` platziert werden.

Projekt löschen

Code anzeigen

* * *

## Verschachtelte Actions

Wenn mehrere Aktionen auf eine Userinteraktion folgen, können Actions auch ineinander verschachtelt werden.

Speichern

Code anzeigen

#### Overview

---

### ActionGroup

**Quelle:** [https://mittwald.github.io/flow/03-components/actions/action-group/overview](https://mittwald.github.io/flow/03-components/actions/action-group/overview)

# ActionGroup

Die ActionGroup dient dazu, zusammengehörige Actions sinnvoll zu gruppieren. Sie wird beispielsweise in Sections oder Modals verwendet.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/ActionGroup)

Organisation erstellenAbbrechen

## Playground

Verwende `<ActionGroup />`, um eine ActionGroup darzustellen.

Organisation erstellenAbbrechen
    
    
    import {
      ActionGroup,
      Button,
    } from "@mittwald/flow-react-components";
    
    <ActionGroup>
      <Button color="accent">Organisation erstellen</Button>
      <Button color="secondary" variant="soft">
        Abbrechen
      </Button>
    </ActionGroup>
    

Code ausblenden

* * *

## Slots

Die Actions werden von der ActionGroup automatisch in die Slots `primary`, `secondary` und `abort` sortiert. So werden [Buttons](https://mittwald.github.io/flow/03-components/actions/button/overview) mit der Color Primary (Standard), Accent und Danger automatisch dem Slot `primary` zugeordnet, der am Ende der ActionGroup positioniert ist.

E-Mail-Addresse anlegenSpeichern und weitere anlegenAbbrechen

Code anzeigen

* * *

## Kombiniere mit ...

### Link

Passwort vergessen?Anmelden

Code anzeigen

#### Overview

---

### Alert

**Quelle:** [https://mittwald.github.io/flow/03-components/status/alert/overview](https://mittwald.github.io/flow/03-components/status/alert/overview)

# Alert

Ein Alert macht den User auf eine wichtige Information aufmerksam. Er ist visuell hervorgehoben und sollte nur bei relevanten, nicht ignorierbaren Inhalten verwendet werden.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Alert)

### E-Mail-Adresse wurde archiviert

## Playground

Verwende `<Alert />`, um einen Alert darzustellen.

### E-Mail-Adresse wurde archiviert
    
    
    import {
      Alert,
      Heading,
    } from "@mittwald/flow-react-components";
    
    <Alert>
      <Heading>E-Mail-Adresse wurde archiviert</Heading>
    </Alert>
    

Code ausblenden

* * *

## Mit Inhalt

Der Text eines Alerts sollte klar, prägnant und handlungsorientiert formuliert sein. Er erklärt dem User, was passiert ist, warum es relevant ist und was als Nächstes zu tun ist. Wenn möglich, biete dem User eine Möglichkeit, sein Problem zu lösen – verwende dazu einen [Link](/flow/03-components/navigation/link/overview) oder [Button](/flow/03-components/actions/button/overview). Eingefügte Buttons werden automatisch in der Größe **Small** dargestellt, um ein ausgewogenes Verhältnis im Gesamtbild zu gewährleisten.

### E-Mail-Adresse wurde archiviert

Da deine Domain gelöscht wurde, wurde diese E-Mail-Adresse archiviert. Um E-Mails empfangen und senden zu können musst du die Adresse wieder umbenennen.E-Mail-Adresse anpassen

Code anzeigen

* * *

## Status

Je nach Anwendungsfall stehen vier Status-Farben zur Auswahl: Info, Warning, Danger und Success.

### E-Mail-Adresse wurde archiviert

Da deine Domain gelöscht wurde, wurde diese E-Mail-Adresse archiviert. Um E-Mails empfangen und senden zu können musst du die Adresse wieder umbenennen.

### Dein Speicher ist fast voll

Dein Speicher ist zu über 80% belegt. Wir empfehlen dir deinen Speicherplatz zu erweitern, um Problemen vorzubeugen.

### Es konnte kein SSL-Zertifikat ausgestellt werden

Für diese Domain konnte kein SSL-Zertifikat ausgestellt werden, da die Domain per IP nicht auf deine Server-IP zeigt.

### Deine App wurde aktualisiert

Deine App wurde erfolgreich auf die neueste Version aktualisiert.

Code anzeigen

**Info:** Allgemeine Systemzustände oder laufende Prozesse, die keine Aktion erfordern.

**Warning:** Hinweise auf mögliche Risiken mit einer klaren Handlungsempfehlung.

**Danger:** Akute Fehlerzustände oder kritische Probleme, die sofortige Aufmerksamkeit erfordern.

**Success:** Abgeschlossene, erfolgreiche oder positiv bewertete Zustände.

#### Overview

---

### AlertBadge

**Quelle:** [https://mittwald.github.io/flow/03-components/status/alert-badge/overview](https://mittwald.github.io/flow/03-components/status/alert-badge/overview)

# AlertBadge

Ein AlertBadge hebt Statusmeldungen hervor, die besondere Aufmerksamkeit erfordern.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/AlertBadge)

Archiviert

## Playground

Verwende `<AlertBadge />`, um einen AlertBadge darzustellen.

Archiviert
    
    
    import { AlertBadge } from "@mittwald/flow-react-components";
    
    <AlertBadge>Archiviert</AlertBadge>
    

Code ausblenden

* * *

## Status

Je nach Anwendungsfall stehen vier Status-Farben zur Auswahl: **Info** , **Success** , **Warning** und **Danger**.

Archiviert

Update erfolgreich

Speicher fast voll

Speicher voll

Code anzeigen

**Info:** Allgemeine Systemzustände oder laufende Prozesse, die keine Aktion erfordern.

**Success:** Abgeschlossene, erfolgreiche oder positiv bewertete Zustände.

**Warning:** Hinweise auf mögliche Risiken mit einer klaren Handlungsempfehlung.

**Danger:** Akute Fehlerzustände oder kritische Probleme, die sofortige Aufmerksamkeit erfordern.

#### Overview

---

### Align

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/align/overview](https://mittwald.github.io/flow/03-components/structure/align/overview)

# Align

Align dient dazu, ausgewählte Components gezielt miteinander zu kombinieren - inklusive Anordnung und visueller Anpassungen (z. B. Farbänderungen).[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Align)

MM

**Max Mustermann** Organisationsinhaber

Nutze folgende Components innerhalb von `<Align />`, um sie zu kombinieren.

## Avatar + Text

MM

**Max Mustermann** Organisationsinhaber
    
    
    import {
      Align,
      Avatar,
      Initials,
      Text,
    } from "@mittwald/flow-react-components";
    
    <Align>
      <Avatar>
        <Initials>Max Mustermann</Initials>
      </Avatar>
      <Text>
        <b>Max Mustermann</b>
        Organisationsinhaber
      </Text>
    </Align>
    

Code ausblenden

* * *

## Input + Button

Weiterleitungsziel(optional)

Hinzufügen

Code anzeigen

* * *

## Text + CopyButton

mail.agenturserver.de

Code anzeigen

* * *

## Icon + Text

mail.agenturserver.de

Code anzeigen

* * *

## Text + ContextualHelp

mail.agenturserver.de

Code anzeigen

#### Overview

---

### Autocomplete

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/autocomplete/overview](https://mittwald.github.io/flow/03-components/form-controls/autocomplete/overview)

# Autocomplete

Autocomplete unterstützt bei der Texteingabe durch kontextbezogene Vorschläge. Die Auswahl ist optional, eigene Eingaben bleiben möglich. Typischerweise wird die Komponente mit TextField oder SearchField kombiniert.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Autocomplete)

Email(optional)

## Playground

Lege `<Autocomplete />`, um ein [TextField](/flow/03-components/form-controls/text-field/overview) oder ein [SearchField](/flow/03-components/form-controls/search-field/overview), um Texteigaben mit Vorschlägen zu unterstützen.

Email(optional)
    
    
    import {
      Option,
      Label,
      TextField,
      Autocomplete,
    } from "@mittwald/flow-react-components";
    import { useState } from "react";
    
    export default () => {
      const [input, setInput] = useState("");
    
      const generateSuggestItems = () => {
        return [
          "example.com",
          "test.org",
          "email.net",
          "mail.com",
        ]
          .map((d) => {
            const email = `${input.split("@")[0]}@${d}`;
            return (
              <Option
                key={email}
                value={email}
                textValue={email}
              >
                {email}
              </Option>
            );
          })
          .filter(() => input);
      };
    
      return (
        <Autocomplete>
          <TextField value={input} onChange={setInput}>
            <Label>Email</Label>
          </TextField>
          {generateSuggestItems()}
        </Autocomplete>
      );
    }
    

Code ausblenden

* * *

## Benutzerdefinierte Filter

Schränke die Optionen, die dem User zur Auswahl stehen mithilfe von Filtern ein.

Email(optional)

Code anzeigen

* * *

## Kombiniere mit ...

### SearchField

Nutze `<Autocomplete />` mit einem [SearchField](/flow/03-components/form-controls/search-field/overview), um die User beim Suchen mit Vorschlägen zu unterstützen.

Email(optional)

Code anzeigen

### React Hook Form

Weitere Details zur Formularlogik und -validierung sind in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

Test

Speichern

Code anzeigen

#### Overview

---

### Avatar

**Quelle:** [https://mittwald.github.io/flow/03-components/content/avatar/overview](https://mittwald.github.io/flow/03-components/content/avatar/overview)

# Avatar

Ein Avatar dient der visuellen Repräsentation von Usern oder anderen Inhalten, etwa durch ein Image, Initials oder ein Icon.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Avatar)

![Gopher](https://cdn.shopify.com/s/files/1/2022/6883/products/IMG_2002_250x250@2x.JPG?v=1538235544)

## Playground

Der `<Avatar />` kann mit drei verschiedenen Components befüllt werden: `<Image />`, `<Icon />` oder `<Initials />`.

![Gopher](https://cdn.shopify.com/s/files/1/2022/6883/products/IMG_2002_250x250@2x.JPG?v=1538235544)
    
    
    import {
      Avatar,
      Image,
    } from "@mittwald/flow-react-components";
    
    <Avatar>
      <Image
        alt="Gopher"
        src="https://cdn.shopify.com/s/files/1/2022/6883/products/IMG_2002_250x250@2x.JPG?v=1538235544"
      />
    </Avatar>
    

Code ausblenden

* * *

## Color

Die Color bei der Kombination mit [Icon](/flow/03-components/content/icon/overview) oder Initials richtet sich jeweils nach dem übergebenen Child der Component. Für eine gezielte Wahl der Color kann das Property `color` verwendet werden.

Folgende dekorative Colors stehen zur Verfügung: **Blue, Violet, Teal, Lilac** und **Green**.

GG

GG

GG

Code anzeigen

* * *

## Sizes

Der Avatar unterstützt die Sizes **Extra Small** , **Small** , **Medium** oder **Large**.

GG

GG

GG

GG

Code anzeigen

* * *

## Status

Wird im Avatar das Property `status` gesetzt erhält der Avatar automatisch das passende Icon und die passende Color. Dieses Property darf nur verwendet werden, wenn der Status zusätzlich durch ein benachbartes Element (z. B. [Text](/flow/03-components/content/text/overview), [Label](/flow/03-components/content/label/overview) oder [Legende](/flow/03-components/content/legend/overview)) eindeutig kommuniziert wird.

Code anzeigen

## Benachrichtigungen

Hier wird der Status durch den Inhalt der Benachrichtigung erklärt, daher kann der Status Avatar verwendet werden.

##### 

##### 

##### 

##### 

##### 

Show more

## E-Mail-Adressen

Hier muss der Status durch das AlertBadge erklärt werden, der Status Avatar kann daher nicht verwendet werden.

##### 

##### 

##### 

##### 

##### 

Show more

Code anzeigen

* * *

## Kombiniere mit ...

### Image

Im folgenden Code-Beispiel wird ein Avatar mit einem [Image](/flow/03-components/content/image/overview) kombiniert. Wenn kein Image vorhanden ist, sollten Initials angezeigt werden.

![Gopher](https://cdn.shopify.com/s/files/1/2022/6883/products/IMG_2002_250x250@2x.JPG?v=1538235544)

Code anzeigen

Die Initials werden automatisch aus dem Text generiert, der innerhalb von `<Initials />` übergeben wird. Sie dienen ausschließlich als Platzhalter für ein [Image](/flow/03-components/content/image/overview).

GG

Code anzeigen

### Icon

Ein Avatar lässt sich mit einem beliebigen [Icon](/flow/03-components/content/icon/overview) kombinieren.

Code anzeigen

### Align

Benutze die [Align](/flow/03-components/structure/align/overview)-Component, um Text neben dem Avatar zu platzieren.

MM

**Max Mustermann** Organisationsinhaber

Code anzeigen

#### Overview

---

### AvatarStack

**Quelle:** [https://mittwald.github.io/flow/03-components/content/avatar-stack/overview](https://mittwald.github.io/flow/03-components/content/avatar-stack/overview)

# AvatarStack

Ein AvatarStack zeigt mehrere Avatare in einer horizontalen Gruppierung.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/AvatarStack)

MM

JD

GG

## Playground

Lege den `<AvatarStack />` um mehrere [Avatare](/flow/03-components/content/avatar/overview), um diese zu gruppieren.

MM

JD

GG
    
    
    import {
      Avatar,
      AvatarStack,
      Initials,
    } from "@mittwald/flow-react-components";
    
    <AvatarStack>
      <Avatar>
        <Initials>Max Mustermann</Initials>
      </Avatar>
      <Avatar>
        <Initials>John Doe</Initials>
      </Avatar>
      <Avatar>
        <Initials>Gillian Gopher</Initials>
      </Avatar>
    </AvatarStack>
    

Code ausblenden

* * *

## Total Count

Es wird empfohlen, gleichzeitig höchstens 5 [Avatare](/flow/03-components/content/avatar/overview) anzuzeigen. Weitere Avatare können über einen Counter dargestellt werden, indem die Property `totalCount` verwendet wird. Ist `totalCount` größer als die Anzahl der angezeigten Avatare, wird ein zusätzlicher Counter mit der verbleibenden Anzahl angezeigt.

MM

JD

GG

+17

Code anzeigen

* * *

## Klickbar

Mit `onPress` lassen sich Avatare klickbar machen, sodass zu den jeweiligen Avataren beispielsweise weitere Informationen im [Modal](/flow/03-components/overlays/modal/overview) angezeigt werden können.

MM

JD

GG

Code anzeigen

* * *

## Sizes

AvatarStacks sind in den Sizes **Extra Small, Small, Medium** und **Large** verfügbar.

MM

JD

MM

JD

MM

JD

MM

JD

Code anzeigen

#### Overview

---

### Badge

**Quelle:** [https://mittwald.github.io/flow/03-components/status/badge/overview](https://mittwald.github.io/flow/03-components/status/badge/overview)

# Badge

Ein Badge stellt kompakt zusätzliche Informationen wie Metadaten, Status oder Kategorien dar. Es unterstützt die schnelle Orientierung, ohne vom Hauptinhalt abzulenken.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Badge)

Value

## Playground

Verwende `<Badge />`, um ein Badge darzustellen.

Value
    
    
    import { Badge } from "@mittwald/flow-react-components";
    
    <Badge>Value</Badge>
    

Code ausblenden

* * *

## Mit Scope

Ein Scope ist wie eine Bezeichnung für das gesamte Badge. Ein Scope besitzt meistens mehrere Werte z. B. Priorität: hoch, Priorität: niedrig.

ScopeValue

Code anzeigen

* * *

## Badge Aktion

Ein Badge kann optional mit `onPress` eine Aktion auslösen, sollte jedoch nicht so vielseitig wie ein Button verwendet werden.

Value

Code anzeigen

* * *

## Badge entfernen

Ein Badge kann optional vom User aus der Benutzeroberfläche entfernt werden.

Value

Code anzeigen

* * *

## Color

Je nach Anwendungsfall stehen neun Badge-Color zur Auswahl: **Neutral** , **Blue** , **Navy** , **Violet** , **Teal** , **Lilac** , **Green** , **Orange** und **Red**.

ScopeValue

ScopeValue

ScopeValue

ScopeValue

ScopeValue

ScopeValue

ScopeValue

ScopeValue

ScopeValue

Code anzeigen

**Neutral:** Nebenläufige Information (z. B. Archiviert, Gelöscht, Entwurf).

**Blue:** Informativ (z. B. Aktiv, Live, Im Prozess).

**Violet:** Ankündigung (z. B. Neu, Beta).

**Green:** Positiv (z. B. Abgeschlossen, Genehmigt, Erfolg).

**Orange, Red:** Negativ (z. B. Warnung, Fehler, Abgelehnt, Fehlgeschlagen).

### Light und Dark

Zusätzlich kann das Badge in Light und Dark dargestellt werden. Beide Varianten eigenen sich, wenn die Standardfarben auf farbigen oder dekorativen Hintergründen nicht gut funktionieren.

ScopeValue

Code anzeigen

ScopeValue

Code anzeigen

* * *

## Disabled

In Ausnahmefällen können deaktivierte Badges verwendet werden, um eine Funktion temporär als nicht verfügbar darzustellen, ohne diese vollständig aus der Oberfläche zu entfernen.

ScopeValue

Code anzeigen

#### Overview

---

### BigNumber

**Quelle:** [https://mittwald.github.io/flow/03-components/data-visualisation/big-number/overview](https://mittwald.github.io/flow/03-components/data-visualisation/big-number/overview)

# BigNumber

Die BigNumber dient der prominenten Darstellung numerischer Werte innerhalb einer Oberfläche. Sie wird vorrangig eingesetzt, um Kennzahlen oder Metriken übersichtlich und visuell hervorzuheben.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/BigNumber)

69%Performance

## Playground

Verwende `<BigNumber />`, um eine BigNumber darzustellen.

69%Performance
    
    
    import {
      BigNumber,
      Text,
    } from "@mittwald/flow-react-components";
    
    <BigNumber>
      <Text>69%</Text>
      <Text>Performance</Text>
    </BigNumber>
    

Code ausblenden

* * *

## Kombiniere mit ...

### Rating

Nutze das [Rating](https://mittwald.github.io/flow/03-components/content/rating), um den Kontext der BigNumber für die User auf einer Bewertungsskala besser einzuordnen.

80%Performance

Code anzeigen

### AccentBox

Zur visuellen Hervorhebung kann die BigNumber innerhalb einer [AccentBox](https://mittwald.github.io/flow/03-components/structure/accent-box) angezeigt werden.

250 msDateioperationenGeringer OptimierungsbedarfDetails anzeigen

100 msServeroperationenOptimierungsbedarfDetails anzeigen

Code anzeigen

#### Overview

---

### Breadcrumb

**Quelle:** [https://mittwald.github.io/flow/03-components/navigation/breadcrumb/overview](https://mittwald.github.io/flow/03-components/navigation/breadcrumb/overview)

# Breadcrumb

Eine Breadcrumb ist ein Navigationselement, das Usern Orientierung bietet, indem es die aktuelle Position sowie die übergeordneten Navigationsebenen anzeigt.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Breadcrumb)

  1. Projekte
  2. Apps
  3. Meine App

## Playground

Verwende `<Breadcrumb />`, um eine Breadcrumb darzustellen. Die einzelnen Navigationselemente werden dabei mit `<Link />` innerhalb der Component erstellt.

  1. Projekte
  2. Apps
  3. Meine App

    
    
    import {
      Breadcrumb,
      Link,
    } from "@mittwald/flow-react-components";
    
    <Breadcrumb>
      <Link href="#">Projekte</Link>
      <Link href="#">Apps</Link>
      <Link href="#">Meine App</Link>
    </Breadcrumb>
    

Code ausblenden

* * *

## Color

Je nach Bedarf stehen drei Breadcrumb-Color zur Auswahl: **Primary** , **Light** und **Dark**. Primary ist die Standard-Color und muss nicht explizit im Code angegeben werden.

### Light und Dark

Light und Dark sind Alternativen zur Primary-Color, falls diese auf farbigen oder dekorativen Hintergründen keinen ausreichenden Kontrast bietet.

  1. Projekte
  2. Apps
  3. Meine App

Code anzeigen

  1. Projekte
  2. Apps
  3. Meine App

Code anzeigen

**Light:** Verwende die Light-Color, bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color, bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von größer als 50.

#### Overview

---

### Button

**Quelle:** [https://mittwald.github.io/flow/03-components/actions/button/overview](https://mittwald.github.io/flow/03-components/actions/button/overview)

# Button

Mit einem Button können User Aktionen ausführen. Je nach Bedarf kann ein Button – mit Text und/oder mit einem Icon – in verschiedenen Größen und Typen gewählt werden.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Button)

Button

## Playground

Verwende `<Button />`, um einen Button darzustellen.

Benutze das `onPress` Property um die Interaktion mit Maus, Keyboard oder Touch zu ermöglichen.

Button
    
    
    import { Button } from "@mittwald/flow-react-components";
    
    <Button
      onPress={() => {
        alert("Button gedrückt");
      }}
    >
      Button
    </Button>
    

Code ausblenden

* * *

## Variants

Beim Button wird zwischen den Variants **Solid, Soft, Outline** und **Plain** unterschieden.

SolidSoftPlainOutline

Code anzeigen

**Solid:** Die Solid-Variant zeichnet sich durch ein flächiges und auffälliges Aussehen aus. Aus diesem Grund verbergen sich in der Regel die Hauptaktionen hinter einem Solid-Button.

**Soft:** Die Soft-Variant verleiht dem Button einen softeren Touch und eignet sich daher gut für sekundäre Aktionen.

**Outline:** Die Outline-Variant wirkt durch den Verzicht auf eine Hintergrundfarbe dezent. Durch den Rahmen bleibt sie weiterhin präsent, ohne dominant zu erscheinen.

**Plain:** Die Plain-Variant ist weniger auffällig als die anderen Variants und wird für weniger wichtige oder versteckte Aktionen verwendet.

* * *

## Color

Je nach Bedarf stehen vier Button-Color zur Auswahl: **Primary, Secondary, Accent** und **Danger**.

Fortfahren/AktionAbbrechen/ZurückErstellen/SpeichernLöschen/Kündigen

Code anzeigen

**Primary:** Verwende die Primary-Color für Hauptaktionen, wenn der Kontext keinen Accent- oder Danger-Button erfordert.

**Secondary:** Die Secondary-Color wird für Nebenaktionen verwendet. Um dies zu verdeutlichen, wird die Secondary-Color häufig als Soft-Variant verwendet.

**Accent:** Die grüne Farbe der Accent-Color soll dem Button eine positive Bedeutung verleihen. Daher wird diese Color vor allem im Kontext von Erstellungs-, Speicher- oder Bestellvorgängen verwendet.

**Danger:** Die Danger-Color zeichnet sich durch die rote Farbe aus, die davor warnen soll, dass sich hinter dem Button eine negative Konsequenz verbirgt. Beispielsweise kann sich hinter dem Button eine Lösch- oder Kündigungsfunktion verbergen.

### Color

Zusätzlich zu den Standard-Colors, können Button in **Light** und **Dark** dargestellt werden. Beide Colors sind Alternativen zu den herkömmlichen Farben, falls diese nicht auf farbigen oder dekorativen Hintergründen funktionieren.

LightLightLightLight

Code anzeigen

DarkDarkDarkDark

Code anzeigen

**Light:** Verwende die Light-Color, bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color, bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von größer als 50.

* * *

## Sizes

Die Size des Buttons kann **Small** oder **Medium** sein. Medium ist die Standardgröße und wird für die meisten Buttons verwendet.

SmallMedium

Code anzeigen

* * *

## Kombiniere mit ...

Im Content-Bereich des Buttons kann entweder **Text** , ein **Icon** oder **Text mit einem Icon am Ende** beinhalten.

### Icon

Verwende `<Icon />` in einem `<Button />`, um ein Icon statt Text im Button anzuzeigen.

Code anzeigen

### Text und Icon

Verwende `<Text />` und `<Icon />` zusammen, um sowohl Text als auch Icon im Button anzuzeigen. Achte darauf, dass das Icon dem User einen Mehrwert bietet und nicht nur einen dekorativen Zweck erfüllt. Zum Beispiel indiziert ein Chevron-Icon, dass der Button ein Dropdown öffnet. Ein Close-Icon zeigt an, dass der Button als Filterelement wieder entfernt werden kann.

E-Mail hinzufügenE-Mail hinzufügenFilterFilter

Code anzeigen

### Align

Benutze die [Align](/flow/03-components/structure/align/overview) Komponente, um deinen Button neben Input Feldern zu platzieren.

Weiterleitungsziel(optional)

Hinzufügen

Code anzeigen

* * *

## States

Ein Button hat sieben verschiedene States: **Default, Hover, Pressed, Disabled, Pending, Succeeded** und Failed.

Fortfahren/AktionFortfahren/AktionFortfahren/AktionFortfahren/Aktion

Code anzeigen

**Disabled:** Verwende den Disabled-State, wenn der Button keine Aktion oder kein Ereignis auslösen soll.

**Pending, Succeeded und Failed:** Pending, Succeeded und Failed sollen dem Nutzer signalisieren, dass im Hintergrund etwas passiert, wenn er auf einen Button geklickt hat. Verwende den Button zusammen mit der Komponente [Action](/flow/03-components/actions/action/overview), um die States zu steuern.

#### Overview

---

### CartesianChart

**Quelle:** [https://mittwald.github.io/flow/03-components/data-visualisation/cartesian-chart/overview](https://mittwald.github.io/flow/03-components/data-visualisation/cartesian-chart/overview)

# CartesianChart

CartesianChart ist eine vielseitige Diagrammkomponente zur Darstellung von Metriken über Zeit. Sie kann entweder als Liniendiagramm (Line) oder Flächendiagramm (Area) konfiguriert werden.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/CartesianChart)

## Playground

Verwende `<CartesianChart />`, um ein CartesianChart darzustellen. Beachte dabei, dass zum Rendern entweder das übergeordnete Parent eine feste Höhe vorgeben muss oder das Chart selbst über die Property `height` eine eigene Höhe erhalten muss.

Code anzeigen

* * *

## Darstellungstypen

Im CartesianChart können unterschiedliche Darstellungstypen wie `<Area />`, `<Line />` oder eine Kombination aus beiden verwendet werden.

Code anzeigen

* * *

## Synchronisierte Charts

Zwei CartesianCharts können synchronisiert werden, um den gleichen Zeitraum darzustellen. Dadurch lassen sich verschiedene Metriken zeitlich exakt vergleichen.

## CPU

## RAM

Code anzeigen

* * *

### Mit EmptyView

Der EmptyView wird angezeigt, sobald die Property `data` des Charts entweder ein leeres Array enthält oder `undefined` ist. Er dient dazu, leere Zustände visuell zu kennzeichnen und bietet Orientierung bei Ausnahmefällen wie Ladefehlern, fehlgeschlagenen Datenabfragen oder nicht vorhandenen Ergebnissen.

Code anzeigen

#### Overview

---

### Chat

**Quelle:** [https://mittwald.github.io/flow/03-components/chat/chat/overview](https://mittwald.github.io/flow/03-components/chat/chat/overview)

# Chat

Der Chat kombiniert den MessageThread mit einer Texteingabe zur Darstellung eines vollständigen Chat-Interfaces.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Chat)

Senden

## Playground

Verwende `<Chat />`, um einen Chat darzustellen.

Der Chat kombiniert dabei den [MessageThread](/flow/03-components/chat/message-thread/overview) mit einem Textinput. Letzterer ordnet mithilfe von [Align](/flow/03-components/structure/align/overview) einen [Button](/flow/03-components/actions/button/overview) und eine [TextArea](/flow/03-components/form-controls/text-area/overview) horizontal zueinander an. Mit der `height` Property lässt sich die Höhe des Chats festlegen. Gleichzeitig sorgt sie dafür, dass die Texteingabe am unteren Rand platziert wird.

Senden
    
    
    import {
      Align,
      Avatar,
      Button,
      Chat,
      Content,
      Header,
      Initials,
      Message,
      MessageSeparator,
      MessageThread,
      Text,
      TextArea,
    } from "@mittwald/flow-react-components";
    
    <Chat height={400}>
      <MessageThread>
        <MessageSeparator>Ticket geöffnet</MessageSeparator>
        <Message>
          <Header>
            <Align>
              <Avatar>
                <Initials>Max Mustermann</Initials>
              </Avatar>
              <Text>
                <b>Max Mustermann</b>
              </Text>
            </Align>
          </Header>
          <Content>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cumque eius quam quas vel voluptas, ullam
              aliquid fugit. Voluptate harum accusantium rerum
              ullam modi blanditiis vitae, laborum ea tempore,
              dolore voluptas. Earum pariatur, similique
              corrupti id officia perferendis. Labore,
              similique. Earum, quas in. At dolorem corrupti
              blanditiis nulla deserunt laborum! Corrupti
              delectus aspernatur nihil nulla obcaecati ipsam
              porro sequi rem? Quam.
            </Text>
          </Content>
        </Message>
        <Message type="sender">
          <Header>
            <Align>
              <Avatar>
                <Initials>John Doe</Initials>
              </Avatar>
              <Text>
                <b>John Doe</b>
              </Text>
            </Align>
          </Header>
          <Content>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cumque eius quam quas vel voluptas, ullam
              aliquid fugit. Voluptate harum accusantium rerum
              ullam modi blanditiis vitae, laborum ea tempore,
              dolore voluptas. Earum pariatur, similique
              corrupti id officia perferendis. Labore,
              similique. Earum, quas in.
            </Text>
          </Content>
        </Message>
      </MessageThread>
      <TextArea
        aria-label="Nachricht"
        rows={3}
        autoResizeMaxRows={10}
      />
      <Button color="accent">Senden</Button>
    </Chat>
    

Code ausblenden

* * *

## Kombiniere mit ...

### Upload

Der Chat lässt sich durch einen Upload erweitern. Dazu kann ein [Button](/flow/03-components/actions/button/overview) mit einem [Icon](/flow/03-components/content/icon/overview) in der Variante **Plain** ergänzt werden. Die hochgeladenen Files lassen sich mit der [FileCard](/flow/03-components/upload/file-card/overview) darstellen.

Datei anhängen

Senden

  * **Hochgeladene Datei 1**
  * **Hochgeladene Datei 2**

Code anzeigen

* * *

### React Hook Form

Weitere Details zur Formularlogik und -validierung sind in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

Submit

Code anzeigen

### Markdown Editor

Statt einer TextArea kann auch der [MarkdownEditor](/flow/03-components/form-controls/markdown-editor/overview) verwendet werden.

Senden

Code anzeigen

#### Overview

---

### Checkbox

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/checkbox/overview](https://mittwald.github.io/flow/03-components/form-controls/checkbox/overview)

# Checkbox

Mithilfe einer Checkbox kann ein User eine Option auswählen oder abwählen. Bei der Verwendung mehrerer Checkboxen wird im Normalfall die CheckboxGroup verwendet.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Checkbox)

Ich stimme den AGBs zu und bestätige, dass ich die Datenschutzhinweise zur Kenntnis genommen habe.

#### Overview

---

### CheckboxButton

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/checkbox-button/overview](https://mittwald.github.io/flow/03-components/form-controls/checkbox-button/overview)

# CheckboxButton

Ein CheckboxButton ist eine optisch auffälligere Variante der Checkbox. Sie dient ebenfalls dazu, Optionen auszuwählen oder abzuwählen und wird häufig innerhalb der CheckboxGroup verwendet.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/CheckboxButton)

Ich stimme den AGBs zu und bestätige, dass ich die Datenschutzhinweise zur Kenntnis genommen habe.

## Playground

Verwende `<CheckboxButton />` zusammen mit einer eingebetteten Beschriftung, um einen CheckboxButton darzustellen.

Ich stimme den AGBs zu und bestätige, dass ich die Datenschutzhinweise zur Kenntnis genommen habe.
    
    
    import { CheckboxButton } from "@mittwald/flow-react-components";
    
    <CheckboxButton>
      Ich stimme den AGBs zu und bestätige, dass ich die
      Datenschutzhinweise zur Kenntnis genommen habe.
    </CheckboxButton>
    

Code ausblenden

* * *

## Kombiniere mit ...

### React Hook Form

Ich stimme den AGBs zu und bestätige, dass ich die Datenschutzhinweise zur Kenntnis genommen habe.

Speichern

Code anzeigen

#### Overview

---

### CheckboxGroup

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/checkbox-group/overview](https://mittwald.github.io/flow/03-components/form-controls/checkbox-group/overview)

# CheckboxGroup

Die CheckboxGroup fasst mehrere Checkboxen oder CheckboxButtons logisch in einer Gruppierung zusammen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/CheckboxGroup)

Berechtigungen(optional)

Lesen

Schreiben

## Playground

Verwende `<CheckboxGroup />` zusammen mit mehreren `<Checkbox />` oder `<CheckboxButtons />`, um eine CheckboxGroup darzustellen. Über der CheckboxGroup kann ein beschreibendes [Label](/flow/03-components/content/label/overview) verwendet werden.

Berechtigungen(optional)

Lesen

Schreiben
    
    
    import {
      Checkbox,
      CheckboxGroup,
      Label,
    } from "@mittwald/flow-react-components";
    
    <CheckboxGroup>
      <Label>Berechtigungen</Label>
      <Checkbox value="read">Lesen</Checkbox>
      <Checkbox value="write">Schreiben</Checkbox>
    </CheckboxGroup>
    

Code ausblenden

* * *

## CheckboxButtons

Eine CheckboxGroup kann entweder mit [CheckboxButtons](/flow/03-components/form-controls/checkbox-button/overview) oder [Checkboxen](/flow/03-components/form-controls/checkbox/overview) gefüllt werden.

Berechtigungen(optional)

Lesen

Schreiben

Code anzeigen

* * *

## Spalten

Die CheckboxGroup verwendet das [ColumnLayout](/flow/03-components/structure/column-layout/overview), um eine Anpassung der Spalten zu ermöglichen. Bei der Verwendung von CheckboxButtons entspricht der Default dem des ColumnLayouts, während Checkboxen im Default untereinander angezeigt werden.

Berechtigungen(optional)

Lesen

Schreiben

Code anzeigen

* * *

## Kombiniere mit ...

### FieldDescription

Um wichtige Hinweise zu den Auswahloptionen der CheckboxGroup bereitzustellen, kann unterhalb der Gruppe eine `<FieldDescription />` eingebaut werden.

Berechtigungen(optional)Weitere Informationen

Lesen

Schreiben

Code anzeigen

### ContextualHelp

Benutze das [ContextualHelp](/flow/03-components/overlays/contextual-help/overview), um weitere Informationen bereitstellen zu können.

Berechtigungen(optional)

Lesen

Schreiben

Code anzeigen

### React Hook Form

Berechtigungen

Lesen

Schreiben

Speichern

Code anzeigen

#### Overview

---

### CodeBlock

**Quelle:** [https://mittwald.github.io/flow/03-components/content/code-block/overview](https://mittwald.github.io/flow/03-components/content/code-block/overview)

# CodeBlock

Der CodeBlock dient der übersichtlichen Darstellung von Code als Block mit Syntax-Highlighting.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/CodeBlock)
    
    
    {
        "projectId": "b3a96db5-ba8f-40dd-9100-bab43ac1f698",
        "name": "My Project"
    }

## Playground

Verwende `<CodeBlock />`, um einen CodeBlock anzuzeigen. Gib den anzuzeigenden Inhalt im `code` Property an. Nutze das `language` Property, um die Programmiersprache (siehe [unterstütze language imports](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD)) zu definieren. So erhält der Code das korrekte Syntax-Highlighting.
    
    
    {
        "projectId": "b3a96db5-ba8f-40dd-9100-bab43ac1f698",
        "name": "My Project"
    }
    
    
    import { CodeBlock } from "@mittwald/flow-react-components";
    
    <CodeBlock
      language="json"
      code={`{
        "projectId": "b3a96db5-ba8f-40dd-9100-bab43ac1f698",
        "name": "My Project"
    }`}
    />
    

Code ausblenden

* * *

## Mit Zeilennummern

Wird das `showLineNumbers` Property gesetzt, werden Zeilennummern angezeigt.
    
    
    1{
    2    "projectId": "b3a96db5-ba8f-40dd-9100-bab43ac1f698",
    3    "name": "My Project"
    4}

Code anzeigen

* * *

## Mit Kopierfunktion

Ergänzt man das Property `copyable`, so bekommt der CodeBlock eine Kopierfunktion. Dadurch kann der User den gesamten Inhalt des CodeBlocks in die Zwischenablage kopieren. Eventuelle Zeilennummern werden nicht mit kopiert.
    
    
    1{
    2    "projectId": "b3a96db5-ba8f-40dd-9100-bab43ac1f698",
    3    "name": "My Project"
    4}

Code anzeigen

* * *

## Color

Zusätzlich zur Standard-Color kann der CodeBlock auch in den Colors **Light** und **Dark** dargestellt werden. Beide Colors sind Alternativen zur Standard-Color, falls diese nicht auf farbigen oder dekorativen Hintergründen funktioniert.
    
    
    {
        "projectId": "b3a96db5-ba8f-40dd-9100-bab43ac1f698",
        "name": "My Project"
    }

Code anzeigen
    
    
    {
        "projectId": "b3a96db5-ba8f-40dd-9100-bab43ac1f698",
        "name": "My Project"
    }

Code anzeigen

**Light:** Verwende die Light-Color bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von größer als 50.

#### Overview

---

### Color

**Quelle:** [https://mittwald.github.io/flow/03-components/content/color/overview](https://mittwald.github.io/flow/03-components/content/color/overview)

# Color

Mit der Color-Component lassen sich Texte, Headings oder Icons gezielt einfärben, um sie sichtbar vom übrigen Designsystem abzuheben.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Color)

**Veröffentliche eigene Features im mStudio**

## Playground

### Nutze die Color-Component mit Bedacht

Die Color-Component hebt den umschlossenen Bereich deutlich vom übrigen Designsystem ab und sollte daher nur in Ausnahmefällen eingesetzt werden.

Um ein Element einzufärben, wird es mit `<Color />` umschlossen. Die gewünschte Farbe wird über die `color`-Property vergeben.

**Veröffentliche eigene Features im mStudio**
    
    
    import {
      Color,
      Text,
    } from "@mittwald/flow-react-components";
    
    <Text>
      <b>
        Veröffentliche{" "}
        <Color color="violet">eigene Features</Color> im mStudio
      </b>
    </Text>
    

Code ausblenden

* * *

## Color

Je nach Anwendungsfall stehen Colors aus den Bereichen **Brand** , **Status** oder **Custom** zur Verfügung. Je nach Hintergrund muss auf ein ausreichendes Kontrastverhältnis geachtet werden. Außerdem sollten Farben nicht allein eine Bedeutung übertragen.

### Brand Colors

Brand Colors eignen sich, um einzelne Passagen in [Texten](/flow/03-components/content/text/overview) oder [Headings](/flow/03-components/content/heading/overview) hervorzuheben. Das ist vor allem bei werblichen Hinweisen hilfreich.

bluevioletlilacteal

Code anzeigen

### Status Colors

Status Colors unterstützen die visuelle Einordnung eines Zustands. Häufige Einsatzorte sind [Icons](/flow/03-components/content/icon/overview) für Indikatoren auf dem Dashboard oder die Darstellung negativer Beträge.

dangerwarninginfosuccess

Code anzeigen

### Custom Colors

Für beliebige Colors unterstützt die `color`-Property die Angabe eines HEX-Werts.

custom

Code anzeigen

* * *

## Kombiniere mit ...

### Text

Teile eines [Textes](/flow/03-components/content/text/overview) lassen sich mithilfe der Color-Component einfärben.

**Veröffentliche eigene Features im mStudio**

Code anzeigen

### Heading

Mit der Color-Component lassen sich in [Headings](/flow/03-components/content/heading/overview) gezielt wichtige Wörter farblich hervorheben.

## mStudio Extension selber entwickeln

Code anzeigen

### Icon

Mit der Color-Component lassen sich gezielt einzelne [Icons](/flow/03-components/content/icon/overview) farblich hervorheben.

Code anzeigen

### AccentBox

Ein häufiges Einsatzgebiet der Color-Component ist die Hervorhebung von [Headings](/flow/03-components/content/heading/overview) in [AccentBoxen](/flow/03-components/structure/accent-box/overview) mit Werbeinhalten. Dabei ist besonders wichtig, dass die eingefärbte Schrift einen ausreichenden Kontrast zum Hintergrund aufweist.

## mStudio Extension selber entwickeln

**Veröffentliche eigene Features im mStudio**

Contributor Landingpage

Code anzeigen

#### Overview

---

### ColumnLayout

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/column-layout/overview](https://mittwald.github.io/flow/03-components/structure/column-layout/overview)

# ColumnLayout

Das ColumnLayout organisiert Inhalte in Spalten. Sowohl die Anzahl der Spalten als auch deren Größe lassen sich flexibel für verschiedene Breakpoints definieren[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/ColumnLayout)

Vorname

Nachname

## Playground

Verwende `<ColumnLayout />`, um ein ColumnLayout darzustellen.

Vorname

Nachname

Straße

Hausnummer
    
    
    import {
      ColumnLayout,
      Label,
      TextField,
    } from "@mittwald/flow-react-components";
    
    <ColumnLayout rowGap="s" columnGap="l">
      <TextField isRequired>
        <Label>Vorname</Label>
      </TextField>
      <TextField isRequired>
        <Label>Nachname</Label>
      </TextField>
      <TextField isRequired>
        <Label>Straße</Label>
      </TextField>
      <TextField isRequired>
        <Label>Hausnummer</Label>
      </TextField>
    </ColumnLayout>
    

Code ausblenden

Das ColumnLayout erzeugt ein flexibles Spalten-Layout, das für die Breakpoints s, m und l individuell angepasst werden kann. Diese Breakpoints beziehen sich nicht auf die Bildschirmgröße, sondern auf die Breite des Containers, in dem das ColumnLayout verwendet wird. Standardmäßig sind die Spalten wie folgt definiert:

  * Größe `s` bis 550 Pixel Breite: `[1]`
  * Größe `m` bis 850 Pixel Breite: `[1, 1]`
  * Größe `l` ab 851 Pixel Breite: `[1, 1, 1]`

In der Definition der Spalten-Breiten werden sowohl die Anzahl der Spalten als auch ihr Größenverhältnis festgelegt. Eine Aufteilung wie [1, 2, 1] erzeugt zum Beispiel drei Spalten, wobei die mittlere Spalte doppelt so breit ist wie die beiden äußeren.

* * *

## Benutzerdefinierte Werte

Für jeden Breakpoint können eigene Werte für die Spaltenanzahl und deren Größenverhältnis festgelegt werden. Wenn für einen größeren Breakpoint keine eigenen Werte definiert sind, übernimmt er automatisch die Werte des nächstkleineren Breakpoints. Standardwerte werden nur verwendet, wenn bei keinem kleineren Breakpoint benutzerdefinierte Werte angegeben sind. Beispiel:

  * Größe `s` bis 550 Pixel Breite: `[1]` (Default-Wert)
  * Größe `m` bis 850 Pixel Breite: `[2, 1]` (benutzerdefinierter Wert)
  * Größe `l` ab 851 Pixel Breite: `[2, 1]` (Wert von m geerbt)

In diesem Beispiel wurde für den Breakpoint `m` eine benutzerdefinierte Spaltenaufteilung festgelegt. Der Breakpoint `l` übernimmt diese Aufteilung von `m`, anstatt auf den Standardwert von `[1, 1, 1]` zurückzufallen. Da für den Breakpoint `s` kein benutzerdefinierter Wert angegeben wurde, bleibt er beim Standardwert von `[1]`.

Straße

Hausnummer

Code anzeigen

* * *

## Ausgeblendete Spalten

Als Werte für die Breakpoints kann neben Zahlen auch `null` mitgegeben werden. Das führt dazu, dass die entsprechende Spalte ausgeblendet wird. Hier wird beispielsweise das Bild in der kleinsten Ansicht ausgeblendet:

## Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius quam quas vel voluptas, ullam aliquid fugit. Voluptate harum accusantium rerum ullam modi blanditiis vitae, laborum ea tempore, dolore voluptas. Earum pariatur, similique corrupti id officia perferendis. Labore, similique. Earum, quas in. At dolorem corrupti blanditiis nulla deserunt laborum! Corrupti delectus aspernatur nihil nulla obcaecati ipsam porro sequi rem? Quam.![mittwald](https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg)

Code anzeigen

* * *

## Abstände

Die Abstände des ColumnLayout können in drei Stufen angepasst werden:

  * s = 8px
  * m = 16px
  * l = 24px

Die property `rowGap` steuert die Abstände zwischen den Zeilen (oben und unten), `columnGap` die Abstände zwischen den Spalten (rechts und links) und `gap` setzt alle Abstände gleichzeitig (oben, unten, rechts und links).

Vorname

Nachname

Straße

Hausnummer

Ort

Code anzeigen

#### Overview

---

### ComboBox

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/combo-box/overview](https://mittwald.github.io/flow/03-components/form-controls/combo-box/overview)

# ComboBox

Die ComboBox kombiniert ein Texteingabefeld mit einem Auswahlmenü. Bei der Eingabe wird eine vordefinierte Liste dynamisch gefiltert, aus der eine Auswahl getroffen werden kann.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/ComboBox)

Domain(optional)

## Playground

Verwende `<ComboBox />`, um eine ComboBox darzustellen. Nutze ein `<Label />`, um Informationen zu vermitteln, die das Verständnis der Eingabeanforderungen erleichtern.

Domain(optional)
    
    
    import {
      ComboBox,
      Label,
      Option,
    } from "@mittwald/flow-react-components";
    
    <ComboBox>
      <Label>Domain</Label>
      <Option>mydomain.de</Option>
      <Option>shop.mydomain.de</Option>
      <Option>anotherdomain.com</Option>
      <Option>www.anotherdomain.com</Option>
      <Option>anotherdomain.com/shop</Option>
      <Option>anotherdomain.com/blog</Option>
      <Option>onemoredomain.de</Option>
      <Option>www.onemoredomain.de</Option>
    </ComboBox>
    

Code ausblenden

* * *

## Mit FieldDescription

Um wichtige Hinweise zur ComboBox bereitzustellen, kann unterhalb eine `<FieldDescription />` eingebaut werden.

Weitere Informationen

Domain(optional)Weitere Informationen

Code anzeigen

* * *

## Kombiniere mit ...

### Align

Benutze [Align](/flow/03-components/structure/align/overview), um einem [Button](/flow/03-components/actions/button/overview) neben deiner ComboBox zu platzieren.

Domain(optional)

Hinzufügen

Code anzeigen

### ContextualHelp

Verwende ein [ContextualHelp](/flow/03-components/overlays/contextual-help/overview), wenn du weitere Informationen bereitstellen möchtest, und diese zu lang für die FieldDescription sind.

Domain(optional)

Code anzeigen

### React Hook Form

Weitere Details zur Formularlogik und -validierung sind in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

Domain

Speichern

Code anzeigen

### CountryOptions

Verwende die `CountryOptions` um eine Länderauswahl anzubieten.

Land(optional)

Code anzeigen

#### Overview

---

### ContextMenu

**Quelle:** [https://mittwald.github.io/flow/03-components/actions/context-menu/overview](https://mittwald.github.io/flow/03-components/actions/context-menu/overview)

# ContextMenu

Das ContextMenu öffnet ein Popover mit einer Liste von Aktionen oder Links, welches in der Regel über einen Button geöffnet wird.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/ContextMenu)

Trigger

## Playground

Verwende `<ContextMenu />`, um ein ContextMenu darzustellen. Innerhalb von `<ContextMenuTrigger />` muss ein `<Button />` und ein `<ContextMenu />` kombiniert werden, um ein ContextMenu per [Button](/flow/03-components/actions/button/overview)-Klick zu öffnen. Die einzelnen Aktionen werden über `<MenuItem />` definiert.

Trigger
    
    
    import {
      Button,
      ContextMenu,
      ContextMenuTrigger,
      MenuItem,
    } from "@mittwald/flow-react-components";
    
    <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu
        onAction={(id) => {
          alert(id);
        }}
      >
        <MenuItem id="1">Item 1</MenuItem>
        <MenuItem id="2">Item 2</MenuItem>
        <MenuItem id="3">Item 3</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
    

Code ausblenden

* * *

## Einfach-Auswahl

Durch `selectionMode="single"` verhalten sich die Menüeinträge des ContextMenu wie eine [RadioGroup](/flow/03-components/form-controls/radio-group/overview), sodass nur ein Element ausgewählt werden kann.

Trigger

Code anzeigen

* * *

## Mehrfach-Auswahl

Durch `selectionMode="multiple"` verhalten sich die Menüeinträge des ContextMenu wie [Checkboxen](/flow/03-components/form-controls/checkbox/overview), sodass mehrere Optionen ausgewählt werden können.

Trigger

Code anzeigen

* * *

## Mit Switch

Ein [Switch](/flow/03-components/form-controls/switch/overview) im ContextMenu ermöglicht es, Aktionen direkt zu aktivieren oder deaktivieren.

Trigger

Code anzeigen

* * *

## Mit Icon

Verwende [Icons](/flow/03-components/content/icon/overview) innerhalb vom `<MenuItem />`, um Aktionen schneller verständlich zu machen oder bekannte Funktionen klarer zu vermitteln.

Trigger

Code anzeigen

* * *

## Mit Separator

Ein [Separator](/flow/03-components/structure/separator/overview) gruppiert logisch zusammengehörige Aktionen.

Trigger

Code anzeigen

* * *

## Mit ContextMenuSections

Eine `ContextMenuSectionSection` sorgt im ContextMenu für klare Struktur, indem sie eine [Heading](/flow/03-components/content/heading/overview) und definierte Abstände verwendet.

Trigger

Code anzeigen

* * *

## Mit fester Breite

Lege eine Breite für dein ContextMenu fest, um beispielsweise zu verhindern, dass das ContextMenu zu breit wird oder die Breite des ContextMenus beim Nachladen von Daten springt.

Trigger

Code anzeigen

* * *

## Mit Selection Mode

Trigger

Code anzeigen

* * *

## Mit Avatar

Verwende das ContextMenu als Profilmenü, indem innerhalb ein [Avatar](/flow/03-components/content/avatar/overview) und eine [Heading](/flow/flow/03-components/content/heading/overview) platziert werden.

Trigger

Code anzeigen

* * *

## Kombiniere mit

### Modal

Aktionen im ContextMenu können [Modals](/flow/03-components/overlays/modal/overview) als Overlay öffnen, wenn zusätzliche Informationen erfasst, bestätigt oder bearbeitet werden müssen.

Code anzeigen

#### Overview

---

### ContextualHelp

**Quelle:** [https://mittwald.github.io/flow/03-components/overlays/contextual-help/overview](https://mittwald.github.io/flow/03-components/overlays/contextual-help/overview)

# ContextualHelp

Ein ContextualHelp bietet dem User weiterführende, hilfreiche Informationen in einem Popover an.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/ContextualHelp)

## Playground

Verwende `<ContextualHelp />`, um ein ContextualHelp darzustellen. Das ContextualHelp kann beispielsweise aus [Heading](/flow/03-components/content/heading/overview), [Text](/flow/03-components/content/text/overview) und [Link](/flow/03-components/navigation/link/overview) bestehen.

Da das ContextualHelp sich nur durch eine Aktion des Users anzeigen lässt, wird ein `<ContextualHelpTrigger />` in Kombination mit einem `<Button />` benötigt.
    
    
    import {
      Button,
      ContextualHelp,
      ContextualHelpTrigger,
      Heading,
      Link,
      Text,
    } from "@mittwald/flow-react-components";
    
    <ContextualHelpTrigger>
      <Button />
    
      <ContextualHelp>
        <Heading>Rechte & Rollen</Heading>
        <Text>
          Jedem Benutzer-Profil wird im mStudio je Projekt
          und/oder Organisation eine Rolle zugewiesen. Das
          ermöglicht dir ein ganz neues und modernes Arbeiten.
        </Text>
        <Link>Mehr erfahren</Link>
      </ContextualHelp>
    </ContextualHelpTrigger>
    

Code ausblenden

* * *

## Kombiniere mit ...

### Align

Benutze die [Align](/flow/03-components/structure/align/overview) Component, um das ContextualHelp z. B. neben einem [Text](/flow/03-components/content/text/overview) zu platzieren.

mail.agenturserver.de

Code anzeigen

#### Overview

---

### CopyButton

**Quelle:** [https://mittwald.github.io/flow/03-components/actions/copy-button/overview](https://mittwald.github.io/flow/03-components/actions/copy-button/overview)

# CopyButton

Mit dem CopyButton können Informationen mit einem Klick in die Zwischenablage kopiert werden.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/CopyButton)

## Playground

Verwende `<CopyButton />`, um einen CopyButton darzustellen.
    
    
    import { CopyButton } from "@mittwald/flow-react-components";
    
    <CopyButton text="Kopierter Inhalt" />
    

Code ausblenden

* * *

## Kombiniere mit ...

### Align

Benutze die [Align](/flow/03-components/structure/align/overview)-Component, um einen CopyButton neben dem zu kopierenden Text zu platzieren.

mail.agenturserver.de

Code anzeigen

#### Overview

---

### CounterBadge

**Quelle:** [https://mittwald.github.io/flow/03-components/status/counter-badge/overview](https://mittwald.github.io/flow/03-components/status/counter-badge/overview)

# CounterBadge

Ein CounterBadge dient dazu, dem User schnell und kompakt auf neue oder ungelesene Inhalte hinzuweisen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/CounterBadge)

5

## Playground

Verwende `<CounterBadge />`, um ein CounterBadge darzustellen.

5
    
    
    import { CounterBadge } from "@mittwald/flow-react-components";
    
    <CounterBadge count={5} />
    

Code ausblenden

* * *

## Ohne Inhalt

Ein CounterBadge kann auch ohne Inhalt verwendet werden, um auf einen Status hinzuweisen.
    
    
    import { CounterBadge } from "@mittwald/flow-react-components";
    
    <CounterBadge />
    

Code ausblenden

* * *

## Hohe Zahlen

Ist der tatsächliche Wert 100 oder höher, wird stattdessen „99+“ im CounterBadge angezeigt.

99+
    
    
    import { CounterBadge } from "@mittwald/flow-react-components";
    
    <CounterBadge count={120} />
    

Code ausblenden

* * *

## Innerhalb eines Buttons

Um sich bei der Verwendung auf anderen Elementen besser von diesen abzuheben, hat das CounterBadge eine Border. Diese ist im Default weiß und muss jeweils an die Hintergrundfarbe angepasst werden.

### Accessibility

Da das CounterBadge selbst nicht accessible ist, muss der Wert über das darunterliegende Element vermittelt werden, in diesem Beispiel erhält der Button ein Aria Label, das die Zahl des Counters enthält.

7
    
    
    import {
      Button,
      CounterBadge,
      IconNotification,
    } from "@mittwald/flow-react-components";
    
    <Button aria-label="Benachrichtigungen: 7">
      <IconNotification />
      <CounterBadge count={7} />
    </Button>
    

Code ausblenden

#### Overview

---

### DatePicker

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/date-picker/overview](https://mittwald.github.io/flow/03-components/form-controls/date-picker/overview)

# DatePicker

Der DatePicker ermöglicht die Eingabe eines Datums per Tastatur oder die Auswahl über einen visuellen Kalender.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/DatePicker)

mm/dd/yyyy

Datum(optional)

## Playground

Verwende `<DatePicker />`, um einen DatePicker darzustellen. Nutze ein `<Label />`, um Informationen zu vermitteln, die das Verständnis der Eingabeanforderungen erleichtern.

Die Values des DatePickers sind Objekte aus dem [@internationalized/date Package](https://react-spectrum.adobe.com/internationalized/date/).

mm/dd/yyyy

Datum(optional)
    
    
    import {
      DatePicker,
      Label,
    } from "@mittwald/flow-react-components";
    
    <DatePicker>
      <Label>Datum</Label>
    </DatePicker>
    

Code ausblenden

* * *

## Min- und Max-Values

Das wählbare Datum lässt sich über `minValue` und `maxValue` begrenzen.

mm/dd/yyyy

Datum(optional)

Code anzeigen

* * *

## Verfügbare Daten

Über das `isDateUnavailable` Property kann die Datumsauswahl eingeschränkt werden.

mm/dd/yyyy

DatumEs kann nur der 1. jeden Monats ausgewählt werden

Code anzeigen

* * *

## Disabled

Ist der DatePicker **disabled** , ist keine Interaktion möglich.

mm/dd/yyyy

Datum(optional)

Code anzeigen

* * *

## Mit FieldDescription

Um wichtige Hinweise zum DatePicker bereitzustellen, kann unterhalb eine `<FieldDescription />` eingebaut werden.

mm/dd/yyyy

Datum(optional)Weitere Informationen

Code anzeigen

* * *

## Kombiniere mit ...

### ContextualHelp

Benutze das [ContextualHelp](/flow/03-components/overlays/contextual-help/overview), wenn zusätzliche Informationen bereitgestellt werden sollen, die zu umfangreich für die FieldDescription sind.

mm/dd/yyyy

Datum(optional)

Code anzeigen

### React Hook Form

Weitere Details zur Formularlogik und -validierung sind in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

mm/dd/yyyy

Datum

Speichern

Code anzeigen

#### Overview

---

### DateRangePicker

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/date-range-picker/overview](https://mittwald.github.io/flow/03-components/form-controls/date-range-picker/overview)

# DateRangePicker

Der DateRangePicker erlaubt die Eingabe einer Zeitspanne per Tastatur oder die Auswahl über einen visuellen Kalender.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/DateRangePicker)

mm/dd/yyyy

–

mm/dd/yyyy

Zeitraum(optional)

## Playground

Verwende `<DateRangePicker />`, um einen DateRangePicker darzustellen. Nutze ein `<Label />`, um Informationen zu vermitteln, die das Verständnis der Eingabeanforderungen erleichtern.

Die Values des DateRangePickers sind Objekte aus dem [@internationalized/date Package](https://react-spectrum.adobe.com/internationalized/date/).

mm/dd/yyyy

–

mm/dd/yyyy

Zeitraum(optional)
    
    
    import {
      DateRangePicker,
      Label,
    } from "@mittwald/flow-react-components";
    
    <DateRangePicker>
      <Label>Zeitraum</Label>
    </DateRangePicker>
    

Code ausblenden

* * *

## Min- und Max-Values

Der auswählbare Datumsbereich lässt sich über `minValue` und `maxValue` begrenzen.

mm/dd/yyyy

–

mm/dd/yyyy

Zeitraum(optional)

Code anzeigen

* * *

## Disabled

Ist der DateRangePicker **disabled** , ist keine Interaktion möglich.

mm/dd/yyyy

–

mm/dd/yyyy

Zeitraum(optional)

Code anzeigen

* * *

## Mit FieldDescription

Um wichtige Hinweise zum DateRangePicker bereitzustellen, kann unterhalb eine `<FieldDescription />` eingebaut werden.

mm/dd/yyyy

–

mm/dd/yyyy

Zeitraum(optional)Weitere Informationen

Code anzeigen

* * *

## Kombiniere mit ...

### ContextualHelp

Benutze das [ContextualHelp](/flow/03-components/overlays/contextual-help/overview), wenn zusätzliche Informationen bereitgestellt werden sollen, die zu umfangreich für die FieldDescription sind.

mm/dd/yyyy

–

mm/dd/yyyy

Zeitraum(optional)

Code anzeigen

### React Hook Form

Weitere Details zur Formularlogik und -validierung sind in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

mm/dd/yyyy

–

mm/dd/yyyy

Zeitraum

Speichern

Code anzeigen

#### Overview

---

### DonutChart

**Quelle:** [https://mittwald.github.io/flow/03-components/data-visualisation/donut-chart/overview](https://mittwald.github.io/flow/03-components/data-visualisation/donut-chart/overview)

# DonutChart

Das DonutChart dient zur übersichtlichen Darstellung proportionaler Daten in einem ringförmigen Diagramm. Es eignet sich besonders zur Visualisierung von Verteilungen, Anteilen oder Fortschritten.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/DonutChart)

**30 %**

##  Playground

Verwende `<DonutChart />`, um ein DonutChart darzustellen.

**30 %**
    
    
     import { DonutChart } from "@mittwald/flow-react-components";
    
    <DonutChart value={30} aria-label="Auslastung" />
    

Code ausblenden

* * *

## Mit Unit

Im default wird das DonutChart immer mit Prozentangabe angezeigt. Über das Property `formatOptions` können aber auch andere Einheiten gewählt werden. (s. [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat))

### Gigabyte

**12 GB**

Code anzeigen

### Dezimalzahl

**135**

Code anzeigen

* * *

## Größen

Die Size des DonutCharts kann Medium oder Large sein. Medium ist dabei die Standardgröße.

**30 %**

**30 %**

Code anzeigen

* * *

## Mit alternativem Text

Über die `children` kann der Text innerhalb des DonutCharts überschrieben werden

**300** GB

Code anzeigen

* * *

## Status

Je nach Anwendungsfall stehen vier Status-Farben zur Auswahl: **Info** , **Success** , **Warning** und **Danger**.

**30 %**

**30 %**

**80 %**

**95 %**

Code anzeigen

* * *

## Segmente

Die Anzeige des DonutCharts kann über das `segments` Property um einzelne Abschnitte ergänzt werden. Der `value` ergibt sich in diesem Fall aus der Summe der Werte der einzelnen Segmente. Um die einzelnen Werte näher zu erläutern wird automatisch die `Legend` Component angezeigt. Über das `showLegend` Property kann diese ein- und ausgeblendet werden. Die Position der Legende kann über das Property `legendPosition` bestimmt werden.

Die Farben der Segmente werden automatisch festgelegt, können aber über das `color` Property überschrieben werden. Beim Überschreiben muss darauf geachtet werden, dass nebeneinander liegende Farben weiterhin einen ausreichenden Kontrast zueinander haben.

**100 %**

  * Item 1 (28 %)
  * Item 2 (24 %)
  * Item 3 (20 %)
  * Item 4 (10 %)
  * Item 5 (12 %)
  * Item 6 (6 %)

Code anzeigen

#### Overview

---

### Field (React Hook Form)

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/field-react-hook-form/overview](https://mittwald.github.io/flow/03-components/form-controls/field-react-hook-form/overview)

# Field (React Hook Form)

Die Field-Component integriert die Form Controls von Flow nahtlos in das Formular-Management von React Hook Form.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/integrations/react-hook-form/components/Field/Field.tsx)

NameThe name of the project

Die Field-Component nutzt dieselben Properties wie die [Controller-Component](https://www.react-hook-form.com/api/usecontroller/controller/) von React Hook Form – mit Ausnahme von `render`.

## Playground

NameThe name of the project
    
    
    import { useForm } from "react-hook-form";
    import {
      Field,
      Form,
    } from "@mittwald/flow-react-components/react-hook-form";
    import {
      FieldDescription,
      Label,
      TextField,
    } from "@mittwald/flow-react-components";
    
    export default () => {
      interface Values {
        name: string;
      }
      const form = useForm<Values>();
    
      return (
        <Form form={form} onSubmit={console.log}>
          <Field
            name="name"
            rules={{
              required: "The project name is required",
            }}
          >
            <TextField>
              <Label>Name</Label>
              <FieldDescription>
                The name of the project
              </FieldDescription>
            </TextField>
          </Field>
        </Form>
      );
    }
    

Code ausblenden

* * *

## typedField

Die `typedField(form)`-Factory erzeugt eine Field-Component, die an den Typ des jeweiligen Forms angepasst ist. Dadurch führen beispielsweise unbekannte Field-Namen zu einem TypeScript-Fehler.

Name(optional)
    
    
    import { useForm } from "react-hook-form";
    import {
      Form,
      typedField,
    } from "@mittwald/flow-react-components/react-hook-form";
    import {
      Label,
      TextField,
    } from "@mittwald/flow-react-components";
    
    export default () => {
      interface Values {
        myField: string;
      }
      const form = useForm<Values>();
    
      // Only `myField` is allowed for name prop
      const Field = typedField(form);
    
      return (
        <Form form={form} onSubmit={console.log}>
          <Field name="myField">
            <TextField>
              <Label>Name</Label>
            </TextField>
          </Field>
        </Form>
      );
    }
    

Code ausblenden

#### Overview

---

### FileCard

**Quelle:** [https://mittwald.github.io/flow/03-components/upload/file-card/overview](https://mittwald.github.io/flow/03-components/upload/file-card/overview)

# FileCard

Die FileCard visualisiert Dateien samt relevanter Informationen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/FileCard)

**image.jpg** 48KB

## Playground

Verwende `<FileCard />`, um eine FileCard darzustellen. Diese kann auch als [FileCardList](/flow/03-components/upload/file-card-list/overview) erweitert werden.

**image.jpg** 48KB
    
    
    import { FileCard } from "@mittwald/flow-react-components";
    
    <FileCard
      type="image/jpg"
      name="image.jpg"
      sizeInBytes={47500}
    />
    

Code ausblenden

* * *

## Mit Delete Button

Verwende `delete`, um in der FileCard einen [Button](/flow/03-components/actions/button/overview) anzuzeigen, mit dem die Datei unmittelbar entfernt werden kann.

**image.jpg** 48KB

Code anzeigen

* * *

## Mit Link

Die FileCard ermöglicht es, Dateien über einen `href`-Link zu öffnen, z. B. um ein Bild in einem neuen Tab anzuzeigen.

**image.jpg** 48KB

Code anzeigen

* * *

## Mit ContextMenu

Nutze ein `<ContextMenu />` innerhalb der FileCard, um wichtige Interaktionen in einem [ContextMenu](/flow/03-components/actions/context-menu/overview) zu platzieren.

**image.jpg** 48KB

Code anzeigen

* * *

## Mit Bild

Statt eines passenden Icons kann durch `imageSrc` zur Vorschau ein Bild angezeigt werden.

![](https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg)

**image.jpg** 48KB

Code anzeigen

* * *

## Mit ProgressBar

Nutze eine `<ProgressBar />` innerhalb der FileCard, um beispielsweise einen Upload Fortschritt anzuzeigen.

Code anzeigen

* * *

## Mit zusätzlichen Buttons

Platziere einen oder mehrere `<Button />` innerhalb der FileCard, um zusätzliche Optionen anzubieten.

**image.jpg**

Code anzeigen

* * *

## Mit Failed State

Über das Property `isFailed` kann die FileCard im Failed State angezeigt werden, um beispielsweise einen fehlgeschlagenen Upload anzuzeigen. Weitere Informationen können im Subtitle der FileCard angezeigt werden.

**image.jpg**

Code anzeigen

#### Overview

---

### FileCardList

**Quelle:** [https://mittwald.github.io/flow/03-components/upload/file-card-list/overview](https://mittwald.github.io/flow/03-components/upload/file-card-list/overview)

# FileCardList

Die FileCardList platziert mehrere FileCards in einem ColumnLayout und visualisiert Dateien samt relevanter Informationen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/FileCardList)

  * **file1.txt**
  * **file2.txt**
  * **file3.txt**
  * **file4.txt**
  * **image.jpg**

##  Playground

Verwende `<FileCardList />`, um eine Liste von FileCards darzustellen. Orientiere dich an der [FileCard](/flow/03-components/upload/file-card/overview), um weitere Properties hinzuzufügen.

  * **file1.txt**
  * **file2.txt**
  * **file3.txt**
  * **file4.txt**
  * **image.jpg**

    
    
     import {
      FileCard,
      FileCardList,
    } from "@mittwald/flow-react-components";
    
    <FileCardList aria-label="Hochgeladene Dateien">
      <FileCard
        name="file1.txt"
        onDelete={() => {
          console.log("delete");
        }}
      />
      <FileCard
        name="file2.txt"
        onDelete={() => {
          console.log("delete");
        }}
      />
      <FileCard
        name="file3.txt"
        onDelete={() => {
          console.log("delete");
        }}
      />
      <FileCard
        name="file4.txt"
        onDelete={() => {
          console.log("delete");
        }}
      />
      <FileCard
        type="image/jpg"
        name="image.jpg"
        onDelete={() => {
          console.log("delete");
        }}
      />
    </FileCardList>
    

Code ausblenden

#### Overview

---

### FileDropZone

**Quelle:** [https://mittwald.github.io/flow/03-components/upload/file-drop-zone/overview](https://mittwald.github.io/flow/03-components/upload/file-drop-zone/overview)

# FileDropZone

Die FileDropZone ermöglicht das Hochladen von Dateien per Drag-and-Drop oder durch manuelle Auswahl.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/FileDropZone)

## Datei ablegen

Datei auswählen

## Playground

Verwende `<FileDropZone />`, um Dateien per Drag-and-Drop hochzuladen. Biete zusätzlich mit `<Button />` eine alternative Möglichkeit an.

## Datei ablegen

Datei auswählen
    
    
    import {
      Button,
      FileDropZone,
      FileField,
      Heading,
      IconUpload,
      Section,
    } from "@mittwald/flow-react-components";
    
    <Section>
      <FileDropZone onChange={(files) => console.log(files)}>
        <IconUpload />
        <Heading>Datei ablegen</Heading>
        <FileField
          name="file"
          onChange={(files) => console.log(files)}
        >
          <Button>Datei auswählen</Button>
        </FileField>
      </FileDropZone>
    </Section>
    

Code ausblenden

* * *

## Vorgegebene Dateitypen

Verwende `<Text />`, um den User über erlaubte Dateitypen und maximale Dateigrößen beim Hochladen zu informieren.

## Bild ablegen

Es sind nur Bilder vom Typ image/png erlaubt.

Bild auswählen

Code anzeigen

* * *

## Mehrere Dateien

Über die Property `multiple` wird das gleichzeitige Hochladen mehrerer Dateien ermöglicht.

## Dateien ablegen

Dateien auswählen

Code anzeigen

#### Overview

---

### FileField

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/file-field/overview](https://mittwald.github.io/flow/03-components/form-controls/file-field/overview)

# FileField

Das FileField stellt eine kompakte Lösung dar, um Uploads von Dateien zu ermöglichen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/FileField)

Zertifikat(optional)Auswählen

## Playground

Verwende `<FileField />`, um ein FileField darzustellen. Innerhalb des FileFields kommen die Components [Label](/flow/03-components/content/label/overview) und [Button](/flow/03-components/actions/button/overview) zum Einsatz.

Zertifikat(optional)Auswählen
    
    
    import {
      Button,
      FileField,
      Label,
    } from "@mittwald/flow-react-components";
    
    <FileField>
      <Label>Zertifikat</Label>
      <Button variant="outline" color="secondary">
        Auswählen
      </Button>
    </FileField>
    

Code ausblenden

* * *

## Disabled

Ist das FileField **disabled** , ist keine Interaktion möglich. Sobald die Ursache behoben ist, kann es wieder wie gewohnt verwendet werden.

Zertifikat(optional)Auswählen

Code anzeigen

* * *

## Mit FieldDescription

Um wichtige Hinweise zum FileField bereitzustellen, kann unterhalb eine `<FieldDescription />` eingebaut werden. In vielen Fällen empfiehlt es sich, die erlaubten Dateitypen dort anzugeben.

Zertifikat(optional)AuswählenErlaubte Dateitypen sind .jpeg und .png

Code anzeigen

* * *

## Invalid

Bei ungültiger Eingabe wird das FileField invalidiert. Über `<FieldError />` kann eine entsprechende [Fehlermeldung](/flow/02-foundations/03-content-guidelines/02-fehlermeldungen) ausgegeben werden.

Zertifikat(optional)Auswählen

Wir konnten das Zertifikat nicht hochladen. Bitte verwende eine .txt-Datei.

Code anzeigen

* * *

## Kombiniere mit ...

### ContextualHelp

Verwende [ContextualHelp](/flow/03-components/overlays/contextual-help/overview), um zusätzliche Informationen bereitzustellen.

Zertifikat(optional)Auswählen

Code anzeigen

### React Hook Form

Weitere Details zur Formularlogik und -validierung ist in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

DateienAuswählen

Hochladen

Code anzeigen

#### Overview

---

### Flex

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/flex/overview](https://mittwald.github.io/flow/03-components/structure/flex/overview)

# Flex

Flex ordnet Components innerhalb eines Flex-Containers an. Sie ermöglicht eine flexible, CSS-Flexbox-basierte Ausrichtung und Verteilung von Inhalten.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Flex)

## Playground

### Individuelles Layout mit Flex

Der Einsatz von Flex führt zu individuellen Layouts, die vom Designsystem abweichen. Das kann den Wartungsaufwand erhöhen und für User zu ungewohnten Interaktionen führen. Nutze Flex daher nur für gezielte, kleine Layout-Anpassungen und überlege sorgfältig, ob der Einsatz wirklich notwendig ist.

Schließe die Components, die in einem Flex-Container dargestellt werden sollen, mit `<Flex />` ein.
    
    
    import {
      LayoutCard,
      Flex,
    } from "@mittwald/flow-react-components";
    
    <Flex gap="m" justify="center">
      <LayoutCard />
      <LayoutCard />
      <LayoutCard />
    </Flex>
    

Code ausblenden

* * *

## Anwendungsbeispiele

### ListItem

In diesem Beispiel nutzen wir `<Flex />` innerhalb einer [List](/flow/03-components/structure/list/overview). Das ermöglicht es uns, gezielt den Content des ListItems zu platzieren – in diesem Fall den zweiten Text in der rechten unteren Ecke.

##### 

##### 

##### 

##### 

##### 

Show more

Code anzeigen

### LayoutCard

Hier benutzen wir `<Flex />` innerhalb einer [LayoutCard](/flow/03-components/structure/layout-card/overview). Dadurch können wir den Button gezielt unten anordnen.

Labore, similique. Earum, quas in. At dolorem corrupti blanditiis nulla deserunt laborum! Corrupti delectus aspernatur nihil nulla obcaecati ipsam porro sequi rem? Quam.

Install

Code anzeigen

#### Overview

---

### Form (React Hook Form)

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/form-react-hook-form/overview](https://mittwald.github.io/flow/03-components/form-controls/form-react-hook-form/overview)

# Form (React Hook Form)

Die Form-Component gruppiert Formularfelder und stellt einen Callback für das Absenden bereit. Sie ist ausschließlich in Kombination mit React Hook Form nutzbar.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/integrations/react-hook-form/components/Form/Form.tsx)

NameThe name of the project

ResetSave

## Playground

NameThe name of the project

ResetSave
    
    
    import { useForm } from "react-hook-form";
    import {
      Field,
      Form,
      SubmitButton,
      ResetButton,
    } from "@mittwald/flow-react-components/react-hook-form";
    import {
      ActionGroup,
      FieldDescription,
      Label,
      Section,
      TextField,
    } from "@mittwald/flow-react-components";
    
    export default () => {
      interface Values {
        name: string;
      }
      const form = useForm<Values>();
    
      const handleSubmit = (values: Values) =>
        alert(JSON.stringify(values));
    
      return (
        <Form form={form} onSubmit={handleSubmit}>
          <Section>
            <Field
              name="name"
              rules={{
                required: "The project name is required",
              }}
            >
              <TextField>
                <Label>Name</Label>
                <FieldDescription>
                  The name of the project
                </FieldDescription>
              </TextField>
            </Field>
            <ActionGroup>
              <ResetButton>Reset</ResetButton>
              <SubmitButton>Save</SubmitButton>
            </ActionGroup>
          </Section>
        </Form>
      );
    }
    

Code ausblenden

* * *

## Aktionen nach Submit

Aktionen, die nach dem Submit ausgeführt werden sollen – zum Beispiel ein Form-Reset oder einen Redirect – sollten im Return-Callback des Submit Handlers erfolgen. Dieser Callback kann auch asynchron sein.
    
    
    const submitHandler = () => {
      // submit logic
      return () => {
        form.reset();
      };
    };
    

NameThe name of the project

ResetSave

Code anzeigen

#### Overview

---

### HeaderNavigation

**Quelle:** [https://mittwald.github.io/flow/03-components/navigation/header-navigation/overview](https://mittwald.github.io/flow/03-components/navigation/header-navigation/overview)

# HeaderNavigation

Die HeaderNavigation ist eine horizontale Navigationskomponente, die als Navigationsleiste am oberen Rand einer Seite verwendet wird. Sie bietet Nutzenden Zugriff auf zentrale Bereiche einer Anwendung oder Website.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/HeaderNavigation)

## Playground

Verwende `<HeaderNavigation />`, um eine HeaderNavigation darzustellen. Enthaltene [Buttons](/flow/03-components/actions/button/overview) und [Links](/flow/03-components/navigation/link/overview) werden automatisch im passenden Style formatiert.
    
    
    import {
      Button,
      HeaderNavigation,
      IconSearch,
      Link,
    } from "@mittwald/flow-react-components";
    
    <HeaderNavigation aria-label="Header navigation">
      <Link href="#">Getting startet</Link>
      <Link href="#" aria-current="page">
        Komponenten
      </Link>
      <Button>
        <IconSearch />
      </Button>
    </HeaderNavigation>
    

Code ausblenden

* * *

## Mit ContextMenu

[Avatare](/flow/03-components/content/avatar/overview) und [Buttons](/flow/03-components/actions/button/overview) können als Trigger für das [ContextMenu](/flow/03-components/actions/context-menu/overview) verwendet werden.

Code anzeigen

* * *

## Color

### Light und Dark

Zusätzlich zu der Standard-Color, kann die HeaderNavigation in **Light** und **Dark** dargestellt werden. Beide Colors eigenen sich, wenn die Standardfarbe auf farbigen oder dekorativen Hintergründen nicht gut funktioniert.

Code anzeigen

Code anzeigen

**Light:** Verwende die Light-Color, bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color, bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von größer als 50.

#### Overview

---

### Heading

**Quelle:** [https://mittwald.github.io/flow/03-components/content/heading/overview](https://mittwald.github.io/flow/03-components/content/heading/overview)

# Heading

Headings strukturieren den Inhalt der Seite. Jede Heading hat dabei eine unterschiedliche Wichtigkeitsstufe.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Heading)

## Das ist eine Überschrift

## Playground

Verwende `<Heading />`, um eine Heading darzustellen.

## Das ist eine Überschrift
    
    
    import { Heading } from "@mittwald/flow-react-components";
    
    <Heading>Das ist eine Überschrift</Heading>
    

Code ausblenden

* * *

## Level

Über das Property `level` kann die Hierarchie der Heading angepasst werden. Standardmäßig wird eine Heading mit dem Level `H2` erzeugt. Die Seite sollte eine sinnvolle Struktur mit verschiedenen Ebenen aufweisen.

# Das ist eine Level 1 Überschrift

## Das ist eine Level 2 Überschrift

### Das ist eine Level 3 Überschrift

#### Das ist eine Level 4 Überschrift

##### Das ist eine Level 5 Überschrift

Code anzeigen

* * *

## Size

Über das Property `size` kann in Ausnahmefällen die Schriftgröße einer Heading manuell angepasst werden. Die Headings sollten dabei eine visuelle Hierarchie beibehalten.

## Das ist eine Überschrift für die eine benutzerdefinierte Größe gesetzt wurde

Code anzeigen

* * *

## Color

Die Heading wird standardmäßig in der Color `Primary` dargestellt.

### Light und Dark

Zusätzlich zu der Standard-Color, kann die Heading in Light und Dark dargestellt werden. Beide Colors eigenen sich, wenn die Standardfarbe auf farbigen oder dekorativen Hintergründen nicht gut funktioniert.

## Das ist eine Überschrift

Code anzeigen

## Das ist eine Überschrift

Code anzeigen

**Light:** Verwende die Light-Color bei dunklen Hintergründen mit einem HSL-Lightness-Wert unter 50.

**Dark:** Verwende die Dark-Color bei hellen, farbigen Hintergründen mit einem HSL-Lightness-Wert über 50.

* * *

## Kombiniere mit ...

### Icon

Verwende `<Icon />`, um die Heading mit einem dekorativen Icon zu unterstützen.

## Persönliche Informationen

Code anzeigen

### ContextualHelp

Verwende `<ContextualHelp />`, um Usern zusätzliche Hilfestellungen zu geben (z. B. bei Fachbegriffen).

## Rechte & Rollen

Code anzeigen

### Badge oder AlertBadge

Verwende `<Badge />`, um wichtige Metainformationen zu einem Abschnitt hervorzuheben, oder eine `<AlertBadge/>`, um einen Status anzuzeigen.

## E-Mail-Adresse

Speicherplatz voll

Code anzeigen

#### Overview

---

### Icon

**Quelle:** [https://mittwald.github.io/flow/03-components/content/icon/overview](https://mittwald.github.io/flow/03-components/content/icon/overview)

# Icon

Icons sind semantische Symbole, die Inhalte und Funktionen visualisieren und zur Verständlichkeit der Benutzeroberfläche beitragen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Icon)

## Playground

Für das Flow Design System kommen [Tabler Icons](https://tabler.io/icons) zum Einsatz. Eine Auswahl passender Icons wurde getroffen und mit festen Bedeutungen versehen. Alle relevanten Icons werden unten in der Icon-Bibliothek aufgelistet.

Um ein Icon einzufügen, wird eine Kombination aus „Icon“ und dem jeweiligen „Icon-Namen“ in einem Tag verwendet. Zum Beispiel sieht der Tag für das Icon „Home“ so aus: `<IconHome />`. Eine Übersicht aller verfügbaren Icons und ihrer Namen ist in der Icon-Bibliothek zu finden.
    
    
    import { IconHome } from "@mittwald/flow-react-components";
    
    <IconHome />
    

Code ausblenden

* * *

## Tabler Icon

Wenn kein passendes Icon in der Icon-Bibliothek vorhanden ist, kann alternativ ein Icon von [Tabler](https://tabler.io/icons) ausgewählt werden.

Code anzeigen

* * *

## SVG

Zusätzlich können eigene SVGs als Icons eingesetzt werden. Dabei ist darauf zu achten, dass sie im Stil der übrigen Icons konsistent bleiben.

Code anzeigen

* * *

## Sizes

Icons sind in den Größen **s, m** und **l** verfügbar.

Code anzeigen

* * *

## Kombiniere mit ...

### Align

Benutze die [Align](/flow/03-components/structure/align/overview)-Component, um ein Icon neben einem Text zu platzieren.

mail.agenturserver.de

Code anzeigen

* * *

## Icon-Bibliothek

Im Flow Design System haben ausgewählte Icons eine festgelegte Bedeutung. Sie lassen sich drei Typen zuordnen: **Functional, Decorative** und **Status**.

### Functional

Functional Icons besitzen eine eindeutige, allgemein verständliche Symbolik, die der User bereits kennt. Sie unterstützen User bei Navigation und Interaktion und werden häufig in Actions wie [Icon-Buttons](/flow/03-components/actions/button/overview) eingesetzt.

Home

Notification

Logout

Search

Menu

View

Filter

Sorting

ContextMenu

ContextMenuVertical

Maximize

Minimize

Edit

Share

Save

Settings

Delete

Copy

Backlink

ExternalLink

ChevronDown

ChevronLeft

ChevronRight

ChevronUp

Close

Show

Hide

Plus

Minus

Code

CheckboxChecked

CheckboxEmpty

CheckboxIndeterminate

RadioOff

RadioOn

Refresh

Check

Download

Redo

Undo

Upload

Send

Attachment

Pause

Start

Link

Code anzeigen

### Decorative

Decorative Icons tragen zur Ästhetik und zur emotionalen Wirkung der Benutzeroberfläche bei. Im Gegensatz zu den Functional Icons ist ihre Bedeutung jedoch oft nicht intuitiv erfassbar.

mittwald

Star

StarFilled

AI

Project

Server

Customer

Support

Email

DeliveryBox

EmailArchive

App

Domain

Vhost

Subdomain

Domainpfad

Certificate

DnsZone

DnsSubZone

Move

Directory

File

Database

Changelog

Extension

Order

Monitoring

Analytics

Ticket

Contributor

Payment

Contract

Camera

Backup

Cronjob

Member

User

Marketplace

SshSftp

LeadFyndr

Container

Volume

Number

Time

Date

Dashboard

Terminate

Security

SshKey

ForwardAddress

Autoresponder

Password

Desktop

Mobile

Registry

Picture

MainUser

Ssh

KnowledgeHint

Invite

Code anzeigen

### Status

Bestimmte Icons dienen der Anzeige des Status eines Elements.

Success

Warning

Danger

Info

Pending

Succeeded

Failed

Code anzeigen

#### Overview

---

### IllustratedMessage

**Quelle:** [https://mittwald.github.io/flow/03-components/content/illustrated-message/overview](https://mittwald.github.io/flow/03-components/content/illustrated-message/overview)

# IllustratedMessage

Die IllustratedMessage dient als Platzhalter, wenn der eigentliche Inhalt nicht angezeigt werden kann.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/IllustratedMessage)

## Keine Apps installiert

Lege deine erste App an, um mit der Arbeit an deiner Webseite loszulegen.App anlegen

## Playground

Verwende `<IllustratedMessage />`, um einen IllustratedMessage darzustellen. Sie besteht in der Regel aus `<Icon />`, `<Heading />` und einem `<Text />`. Sie kann durch einen `<Button />` oder einen `<Link />` ergänzt werden.

## Keine Apps installiert

Lege deine erste App an, um mit der Arbeit an deiner Webseite loszulegen.App anlegen
    
    
    import {
      Button,
      Heading,
      IconApp,
      IllustratedMessage,
      Text,
    } from "@mittwald/flow-react-components";
    
    <IllustratedMessage>
      <IconApp />
      <Heading>Keine Apps installiert</Heading>
      <Text>
        Lege deine erste App an, um mit der Arbeit an deiner
        Webseite loszulegen.
      </Text>
      <Button>App anlegen</Button>
    </IllustratedMessage>
    

Code ausblenden

* * *

## Color

### Danger

Bei Fehlern oder unzulässigem Zugriff hilft die IllustratedMessage Usern dabei zu verstehen, was nicht funktioniert und warum. Zusätzlich kann sie eine mögliche Lösung anbieten. Im Vergleich zu einem [Alert](/flow/03-components/status/alert/overview) wirkt sie freundlicher und gleicht fehlende Inhalte visuell besser aus.

## Kein Zugriff

Du hast keine Berechtigung, um auf diese Seite zuzugreifen.Zum Dashboard

Code anzeigen

### Light und Dark

Zusätzlich zu den Standard-Colors, kann die IllustratedMessage in **Light** und **Dark** dargestellt werden. Beide Colors sind Alternativen zu den herkömmlichen Farben, falls diese nicht auf farbigen oder dekorativen Hintergründen funktionieren.

## Keine Apps installiert

Lege deine erste App an, um mit der Arbeit an deiner Webseite loszulegen.App anlegen

Code anzeigen

## Keine Apps installiert

Lege deine erste App an, um mit der Arbeit an deiner Webseite loszulegen.App anlegen

Code anzeigen

**Light:** Verwende die Light-Color, bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color, bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von größer als 50.

* * *

## Kombiniere mit ...

### ActionGroup

Wenn mehr als eine Action benötigt wird, kann die IllustratedMessage auch mit einer [ActionGroup](/flow/03-components/actions/action-group/overview) kombiniert werden.

## Keine Apps installiert

Lege deine erste App an, um mit der Arbeit an deiner Webseite loszulegen.

ZurückApp anlegen
    
    
    import {
      ActionGroup,
      Button,
      Heading,
      IconApp,
      IllustratedMessage,
      Text,
    } from "@mittwald/flow-react-components";
    
    <IllustratedMessage>
      <IconApp />
      <Heading>Keine Apps installiert</Heading>
      <Text>
        Lege deine erste App an, um mit der Arbeit an deiner
        Webseite loszulegen.
      </Text>
      <ActionGroup>
        <Button variant="soft" color="secondary">
          Zurück
        </Button>
        <Button>App anlegen</Button>
      </ActionGroup>
    </IllustratedMessage>
    

Code ausblenden

#### Overview

---

### Image

**Quelle:** [https://mittwald.github.io/flow/03-components/content/image/overview](https://mittwald.github.io/flow/03-components/content/image/overview)

# Image

Mit der Image-Component lassen sich Bilder in der Benutzeroberfläche einbinden.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Image)

![mittwald](https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg)

## Playground

In `<Image />` wird über die Property `src` die Bildquelle festgelegt. Mithilfe weiterer Properties wie `width` und `height` lässt sich dessen Größe individuell anpassen.

![mittwald](https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg)
    
    
    import { Image } from "@mittwald/flow-react-components";
    
    <Image
      src="https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg"
      alt="mittwald"
      width={200}
    />
    

Code ausblenden

* * *

## Responsive Images

Um Bilder in unterschiedlichen Auflösungen für verschiedene Bildschirmgrößen bereitzustellen, eignet sich das `srcSet`-Attribut. Damit lassen sich mehrere Varianten einer Bilddatei hinterlegen – sowohl in niedriger als auch in hoher Auflösung –, die je nach Pixeldichte des Endgeräts automatisch ausgewählt werden. Weitere Informationen dazu finden sich im folgenden Artikel: [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_same_size_different_resolutions:~:text=Resolution%20switching%3A%20Same%20size%2C%20different%20resolutions).

* * *

## Border

Mit der Property `withBorder` erhält die Image-Component eine Border. Dieser ist insbesondere bei Bildern mit geringem Kontrast zum Hintergrund von Vorteil, da er die visuelle Abgrenzung verbessert und die Bildwahrnehmung unterstützt.

![mittwald](https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg)

Code anzeigen

* * *

## Fixes Seitenverhältnis

Die Property `aspectRatio` definiert das Seitenverhältnis der Image-Component. Weicht das Seitenverhältnis des eingebetteten Bildes ab – etwa durch eine größere Höhe oder Breite –, wird das Bild zentriert, und überstehende Bereiche außerhalb des festgelegten Verhältnisses werden ausgeblendet.

![mittwald](https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg)

Code anzeigen

#### Overview

---

### InlineCode

**Quelle:** [https://mittwald.github.io/flow/03-components/content/inline-code/overview](https://mittwald.github.io/flow/03-components/content/inline-code/overview)

# InlineCode

InlineCode hebt Code-Beispiele innerhalb eines Fließtextes hervor.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/InlineCode)

Gib `yarn start` ein um deine App zu starten.

## Playground

Schließe das Code-Beispiel im Tag `<InlineCode />` ein, um es als InlineCode darzustellen.

Gib `yarn start` ein um deine App zu starten.
    
    
    import {
      InlineCode,
      Text,
    } from "@mittwald/flow-react-components";
    
    <Text>
      Gib <InlineCode>yarn start</InlineCode> ein um deine App
      zu starten.
    </Text>
    

Code ausblenden

* * *

## Color

Zusätzlich zur Standard-Color kann InlineCode in den Colors **Light** und **Dark** dargestellt werden. Nutze diese Varianten, wenn die Standard-Color auf farbigen oder dekorativen Hintergründen keinen ausreichenden Kontrast (mind. 4,5:1) bietet.

Gib `yarn start` ein um deine App zu starten.

Code anzeigen

Gib `yarn start` ein um deine App zu starten.

Code anzeigen

#### Overview

---

### Label

**Quelle:** [https://mittwald.github.io/flow/03-components/content/label/overview](https://mittwald.github.io/flow/03-components/content/label/overview)

# Label

Labels werden in Formularen (z. B. TextField, NumberField) oder beim LabeledValue verwendet. Dort erläutern sie die Eingabeanforderungen oder setzen Informationen in einen Kontext.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Label)

Label

## Playground

Verwende `<Label />`, um ein Label anzuzeigen. Labels werden häufig innerhalb von anderen Komponenten eingesetzt.

Label
    
    
    import { Label } from "@mittwald/flow-react-components";
    
    <Label>Label</Label>
    

Code ausblenden

* * *

## States

Das Label hat 2 verschiedene States: **Default** und **Disabled**.

DefaultDisabled

Code anzeigen

**Disabled:** Das Label wird häufig zur Beschreibung komplexerer Komponenten verwendet. Daher übernimmt es automatisch den State, den die höhere Komponente hat. Ist zum Beispiel ein [TextField](/flow/03-components/form-controls/text-field/overview) oder [NumberField](/flow/03-components/form-controls/number-field/overview) gerade **disabled** , nimmt das Label den gleichen State an.

#### Overview

---

### LabeledValue

**Quelle:** [https://mittwald.github.io/flow/03-components/content/labeled-value/overview](https://mittwald.github.io/flow/03-components/content/labeled-value/overview)

# LabeledValue

Das LabeledValue zeigt eine statische Information und setzt sie durch ein beschreibendes Label in den passenden Kontext.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/LabeledValue)

Speicherplatz

20 GB

## Playground

Verwende `<LabeledValue />`, um ein LabeledValue darzustellen. Das LabeledValue setzt sich aus einem [Label](/flow/03-components/content/label/overview) und dem `<Content />` zusammen.

Speicherplatz

20 GB
    
    
    import {
      Content,
      Label,
      LabeledValue,
    } from "@mittwald/flow-react-components";
    
    <LabeledValue>
      <Label>Speicherplatz</Label>
      <Content>20 GB</Content>
    </LabeledValue>
    

Code ausblenden

* * *

## Kombiniere mit ...

Der Content-Bereich des LabeledValue kann entweder **Text** , **InlineCode** oder einen **Link** beinhalten. Jeder Content kann zudem durch einen **CopyButton** ergänzt werden.

### InlineCode

Mit `<InlineCode />` anstelle von `<Content />` kann ein [InlineCode](/flow/03-components/content/inline-code/overview) angezeigt werden.

Datenbankserver`mysql-kq3v4g.ge-s-hopovh.db.project.host`

Code anzeigen

### Link

Nutze einen `<Link />` anstelle von `<Content />`, um einen [Link](/flow/03-components/navigation/link/overview) anzuzeigen.

ServerMyServ-01

Projektdomainp-lol3qe.project.space

Code anzeigen

### CopyButton

Verwende `<CopyButton />` innerhalb des `<LabeledValue />`, um einen [CopyButton](/flow/03-components/actions/copy-button/overview) am Ende des Contents anzuzeigen.

Short-ID

p-wut3uw

Datenbankserver

mysql-kq3v4g.ge-s-hopovh.db.project.host

Projektdomainp-lol3qe.project.space

Code anzeigen

* * *

#### Overview

---

### LayoutCard

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/layout-card/overview](https://mittwald.github.io/flow/03-components/structure/layout-card/overview)

# LayoutCard

Eine LayoutCard ist ein einfacher Container, der mit beliebigem Inhalt gefüllt werden kann.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/LayoutCard)

Inhalt der Layout Card

## Playground

Verwende `<LayoutCard />`, um eine LayoutCard zu erhalten. Innerhalb dieser kann beliebiger Inhalt eingefügt werden.

Inhalt der Layout Card
    
    
    import { LayoutCard } from "@mittwald/flow-react-components";
    
    <LayoutCard>Inhalt der Layout Card</LayoutCard>
    

Code ausblenden

#### Overview

---

### LightBox

**Quelle:** [https://mittwald.github.io/flow/03-components/overlays/light-box/overview](https://mittwald.github.io/flow/03-components/overlays/light-box/overview)

# LightBox

Eine LightBox zeigt Bilder vergrößert und als Overlay mit abgedunkeltem Hintergrund an, um den Fokus auf den Inhalt zu legen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/LightBox)

![](https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg)

## Playground

Verwende `<LightBox />` um eine LightBox anzuzeigen und kombiniere `<LightBoxTrigger />` und `<Button />` um die LightBox in der Oberfläche aufrufbar zu machen.

Open LightBox
    
    
    import {
      Button,
      Image,
      LightBox,
      LightBoxTrigger,
    } from "@mittwald/flow-react-components";
    
    <LightBoxTrigger>
      <Button>Open LightBox</Button>
      <LightBox>
        <Image src="https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg" />
      </LightBox>
    </LightBoxTrigger>
    

Code ausblenden

* * *

## Mit ActionGroup

In der LightBox kann eine [ActionGroup](/flow/03-components/actions/action-group/overview) verwendet werden, diese richtet sich automatisch vertikal am Bild aus.

Open LightBox

Code anzeigen

* * *

## Mit Image Trigger

Als Trigger kann auch das [Image](/flow/03-components/content/image/overview) selbst verwendet werden. Kombiniere dazu `<Button />` mit `<Image />`.

![mittwald](https://mittwald.github.io/flow/assets/mittwald_logo_rgb.jpg)

Code anzeigen

* * *

## FitScreen

Standardmäßig passt sich der Inhalt der LightBox an die Bildschirmgröße an. Wird die Property `fitScreen` auf `false` gesetzt, wird der Inhalt in seiner vollen Höhe dargestellt. Falls der verfügbare Platz nicht ausreicht, erscheint eine vertikale Scrollbar. Dieses Verhalten ist besonders hilfreich bei der Darstellung von Inhalten mit großer vertikaler Ausdehnung, wie z. B. mehrseitigen PDFs.

Open LightBox

Code anzeigen

#### Overview

---

### Link

**Quelle:** [https://mittwald.github.io/flow/03-components/navigation/link/overview](https://mittwald.github.io/flow/03-components/navigation/link/overview)

# Link

Ein Link dient in erster Linie dazu, den User zu einer anderen Seite zu navigieren. Darüber hinaus kann er auch einen Download starten oder zu einem bestimmten Ankerpunkt auf der Seite führen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Link)

Zum Dashboard

## Playground

Verwende `<Link />`, um einen Link darzustellen.

Zum Dashboard
    
    
    import { Link } from "@mittwald/flow-react-components";
    
    <Link href="#">Zum Dashboard</Link>
    

Code ausblenden

* * *

### Inline

Links innerhalb des `<Text />` -Tags werden automatisch als Inline Link gerendert.

Sieh dir unser Onboarding an, um weitere Informationen zu erhalten.

Code anzeigen

* * *

### Color

Der Link kann in den drei Colors **Primary** , **Light** und **Dark** dargestellt werden. Light und Dark eignen sich besonders gut für Links auf farbigen/dekorativen Hintergründen.

Primary

Code anzeigen

Light

Code anzeigen

Dark

Code anzeigen

**Primary:** Im Standardfall wird die Color Primary verwendet, da das leuchtende Blau als Hinweis (Signifier) darauf dient, dass es sich um einen anklickbaren Link handelt.

**Light:** Verwende die Light-Color bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von mehr als 50.

* * *

## Kombiniere mit ...

### Icon

Rechts neben dem Link kann ein `Icon` eingefügt werden.

#### Externer Link

Das `IconExternalLink` signalisiert dem User, dass es sich um einen externen Link handelt – also einen Verweis auf eine andere Domain –, der in einem neuen Tab geöffnet wird. Das Icon erscheint automatisch neben dem Link, wenn das Attribut `target="_blank"` gesetzt ist.

[Externer Link](https://mittwald.de)

Code anzeigen

#### Download

Das `IconDownload` zeigt an, dass es sich um einen Download-Link handelt. Das Icon wird automatisch neben dem Link angezeigt, wenn das `download` Property gesetzt ist.

Rechnung herunterladen

Code anzeigen

* * *

### States

Ein Link hat vier verschiedene States: **Default** , **Hover** , **Pressed** und **Disabled**.

Disabled

Code anzeigen

#### Overview

---

### List

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/list/overview](https://mittwald.github.io/flow/03-components/structure/list/overview)

# List

Die List bildet einen strukturierten Rahmen für mehrere ListItems und bietet Funktionen wie Sortierung, Filter und Suche.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/List)

##### 

##### 

##### 

##### 

##### 

## Playground

Mit `typedList<T>` lässt sich eine List für einen bestimmten Datentyp erzeugen.

Im Tab Develop stehen verschiedene Anleitungen zum technischen Aufbau bereit.

Anlegen

ListSortingTyp

##### 

##### 

##### 

##### 

##### 

Show more
    
    
    import {
      ActionGroup,
      AlertBadge,
      Avatar,
      Button,
      ContextMenu,
      Heading,
      IconDomain,
      IconSubdomain,
      MenuItem,
      Text,
      typedList,
    } from "@mittwald/flow-react-components";
    import {
      type Domain,
      domains,
    } from "@/content/03-components/structure/list/examples/domainApi";
    
    export default () => {
      const DomainList = typedList<Domain>();
    
      return (
        <DomainList.List
          batchSize={4}
          aria-label="Domains"
          defaultViewMode="list"
        >
          <DomainList.StaticData data={domains} />
          <ActionGroup>
            <Button color="accent">Anlegen</Button>
          </ActionGroup>
          <DomainList.Search />
          <DomainList.Filter
            property="type"
            mode="some"
            name="Typ"
          />
          <DomainList.Sorting
            property="hostname"
            name="Domain A bis Z"
            direction="asc"
          />
          <DomainList.Sorting
            property="hostname"
            name="Domain Z bis A"
            direction="desc"
          />
          <DomainList.Table>
            <DomainList.TableHeader>
              <DomainList.TableColumn>
                Name
              </DomainList.TableColumn>
              <DomainList.TableColumn>
                Type
              </DomainList.TableColumn>
              <DomainList.TableColumn>
                TLD
              </DomainList.TableColumn>
              <DomainList.TableColumn>
                Hostname
              </DomainList.TableColumn>
            </DomainList.TableHeader>
    
            <DomainList.TableBody>
              <DomainList.TableRow>
                <DomainList.TableCell>
                  {(domain) => domain.domain}
                </DomainList.TableCell>
                <DomainList.TableCell>
                  {(domain) => domain.type}
                </DomainList.TableCell>
                <DomainList.TableCell>
                  {(domain) => domain.tld}
                </DomainList.TableCell>
                <DomainList.TableCell>
                  {(domain) => domain.hostname}
                </DomainList.TableCell>
              </DomainList.TableRow>
            </DomainList.TableBody>
          </DomainList.Table>
          <DomainList.Item
            textValue={(domain) => domain.domain}
            showTiles
          >
            {(domain) => (
              <DomainList.ItemView>
                <Avatar
                  color={
                    domain.type === "Domain" ? "blue" : "teal"
                  }
                >
                  {domain.type === "Domain" ? (
                    <IconDomain />
                  ) : (
                    <IconSubdomain />
                  )}
                </Avatar>
                <Heading>
                  {domain.hostname}
                  {!domain.verified && (
                    <AlertBadge status="warning">
                      Unverifiziert
                    </AlertBadge>
                  )}
                </Heading>
                <Text>{domain.type}</Text>
    
                <ContextMenu>
                  <MenuItem>Details anzeigen</MenuItem>
                  <MenuItem>Löschen</MenuItem>
                </ContextMenu>
              </DomainList.ItemView>
            )}
          </DomainList.Item>
        </DomainList.List>
      );
    }
    

Code ausblenden

* * *

## Ansichten

Die Liste unterstützt die Ansichten **Liste, Raster** und **Tabelle**. Wird mehr als eine Ansicht verwendet, kann über ein Menü zwischen den Ansichten gewechselt werden. Die Default-Ansicht wird über das Property `defaultViewMode` festgelegt.

### Listenansicht

Nutze `<List.Item />`, um die List in der Listenansicht darzustellen.

##### 

##### 

##### 

##### 

##### 

Code anzeigen

### Rasteransicht

Für die Rasteransicht wird ebenfalls das `<List.Item />` verwendet. Nutze `showTiles`, um diese Ansicht zu aktivieren. Die Listenansicht kann deaktiviert werden, indem `showList` auf `false` gesetzt wird.

Über das `maxTileWidth`-Property lässt sich die maximale Breite der Kacheln steuern.

##### 

##### 

##### 

##### 

##### 

Code anzeigen

### Tabellenansicht

Nutze `<List.Table />`, um die List als [Table](/flow/03-components/structure/table) darzustellen.  
  
---  
  
Code anzeigen

* * *

## ListItems

In einer List lassen sich ListItems mit unterschiedlichen Interaktions- und Aufbaumöglichkeiten einsetzen.

### Mit Link

Ein ListItem bietet das Property `href` an, um das Element zu verlinken.

##### 

##### 

##### 

##### 

##### 

Code anzeigen

### Mit Accordion

Das Accordion-Verhalten wird über die `accordion`-Property aktiviert. Dadurch lässt sich ein ListItem per Klick ein- oder ausklappen. Der erweiterte Inhalt wird in `<Content slot="bottom" />` platziert.

##### 

##### 

##### 

##### 

##### 

Code anzeigen

### Mit Checkboxen

[Checkboxen](/flow/03-components/form-controls/checkbox) in einem ListItem werden automatisch am Anfang der Zeile angeordnet. Die Funktionalität der Checkbox wird nicht von der List gesteuert und muss individuell implementiert werden. Achte bei der Implementierung jedoch darauf, dass die gesamte Zeile zur Auswahl des Elements genutzt werden kann. Nutze dafür `onAction` der List.

List

##### 

##### 

##### 

##### 

##### 

Code anzeigen

### Mit Content Slots

In einem ListItem kann zusätzlicher `<Content/ >` (Top und Bottom Content) platziert werden. Die Position wird über das `slot`-Property gesteuert.

List

##### 

##### 

##### 

##### 

##### 

Code anzeigen

### Mit ColumnLayout

Dem ListItem können die [ColumnLayout](/flow/03-components/structure/column-layout) Properties `s`, `m` und `l` mitgegeben werden, um das Seitenverhältnis sowie das Umbruchverhalten von Header und Content zu steuern.

##### 

##### 

##### 

##### 

##### 

Code anzeigen

Da für die ColumnLayout-Spalten auch `null` gesetzt werden kann, ist es möglich, nicht zwingend benötigten Content in kleineren Ansichten auszublenden. In diesem Fall werden auch die entsprechenden Content Slots nicht angezeigt.

##### 

##### 

##### 

##### 

##### 

Code anzeigen

### Mit ActionGroup

Verwende eine ActionGroup innerhalb des `<Content />`, um [Buttons](/flow/03-components/actions/button) in der List zu platzieren.

##### 

##### 

##### 

##### 

##### 

Code anzeigen

* * *

## Einstellmöglichkeiten

Die List bietet **Sortierung, Filter, Suche** und **Pagination** an. Detaillierte Anleitungen zu den einzelnen Einstellmöglichkeiten stehen unter dem Develop-Tab der List zur Verfügung.

Anlegen

ListSortingTyp

##### 

##### 

##### 

##### 

##### 

Show more

Code anzeigen

### Sortierung

Nutze `<List.Sorting />` innerhalb der List, um eine Sortiermethode anzulegen.

### Filter

Über `<List.Filter />` lassen sich Filtermöglichkeiten für die List anlegen.

### Suche

Verwende `<List.Search />` innerhalb der List, um ein [SearchField](/flow/03-components/form-controls/search-field) anzuzeigen. Standardmäßig wird die Suche automatisch gestartet. Soll die Suche nur beim Drücken auf Enter ausgelöst werden, kann das Property `autoSubmit` auf `false` gesetzt werden.

### Pagination

Die Pagination ist standardmäßig bei jeder List aktiviert, kann jedoch über `hidePagination` deaktiviert werden. Über die `batchSize`-Property kann festgelegt werden, wie viele Einträge gleichzeitig angezeigt werden sollen.

* * *

## Kombiniere mit ...

### ActionGroup

Verwende `<ActionGroup />` innerhalb der List, um eine [ActionGroup](/flow/03-components/actions/action-group) anzuzeigen. Hier können eine oder mehrere Aktionen definiert werden, die sich direkt auf die Liste beziehen.

Anlegen

##### 

##### 

##### 

##### 

##### 

Code anzeigen

### Summary

Verwende eine `<ListSummary />`, um eine Zusammenfassung anzuzeigen, beispielsweise die Gesamtsumme der Beträge. Über das `position`-Property wird festgelegt, ob die Summary oberhalb oder unterhalb der List erscheint.

##### 

##### 

##### 

##### 

##### 

Code anzeigen

#### Overview

---

### LoadingSpinner

**Quelle:** [https://mittwald.github.io/flow/03-components/status/loading-spinner/overview](https://mittwald.github.io/flow/03-components/status/loading-spinner/overview)

# LoadingSpinner

Der LoadingSpinner signalisiert dem User, dass Inhalte im Hintergrund geladen werden und in Kürze verfügbar sind.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/LoadingSpinner)

## Playground

Verwende `<LoadingSpinner>`, um einen LoadingSpinner darzustellen.
    
    
    import { LoadingSpinner } from "@mittwald/flow-react-components";
    
    <LoadingSpinner />
    

Code ausblenden

* * *

## Color

Im Standardfall wird der LoadingSpinner in der Color **Default** verwendet. Diese ist in einem neutralen Ton gehalten, um gute Sichtbarkeit zu gewährleisten, ohne von der übrigen Benutzeroberfläche abzulenken.

### Light und Dark

Zusätzlich zur Standard-Color kann der LoadingSpinner auch in den Varianten **Light** und **Dark** dargestellt werden. Beide Colors eignen sich, wenn die Standard-Color auf farbigen oder dekorativen Hintergründen nicht genug Kontrast bietet.
    
    
    import { LoadingSpinner } from "@mittwald/flow-react-components";
    
    <LoadingSpinner color="light" />
    

Code ausblenden
    
    
    import { LoadingSpinner } from "@mittwald/flow-react-components";
    
    <LoadingSpinner color="dark" />
    

Code ausblenden

**Light:** Verwende die Light-Color, bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color, bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von größer als 50.

#### Overview

---

### Markdown

**Quelle:** [https://mittwald.github.io/flow/03-components/content/markdown/overview](https://mittwald.github.io/flow/03-components/content/markdown/overview)

# Markdown

Die Markdown Component rendert Texteingaben im Markdown-Format.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Markdown)

Lorem ipsum dolor sit amet **consectetur adipisicing** elit. Cumque eius _quam quas vel voluptas_ ullam aliquid _**fugit**_.

## Playground

Um eine Texteingabe als Markdown zu rendern, schließe sie mit dem `<Markdown />`-Tag ein.

Lorem ipsum dolor sit amet **consectetur adipisicing** elit. Cumque eius _quam quas vel voluptas_ ullam aliquid _**fugit**_.
    
    
    import { Markdown } from "@mittwald/flow-react-components";
    
    <Markdown>
      Lorem ipsum dolor sit amet **consectetur adipisicing**
      elit. Cumque eius *quam quas vel voluptas* ullam aliquid
      ***fugit***.
    </Markdown>
    

Code ausblenden

* * *

## Color

Zusätzlich zur Standard-Color kann Markdown auch in den Colors **Light** und **Dark** dargestellt werden. Beide Colors sind Alternativen zur Standard-Color, falls diese nicht auf farbigen oder dekorativen Hintergründen funktioniert.

Lorem ipsum dolor sit amet **consectetur adipisicing** elit. Cumque eius _quam quas vel voluptas_ ullam aliquid _**fugit**_.

Code anzeigen

Lorem ipsum dolor sit amet **consectetur adipisicing** elit. Cumque eius _quam quas vel voluptas_ ullam aliquid _**fugit**_.

Code anzeigen

**Light:** Verwende die Light-Color bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von größer als 50.

* * *

## Unterstützte Syntax

### Headings

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

Code anzeigen

### Bold und Italic

Lorem ipsum dolor sit amet **consectetur adipisicing** elit. Cumque eius _quam quas vel voluptas_ ullam aliquid _**fugit**_.

Code anzeigen

### Unordered Lists

  * Unordered list item 1
  * Unordered list item 2
  * Unordered list item 3

Code anzeigen

### Ordered Lists

  1. Ordered list item 1
  2. Ordered list item 2
  3. Ordered list item 3

Code anzeigen

### Quote

> This is a quote

Code anzeigen

### Link

[mittwald.de](https://mittwald.de).

Code anzeigen

### InlineCode

`127.0.0.1`

Code anzeigen

### CodeBlock
    
    
    {
        "projectId": "b3a96db5-ba8f-40dd-9100-bab43ac1f698",
        "name": "My Project"
    }
    

Code anzeigen

## Offset

Das Property `headingOffset` verschiebt alle Überschriften um den angegebenen Offset.

## Heading Level 1 -> 2

### Heading Level 2 -> 3

#### Heading Level 3 -> 4

##### Heading Level 4 -> 5

###### Heading Level 5 -> 6

###### Heading Level 6 -> 6

Code anzeigen

#### Overview

---

### MarkdownEditor

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/markdown-editor/overview](https://mittwald.github.io/flow/03-components/form-controls/markdown-editor/overview)

# MarkdownEditor

Der MarkdownEditor ist eine Komponente zur Erstellung und Formatierung von Textinhalten mithilfe von Markdown-Syntax. Er unterstützt User bei der schnellen und konsistenten Textformatierung und stellt eine Vorschauansicht zur Verfügung.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/MarkdownEditor)

## Playground

Verwende `<MarkdownEditor />`, um einen MarkdownEditor darzustellen.
    
    
    import { MarkdownEditor } from "@mittwald/flow-react-components";
    
    <MarkdownEditor
      aria-label="Nachricht"
      placeholder="Schreibe eine Nachricht ..."
    />
    

Code ausblenden

* * *

## Disabled

Nutze das Property `isDisabled`, um den MarkdownEditor als disabled anzuzeigen.

Code anzeigen

* * *

## Character Count

Mit der Property `showCharacterCount` wird automatisch eine `<FieldDescription />` ergänzt, die die aktuelle Zeichenanzahl und – sofern angegeben – die maximale Zeichenanzahl anzeigt.

0/100 characters

Code anzeigen

* * *

## Resize

### Automatisch

Mit der Property `autoResizeMaxRows` lässt sich eine maximale Höhe definieren, bis zu der sich der MarkdownEditor automatisch an den Inhalt anpasst.

Code anzeigen

### Manuell

Über die Properties `allowResize`, `allowVerticalResize` oder `allowHorizontalResize` kann die Größe des MarkdownEditors manuell verändert werden.

Code anzeigen

### Kombiniert

Beide Resize-Varianten lassen sich auch miteinander kombinieren. In diesem Fall passt sich der MarkdownEditor zunächst automatisch an, bis die Größe einmal manuell geändert wird. Danach bleibt er in der eingestellten Größe bestehen.

Code anzeigen

* * *

## Kombiniere mit ...

### React Hook Form

Weitere Details zur Formularlogik und -validierung sind in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

Senden

Code anzeigen

### Chat

Senden

Code anzeigen

#### Overview

---

### Message

**Quelle:** [https://mittwald.github.io/flow/03-components/chat/message/overview](https://mittwald.github.io/flow/03-components/chat/message/overview)

# Message

Eine Message stellt Nachrichten mit Autor-Informationen, Datum und Aktionen übersichtlich dar.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Message)

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

## Playground

Verwende `<Message />`, um eine Message darzustellen.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    
    
    import {
      Align,
      Avatar,
      Button,
      Content,
      ContextMenu,
      ContextMenuTrigger,
      Header,
      Initials,
      MenuItem,
      Message,
      Text,
    } from "@mittwald/flow-react-components";
    
    <Message>
      <Header>
        <ContextMenuTrigger>
          <Button />
          <ContextMenu>
            <MenuItem>Bearbeiten</MenuItem>
            <MenuItem>Löschen</MenuItem>
          </ContextMenu>
        </ContextMenuTrigger>
        <Align>
          <Avatar>
            <Initials>Max Mustermann</Initials>
          </Avatar>
          <Text>
            <b>Max Mustermann</b>
            Organisationsinhaber
          </Text>
        </Align>
        <Text>01.09.2024, 12:45</Text>
      </Header>
    
      <Content>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Content>
    </Message>
    

Code ausblenden

* * *

## Type

Eine Message hat im Default den Type `responder`. Stellt man diese Property auf `sender`, ändert sich die Hintergrundfarbe und Anordnung der Message.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Code anzeigen

* * *

## Kombiniere mit ...

### Markdown

Um eine Texteingabe innerhalb der Message als [Markdown](/flow/03-components/content/markdown/overview) zu rendern, kann die `<Markdown />`-Component verwendet werden.

Lorem ipsum dolor sit amet, consetetur **sadipscing elitr** , sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed _diam voluptua_. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum _**dolor sit amet**_.

Code anzeigen

#### Overview

---

### MessageThread

**Quelle:** [https://mittwald.github.io/flow/03-components/chat/message-thread/overview](https://mittwald.github.io/flow/03-components/chat/message-thread/overview)

# MessageThread

Der MessageThread gruppiert mehrere Messages in einem zusammenhängenden Gesprächsverlauf.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/MessageThread)

Lorem ipsum dolor sit amet consectetur adipisicing.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius quam.

## Playground

Schließe mehrere [Messages](/flow/03-components/chat/message/overview) in einem `<MessageThread />` ein, um diese übersichtlich darzustellen. Nutze einen `<MessageSeparator />`, um wichtige Ereignisse (z. B. Statusänderungen oder der Eintritt neuer Teilnehmer) hervorzuheben.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius quam quas vel voluptas, ullam aliquid fugit. Voluptate harum accusantium rerum ullam modi blanditiis vitae.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius quam quas vel voluptas, ullam aliquid fugit. Voluptate harum accusantium rerum ullam modi blanditiis vitae, laborum ea tempore, dolore voluptas. Earum pariatur, similique corrupti id officia perferendis. Labore, similique. Earum, quas in. At dolorem corrupti blanditiis nulla deserunt laborum! Corrupti delectus aspernatur nihil nulla obcaecati ipsam porro sequi rem? Quam.

* * *

Ticket geschlossen

Lorem ipsum dolor sit amet.
    
    
    import {
      Align,
      Avatar,
      Content,
      Header,
      Initials,
      Message,
      MessageSeparator,
      MessageThread,
      Text,
    } from "@mittwald/flow-react-components";
    
    <MessageThread>
      <Message type="sender">
        <Header>
          <Align>
            <Avatar>
              <Initials>Max Mustermann</Initials>
            </Avatar>
            <Text>
              <b>Max Mustermann</b>
            </Text>
          </Align>
        </Header>
        <Content>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cumque eius quam quas vel voluptas, ullam
            aliquid fugit. Voluptate harum accusantium rerum
            ullam modi blanditiis vitae.
          </Text>
        </Content>
      </Message>
    
      <Message type="responder">
        <Header>
          <Align>
            <Avatar>
              <Initials>John Doe</Initials>
            </Avatar>
            <Text>
              <b>John Doe</b>
            </Text>
          </Align>
        </Header>
        <Content>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cumque eius quam quas vel voluptas, ullam
            aliquid fugit. Voluptate harum accusantium rerum
            ullam modi blanditiis vitae, laborum ea tempore,
            dolore voluptas. Earum pariatur, similique corrupti
            id officia perferendis. Labore, similique. Earum,
            quas in. At dolorem corrupti blanditiis nulla
            deserunt laborum! Corrupti delectus aspernatur nihil
            nulla obcaecati ipsam porro sequi rem? Quam.
          </Text>
        </Content>
      </Message>
    
      <MessageSeparator>Ticket geschlossen</MessageSeparator>
    
      <Message type="sender">
        <Header>
          <Align>
            <Avatar>
              <Initials>Max Mustermann</Initials>
            </Avatar>
            <Text>
              <b>Max Mustermann</b>
            </Text>
          </Align>
        </Header>
        <Content>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Content>
      </Message>
    </MessageThread>
    

Code ausblenden

#### Overview

---

### Modal

**Quelle:** [https://mittwald.github.io/flow/03-components/overlays/modal/overview](https://mittwald.github.io/flow/03-components/overlays/modal/overview)

# Modal

Ein Modal zeigt Inhalte zentriert als Overlay über der Hauptseite an, wodurch der Nutzer sich voll auf den Inhalt des Modals konzentrieren kann.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Modal)

Eine Organisation kannst du dir wie ein Unternehmen vorstellen. An diesem Ort verwaltest du deine Mitarbeiter, Zahlungsmodalitäten und kannst deine Rechnungen einsehen.

Organisationsname(optional)

Organisation anlegenAbbrechen

## Playground

Verwende `<Modal />`, um ein Modal darzustellen. Da ein Modal in der Regel nur durch eine Aktion des Nutzers erscheint, wird ein `<ModalTrigger />` in Kombination z. B. einem `<Button />` benötigt.

Modal öffnen
    
    
    import {
      Action,
      ActionGroup,
      Button,
      Content,
      Heading,
      Label,
      Modal,
      ModalTrigger,
      Section,
      Text,
      TextField,
    } from "@mittwald/flow-react-components";
    import { sleepLong } from "@/content/03-components/actions/action/examples/lib";
    
    <ModalTrigger>
      <Button>Modal öffnen</Button>
      <Modal>
        <Heading>Organisation anlegen</Heading>
        <Content>
          <Section>
            <Text>
              Eine Organisation kannst du dir wie ein
              Unternehmen vorstellen. An diesem Ort verwaltest
              du deine Mitarbeiter, Zahlungsmodalitäten und
              kannst deine Rechnungen einsehen.
            </Text>
            <TextField isRequired>
              <Label>Organisationsname</Label>
            </TextField>
          </Section>
        </Content>
        <ActionGroup>
          <Action closeOverlay="Modal">
            <Action action={sleepLong}>
              <Button color="accent">
                Organisation anlegen
              </Button>
            </Action>
            <Button variant="soft" color="secondary">
              Abbrechen
            </Button>
          </Action>
        </ActionGroup>
      </Modal>
    </ModalTrigger>
    

Code ausblenden

* * *

## Variants

### OffCanvas

Neben der klassischen Darstellung lässt sich das Modal auch als OffCanvas öffnen.

OffCanvas öffnen

Code anzeigen

* * *

## Sizes

Das Modal gibt es in zwei Standardgrößen: **S** und **M**. Beide Größen sind sowohl als klassisches Modal als auch in der OffCanvas-Variante verfügbar. In der OffCanvas-Darstellung kannst du außerdem eine individuelle Größe je nach Anwendungsfall festlegen.

Modal SModal MOffCanvas SOffCanvas M

Code anzeigen

**Size S:** Ein Modal in der Size S (Breite 660 px) wird zum Beispiel für einfache Abfragen, ob etwas gelöscht werden soll, verwendet.

**Size M:** Ein Modal in der Size M (Breite 900 px) wird für komplexere Dialoge (z. B. Erstellungs-Prozesse mit mehreren Eingabefeldern) verwendet.

* * *

## Kombiniere mit ...

### Controller

Neben dem `<ModalTrigger />` kann das Modal auch über einen Controller gesteuert werden.

Dieser Controller steht auch in Modals zur Verfügung, die über den ModalTrigger geöffnet wurden.

Modal öffnen

Code anzeigen

### Form

Verwende eine Form innerhalb eines Modals wie im folgenden Beispiel.

Modal öffnen

Code anzeigen

#### Overview

---

### Navigation

**Quelle:** [https://mittwald.github.io/flow/03-components/navigation/navigation/overview](https://mittwald.github.io/flow/03-components/navigation/navigation/overview)

# Navigation

Die Navigation dient als zentrales Element zur Orientierung innerhalb einer Anwendung oder Website. Sie besteht aus mehreren Menüeinträgen, die zu unterschiedlichen Unterseiten führen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Navigation)

## Playground

Verwende `<Navigation />`, um eine Navigation darzustellen.
    
    
    import {
      Link,
      Navigation,
    } from "@mittwald/flow-react-components";
    
    <Navigation aria-label="Companies">
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
    

Code ausblenden

* * *

## Mit Icons

Menüeinträge lassen sich optional mit einem [Icon](/flow/03-components/content/icon/overview) versehen. Dies bietet Usern eine zusätzliche visuelle Orientierung über den Inhalt der verlinkten Seite.

Code anzeigen

* * *

## Mit Gruppen

Mehrere Menüeinträge können zu Gruppen zusammengefasst werden. Zur Kennzeichnung dieser Gruppen eignet sich ein [Label](/flow/03-components/content/label/overview).

Code anzeigen

* * *

## Mit einklappbaren Gruppen

Mit der Property `collapsable` können Menügruppen ein- und ausklappbar gemacht werden. Gerade bei umfangreichen Navigationen hilft dies, die Übersicht zu wahren.

Code anzeigen

* * *

## Mit Separator

Zur klaren Trennung von Menügruppen kann ein [Separator](/flow/03-components/structure/separator/overview) verwendet werden.

Code anzeigen

#### Overview

---

### Notification

**Quelle:** [https://mittwald.github.io/flow/03-components/status/notification/overview](https://mittwald.github.io/flow/03-components/status/notification/overview)

# Notification

Die Notification informiert die User über wichtige System- oder Statusmeldungen. Sie sollte sparsam eingesetzt werden, um die Aufmerksamkeit des Users zu erhalten.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Notification)

#### E-Mail-Adresse archiviert

Die E-Mail-Adresse **example@mittwald.de** wurde archiviert.

## Playground

Verwende `<Notification />`, um eine Notification darzustellen. Um eine Notification auszulösen und sie zu steuern, kann der [NotificationProvider](/flow/03-components/status/notification-provider/overview) genutzt werden.

#### E-Mail-Adresse archiviert

Die E-Mail-Adresse **example@mittwald.de** wurde archiviert.
    
    
    import {
      Heading,
      Notification,
      Text,
    } from "@mittwald/flow-react-components";
    
    <Notification>
      <Heading>E-Mail-Adresse archiviert</Heading>
      <Text>
        Die E-Mail-Adresse <b>example@mittwald.de</b> wurde
        archiviert.
      </Text>
    </Notification>
    

Code ausblenden

* * *

## Status

Je nach Anwendungsfall stehen vier Status-Farben zur Auswahl: Info, Warning, Danger und Success.

#### E-Mail-Adresse archiviert

Die E-Mail-Adresse **example@mittwald.de** wurde archiviert.

#### Speicher fast voll

Der Speicherplatz im Projekt **My Project** ist zu 80% voll.

#### Kein SSL-Zertifikat

Für **example.de** konnte kein SSL-Zertifikat ausgestellt werden.

#### App installiert

Deine App **My WordPress** wurde erfolgreich installiert.

Code anzeigen

**Info:** Allgemeine Systemzustände oder laufende Prozesse, die keine Aktion erfordern.

**Warning:** Hinweise auf mögliche Risiken mit einer klaren Handlungsempfehlung.

**Danger:** Akute Fehlerzustände oder kritische Probleme, die sofortige Aufmerksamkeit erfordern.

**Success:** Abgeschlossene, erfolgreiche oder positiv bewertete Zustände.

#### Overview

---

### NotificationProvider

**Quelle:** [https://mittwald.github.io/flow/03-components/status/notification-provider/overview](https://mittwald.github.io/flow/03-components/status/notification-provider/overview)

# NotificationProvider

Der NotificationProvider dient zur Anzeige und Steuerung von Notifications.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/NotificationProvider)

Trigger Notification

## Initialisierung

Damit Notifications angezeigt werden können, muss der `<NotificationProvider />` als übergeordnete Component eingebunden werden.

Meine App
    
    
    import { NotificationProvider } from "@mittwald/flow-react-components";
    
    <NotificationProvider>Meine App</NotificationProvider>
    

Code ausblenden

* * *

## Notifications anzeigen

Über den `useNotificationController()` Hook kann auf den Notification-Controller zugegriffen werden. Dieser stellt zum Anzeigen einer Notification die `add()`-Methode bereit.

Trigger Notification
    
    
    import {
      Button,
      Heading,
      Notification,
      Text,
      useNotificationController,
    } from "@mittwald/flow-react-components";
    
    export default () => {
      const controller = useNotificationController();
    
      return (
        <Button
          onPress={() =>
            controller.add(
              <Notification
                onClick={() => alert("Notification clicked")}
                status="warning"
              >
                <Heading>No SSL certificate</Heading>
                <Text>
                  No SSL certificate could be issued for
                  examples.de.
                </Text>
              </Notification>,
            )
          }
        >
          Trigger Notification
        </Button>
      );
    }
    

Code ausblenden

* * *

## Automatisches Schließen

Ist das Property `autoClose` gesetzt, verschwinden die Notifications nach 10 Sekunden.

Trigger Notification

Code anzeigen

* * *

## Manuelles Schließen

Die `add()`-Methode gibt eine Notification-ID zurück. Diese kann in der `remove()`-Methode verwendet werden, um eine Notification manuell zu schließen.

Trigger Notification

Code anzeigen

#### Overview

---

### NumberField

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/number-field/overview](https://mittwald.github.io/flow/03-components/form-controls/number-field/overview)

# NumberField

Das NumberField unterstützt die direkte Eingabe numerischer Werte sowie die schrittweise manuelle Anpassung.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/NumberField)

Alter(optional)

## Playground

Verwende `<NumberField />`, um ein NumberField darzustellen. Platziere innerhalb davon ein `<Label />`, um die Eingabeanforderung kurz in einem [Label](/flow/03-components/content/label/overview) zu beschreiben.

Alter(optional)
    
    
    import {
      Label,
      NumberField,
    } from "@mittwald/flow-react-components";
    
    <NumberField minValue={0} maxValue={100}>
      <Label>Alter</Label>
    </NumberField>
    

Code ausblenden

* * *

## Einheit

Über das Property `formatOptions` lassen sich Einheiten für das NumberField definieren (s. [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)).

Speicherplatz(optional)

Code anzeigen

* * *

## Disabled

Ist das NumberField **disabled** , ist keine Interaktion möglich. Sobald die Ursache behoben ist, kann es wieder wie gewohnt verwendet werden.

Alter(optional)

Code anzeigen

* * *

## Validierung

Um das NumberField zu validieren, stehen folgende Properties zur Verfügung:

  * `isRequired` für Pflichtfelder.
  * `validate` für eigene Validierungen.

Bei ungültiger Eingabe wird das NumberField invalidiert. Über `<FieldError />` kann eine entsprechende Fehlermeldung ausgegeben werden.

### Required

Alter

Code anzeigen

### Invalid

Alter(optional)Ungültige Eingabe

Code anzeigen

* * *

## Mit FieldDescription

Um wichtige Hinweise zum NumberField bereitzustellen, kann unterhalb eine `<FieldDescription />` eingebaut werden.

Alter(optional)Du musst mindestens 18 Jahre alt sein

Code anzeigen

* * *

## Kombiniere mit ...

### Align

Benutze die [Align](/flow/03-components/structure/align/overview)-Component, um andere Components wie einen [Button](/flow/03-components/actions/button/overview) neben dem NumberField auszurichten.

Alter(optional)

Hinzufügen

Code anzeigen

### ContextualHelp

Verwende [ContextualHelp](/flow/03-components/overlays/contextual-help), um zusätzliche Informationen bereitzustellen, die über den Umfang der FieldDescription hinausgehen.

Alter(optional)

Code anzeigen

### React Hook Form

Weitere Details zur Formularlogik und -validierung findest du in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview).

Alter

Speichern

Code anzeigen

#### Overview

---

### PasswordCreationField

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/password-creation-field/overview](https://mittwald.github.io/flow/03-components/form-controls/password-creation-field/overview)

# PasswordCreationField

Das PasswordCreationField unterstützt den User dabei, sichere Passwörter zu erstellen. Über eine visuelle Komplexitätsanzeige wird es dem User erleichtert, unsichere Passwörter zu erkennen und zu meiden.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/PasswordCreationField)

## Playground

Verwende `<PasswordCreationField />`, um ein PasswordCreationField darzustellen. Standardmäßig enthält die Component folgende Passwortregeln:

  * Mindestlänge von 12 Zeichen
  * Mindestens ein Sonderzeichen enthalten
  * Mindestens eine Zahl enthalten
  * Darf nicht durch [HaveIBeenPwned](https://haveibeenpwned.com/passwords) verboten sein

    
    
    import {
      Label,
      PasswordCreationField,
    } from "@mittwald/flow-react-components";
    import { useState } from "react";
    
    export default () => {
      const [password, setPassword] = useState("");
    
      return (
        <PasswordCreationField
          value={password}
          onChange={setPassword}
        >
          <Label>Password</Label>
        </PasswordCreationField>
      );
    }
    

Code ausblenden

* * *

## Mit zusätzlichen Buttons

Das PasswordCreationField kann mit zusätzlichen [Buttons](/flow/03-components/actions/button/overview) ergänzt werden. Diese Erweiterungen sind flexibel einsetzbar und sollten im direkten Zusammenhang mit der Passworterstellung stehen.

Code anzeigen

### Mit Copy Button

Optional kann ein [CopyButton](/flow/03-components/actions/copy-button/overview) integriert werden. Dadurch lassen sich erstellte Passwörter direkt in die Zwischenablage kopieren.

Code anzeigen

* * *

## Passwort Richtlinien

Neben den Standardrichtlinien können eigene Passwortanforderungen definiert werden. Diese sollten klar formuliert und für User nachvollziehbar sein.

Code anzeigen

* * *

## Disabled

Ist das PasswordCreationField **disabled** , ist keine Interaktion möglich.

Code anzeigen

* * *

## Kombiniere mit ...

### React Hook Form

Weitere Details zur Formularlogik und -validierung findest du in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview).

Speichern

Code anzeigen

#### Overview

---

### ProgressBar

**Quelle:** [https://mittwald.github.io/flow/03-components/status/progress-bar/overview](https://mittwald.github.io/flow/03-components/status/progress-bar/overview)

# ProgressBar

Eine ProgressBar zeigt den Fortschritt eines laufenden Prozesses visuell in Form eines horizontalen Balkens an. Sie eignet sich sowohl für temporäre Prozesse als auch für Zustände mit konstantem Monitoring.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/ProgressBar)

Speicher50 %

## Playground

Verwende `<ProgressBar />`, um eine ProgressBar darzustellen.

Speicher50 %
    
    
    import {
      Label,
      ProgressBar,
    } from "@mittwald/flow-react-components";
    
    <ProgressBar value={50}>
      <Label>Speicher</Label>
    </ProgressBar>
    

Code ausblenden

* * *

## Mit Unit

Im Standard wird die ProgressBar immer mit Prozentangabe angezeigt. Über das Property `formatOptions` können aber auch andere Einheiten gewählt werden (s. [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)).

### Gigabyte

Speicher500 GB

Code anzeigen

### Dezimalzahl

Stückzahl500

Code anzeigen

* * *

## Mit Max Value

Der maximale Wert der ProgressBar lässt sich individuell festlegen, je nachdem, was dargestellt werden soll. Standardmäßig beträgt dieser Wert 100 %.

Speicher500 GB of 1,000 GB

Code anzeigen

* * *

## Sizes

ProgressBars sind in drei verschiedenen Größen verfügbar: **Small** , **Medium** und **Large**.

Die mittlere Größe **Medium** ist Standard und wird am häufigsten verwendet. Die verschiedenen Größen eignen sich gut, um eine visuelle Hierarchie innerhalb der Seite zu erzeugen. So kann die größte Variante **Large** sehr gut alleinstehend eingesetzt werden, wenn die ProgressBar besondere Aufmerksamkeit auf sich ziehen soll.

Größe S50 %

Größe M50 %

Größe L50 %

Code anzeigen

* * *

## Status

Je nach Anwendungsfall stehen vier Status-Farben zur Auswahl: **Success** , **Info** , **Warning** und **Danger**. Diese Status helfen insbesondere bei der Darstellung von Speicherplatzauslastung, um Schwellenwerte visuell hervorzuheben (z. B. Statuswechsel ab 80 % Auslastung zur Warning).

Success100 %

Info50 %

Warning70 %

Danger90 %

Code anzeigen

* * *

## Segmente

Die Anzeige der ProgressBar kann über das `segments` Property um einzelne Abschnitte ergänzt werden. Der `value` ergibt sich in diesem Fall aus der Summe der Werte der einzelnen Segmente. Um die einzelnen Werte näher zu erläutern, wird automatisch die [Legend-Component](/flow/03-components/content/legend/overview) angezeigt. Über das `showLegend` Property kann diese ein- und ausgeblendet werden.

Die Farben der Segmente werden automatisch festgelegt, können aber über das `color` Property überschrieben werden. Beim Überschreiben muss darauf geachtet werden, dass nebeneinanderliegende Farben weiterhin einen ausreichenden Kontrast zueinander haben.

Speicher560 GB of 1,000 GB

  * E-Mails (280 GB)
  * Datenbanken (170 GB)
  * Backups (110 GB)

Code anzeigen

#### Overview

---

### RadioGroup

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/radio-group/overview](https://mittwald.github.io/flow/03-components/form-controls/radio-group/overview)

# RadioGroup

Eine RadioGroup ist ein Auswahlelement, das es dem User ermöglicht, genau eine Option aus einer vordefinierten Gruppe auszuwählen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/RadioGroup)

Täglicher Kaffeekonsum(optional)

## Playground

Verwende `<RadioGroup />` zusammen mit mehreren `<Radio />`, um eine RadioGroup darzustellen. Über der RadioGroup kann ein beschreibendes [Label](/flow/03-components/content/label/overview) verwendet werden. Es kann weggelassen werden, wenn die RadioGroup ohne verstanden wird oder wenn ein anderes beschreibendes Element – wie eine [Heading](/flow/03-components/content/heading/overview) – in der Nähe platziert wird. Wenn kein Label vorhanden ist, muss ein aria-label gesetzt werden.

Rolle(optional)
    
    
    import {
      Label,
      Radio,
      RadioGroup,
    } from "@mittwald/flow-react-components";
    
    <RadioGroup defaultValue="admin">
      <Label>Rolle</Label>
      <Radio value="admin">Administrator</Radio>
      <Radio value="member">Mitglied</Radio>
      <Radio value="accountant">Buchhalter</Radio>
    </RadioGroup>
    

Code ausblenden

* * *

## RadioButtons

RadioGroups können statt mit einfachen **Radios** auch mit **RadioButtons** gefüllt werden. Ersetze dafür `<Radio />` mit `<RadioButton />`. Anders als einfache Radios können RadioButtons mehr Inhalt – wie z. B. eine Überschrift mit Text und Subtext – darstellen und dürfen auch nebeneinander gesetzt werden.

Datenbank-Typ(optional)

Code anzeigen

### Weiterer Inhalt

Anstelle einer einfachen Bezeichnung kann der `<RadioButton />` auch mit zusätzlichem Inhalt gefüllt werden. Verwende dazu innerhalb des `<RadioButtons />` [Text](/flow/03-components/content/text/overview) für eine Überschrift und `<Content />` für Fließtext.

Code anzeigen

### Benutzerdefinierte Spalten

Die RadioGroup verwendet das [ColumnLayout](/flow/03-components/structure/column-layout/overview), um eine Anpassung der Spalten zu ermöglichen. Bei der Verwendung von RadioButtons entspricht der Default dem des ColumnLayouts, während Radios im Default untereinander angezeigt werden.

Benutzerdefinierte Spalten(optional)

Code anzeigen

* * *

## Mit FieldDescription

Unterhalb der `<Radio />` oder `<RadioButton />` kann eine hilfreiche `<FieldDescription />` eingebaut werden.

Wie viele Pflanzen besitzt du?(optional)Mehrere identische Pflanzen in einem Topf gelten als eine Pflanze.

Code anzeigen

* * *

## States

Eine RadioGroup hat 3 States: **Default** , **Disabled** und **Error**. Radios und RadioButtons verfügen über die States **Default** , **Hover** , **Pressed** , **Disabled** , **Focused** und **Selected**.

Code anzeigen

**Selected:** Wenn ein Radio/RadioButton vom User ausgewählt wird, erhält er den State Selected. In einer RadioGroup kann sich immer nur ein Radio/RadioButton in diesem State befinden. In den meisten Fällen ist es sinnvoll, zu Beginn eine Option vorzuselektieren.

**Disabled:** Wenn die RadioGroup den State Disabled hat, erhalten alle Radios/RadioButtons automatisch ebenfalls diesen State, sodass sie vom User nicht ausgewählt werden können. Es ist auch möglich, einzelne Radios/RadioButtons auf Disabled zu setzen.

Datenbank-Typ(optional)Bitte wähle eine Option aus

Code anzeigen

**Error:** Ein Error-State sollte angezeigt werden, wenn etwas schiefgelaufen ist (siehe [Fehlermeldungen](/flow/02-foundations/03-content-guidelines/02-fehlermeldungen)). Da häufig eine Option in der RadioGroup vorselektiert ist, wird das obige Beispiel nur selten benötigt.

* * *

## Kombiniere mit ...

### ContextualHelp

Benutze die [ContextualHelp](/flow/03-components/overlays/contextual-help/overview) Komponente, wenn du weitere Informationen bereitstellen möchtest, und diese zu lang für die FieldDescription sind.

Täglicher Kaffeekonsum(optional)

Code anzeigen

### React Hook Form

Täglicher Kaffeekonsum

Speichern

Code anzeigen

#### Overview

---

### Rating

**Quelle:** [https://mittwald.github.io/flow/03-components/content/rating/overview](https://mittwald.github.io/flow/03-components/content/rating/overview)

# Rating

Die Rating Component dient zur visuellen Darstellung einer Bewertungsskala von 0 bis 5 Sternen. Sie wird häufig eingesetzt, um Bewertungen auf einen Blick verständlich zu machen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Rating)

## Playground

Verwende `<Rating />`, um ein Rating darzustellen. Um die Barrierefreiheit zu gewährleisten, wird in der Rating Component automatisch ein entsprechendes ARIA-Label generiert.
    
    
    import { Rating } from "@mittwald/flow-react-components";
    
    <Rating value={2} />
    

Code ausblenden

* * *

## Sizes

Es stehen die Größen **Medium** oder **Small** zur Verfügung.

Code anzeigen

* * *

## Kombiniere mit ...

### BigNumber

Das Rating kann mit einer [BigNumber](/flow/03-components/data-visualisation/big-number/overview) kombiniert werden, um den Wert der BigNumber visuell besser einordnen zu können.

80%Performance

Code anzeigen

### AccentBox

Zur visuellen Hervorhebung kann das Rating innerhalb einer [AccentBox](/flow/03-components/structure/accent-box/overview) angezeigt werden.

250 msDateioperationen

Geringer Optimierungsbedarf

100 msServeroperationen

Optimierungsbedarf

Code anzeigen

#### Overview

---

### SearchField

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/search-field/overview](https://mittwald.github.io/flow/03-components/form-controls/search-field/overview)

# SearchField

Ein SearchField ist ein Eingabefeld, mit dem gezielt nach Inhalten innerhalb einer Anwendung gesucht werden kann.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/SearchField)

## Playground

Verwende `<SearchField />`, um ein SearchField darzustellen.
    
    
    import { SearchField } from "@mittwald/flow-react-components";
    
    <SearchField />
    

Code ausblenden

* * *

## Kombiniere mit ...

### React Hook Form

Weitere Details zur Formularlogik und -validierung findest du in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview).

Suchen

Code anzeigen

#### Overview

---

### Section

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/section/overview](https://mittwald.github.io/flow/03-components/structure/section/overview)

# Section

Eine Section erhöht die Übersichtlichkeit, indem sie den Content in vertikale Teilbereiche mit festen Abständen gliedert. Zwischen mehreren Sections wird automatisch ein Separator eingefügt, um die Bereiche optisch zu trennen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Section)

## Newsletter

Kommende Releases, neue Features und Tipps rund um dein Hosting – wir bringen dir das Wichtigste in dein Postfach. Abonniere unseren Newsletter und bleib auf dem Laufenden.

## Playground

Verwende `<Section />`, um eine Section darzustellen. Sie sorgt automatisch für feste Abstände zwischen den darin platzierten Elementen.

## Newsletter

Kommende Releases, neue Features und Tipps rund um dein Hosting – wir bringen dir das Wichtigste in dein Postfach. Abonniere unseren Newsletter und bleib auf dem Laufenden.
    
    
    import {
      Heading,
      Section,
      Text,
    } from "@mittwald/flow-react-components";
    
    <Section>
      <Heading>Newsletter</Heading>
      <Text>
        Kommende Releases, neue Features und Tipps rund um dein
        Hosting – wir bringen dir das Wichtigste in dein
        Postfach. Abonniere unseren Newsletter und bleib auf dem
        Laufenden.
      </Text>
    </Section>
    

Code ausblenden

* * *

## Mehrere Sections

Wenn mehrere Sections untereinander platziert werden, werden sie automatisch durch einen [Separator](/flow/03-components/structure/separator/overview) getrennt.

Eine Datenbank, die mit einer App verknüpft ist, kann nicht gelöscht werden. Die App nutzt immer die verknüpfte Datenbank.

## Cronjobs

Ein Cronjob ist immer fest einer App zugeordnet, du kannst ihn unter dem Menüpunkt Cronjobs bearbeiten und löschen.

Code anzeigen

### Sub-Headings

Sections beginnen in der Regel mit einer H2-[Heading](/flow/03-components/content/heading/overview). Wenn eine feinere Unterteilung nötig ist, können Headings auf niedrigerem Level direkt in der Section platziert werden. Zur optischen Verdeutlichung erhalten Sub-Headings in der Größe H3 automatisch einen größeren Abstand zum darüberliegenden Content.

## DNS Verwaltung

Da du externe Nameserver nutzt, empfehlen wir dir folgende Records bei deinem Provider einzutragen.

### A-Record

IPv4-Adresse`12.123.123.12`

Code anzeigen

* * *

## SectionAction

Die Section verfügt in der rechten oberen Ecke über einen Bereich für Actions – die sogenannte SectionAction. Dort können ein [Link](/flow/03-components/navigation/link/overview), ein [Switch](/flow/03-components/form-controls/switch/overview), ein oder zwei [Buttons](/flow/03-components/actions/button/overview) oder eine Kombination dieser Components verwendet werden.

Kommende Releases, neue Features und Tipps rund um dein Hosting – wir bringen dir das Wichtigste in dein Postfach. Abonniere unseren Newsletter und bleib auf dem Laufenden.

Code anzeigen

Lasse den Autoresponder für dich arbeiten. Er kann automatisch auf eingehende E-Mails antworten.

Code anzeigen

Es können maximal zwei [Buttons](/flow/03-components/actions/button/overview) nebeneinander angezeigt werden. Werden mehr als zwei Aktionen benötigt, erhält die Hauptaktion einen eigenen Button, während alle weiteren in ein [ContextMenu](/flow/03-components/actions/context-menu/overview) verschoben werden.

Projektname

Dolce Vita

Short-ID

p-lol3qe

Projektdomainp-lol3qe.project.space

Code anzeigen

* * *

## Kombiniere mit ...

### AlertBadge und Badge

Die [Heading](/flow/03-components/content/heading/overview) kann mit einem [AlertBadge](/flow/03-components/status/alert-badge/overview) oder einem [Badge](/flow/03-components/status/badge/overview) ergänzt werden. Dadurch wird der User schnell über den Status oder über Metadaten des Inhalts einer Section informiert.

Projektname

Dolce Vita

Short-ID

p-lol3qe

Projektdomainp-lol3qe.project.space

Code anzeigen

#### Overview

---

### SegmentedControl

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/segmented-control/overview](https://mittwald.github.io/flow/03-components/form-controls/segmented-control/overview)

# SegmentedControl

Ein SegmentedControl bietet dem User eine Einfachauswahl von 2 bis 5 kurzen Optionen. Je nach Einsatzzweck kann die Auswahl des Users den Inhalt unter dem Segmented Control verändern.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/SegmentedControl)

Zahlungsart(optional)

## Playground

Verwende `<SegmentedControl />`, um ein SegmentedControl anzuzeigen.

Authentifizierungsart(optional)
    
    
    import {
      Label,
      Segment,
      SegmentedControl,
    } from "@mittwald/flow-react-components";
    
    <SegmentedControl defaultValue="ssh-key">
      <Label>Authentifizierungsart</Label>
      <Segment value="ssh-key">SSH-Key</Segment>
      <Segment value="passwort">Passwort</Segment>
    </SegmentedControl>
    

Code ausblenden

* * *

## Mit Inhaltsänderung

Unterhalb des SegmentedControls kann sich der Inhalt je nach Bedarf ändern.

Zahlungsart(optional)

Code anzeigen

* * *

## Mit FieldDescription

Innerhalb der `<SegmentedControl />` kann eine hilfreiche `<FieldDescription />` eingebaut werden.

Speicherplatz(optional)Speicherplatz kann jederzeit geändert werden

Code anzeigen

* * *

## States

Eine SegmentedControl hat 2 States: **Default** und **Disabled**. Die Optionen verfügen über die States **Default** , **Hover** , **Pressed** , **Disabled** , **Focused** und **Selected**.

Rolle(optional)

Rolle(optional)

Code anzeigen

  * **Selected:** Wird eine Option vom User ausgewählt, so erhält er den Zustand Selected. Es kann immer nur eine Option diesen Status haben. Zu Beginn ist immer die erste Option vorausgewählt.

  * **Disabled:** Einzelne Optionen oder die gesamte SegmentedControl können den State Disabled haben. Wenn die SegmentedControl den State Disabled erhält, erhalten automatisch auch alle Optionen ebenfalls diesen State, sodass sie vom User nicht ausgewählt werden können.

* * *

## Container Breakpoint Size

Das SegmentedControl springt in eine kompakte Variante um, sobald der Container kleiner als der gesetzte Breakpoint ist. Im Default passiert das bei 550px, was der `containerBreakpointSize="m"` entspricht. Über diese Property kann die Größe mit Werten zwischen `xs` und `xl` überschrieben werden.

Rolle(optional)

Rolle(optional)

Code anzeigen

* * *

## Kombiniere mit ...

### ContextualHelp

Benutze die [ContextualHelp](/flow/03-components/overlays/contextual-help/overview) Komponente, wenn du weitere Informationen bereitstellen möchtest, und diese zu lang für die FieldDescription sind.

Zahlungsart(optional)

Code anzeigen

### React Hook Form

Zahlungsart

Speichern

Code anzeigen

#### Overview

---

### Select

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/select/overview](https://mittwald.github.io/flow/03-components/form-controls/select/overview)

# Select

Ein Select ermöglicht es Usern, eine einzelne Option aus einer vordefinierten Liste auszuwählen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Select)

Select an itemApp(optional)

WordPressTYPO3ContaoDrupalJoomla!Matomo

## Playground

Verwende `<Select />`, um einen Select darzustellen. Ein zugehöriges `<Label />` sowie die gewünschte Anzahl an `<Option />`-Elementen werden innerhalb der Component eingefügt.

Select an itemApp(optional)

WordPressTYPO3ContaoDrupalJoomla!Matomo
    
    
    import {
      Label,
      Option,
      Select,
    } from "@mittwald/flow-react-components";
    
    <Select>
      <Label>App</Label>
      <Option>WordPress</Option>
      <Option>TYPO3</Option>
      <Option>Contao</Option>
      <Option>Drupal</Option>
      <Option>Joomla!</Option>
      <Option>Matomo</Option>
    </Select>
    

Code ausblenden

* * *

## Default-Wert

Mit `defaultSelectedKey` kann eine Default-Option angegeben werden, die dem User standardmäßig zuerst angezeigt wird.

WordPressApp

WordPressTYPO3

Code anzeigen

* * *

## Kombiniere mit ...

### FieldDescription

Um wichtige Hinweise zu den Auswahloptionen des Select bereitzustellen, kann unterhalb eine `<FieldDescription />` eingebaut werden.

Weitere Informationen

Select an itemApp(optional)Weitere Informationen

WordPressTYPO3ContaoDrupalJoomla!Matomo

Code anzeigen

### Align

Benutze die [Align](/flow/03-components/structure/align/overview) Component, um beispielsweise einen Button neben dem Select zu platzieren.

Select an itemApp(optional)

WordPressTYPO3ContaoDrupalJoomla!Matomo

Hinzufügen

Code anzeigen

### ContextualHelp

Benutze das [ContextualHelp](/flow/03-components/overlays/contextual-help/overview), um weitere Informationen bereitstellen zu können.

Select an itemApp(optional)

WordPressTYPO3ContaoDrupalJoomla!Matomo

Code anzeigen

### React Hook Form

Select an itemApp

WordPressTYPO3

Speichern

Code anzeigen

#### Overview

---

### Separator

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/separator/overview](https://mittwald.github.io/flow/03-components/structure/separator/overview)

# Separator

Ein Separator ist eine horizontale Linie, die inhaltliche Abschnitte voneinander abgrenzt.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Separator)

* * *

## Playground

Verwende `<Separator />`, um einen Separator darzustellen.

* * *
    
    
    import { Separator } from "@mittwald/flow-react-components";
    
    <Separator />
    

Code ausblenden

#### Overview

---

### Skeleton

**Quelle:** [https://mittwald.github.io/flow/03-components/content/skeleton/overview](https://mittwald.github.io/flow/03-components/content/skeleton/overview)

# Skeleton

Das Skeleton zeigt als Platzhalter eine vereinfachte Vorschau der Benutzeroberfläche, bis der Content vollständig geladen ist.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Skeleton)

## Playground

Verwende `<Skeleton />`, um ein Skeleton anzuzeigen.
    
    
    import { Skeleton } from "@mittwald/flow-react-components";
    
    <Skeleton />
    

Code ausblenden

* * *

## Benutzerdefinierte Größe

Skeletons können mit dem `width`\- oder `height`-Attribut angepasst werden, um die grobe Ladevorschau an die Benutzeroberfläche anzupassen.

Code anzeigen

* * *

## Accessibility

Das Skeleton verwendet das Property `aria-hidden`, damit es vom Screenreader ignoriert wird.

Die Accessibility eines Ladezustands soll **nicht** vom Skeleton geregelt werden.

Um Screenreadern mitzuteilen, dass Inhalte noch geladen werden, sollte das Property `aria-busy` verwendet werden. Dieses wird auf `false` gesetzt, sobald der Ladevorgang abgeschlossen ist (s. [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)).

#### Overview

---

### Slider

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/slider/overview](https://mittwald.github.io/flow/03-components/form-controls/slider/overview)

# Slider

Slider ermöglichen die Auswahl von Zahlenwerten innerhalb eines definierten Wertebereichs.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Slider)

150 GB

## Playground

Verwende `<Slider />`, um einen Slider darzustellen.

Dem Slider können optional ein Min-, Max- und Default-Wert sowie die Step-Größe mitgegeben werden. Der Default-Wert kann über das Property `showInitialMarker` auf dem Slider markiert werden. Außerdem werden diverse Formate und Einheiten unterstützt (s. [Intel.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) ).

150 GB
    
    
    import {
      Label,
      Slider,
    } from "@mittwald/flow-react-components";
    
    <Slider
      formatOptions={{
        style: "unit",
        unit: "gigabyte",
      }}
      minValue={50}
      maxValue={750}
      defaultValue={150}
      step={50}
      showInitialMarker
    >
      <Label>Speicherplatz</Label>
    </Slider>
    

Code ausblenden

## Kombiniere mit ...

### React Hook Form

Weitere Details zur Formularlogik und -validierung sind in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

150 GBSpeicherplatz(optional)

Speichern

Code anzeigen

#### Overview

---

### Switch

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/switch/overview](https://mittwald.github.io/flow/03-components/form-controls/switch/overview)

# Switch

Mit einem Switch können User Optionen ein- oder ausschalten. Die Component wird normalerweise verwendet, um bestimmte Einstellungen zu aktivieren oder zu deaktivieren.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Switch)

Autoresponder

## Playground

Verwende `<Switch />`, um einen Switch darzustellen.

Autoresponder
    
    
    import { Switch } from "@mittwald/flow-react-components";
    
    <Switch defaultSelected>Autoresponder</Switch>
    

Code ausblenden

* * *

## Label-Position: Links

Die Positionierung des Labels sollte sich am Seitenlayout orientieren. Steht der Switch rechtsbündig, sollte die Beschriftung links davor platziert werden. So erfasst der User zuerst den Zweck, bevor die Aktion ausführt wird.

Autoresponder

Code anzeigen

* * *

## Disabled

In Ausnahmefällen kann ein deaktivierter Switch verwendet werden, um eine Funktion temporär als nicht verfügbar darzustellen, ohne diesen vollständig aus der Oberfläche zu entfernen.

Autoresponder

Code anzeigen

#### Overview

---

### Table

**Quelle:** [https://mittwald.github.io/flow/03-components/structure/table/overview](https://mittwald.github.io/flow/03-components/structure/table/overview)

# Table

Die Table zeigt Daten in Zeilen und Spalten. Sie hilft dabei, Informationen schnell zu überblicken und Einträge zu vergleichen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Table)

Name| Type| Default| Description  
---|---|---|---  
`color`| primary | accent | secondary | danger| primary| The color of the button  
`variant`| plain | solid | soft| solid| The variant of the button  
`size`| m | s| m| The size of the button  
  
## Playground

Verwende `<Table />`, um tabellarische Daten strukturiert darzustellen. Nutze `TableHeader` und `TableColumn`, um die Spaltenüberschriften zu definieren. Verwende `TableBody`, um den Content über `TableRow` und `TableCell` abzubilden.

Name| Type| Default| Description  
---|---|---|---  
`color`| primary | accent | secondary | danger| primary| The color of the button  
`variant`| plain | solid | soft| solid| The variant of the button  
`size`| m | s| m| The size of the button  
      
    
    import {
      InlineCode,
      Table,
      TableBody,
      TableCell,
      TableColumn,
      TableHeader,
      TableRow,
    } from "@mittwald/flow-react-components";
    
    <Table aria-label="Button Props">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Default</TableColumn>
        <TableColumn>Description</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <InlineCode>color</InlineCode>
          </TableCell>
          <TableCell>
            primary | accent | secondary | danger
          </TableCell>
          <TableCell>primary</TableCell>
          <TableCell>The color of the button</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <InlineCode>variant</InlineCode>
          </TableCell>
          <TableCell>plain | solid | soft</TableCell>
          <TableCell>solid</TableCell>
          <TableCell>The variant of the button</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <InlineCode>size</InlineCode>
          </TableCell>
          <TableCell>m | s</TableCell>
          <TableCell>m</TableCell>
          <TableCell>The size of the button</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    

Code ausblenden

* * *

## Mit Footer

Um die letzte Zeile der Table hervorzuheben (z. B. für eine Preisübersicht), kann `TableFooterRow` verwendet werden.

Artikel| Preis  
---|---  
proSpace (2 vCPU / 4 GB RAM)| 32,00 €  
20 GB Speicherplatz| Inklusive  
20 GB Zusatzspeicherplatz| 2,00 €  
Gesamtpreis| 34,00 €  
  
Code anzeigen

* * *

## Vertikal zentriert

Der Inhalt wird vertikal zentriert dargestellt, sodass dieser mittig zwischen dem oberen und unteren Zellenrand positioniert ist.

Name| Type| Default| Description  
---|---|---|---  
`size`| m | s| m| Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius quam quas vel voluptas, ullam aliquid fugit.  
  
Code anzeigen

* * *

## Horizontal zentriert

Der Inhalt wird horizontal zentriert ausgerichtet. Unabhängig von der Ausrichtung unterstützt die Table optional die Statusanzeigen `success` und `danger`.

Bereich| Lesen| Schreiben  
---|---|---  
Projekt| |   
  
Code anzeigen

#### Overview

---

### Tabs

**Quelle:** [https://mittwald.github.io/flow/03-components/navigation/tabs/overview](https://mittwald.github.io/flow/03-components/navigation/tabs/overview)

# Tabs

Tabs strukturieren verwandte Inhalte und ermöglichen einen schnellen Zugriff auf unterschiedliche Ansichten.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Tabs)

Allgemeiner Inhalt

Speicherplatz Inhalt

Spamschutz Inhalt

## Playground

Verwende `<Tabs />`, um Tabs darzustellen. Jeder einzelne Tab wird mit `<Tab />` definiert und erhält seine Bezeichnung über `<TabTitle />`.
    
    
    import {
      Header,
      Heading,
      Label,
      LabeledValue,
      Section,
      Switch,
      Tab,
      Tabs,
      TabTitle,
      Text,
      TextField,
    } from "@mittwald/flow-react-components";
    
    <Tabs>
      <Tab>
        <TabTitle>Allgemein</TabTitle>
        <Section>
          <Heading>Allgemein</Heading>
          <TextField defaultValue="example@mittwald.de">
            <Label>E-Mail-Adresse</Label>
          </TextField>
        </Section>
      </Tab>
      <Tab id="storage">
        <TabTitle>Speicherplatz</TabTitle>
        <Section>
          <Heading>Speicherplatz</Heading>
          <LabeledValue>
            <Label>Verfügbarer Speicherplatz</Label>
            <Text>2.4 GB</Text>
          </LabeledValue>
        </Section>
      </Tab>
      <Tab>
        <TabTitle>Spamschutz</TabTitle>
        <Section>
          <Header>
            <Heading>Spamschutz</Heading>
            <Switch>Spamfilter</Switch>
          </Header>
          <Text>
            Der Spamfilter schützt dich vor ungewollten E-Mails.
            Niemand will Müll in seinem Postfach, daher
            empfehlen wir den Spamschutz immer aktiviert zu
            lassen.
          </Text>
        </Section>
      </Tab>
    </Tabs>
    

Code ausblenden

* * *

## Kollabierte Ansicht

Wenn die verfügbare Breite nicht ausreicht, wechseln die Tabs automatisch in eine kollabierte Ansicht.

Allgemeiner Inhalt

Speicherplatz Inhalt

Spamschutz Inhalt

Code anzeigen

* * *

## Mit Status-Icon

Wenn der Inhalt eines Tabs eine wichtige Information oder Warnung enthält (z. B. in Form eines [Alerts](/flow/03-components/status/alert/overview)), muss der entsprechende Tab ein Status-Icon erhalten.

Allgemeiner Inhalt

### Dein Speicherplatz ist voll

Spamschutz Inhalt

Code anzeigen

* * *

## Mit vorausgewähltem Tab

Standardmäßig sollte der erste Tab vorausgewählt sein. Falls ein anderer Tab initial aktiv sein soll, kann dies über `defaultSelectedKey` festgelegt werden.

Allgemeiner Inhalt

Speicherplatz Inhalt

Spamschutz Inhalt

Code anzeigen

#### Overview

---

### Text

**Quelle:** [https://mittwald.github.io/flow/03-components/content/text/overview](https://mittwald.github.io/flow/03-components/content/text/overview)

# Text

Die Text-Component sorgt für eine konsistente Formatierung und Strukturierung von Text.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Text)

Das ist ein Text

## Playground

Um Text zu formatieren und zu gruppieren, schließe ihn mit dem `<Text>`-Tag ein.

Das ist ein Text
    
    
    import { Text } from "@mittwald/flow-react-components";
    
    <Text>Das ist ein Text</Text>
    

Code ausblenden

* * *

## Size

Neben der Default-Schriftgröße unterstützt Text auch die Size **Small**. Nutze das `<small>`-Tag, um sie zu verwenden.

Das ist ein Text in small

Code anzeigen

* * *

### HTML-Elemente und Formatierungen

### Kompatibilität mit Remote Components

Bei der Verwendung von Text als Remote Component wird nicht jede HTML Formatierung unterstützt. Aktuell sind dies nur strong, ul, ol, li, small, br. Wenn dir etwas fehlt, sag uns gerne auf GitHub Bescheid.

[Feedback geben](https://github.com/mittwald/flow/issues/new?title=Feedback%20on%20Text%20component)

Die Text-Component unterstützt alle gängigen Formatierungen und Elemente wie `<strong>`, `<i>`, `<ul>`, `<ol>` usw.

  * Item 1
  * Item 2

Dies ist ein **Beispiel** für _verschiedene_ HTML-Formatierungen.

Code anzeigen

* * *

## Mit elementType

Verwende die `elementType`-Property, um festzulegen, welches HTML-Element die Text-Component rendern soll. Standardmäßig wird ein `<span>` erzeugt. Für Fließtexte, die als eigenständige Absätze erkennbar sein sollen, verwende stattdessen ein `<p>`-Element.

Das ist ein Absatz

Code anzeigen

* * *

## Color

Zusätzlich zur Standard-Color kann Text auch in den Colors **Light** und **Dark** dargestellt werden. Beide Colors sind Alternativen zur Standard-Color, falls diese nicht auf farbigen oder dekorativen Hintergründen funktioniert.

### Dark

Das ist ein Text

Code anzeigen

#### Light

Das ist ein Text

Code anzeigen

**Light:** Verwende die Light-Color bei dunklen Hintergründen mit einem HSL Lightness-Wert von weniger als 50.

**Dark:** Verwende die Dark-Color bei hellen, farbigen Hintergründen mit einem HSL Lightness-Wert von größer als 50.

* * *

## Kombiniere mit ...

### Align

Benutze die [Align-Component](/flow/03-components/structure/align/overview), um neben dem Text z. B. ein Icon, einen CopyButton oder ein ContextualHelp zu platzieren.

mail.agenturserver.de

mail.agenturserver.de

mail.agenturserver.de

Code anzeigen

#### Overview

---

### TextArea

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/text-area/overview](https://mittwald.github.io/flow/03-components/form-controls/text-area/overview)

# TextArea

Die TextArea ermöglicht es dem User, längere Texte über mehrere Zeilen hinweg einzugeben.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/TextArea)

Public Key(optional)Beginnt mit ssh-rsa

## Playground

Verwende `<TextArea />`, um eine TextArea darzustellen. Platziere innerhalb davon ein `<Label />`, um die Eingabeanforderung kurz in einem [Label](/flow/03-components/content/label/overview) zu beschreiben. Zusätzliche Hinweise, etwa zur Formatierung, können über die `<FieldDescription />` ergänzt werden.

Public Key(optional)Beginnt mit ssh-rsa
    
    
    import {
      FieldDescription,
      Label,
      TextArea,
    } from "@mittwald/flow-react-components";
    
    <TextArea>
      <Label>Public Key</Label>
      <FieldDescription>Beginnt mit ssh-rsa</FieldDescription>
    </TextArea>
    

Code ausblenden

* * *

## Disabled

Ist die TextArea **disabled** , ist keine Interaktion möglich. Sobald die Ursache behoben ist, kann sie wieder wie gewohnt verwendet werden.

Public Key(optional)

Code anzeigen

* * *

## Validierung

Um die TextArea zu validieren, stehen folgende Properties zur Verfügung:

  * `isRequired` für Pflichtfelder.
  * `validate` für eigene Validierungen.
  * HTML Input Properties wie `type="email"`, `minLength`.

Bei ungültiger Eingabe wird die TextArea invalidiert. Über `<FieldError />` kann eine entsprechende Fehlermeldung ausgegeben werden.

### Required

Public Key

Code anzeigen

### Invalid

Public Key(optional)helloUngültiger Key

Code anzeigen

* * *

## Character Count

Mit der Property `showCharacterCount` wird automatisch eine `<FieldDescription />` ergänzt, die die aktuelle Zeichenanzahl und – sofern angegeben – die maximale Zeichenanzahl anzeigt.

Nachricht(optional)0/100 characters

Code anzeigen

* * *

## Resize

### Automatisch

Mit der Property `autoResizeMaxRows` lässt sich eine maximale Höhe definieren, bis zu der sich die TextArea automatisch an den Inhalt anpasst.

Nachricht(optional)

Code anzeigen

### Manuell

Über die Properties `allowResize`, `allowVerticalResize` oder `allowHorizontalResize` kann die Größe der TextArea manuell verändert werden.

Nachricht(optional)

Code anzeigen

### Kombiniert

Beide Resize-Varianten lassen sich auch miteinander kombinieren. In diesem Fall passt sich die TextArea zunächst automatisch an, bis die Größe einmal manuell geändert wird. Danach bleibt er in der eingestellten Größe bestehen.

Nachricht(optional)

Code anzeigen

* * *

## Kombiniere mit ...

### Align

Benutze die [Align](/flow/03-components/structure/align/overview)-Component, um andere Components, wie einen [Button](/flow/03-components/actions/button/overview), neben der TextArea auszurichten.

Nachricht(optional)

Senden

Code anzeigen

### ContextualHelp

Verwende [ContextualHelp](/flow/03-components/overlays/contextual-help/overview), um zusätzliche Informationen bereitzustellen, die über den Umfang der FieldDescription hinausgehen.

Public Key(optional)

Code anzeigen

### React Hook Form

Nachricht

Senden

Code anzeigen

#### Overview

---

### TextField

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/text-field/overview](https://mittwald.github.io/flow/03-components/form-controls/text-field/overview)

# TextField

Ein TextField ermöglicht es dem Nutzer, Text über die Tastatur in ein User Interface einzugeben. Ein Label und eine optionale FieldDescription unterstützen dabei, die Anforderungen an die Eingabe klar zu kommunizieren.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/TextField)

URL(optional)Beginnt mit https://

## Playground

Verwende `<TextField />`, um ein TextField anzuzeigen. Nutze ein `<Label />`, um Informationen zu vermitteln, die das Verständnis der Eingabeanforderungen erleichtern. Weiterführende Informationen (z. B. Formatierungshinweise) können über die `<FieldDescription />` ergänzt werden.

URL(optional)Beginnt mit https://
    
    
    import {
      FieldDescription,
      Label,
      TextField,
    } from "@mittwald/flow-react-components";
    
    <TextField>
      <Label>URL</Label>
      <FieldDescription>Beginnt mit https://</FieldDescription>
    </TextField>
    

Code ausblenden

* * *

## Disabled

Wenn das TextField disabled ist, kann nicht mit ihm interagiert werden. Sobald die Ursache für die Deaktivierung behoben ist, kann das TextField wieder normal verwendet werden.

URL(optional)

Code anzeigen

* * *

## Validierung

Um das textField zu validieren, stehen folgende Properties zur Verfügung:

  * `isRequired` für Pflichtfelder.
  * `validate` für eigene Validierungen.
  * HTML Input Properties wie `type="email"`, `minLength`.

Wenn die Benutzereingabe nicht den Anforderungen entspricht, wird das TextField invalidiert. Mittels `<FieldError />` kann eine Fehlermeldung angezeigt werden.

URL(optional)Das ist keine URL

Code anzeigen

* * *

## Value

Standardmäßig ist der Value eines TextFields leer. Es ist möglich dem TextField eine uncontrolled `defaultValue` mitzugeben. Es kann auch ein controlled `value` für das TextField gesetzt werden, um dieses über `onChange` zu updaten.

URL(optional)

Code anzeigen

* * *

## Input Properties

Das TextField unterstützt die Standard-Properties eines HTML `<input />` Feldes. (s. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))

E-Mail(optional)

Code anzeigen

* * *

## Character Count

Über das `showCharacterCount` Property wird eine FieldDescription hinzugefügt, die aktuelle Anzahl der Zeichen und, falls angegeben, die maximale Zeichenanzahl anzeigt.

Benutzername(optional)0/10 characters

Code anzeigen

* * *

## Kombiniere mit ...

### Align

Benutze die [Align](/flow/03-components/structure/align/overview) Komponente, um einem Button neben deinem TextField zu platzieren.

Weiterleitungsziel(optional)

Hinzufügen

Code anzeigen

### ContextualHelp

Benutze die [ContextualHelp](/flow/03-components/overlays/contextual-help/overview) Komponente, wenn du weitere Informationen bereitstellen möchtest, und diese zu lang für die FieldDescription sind.

URL(optional)

Code anzeigen

### React Hook Form

URL

Speichern

Code anzeigen

#### Overview

---

### TimeField

**Quelle:** [https://mittwald.github.io/flow/03-components/form-controls/time-field/overview](https://mittwald.github.io/flow/03-components/form-controls/time-field/overview)

# TimeField

Mit dem TimeField können User eine konkrete Uhrzeit angeben.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/TimeField)

⁦––:––⁩

Uhrzeit(optional)

## Playground

Verwende `<TimeField />`, um ein TimeField darzustellen. Die Values des TimeFields sind Objekte aus dem [@internationalized/date Package](https://react-spectrum.adobe.com/internationalized/date/).

⁦––:––⁩

Uhrzeit(optional)
    
    
    import {
      Label,
      TimeField,
    } from "@mittwald/flow-react-components";
    
    <TimeField>
      <Label>Uhrzeit</Label>
    </TimeField>
    

Code ausblenden

* * *

## Min- und Max-Values

Die wählbare Uhrzeit lässt sich über `minValue` und `maxValue` begrenzen.

⁦––:––⁩

Uhrzeit(optional)Zwischen 8 und 16 Uhr

Code anzeigen

* * *

## Granularity

Mit der `granularity` Property wird definiert, ob Stunden, Minuten und/oder Sekunden auswählbar sind.

⁦––⁩

Stunde(optional)

⁦––:––⁩

Stunde und Minute(optional)

⁦––:––:––⁩

Stunde, Minute und Sekunde(optional)

Code anzeigen

* * *

## Disabled

Ist das TimeField **disabled** , ist keine Interaktion möglich.

⁦––:––⁩

Datum(optional)

Code anzeigen

* * *

## Kombiniere mit ...

### ContextualHelp

Benutze das [ContextualHelp](/flow/03-components/overlays/contextual-help/overview), wenn zusätzliche Informationen bereitgestellt werden sollen, die zu umfangreich für die FieldDescription sind.

⁦––:––⁩

Uhrzeit(optional)

Code anzeigen

### React Hook Form

Weitere Details zur Formularlogik und -validierung sind in der Component [Form (React Hook Form)](/flow/03-components/form-controls/form-react-hook-form/overview) zu finden.

⁦––:––⁩

Uhrzeit

Speichern

Code anzeigen

#### Overview

---

### Tooltip

**Quelle:** [https://mittwald.github.io/flow/03-components/overlays/tooltip/overview](https://mittwald.github.io/flow/03-components/overlays/tooltip/overview)

# Tooltip

Tooltips sind kurze Hilfselemente, die beim Hovern über ein Element zusätzliche Informationen anzeigen.[GitHub](https://github.com/mittwald/flow/tree/main/packages/components/src/components/Tooltip)

## Playground

Verwende `<TooltipTrigger />` und `<Tooltip />` in Kombination mit der gewünschten Component, um beim Hovern der Component einen Tooltip anzuzeigen.
    
    
    import {
      Button,
      IconEdit,
      Tooltip,
      TooltipTrigger,
    } from "@mittwald/flow-react-components";
    
    <TooltipTrigger>
      <Button aria-label="Bearbeiten" variant="plain">
        <IconEdit />
      </Button>
      <Tooltip>Bearbeiten</Tooltip>
    </TooltipTrigger>
    

Code ausblenden

#### Overview

---

