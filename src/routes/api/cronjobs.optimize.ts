import { createServerFileRoute } from "@tanstack/react-start/server";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verify } from "@mittwald/ext-bridge/node";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { env } from "~/env";
import { optimizeDailyCronjob } from "~/server/functions/optimizeDailyCronjob";
import { isCo2Optimized } from "~/server/functions/toggleAutoOptimize";
import type { CarbonForecast } from "~/server/functions/getCarbonForecast";
import { z } from "zod";

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

/**
 * Server Route für mittwald-Cronjobs zur CO₂-Optimierung
 * 
 * Diese Route kann von einem mittwald-Cronjob aufgerufen werden:
 * - URL: https://mstudio.carbon-aware-computing.jetzt/api/cronjobs/optimize
 * - Interval: 0 2 * * * (täglich um 2 Uhr UTC)
 * - Method: POST
 * 
 * Der Cronjob muss einen Session-Token im Authorization-Header senden:
 * Authorization: Bearer <session-token>
 */
export const ServerRoute = createServerFileRoute(
	"/api/cronjobs/optimize",
).methods({
	POST: async ({ request }) => {
		try {
			// Versuche Session-Token aus Authorization Header zu extrahieren
			const authHeader = request.headers.get("Authorization");
			let sessionToken: string | null = null;

			if (authHeader && authHeader.startsWith("Bearer ")) {
				sessionToken = authHeader.substring(7);
			} else {
				// Fallback: Versuche Token aus Cookie oder anderen Headers
				sessionToken = request.headers.get("X-Session-Token");
			}

			if (!sessionToken) {
				return new Response(
					JSON.stringify({
						success: false,
						error: "Session token required. Please provide Authorization: Bearer <token> header or X-Session-Token header.",
					}),
					{
						status: 401,
						headers: { "Content-Type": "application/json" },
					},
				);
			}

			// Verifiziere Session-Token
			try {
				await verify(sessionToken);
			} catch (error) {
				return new Response(
					JSON.stringify({
						success: false,
						error:
							error instanceof Error
								? `Invalid session token: ${error.message}`
								: "Invalid session token",
					}),
					{
						status: 401,
						headers: { "Content-Type": "application/json" },
					},
				);
			}

			// 1. Hole Carbon Forecast
			const CARBON_FORECAST_URL =
				"https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json";
			const FETCH_TIMEOUT_MS = 10000; // 10 seconds

			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

			let forecastResponse: Response;
			try {
				forecastResponse = await fetch(CARBON_FORECAST_URL, {
					signal: controller.signal,
				});
				clearTimeout(timeoutId);
			} catch (error) {
				clearTimeout(timeoutId);
				if (error instanceof Error && error.name === "AbortError") {
					return new Response(
						JSON.stringify({
							success: false,
							error: "Request timeout: Carbon forecast API did not respond",
						}),
						{
							status: 500,
							headers: { "Content-Type": "application/json" },
						},
					);
				}
				throw error;
			}

			if (!forecastResponse.ok) {
				return new Response(
					JSON.stringify({
						success: false,
						error: `Failed to fetch carbon forecast: ${forecastResponse.status} ${forecastResponse.statusText}`,
					}),
					{
						status: 500,
						headers: { "Content-Type": "application/json" },
					},
				);
			}

			const forecastData = await forecastResponse.json();
			const forecast = CarbonForecastSchema.parse(forecastData) as CarbonForecast;

			// 2. Hole Access Token für API-Calls
			const { publicToken: accessToken } = await getAccessToken(
				sessionToken,
				env.EXTENSION_SECRET,
			);
			const client = await MittwaldAPIV2Client.newWithToken(accessToken);

			// 3. Hole alle Projekte
			const projectsResult = await client.project.listProjects();
			assertStatus(projectsResult, 200);

			// 4. Sammle alle Cronjobs aus allen Projekten
			const cronjobs: Array<{
				id: string;
				description?: string;
				interval?: string;
				projectId?: string;
				projectName?: string;
			}> = [];

			for (const project of projectsResult.data) {
				try {
					const cronjobsResult = await client.cronjob.listCronjobs({
						projectId: project.id,
					});
					assertStatus(cronjobsResult, 200);

					for (const cronjob of cronjobsResult.data) {
						cronjobs.push({
							id: cronjob.id,
							description: cronjob.description,
							interval: cronjob.interval,
							projectId: project.id,
							projectName: project.description || project.id,
						});
					}
				} catch (error) {
					console.error(
						`Error fetching cronjobs for project ${project.id}:`,
						error,
					);
					// Continue with next project
				}
			}

			const results: Array<{
				cronjobId: string;
				success: boolean;
				oldTime?: string;
				newTime?: string;
				co2Rating?: number;
				error?: string;
			}> = [];

			// 5. Für jeden Cronjob prüfen und optimieren
			for (const cronjob of cronjobs) {
				try {
					// Prüfe ob für Optimierung markiert
					if (!isCo2Optimized(cronjob.description)) {
						continue;
					}

					// Prüfe ob täglich
					const parts = cronjob.interval?.trim().split(/\s+/) || [];
					if (
						parts.length < 5 ||
						parts[2] !== "*" ||
						parts[3] !== "*" ||
						parts[4] !== "*"
					) {
						console.log(
							`Skipping non-daily cronjob: ${cronjob.id}`,
						);
						continue;
					}

					// Prüfe ob aktuelle Ausführungszeit zwischen 0-2 Uhr UTC liegt
					const currentHour = parseInt(parts[1] || "0", 10);
					if (currentHour >= 0 && currentHour < 2) {
						console.log(
							`Skipping optimization for cronjob ${cronjob.id}: current execution time is between 0-2 UTC (${currentHour}:${parts[0]}), would cause double execution`,
						);
						continue;
					}

					// Optimiere
					const optimizationResult = optimizeDailyCronjob(
						cronjob.interval!,
						forecast,
					);

					// Prüfe ob Optimierung notwendig ist
					const currentParts = cronjob.interval!.trim().split(/\s+/);
					const optimizedParts =
						optimizationResult.cronExpression.trim().split(/\s+/);

					if (
						currentParts[0] === optimizedParts[0] &&
						currentParts[1] === optimizedParts[1]
					) {
						console.log(
							`No optimization needed for cronjob: ${cronjob.id}`,
						);
						continue;
					}

					// Update Cronjob via API
					const updateResult = await client.cronjob.updateCronjob({
						cronjobId: cronjob.id,
						data: {
							interval: optimizationResult.cronExpression,
						},
					});
					assertStatus(updateResult, 204);

					results.push({
						cronjobId: cronjob.id,
						success: true,
						oldTime: `${currentParts[1]}:${currentParts[0]}`,
						newTime: `${optimizedParts[1]}:${optimizedParts[0]}`,
						co2Rating: optimizationResult.optimalRating,
					});
				} catch (error) {
					console.error(
						`Error optimizing cronjob ${cronjob.id}:`,
						error,
					);
					results.push({
						cronjobId: cronjob.id,
						success: false,
						error:
							error instanceof Error
								? error.message
								: "Unknown error",
					});
				}
			}

			return new Response(
				JSON.stringify({
					success: true,
					optimized: results.filter((r) => r.success).length,
					failed: results.filter((r) => !r.success).length,
					results,
				}),
				{
					status: 200,
					headers: { "Content-Type": "application/json" },
				},
			);
		} catch (error) {
			console.error("Error in optimize cronjobs route:", error);
			return new Response(
				JSON.stringify({
					success: false,
					error:
						error instanceof Error
							? error.message
							: "Unknown error",
				}),
				{
					status: 500,
					headers: { "Content-Type": "application/json" },
				},
			);
		}
	},
});

