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

	// Calculate Y-axis domain with some padding
	const maxRating =
		futureEmissions.length > 0
			? Math.max(...futureEmissions.map((e) => e.Rating))
			: 0;
	const minRating =
		futureEmissions.length > 0
			? Math.min(...futureEmissions.map((e) => e.Rating))
			: 0;
	const padding = (maxRating - minRating) * 0.1 || 10;
	const yDomain = [
		Math.max(0, Math.floor(minRating - padding)),
		Math.ceil(maxRating + padding),
	];

	if (chartData.length === 0) {
		return (
			<Content>
				<Text>Keine Daten für die Visualisierung verfügbar.</Text>
			</Content>
		);
	}

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

	return (
		<Content>
			<Section>
				<Content>
					<Heading level={1}>Carbon Forecast Deutschland</Heading>
					{onRefresh && (
						<Button onPress={onRefresh} isDisabled={isRefreshing}>
							{isRefreshing ? "Wird aktualisiert..." : "Aktualisieren"}
						</Button>
					)}
				</Content>
			</Section>

			<Section>
				<Text>
					Vorhersage erstellt am: <strong>{formatDateTime(GeneratedAt)}</strong>
				</Text>
				<Text>
					* Die CO₂-Prognosedaten basieren auf öffentlich verfügbaren Energiedaten
					des Fraunhofer ISE (Energy Charts) und der ENTSO-E
					Transparenzplattform. Das Projekt „Carbon Aware Computing" bereitet diese
					Daten auf und stellt sie als frei nutzbare Forecasts bereit.
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
			</Section>
		</Content>
	);
}

