import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { env } from "~/env";
import { db } from "~/db";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { optimizeDailyCronjob } from "./optimizeDailyCronjob";
import { isCo2Optimized } from "./toggleAutoOptimize";
import type { CarbonForecast } from "./getCarbonForecast";

const ScheduledOptimizeSchema = z.object({
	apiKey: z.string().optional(),
});

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
 * Optimiert alle Cronjobs für alle Extension Instances
 * 
 * Diese Funktion kann von einem externen Cronjob aufgerufen werden.
 * Sie verwendet das instance.secret als Session-Token, um die mittwald API aufzurufen.
 * 
 * Für Testzwecke kann diese Funktion ohne API-Key aufgerufen werden, wenn OPTIMIZATION_API_KEY leer ist.
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
			// 1. Hole Carbon Forecast direkt
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
					throw new Error("Request timeout: Carbon forecast API did not respond");
				}
				throw error;
			}

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

			const results: Array<{
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
					// Versuche, das instance.secret als Session-Token zu verwenden
					// Das instance.secret wird von mittwald über Webhooks gesetzt und sollte
					// als Session-Token für getAccessToken funktionieren
					let accessToken: string;
					try {
						const tokenResult = await getAccessToken(
							instance.secret,
							env.EXTENSION_SECRET,
						);
						accessToken = tokenResult.publicToken;
					} catch (tokenError) {
						console.error(
							`Cannot get access token for instance ${instance.id}:`,
							tokenError,
						);
						results.push({
							instanceId: instance.id,
							cronjobId: "",
							success: false,
							error:
								tokenError instanceof Error
									? `Token retrieval failed: ${tokenError.message}`
									: "Token retrieval failed: Unknown error",
						});
						continue; // Skip this instance
					}
					const client =
						await MittwaldAPIV2Client.newWithToken(accessToken);

					// Hole alle Projekte für diese Instance
					const projectsResult = await client.project.listProjects();
					assertStatus(projectsResult, 200);

					// Sammle alle Cronjobs aus allen Projekten
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

					// 4. Für jeden Cronjob prüfen und optimieren
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
								instanceId: instance.id,
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
						`Error processing instance ${instance.id}:`,
						error,
					);
					results.push({
						instanceId: instance.id,
						cronjobId: "",
						success: false,
						error:
							error instanceof Error
								? error.message
								: "Unknown error",
					});
				}
			}

			return {
				success: true,
				optimized: results.filter((r) => r.success).length,
				failed: results.filter((r) => !r.success).length,
				results,
			};
		} catch (error) {
			console.error("Error in scheduledOptimize:", error);
			throw error instanceof Error
				? error
				: new Error("Unknown error in scheduledOptimize");
		}
	});
