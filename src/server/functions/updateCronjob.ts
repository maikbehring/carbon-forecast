import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

const UpdateCronjobSchema = z.object({
	cronjobId: z.string().min(1),
	description: z.string().min(1).optional(),
	interval: z.string().min(1).optional(),
	destination: z.string().min(1).optional(),
	timeout: z.number().optional(),
	active: z.boolean().optional(),
});

export const updateCronjob = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: any; data: unknown }) => {
		try {
			if (!context) {
				throw new Error("Context is required");
			}
			const ctx = context as { sessionToken: string };

			// Validate data manually (inputValidator not available in v1.131.48)
			if (!data || typeof data !== "object") {
				throw new Error("Invalid data: expected object");
			}
			const validatedBody = UpdateCronjobSchema.parse(data);

			const { publicToken: accessToken } = await getAccessToken(
				ctx.sessionToken,
				env.EXTENSION_SECRET,
			);

			const client = await MittwaldAPIV2Client.newWithToken(accessToken);
			
			// Build update data object with only provided fields
			const updateData: {
				description?: string;
				interval?: string;
				destination?: { url: string } | { interpreter: string; path: string; parameters?: string };
				timeout?: number;
				active?: boolean;
			} = {};

			if (validatedBody.description !== undefined) {
				updateData.description = validatedBody.description;
			}
			if (validatedBody.interval !== undefined) {
				updateData.interval = validatedBody.interval;
			}
			if (validatedBody.destination !== undefined) {
				updateData.destination = { url: validatedBody.destination };
			}
			if (validatedBody.timeout !== undefined) {
				updateData.timeout = validatedBody.timeout;
			}
			if (validatedBody.active !== undefined) {
				updateData.active = validatedBody.active;
			}

			// Ensure at least one field is provided
			if (Object.keys(updateData).length === 0) {
				throw new Error("At least one field must be provided for update");
			}

		const result = await client.cronjob.updateCronjob({
			cronjobId: validatedBody.cronjobId,
			data: updateData,
		});

		// Check for 403 Permission Denied before asserting status
		// Type assertion needed because assertStatus narrows the type
		const status = (result as any).status;
		if (status === 403) {
			console.error("Permission denied (403) when updating cronjob:", {
				cronjobId: validatedBody.cronjobId,
				status,
				response: (result as any).data,
			});
			throw new Error(
				"Zugriff verweigert: Die Extension hat keine Berechtigung, Cronjobs zu aktualisieren. Bitte prüfe die Extension-Scopes in mStudio.",
			);
		}

		assertStatus(result, 204);
		return result.data;
	} catch (error) {
		if (error instanceof z.ZodError) {
			throw new Error(`Validation error: ${error.errors.map((e) => e.message).join(", ")}`);
		}
		if (error instanceof Error) {
			console.error("Error updating cronjob:", error.message, error);
			// Don't re-throw if it's already a user-friendly error message
			if (error.message.includes("Zugriff verweigert") || error.message.includes("Permission denied")) {
				throw error;
			}
			// For other errors, check if it's an API client error
			if ("status" in error && (error as any).status === 403) {
				throw new Error(
					"Zugriff verweigert: Die Extension hat keine Berechtigung, Cronjobs zu aktualisieren. Bitte prüfe die Extension-Scopes in mStudio.",
				);
			}
			throw error;
		}
		console.error("Unknown error while updating cronjob:", error);
		throw new Error("Unknown error while updating cronjob");
	}
	});

