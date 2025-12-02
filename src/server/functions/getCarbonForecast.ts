import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";

const CarbonForecastSchema = z.object({
	GeneratedAt: z.string(),
	Emissions: z.array(
		z.object({
			Time: z.string(),
			Rating: z.number(),
			Duration: z.string(),
		}),
	),
});

export type CarbonForecast = z.infer<typeof CarbonForecastSchema>;
export type EmissionDataPoint = CarbonForecast["Emissions"][number];

const CARBON_FORECAST_URL =
	"https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json";

const FETCH_TIMEOUT_MS = 10000; // 10 seconds

async function fetchWithTimeout(
	url: string,
	timeoutMs: number,
): Promise<Response> {
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

	try {
		const response = await fetch(url, {
			signal: controller.signal,
		});
		clearTimeout(timeoutId);
		return response;
	} catch (error) {
		clearTimeout(timeoutId);
		if (error instanceof Error && error.name === "AbortError") {
			throw new Error("Request timeout: Carbon forecast API did not respond");
		}
		throw error;
	}
}

export const getCarbonForecast = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async () => {
		try {
			const response = await fetchWithTimeout(
				CARBON_FORECAST_URL,
				FETCH_TIMEOUT_MS,
			);

			if (!response.ok) {
				throw new Error(
					`Failed to fetch carbon forecast: ${response.status} ${response.statusText}`,
				);
			}

			const data = await response.json();
			const parsed = CarbonForecastSchema.parse(data);

			return parsed;
		} catch (error) {
			if (error instanceof z.ZodError) {
				// Don't expose internal validation details to clients
				throw new Error("Invalid carbon forecast data format");
			}
			if (error instanceof Error) {
				throw error;
			}
			throw new Error("Unknown error while fetching carbon forecast");
		}
	});

