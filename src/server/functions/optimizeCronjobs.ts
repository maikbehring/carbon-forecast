import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";
import { getAllCronjobs } from "./getAllCronjobs";
import { getCarbonForecast } from "./getCarbonForecast";
import { optimizeDailyCronjob } from "./optimizeDailyCronjob";
import { isCo2Optimized } from "./toggleAutoOptimize";

/**
 * Optimiert alle Cronjobs die für automatische Optimierung markiert sind
 * 
 * Diese Funktion sollte einmal täglich von einem externen Cronjob aufgerufen werden:
 * - Domain: https://mstudio.carbon-aware-computing.jetzt
 * - Endpoint: /_serverFn/src_server_functions_optimizeCronjobs_ts--optimizeCronjobs_createServerFn_handler?createServerFn
 * - Interval: 0 2 * * * (täglich um 2 Uhr UTC)
 */
export const optimizeCronjobs = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }: { context: any }) => {
		try {
			if (!context) {
				throw new Error("Context is required");
			}
			const ctx = context as { sessionToken: string };

			// 1. Hole Carbon Forecast
			const forecast = await getCarbonForecast();

			// 2. Hole alle Cronjobs
			const cronjobs = await getAllCronjobs();

			const results: Array<{
				cronjobId: string;
				success: boolean;
				oldTime?: string;
				newTime?: string;
				co2Rating?: number;
				error?: string;
			}> = [];

			// 3. Hole Access Token für API-Calls
			const { publicToken: accessToken } = await getAccessToken(
				ctx.sessionToken,
				env.EXTENSION_SECRET,
			);
			const client = await MittwaldAPIV2Client.newWithToken(accessToken);

			// 4. Für jeden Cronjob prüfen
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

					// Optimiere
					const optimizationResult = optimizeDailyCronjob(
						cronjob.interval!,
						forecast,
					);

					// Prüfe ob Optimierung notwendig ist (nur wenn sich Zeit geändert hat)
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
					// API: PATCH /v2/cronjobs/{cronjobId}
					// Operation ID: cronjob-update-cronjob
					// Siehe: mittwald_api_documentation.md Zeile 7398
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

			return {
				success: true,
				optimized: results.filter((r) => r.success).length,
				failed: results.filter((r) => !r.success).length,
				results,
			};
		} catch (error) {
			console.error("Error in optimizeCronjobs:", error);
			throw error;
		}
	});

