import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

const ToggleAutoOptimizeSchema = z.object({
	cronjobId: z.string().min(1),
	enabled: z.boolean(),
});

const CO2_OPTIMIZE_MARKER = "[CO2-OPT]";

/**
 * Prüft ob ein Cronjob für CO₂-Optimierung markiert ist
 */
export function isCo2Optimized(description?: string): boolean {
	if (!description) return false;
	return description.includes(CO2_OPTIMIZE_MARKER);
}

/**
 * Entfernt den CO₂-Optimierungs-Marker aus der Beschreibung
 */
function removeCo2Marker(description: string): string {
	return description.replace(CO2_OPTIMIZE_MARKER, "").trim();
}

/**
 * Fügt den CO₂-Optimierungs-Marker zur Beschreibung hinzu
 */
function addCo2Marker(description: string): string {
	if (description.includes(CO2_OPTIMIZE_MARKER)) {
		return description;
	}
	return `${CO2_OPTIMIZE_MARKER} ${description}`.trim();
}

export const toggleAutoOptimize = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: any; data: unknown }) => {
		try {
			if (!context) {
				throw new Error("Context is required");
			}
			const ctx = context as { sessionToken: string };

			// Validierung
			if (!data || typeof data !== "object") {
				throw new Error("Invalid data: expected object");
			}
			const validated = ToggleAutoOptimizeSchema.parse(data);

			// Hole aktuellen Cronjob
			const { publicToken: accessToken } = await getAccessToken(
				ctx.sessionToken,
				env.EXTENSION_SECRET,
			);
			const client = await MittwaldAPIV2Client.newWithToken(accessToken);

			// API: GET /v2/cronjobs/{cronjobId}
			// Operation ID: cronjob-get-cronjob
			// Siehe: mittwald_api_documentation.md Zeile 7338
			const cronjobResult = await client.cronjob.getCronjob({
				cronjobId: validated.cronjobId,
			});
			assertStatus(cronjobResult, 200);
			const cronjob = cronjobResult.data;

			// Aktualisiere Beschreibung mit/ohne Marker
			const currentDescription = cronjob.description || "";
			const newDescription = validated.enabled
				? addCo2Marker(currentDescription)
				: removeCo2Marker(currentDescription);

			// API: PATCH /v2/cronjobs/{cronjobId}
			// Operation ID: cronjob-update-cronjob
			// Siehe: mittwald_api_documentation.md Zeile 7398
			const updateResult = await client.cronjob.updateCronjob({
				cronjobId: validated.cronjobId,
				data: {
					description: newDescription,
				},
			});
			assertStatus(updateResult, 204);

			return { success: true };
		} catch (error) {
			if (error instanceof z.ZodError) {
				throw new Error(
					`Validation error: ${error.errors.map((e) => e.message).join(", ")}`,
				);
			}
			if (error instanceof Error) {
				throw error;
			}
			throw new Error("Unknown error while toggling auto-optimize");
		}
	});

