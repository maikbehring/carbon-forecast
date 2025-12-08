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

// WORKAROUND: Remove method: "POST" to let TanStack Start auto-detect and parse body
// This is a workaround for TanStack Start v1.131.48 bug where POST body is parsed AFTER middleware
export const updateCronjob = createServerFn()
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		try {
			if (!context) {
				throw new Error("Context is required");
			}
			const ctx = context as { sessionToken: string; _data?: unknown };

		// WORKAROUND: Use data from context._data if data parameter is null
		// This is needed because TanStack Start v1.131.48 parses body AFTER middleware
		let parsedData: unknown = data;
		console.log("updateCronjob - data:", data);
		console.log("updateCronjob - context._data:", ctx._data);
		
		if (
			(parsedData === null || parsedData === undefined) &&
			ctx._data !== undefined
		) {
			console.log("updateCronjob - Using context._data as fallback");
			parsedData = ctx._data;
		}

		if (!parsedData || typeof parsedData !== "object") {
			console.error("updateCronjob - Invalid data:", {
				data,
				contextData: ctx._data,
				parsedData,
			});
			throw new Error("Invalid data: expected object, received null or invalid type");
		}

			const validatedBody = UpdateCronjobSchema.parse(parsedData);

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

			assertStatus(result, 204);
			return result.data;
		} catch (error) {
			if (error instanceof z.ZodError) {
				throw new Error(`Validation error: ${error.errors.map((e) => e.message).join(", ")}`);
			}
			if (error instanceof Error) {
				console.error("Error updating cronjob:", error.message, error);
				throw error;
			}
			console.error("Unknown error while updating cronjob:", error);
			throw new Error("Unknown error while updating cronjob");
		}
	});

