import {
	Content,
	Tabs,
	Tab,
	TabTitle,
	Section,
	Heading,
	Text,
	Accordion,
	AccentBox,
	InlineCode,
	CodeBlock,
} from "@mittwald/flow-remote-react-components";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getCarbonForecast } from "~/server/functions/getCarbonForecast";
import { CarbonForecast } from "~/components/CarbonForecast";
import { Loader } from "~/components/Loader";
import { ErrorMessage } from "~/components/ErrorMessage";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const queryClient = useQueryClient();
	const {
		data: forecast,
		isLoading,
		isFetching,
		error,
		refetch,
	} = useQuery({
		queryKey: ["carbonForecast"],
		queryFn: () => getCarbonForecast(),
		staleTime: 15 * 60 * 1000, // 15 minutes - forecast updates every 15 minutes
	});

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return (
			<ErrorMessage
				title="Fehler beim Laden des Carbon Forecasts"
				message={
					error instanceof Error ? error.message : "Unbekannter Fehler"
				}
			/>
		);
	}

	if (!forecast) {
		return (
			<ErrorMessage
				title="Keine Daten verfügbar"
				message="Es konnten keine Carbon Forecast Daten geladen werden."
			/>
		);
	}

	const handleRefresh = () => {
		console.log("Refresh button clicked");
		// Invalidate and refetch the query
		queryClient.invalidateQueries({ queryKey: ["carbonForecast"] });
		refetch();
	};

	return (
		<Content>
			<Tabs>
				<Tab>
					<TabTitle>Carbon Forecast</TabTitle>
					<CarbonForecast
						forecast={forecast}
						onRefresh={handleRefresh}
						isRefreshing={isFetching}
					/>
				</Tab>
				<Tab>
					<TabTitle>Tipps und Tricks</TabTitle>
					<Section>
						<Heading level={2}>Tipps und Tricks</Heading>
						<Text>
							Hier finden Sie hilfreiche Tipps und Tricks zur optimalen Nutzung
							des Carbon Forecasts sowie Code-Beispiele für die Integration in
							eigene Automatisierungen.
						</Text>
					</Section>

					<Section>
						<Accordion variant="outline">
							<Heading level={3}>Nutzung bei mittwald</Heading>
							<Content>
								<Heading level={4}>Cron-Jobs optimieren</Heading>
								<Text>
									Planen Sie energieintensive Cron-Jobs für Zeiten mit niedriger
									CO₂-Intensität. Nutzen Sie die mittwald Cron-Job API, um Jobs
									dynamisch zu erstellen oder zu verschieben, basierend auf den
									aktuellen Forecast-Daten.
								</Text>
								<Text>
									<strong>Beispiele:</strong>
								</Text>
								<Text>
									• Datenbank-Backups während der Nachtstunden (meist niedrigere
									CO₂-Intensität)
									<br />
									• Batch-Verarbeitungen von großen Datenmengen
									<br />
									• Regelmäßige Daten-Synchronisationen
									<br />
									• Log-Rotation und Cleanup-Tasks
								</Text>
							</Content>
							<Content>
								<Heading level={4}>Deployment-Zeiten optimieren</Heading>
								<Text>
									Verschieben Sie größere Deployments oder System-Updates auf
									Zeiten mit niedriger CO₂-Intensität. Dies reduziert nicht nur
									den ökologischen Fußabdruck, sondern kann auch die
									Benutzererfahrung verbessern, wenn weniger Nutzer aktiv sind.
								</Text>
							</Content>
							<Content>
								<Heading level={4}>Monitoring und Reporting</Heading>
								<Text>
									Integrieren Sie die Carbon Forecast Daten in Ihr Monitoring,
									um den CO₂-Fußabdruck Ihrer Anwendungen zu tracken und zu
									reporten. Dies hilft bei der Nachhaltigkeitsberichterstattung
									und zeigt Ihr Engagement für klimafreundliche IT.
								</Text>
							</Content>
						</Accordion>
					</Section>

					<Section>
						<Accordion variant="outline">
							<Heading level={3}>Nutzung im Tech-Bereich</Heading>
							<Content>
								<Heading level={4}>CI/CD-Pipelines</Heading>
								<Text>
									Planen Sie Build- und Deployment-Pipelines für Zeiten mit
									niedriger CO₂-Intensität. Besonders bei großen Projekten mit
									langen Build-Zeiten kann dies erhebliche CO₂-Einsparungen
									bewirken.
								</Text>
							</Content>
							<Content>
								<Heading level={4}>Datenverarbeitung und Analytics</Heading>
								<Text>
									Verschieben Sie rechenintensive Datenverarbeitungsjobs (ETL,
									Data Warehousing, Machine Learning Training) auf optimale
									Zeitfenster. Dies ist besonders relevant für Batch-Jobs, die
									nicht in Echtzeit ausgeführt werden müssen.
								</Text>
							</Content>
							<Content>
								<Heading level={4}>Content Delivery</Heading>
								<Text>
									Planen Sie große Content-Updates, Video-Transcodierungen oder
									CDN-Synchronisationen für Zeiten mit niedriger CO₂-Intensität.
								</Text>
							</Content>
							<Content>
								<Heading level={4}>Cloud-Ressourcen-Management</Heading>
								<Text>
									Nutzen Sie die Forecast-Daten, um Auto-Scaling-Regeln zu
									optimieren oder um temporäre Ressourcen (z.B. für
									Stresstests) zu Zeiten mit niedriger CO₂-Intensität zu
									starten.
								</Text>
							</Content>
						</Accordion>
					</Section>

					<Section>
						<Accordion variant="outline">
							<Heading level={3}>Nutzung außerhalb des Tech-Bereichs</Heading>
							<Content>
								<Heading level={4}>Haushaltsgeräte</Heading>
								<Text>
									Steuern Sie Waschmaschine, Geschirrspüler oder andere
									energieintensive Haushaltsgeräte über Smart-Home-Automatisierung
									basierend auf den Forecast-Daten. Laden Sie diese Geräte
									automatisch, wenn die CO₂-Intensität niedrig ist.
								</Text>
							</Content>
							<Content>
								<Heading level={4}>E-Auto Laden</Heading>
								<Text>
									Optimieren Sie die Ladezeiten Ihres Elektrofahrzeugs. Wenn
									das Auto nicht sofort geladen werden muss, können Sie die
									Ladezeit auf Zeiten mit niedriger CO₂-Intensität verschieben.
									Dies macht Ihr E-Auto noch klimafreundlicher.
								</Text>
							</Content>
							<Content>
								<Heading level={4}>Wärmepumpen und Klimaanlagen</Heading>
								<Text>
									Steuern Sie Wärmepumpen oder Klimaanlagen intelligenter, indem
									Sie die Vorwärmung oder Vorkühlung auf Zeiten mit niedriger
									CO₂-Intensität verschieben, wenn möglich.
								</Text>
							</Content>
							<Content>
								<Heading level={4}>Batteriespeicher</Heading>
								<Text>
									Wenn Sie einen Batteriespeicher besitzen, können Sie die
									Lade- und Entladezyklen optimieren, um zu Zeiten mit hoher
									CO₂-Intensität aus dem Speicher zu versorgen und bei niedriger
									Intensität zu laden.
								</Text>
							</Content>
						</Accordion>
					</Section>

					<Section>
						<Heading level={2}>API-Integration in eigenen Scripten</Heading>
						<Text>
							Die Carbon Forecast API ist öffentlich verfügbar und kann einfach in
							eigene Automatisierungen integriert werden. Die Daten werden alle 15
							Minuten aktualisiert.
						</Text>

						<AccentBox color="blue">
							<Section>
								<Heading level={3}>API-Endpunkt</Heading>
								<Text>
									<InlineCode>
										https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json
									</InlineCode>
								</Text>
								<Text>
									Die API liefert ein JSON-Objekt mit folgenden Feldern:
								</Text>
								<Text>
									• <InlineCode>GeneratedAt</InlineCode>: Zeitstempel der
									Generierung
									<br />
									• <InlineCode>Emissions</InlineCode>: Array von
									Datenpunkten mit:
									<br />
									&nbsp;&nbsp;- <InlineCode>Time</InlineCode>: ISO 8601
									Zeitstempel
									<br />
									&nbsp;&nbsp;- <InlineCode>Rating</InlineCode>: CO₂-Intensität
									in g CO₂/kWh
									<br />
									&nbsp;&nbsp;- <InlineCode>Duration</InlineCode>: Dauer des
									Intervalls (meist "PT15M" für 15 Minuten)
								</Text>
							</Section>
						</AccentBox>

						<Section>
							<Accordion variant="outline">
								<Heading level={3}>Code-Beispiele</Heading>
								<Content>
									<Heading level={4}>Bash / Shell Script</Heading>
									<Text>
										<strong>Beispiel:</strong> Abruf der aktuellen CO₂-Intensität
									</Text>
									<CodeBlock
										language="bash"
										code={`#!/bin/bash
API_URL="https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json"
DATA=$(curl -s "$API_URL")
CURRENT_RATING=$(echo "$DATA" | jq -r '.Emissions[0].Rating')
echo "Aktuelle CO₂-Intensität: $CURRENT_RATING g CO₂/kWh`}
										copyable
									/>
									<Text>
										Ein vollständiges Beispiel-Script finden Sie unter{" "}
										<InlineCode>scripts/get-carbon-forecast.sh</InlineCode>
									</Text>
								</Content>
								<Content>
									<Heading level={4}>Python</Heading>
									<Text>
										<strong>Beispiel:</strong> Finde optimalen Zeitpunkt für
										energieintensive Tasks
									</Text>
									<CodeBlock
										language="python"
										code={`import requests
from datetime import datetime

API_URL = "https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json"
response = requests.get(API_URL)
data = response.json()

# Finde Zeitpunkt mit niedrigster CO₂-Intensität
optimal = min(data["Emissions"], key=lambda x: x["Rating"])
print("Optimaler Zeitpunkt:", optimal["Time"])
print("CO₂-Intensität:", optimal["Rating"], "g CO₂/kWh")`}
										copyable
									/>
								</Content>
								<Content>
									<Heading level={4}>Node.js / JavaScript</Heading>
									<Text>
										<strong>Beispiel:</strong> Abruf und Verarbeitung der Daten
									</Text>
									<CodeBlock
										language="javascript"
										code={`const API_URL = "https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json";

async function getCarbonForecast() {
  const response = await fetch(API_URL);
  const data = await response.json();

  // Filtere zukünftige Datenpunkte
  const now = new Date();
  const futureEmissions = data.Emissions.filter(
    (e) => new Date(e.Time) >= now
  );

  // Finde optimalen Zeitpunkt
  const optimal = futureEmissions.reduce((min, e) =>
    e.Rating < min.Rating ? e : min
  );

  return optimal;
}`}
										copyable
									/>
								</Content>
								<Content>
									<Heading level={4}>cURL (einfacher Test)</Heading>
									<Text>
										<strong>Beispiel:</strong> Schneller API-Test von der
										Kommandozeile
									</Text>
									<CodeBlock
										language="bash"
										code={`curl -s https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json | jq '.Emissions[0]'`}
										copyable
									/>
									<Text>
										Oder für die aktuelle CO₂-Intensität:
									</Text>
									<CodeBlock
										language="bash"
										code={`curl -s https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json | jq -r '.Emissions[0].Rating'`}
										copyable
									/>
								</Content>
							</Accordion>
						</Section>

						<Section>
							<AccentBox color="green">
								<Section>
									<Heading level={3}>Automatisierungsideen</Heading>
									<Text>
										<strong>Schwellenwert-basierte Steuerung:</strong>
									</Text>
									<Text>
										Führen Sie Tasks nur aus, wenn die CO₂-Intensität unter einem
										bestimmten Schwellenwert liegt (z.B. &lt; 300 g CO₂/kWh).
									</Text>
									<Text>
										<strong>Zeitfenster-Optimierung:</strong>
									</Text>
									<Text>
										Planen Sie Tasks für das nächste Zeitfenster mit niedriger
										CO₂-Intensität, auch wenn es nicht sofort ausgeführt werden
										muss.
									</Text>
									<Text>
										<strong>Monitoring und Alerting:</strong>
									</Text>
									<Text>
										Erstellen Sie Alerts, wenn die CO₂-Intensität besonders
										niedrig ist, um energieintensive Tasks manuell zu starten.
									</Text>
								</Section>
							</AccentBox>
						</Section>
					</Section>
				</Tab>
			</Tabs>
		</Content>
	);
}
