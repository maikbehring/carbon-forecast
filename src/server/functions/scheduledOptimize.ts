import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { env } from "~/env";
import { db } from "~/db";

const ScheduledOptimizeSchema = z.object({
	apiKey: z.string().optional(),
});

/**
 * Optimiert alle Cronjobs für alle Extension Instances
 * 
 * WICHTIG: Diese Funktion kann aktuell NICHT ohne Session-Token arbeiten!
 * 
 * Das Problem: getAccessToken benötigt einen sessionToken, nicht das instance.secret.
 * Für Background-Jobs ohne Session-Token können wir die mittwald API nicht aufrufen.
 * 
 * Lösung: Verwende stattdessen die optimizeCronjobs Funktion, die über Middleware
 * einen Session-Token erhält. Diese Funktion sollte von einem Cronjob aufgerufen werden,
 * der im Kontext eines Nutzers läuft.
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
			// Hole alle aktiven Extension Instances
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

			// WICHTIG: Diese Funktion kann aktuell nicht ohne Session-Token arbeiten
			// getAccessToken benötigt einen sessionToken, nicht das instance.secret
			// 
			// Lösung: Verwende die optimizeCronjobs Funktion, die über Middleware
			// einen Session-Token erhält. Diese Funktion sollte von einem Cronjob
			// aufgerufen werden, der im Kontext eines Nutzers läuft.
			return {
				success: false,
				message:
					"Cannot optimize cronjobs without session token. Please use optimizeCronjobs function instead, which requires user context. This function needs to be called from a cronjob that runs in a user context.",
				optimized: 0,
				failed: instances.length,
				results: instances.map((instance) => ({
					instanceId: instance.id,
					cronjobId: "",
					success: false,
					error:
						"Cannot authenticate without session token. Use optimizeCronjobs function with user context instead.",
				})),
			};
		} catch (error) {
			console.error("Error in scheduledOptimize:", error);
			throw error instanceof Error
				? error
				: new Error("Unknown error in scheduledOptimize");
		}
	});
