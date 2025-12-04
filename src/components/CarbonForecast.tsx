import {
	Content,
	Heading,
	Text,
	Button,
	CartesianChart,
	Area,
	CartesianGrid,
	XAxis,
	YAxis,
	Section,
	ChartTooltip,
	Flex,
	Accordion,
	AccentBox,
	BigNumber,
	Badge,
} from "@mittwald/flow-remote-react-components";
import type { CarbonForecast } from "~/server/functions/getCarbonForecast";

interface CarbonForecastProps {
	forecast: CarbonForecast;
	onRefresh?: () => void;
	isRefreshing?: boolean;
}

function formatDateTime(dateString: string): string {
	const date = new Date(dateString);
	return new Intl.DateTimeFormat("de-DE", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "Europe/Berlin",
	}).format(date);
}

export function CarbonForecast({
	forecast,
	onRefresh,
	isRefreshing = false,
}: CarbonForecastProps) {
	const { GeneratedAt, Emissions } = forecast;

	// Filter emissions to show only the next 24 hours
	const now = new Date();
	
	// Get all future emissions sorted by time
	const sortedFutureEmissions = Emissions.filter((emission) => {
		const emissionTime = new Date(emission.Time);
		return emissionTime >= now;
	}).sort((a, b) => new Date(a.Time).getTime() - new Date(b.Time).getTime());

	if (sortedFutureEmissions.length === 0) {
		return (
			<Content>
				<Text>Keine zukünftigen Daten verfügbar.</Text>
				<Text>
					Verfügbare Datenpunkte insgesamt: {Emissions.length} (von{" "}
					{formatDateTime(Emissions[0]?.Time || "")} bis{" "}
					{formatDateTime(Emissions[Emissions.length - 1]?.Time || "")})
				</Text>
			</Content>
		);
	}

	// Take the first emission as start and get all emissions within 24 hours
	const startTime = new Date(sortedFutureEmissions[0].Time);
	const endTime = new Date(startTime.getTime() + 24 * 60 * 60 * 1000);

	const futureEmissions = sortedFutureEmissions.filter((emission) => {
		const emissionTime = new Date(emission.Time);
		return emissionTime <= endTime;
	});

	// Debug: Log available data
	console.log(`Total emissions: ${Emissions.length}, Future emissions: ${sortedFutureEmissions.length}, Filtered (24h): ${futureEmissions.length}`);

	// Prepare chart data with formatted time for X-axis
	const chartData = futureEmissions.map((emission) => {
		const date = new Date(emission.Time);
		const timeString = new Intl.DateTimeFormat("de-DE", {
			hour: "2-digit",
			minute: "2-digit",
			timeZone: "Europe/Berlin",
		}).format(date);
		return {
			Zeit: timeString,
			CO2: emission.Rating,
		};
	});

	if (chartData.length === 0) {
		return (
			<Content>
				<Text>Keine Daten für die Visualisierung verfügbar.</Text>
			</Content>
		);
	}

	// Calculate metrics
	const currentRating = futureEmissions[0]?.Rating || 0;
	const minRatingValue = Math.min(...futureEmissions.map((e) => e.Rating));
	const maxRatingValue = Math.max(...futureEmissions.map((e) => e.Rating));
	const avgRating =
		futureEmissions.reduce((sum, e) => sum + e.Rating, 0) /
		futureEmissions.length;

	// Calculate Y-axis domain with some padding
	const padding = (maxRatingValue - minRatingValue) * 0.1 || 10;
	const yDomain = [
		Math.max(0, Math.floor(minRatingValue - padding)),
		Math.ceil(maxRatingValue + padding),
	];

	// Calculate the actual time span covered by the data
	const firstEmissionTime = new Date(futureEmissions[0].Time);
	const lastEmissionTime = new Date(
		futureEmissions[futureEmissions.length - 1].Time,
	);
	const hoursDiff =
		(lastEmissionTime.getTime() - firstEmissionTime.getTime()) /
		(1000 * 60 * 60);
	const roundedHours = Math.round(hoursDiff * 10) / 10; // Round to 1 decimal place

	// Generate dynamic description text
	const getTimeDescription = () => {
		if (roundedHours >= 24) {
			return "nächsten 24 Stunden";
		}
		if (roundedHours >= 1) {
			return `nächsten ${roundedHours} Stunden`;
		}
		const minutes = Math.round(hoursDiff * 60);
		return `nächsten ${minutes} Minuten`;
	};

	// Find optimal time (lowest CO2 rating)
	const optimalEmission = futureEmissions.reduce((min, e) =>
		e.Rating < min.Rating ? e : min,
	);

	// Get status badge
	function getStatusBadge(rating: number) {
		if (rating < 200) return { color: "green" as const, label: "Sehr gut" };
		if (rating < 300) return { color: "teal" as const, label: "Gut" };
		if (rating < 400) return { color: "orange" as const, label: "Mittel" };
		return { color: "red" as const, label: "Hoch" };
	}

	const currentStatus = getStatusBadge(currentRating);

	return (
		<Content>
			<Section>
				<Content>
					<Heading level={1}>Carbon Forecast Deutschland</Heading>
					{onRefresh && (
						<Content>
							<Button onPress={onRefresh} isDisabled={isRefreshing}>
								{isRefreshing ? "Wird aktualisiert..." : "Aktualisieren"}
							</Button>
						</Content>
					)}
				</Content>
			</Section>

			<Section>
				<Text>
					Vorhersage erstellt am: <strong>{formatDateTime(GeneratedAt)}</strong>
				</Text>
			</Section>

			<Section>
				<Heading level={2}>CO₂-Intensität über Zeit</Heading>
				<Text>
					Visualisierung der prognostizierten CO₂-Intensität des Stroms für die{" "}
					{getTimeDescription()}:
				</Text>
			</Section>

			<Section>
				<CartesianChart data={chartData} height="300px">
					<CartesianGrid />
					<Area dataKey="CO2" color="green" fillOpacity={0.3} />
					<XAxis dataKey="Zeit" />
					<YAxis domain={yDomain} unit=" g CO₂/kWh" />
					<ChartTooltip />
				</CartesianChart>
			</Section>

			<Section>
				<Heading level={2}>CO₂-Metriken</Heading>
				<Flex gap="m" justify="center">
					<BigNumber>
						<Text>{currentRating.toFixed(1)}</Text>
						<Text>g CO₂/kWh</Text>
						<Text>
							Aktuell{" "}
							<Badge color={currentStatus.color}>
								{currentStatus.label}
							</Badge>
						</Text>
					</BigNumber>
					<BigNumber>
						<Text>{minRatingValue.toFixed(1)}</Text>
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

			<Section>
				<AccentBox color="green">
					<Section>
						<Heading level={3}>Optimaler Zeitpunkt</Heading>
						<Text>
							<strong>{formatDateTime(optimalEmission.Time)}</strong>
							<br />
							CO₂-Intensität: {optimalEmission.Rating.toFixed(1)} g CO₂/kWh
							<br />
							Dies ist der beste Zeitpunkt für energieintensive Workloads.
						</Text>
					</Section>
				</AccentBox>
			</Section>

			<Section>
				<Text>
					Die CO₂-Prognosedaten basieren auf öffentlich verfügbaren Energiedaten
					des Fraunhofer ISE (Energy Charts) und der ENTSO-E
					Transparenzplattform. Das Projekt „Carbon Aware Computing" bereitet diese
					Daten auf und stellt sie als frei nutzbare Forecasts bereit.
				</Text>
				{futureEmissions.length < 96 && (
					<Text>
						<strong>Hinweis:</strong> Es sind nur {futureEmissions.length} von{" "}
						{Emissions.length} Datenpunkten verfügbar. Die Vorhersage deckt{" "}
						{getTimeDescription()} ab. Prognosedaten werden gegen 23 Uhr für die
						kommenden 24 Stunden generiert.
					</Text>
				)}
			</Section>

			<Section>
				<Accordion variant="outline">
					<Heading level={3}>Erklärung der Werte</Heading>
					<Content>
						<Text>
							<strong>CO₂-Intensität (g CO₂/kWh):</strong> Die geschätzte
							Emissionsintensität des Stroms in Gramm CO₂ pro Kilowattstunde. Je
							niedriger dieser Wert ist, desto klimafreundlicher ist der Strom zu
							diesem Zeitpunkt.
						</Text>
					</Content>
					<Content>
						<Text>
							<strong>Zeitachse:</strong> Die X-Achse zeigt die Uhrzeit in
							15-Minuten-Intervallen für die kommenden Stunden an. Die Vorhersage
							wird regelmäßig aktualisiert, um die aktuellsten Prognosen zu
							liefern.
						</Text>
					</Content>
					<Content>
						<Text>
							<strong>Empfehlung:</strong> Planen Sie energieintensive Workloads
							für Zeitfenster mit niedriger CO₂-Intensität (grüne Bereiche im
							Diagramm). Dies hilft, den ökologischen Fußabdruck Ihrer
							Anwendungen zu reduzieren.
						</Text>
					</Content>
				</Accordion>
			</Section>
		</Content>
	);
}

