import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

const UpdateCronjobSchema = z.object({
	cronjobId: z.string().min(1),
	projectId: z.string().min(1),
	description: z.string().min(1).optional(),
	interval: z.string().min(1).optional(),
	destination: z.string().min(1).optional(),
	timeout: z.number().optional(),
	active: z.boolean().optional(),
});

export const updateCronjob = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: { projectId?: string; sessionToken: string }; data: unknown }) => {
		try {
			const validatedBody = UpdateCronjobSchema.parse(data);

			if (!validatedBody.projectId) {
				throw new Error("Project ID is required");
			}

			const { publicToken: accessToken } = await getAccessToken(
				context.sessionToken,
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
				throw error;
			}
			throw new Error("Unknown error while updating cronjob");
		}
	});

