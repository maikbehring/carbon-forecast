import type { CarbonForecast } from "./getCarbonForecast";

/**
 * Findet die beste Ausführungszeit für einen täglichen Cronjob
 * basierend auf dem Carbon Forecast
 */
export function optimizeDailyCronjob(
	cronExpression: string,
	forecast: CarbonForecast,
): {
	optimalTime: { hour: number; minute: number };
	optimalRating: number;
	cronExpression: string;
} {
	// 1. Prüfe ob Cronjob täglich ausgeführt wird
	// Pattern: "X Y * * *" (Minute Stunde * * *)
	const parts = cronExpression.trim().split(/\s+/);
	if (parts.length < 5) {
		throw new Error("Invalid cron expression");
	}

	const [, , day, month, weekday] = parts;

	// Nur optimieren wenn täglich (* * * * *)
	if (day !== "*" || month !== "*" || weekday !== "*") {
		throw new Error("Only daily cronjobs can be optimized");
	}

	// 2. Filtere Forecast-Daten für die nächsten 24 Stunden
	const now = new Date();
	const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

	const futureEmissions = forecast.Emissions.filter((emission) => {
		const emissionTime = new Date(emission.Time);
		return emissionTime >= now && emissionTime <= tomorrow;
	});

	if (futureEmissions.length === 0) {
		throw new Error("No forecast data available");
	}

	// 3. Finde Zeitpunkt mit niedrigstem CO₂-Rating
	const optimalEmission = futureEmissions.reduce((min, e) =>
		e.Rating < min.Rating ? e : min,
	);

	const optimalDate = new Date(optimalEmission.Time);
	const optimalHour = optimalDate.getUTCHours();
	const optimalMinute = optimalDate.getUTCMinutes();

	// 4. Generiere neue Cron-Expression
	// Format: "MM HH * * *" (UTC)
	const optimizedCron = `${optimalMinute} ${optimalHour} * * *`;

	return {
		optimalTime: { hour: optimalHour, minute: optimalMinute },
		optimalRating: optimalEmission.Rating,
		cronExpression: optimizedCron,
	};
}

