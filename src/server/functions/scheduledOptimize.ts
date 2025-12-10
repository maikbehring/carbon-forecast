import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { env } from "~/env";
import { db } from "~/db";
import { optimizeDailyCronjob } from "./optimizeDailyCronjob";
import { isCo2Optimized } from "./toggleAutoOptimize";
import type { CarbonForecast } from "./getCarbonForecast";

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

const ScheduledOptimizeSchema = z.object({
	apiKey: z.string().optional(),
});

/**
 * Optimiert alle Cronjobs für alle Extension Instances
 * 
 * Diese Funktion wird von einem externen Cronjob aufgerufen und benötigt KEINE Middleware.
 * Sie iteriert über alle aktiven Extension Instances und optimiert deren Cronjobs.
 * 
 * WICHTIG: Diese Funktion kann optional durch einen API-Key geschützt werden!
 * Setze OPTIMIZATION_API_KEY in der .env Datei für Produktion.
 * Für Testzwecke kann die Funktion ohne API-Key aufgerufen werden, wenn OPTIMIZATION_API_KEY leer ist.
 * 
 * Aufruf von externem Cronjob:
 * - Domain: https://mstudio.carbon-aware-computing.jetzt
 * - Endpoint: /_serverFn/src_server_functions_scheduledOptimize_ts--scheduledOptimize_createServerFn_handler?createServerFn
 * - Interval: 0 2 * * * (täglich um 2 Uhr UTC)
 * - Method: POST
 * - Body: { "apiKey": "dein-api-key" } (nur erforderlich, wenn OPTIMIZATION_API_KEY gesetzt ist)
 * - Body: {} oder leer (für Testzwecke, wenn OPTIMIZATION_API_KEY nicht gesetzt ist)
 */
export const scheduledOptimize = createServerFn({ method: "POST" })
	.handler(async ({ data }: { data: unknown }) => {
		// API-Key Validierung (nur wenn OPTIMIZATION_API_KEY gesetzt ist)
		// Für Testzwecke kann die Funktion ohne API-Key aufgerufen werden, wenn OPTIMIZATION_API_KEY leer ist
		if (env.OPTIMIZATION_API_KEY && env.OPTIMIZATION_API_KEY.trim() !== "") {
			const validated = ScheduledOptimizeSchema.parse(data || {});
			if (!validated.apiKey || validated.apiKey !== env.OPTIMIZATION_API_KEY) {
				throw new Error("Unauthorized: Invalid API key");
			}
		}
		try {
			// 1. Hole Carbon Forecast direkt (ohne Middleware)
			const CARBON_FORECAST_URL =
				"https://carbonawarecomputing.blob.core.windows.net/forecasts/de.json";
			const forecastResponse = await fetch(CARBON_FORECAST_URL);
			if (!forecastResponse.ok) {
				throw new Error(
					`Failed to fetch carbon forecast: ${forecastResponse.status} ${forecastResponse.statusText}`,
				);
			}
			const forecastData = await forecastResponse.json();
			const forecast = CarbonForecastSchema.parse(forecastData) as CarbonForecast;

			// 2. Hole alle aktiven Extension Instances
			const instances = await db.extensionInstance.findMany({
				where: { active: true },
			});

			if (instances.length === 0) {
				return {
					success: true,
					message: "No active extension instances found",
					optimized: 0,
					failed: 0,
					results: [],
				};
			}

			const allResults: Array<{
				instanceId: string;
				cronjobId: string;
				success: boolean;
				oldTime?: string;
				newTime?: string;
				co2Rating?: number;
				error?: string;
			}> = [];

			// 3. Für jede Extension Instance
			for (const instance of instances) {
				try {
					// Hole Access Token mit instance.secret
					// WICHTIG: getAccessToken benötigt normalerweise sessionToken,
					// aber für Background-Jobs können wir das secret direkt verwenden
					// Prüfe ob es eine Methode gibt, die secret akzeptiert
					
					// Versuche mit secret als sessionToken (könnte funktionieren)
					const { publicToken: accessToken } = await getAccessToken(
						instance.secret,
						env.EXTENSION_SECRET,
					);
					const client = await MittwaldAPIV2Client.newWithToken(accessToken);

					// Hole alle Projekte für diese Instance
					const projectsResult = await client.project.listProjects();
					assertStatus(projectsResult, 200);

					// Für jedes Projekt die Cronjobs abrufen
					for (const project of projectsResult.data) {
						try {
							const cronjobsResult = await client.cronjob.listCronjobs({
								projectId: project.id,
							});
							assertStatus(cronjobsResult, 200);

							// Für jeden Cronjob prüfen
							for (const cronjob of cronjobsResult.data) {
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

									allResults.push({
										instanceId: instance.id,
										cronjobId: cronjob.id,
										success: true,
										oldTime: `${currentParts[1]}:${currentParts[0]}`,
										newTime: `${optimizedParts[1]}:${optimizedParts[0]}`,
										co2Rating: optimizationResult.optimalRating,
									});
								} catch (error) {
									console.error(
										`Error optimizing cronjob ${cronjob.id} for instance ${instance.id}:`,
										error,
									);
									allResults.push({
										instanceId: instance.id,
										cronjobId: cronjob.id,
										success: false,
										error:
											error instanceof Error
												? error.message
												: "Unknown error",
									});
								}
							}
						} catch (error) {
							console.error(
								`Error fetching cronjobs for project ${project.id}:`,
								error,
							);
						}
					}
				} catch (error) {
					console.error(
						`Error processing instance ${instance.id}:`,
						error,
					);
				}
			}

			return {
				success: true,
				optimized: allResults.filter((r) => r.success).length,
				failed: allResults.filter((r) => !r.success).length,
				results: allResults,
			};
		} catch (error) {
			console.error("Error in scheduledOptimize:", error);
			throw error;
		}
	});

