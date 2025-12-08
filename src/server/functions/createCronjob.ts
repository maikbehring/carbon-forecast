import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

const CreateCronjobSchema = z.object({
	appId: z.string().min(1),
	description: z.string().min(1),
	interval: z.string().min(1),
	destination: z.string().min(1),
	timeout: z.number().optional(),
});

export const createCronjob = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: any; data: unknown }) => {
		try {
			if (!context) {
				throw new Error("Context is required");
			}
			const ctx = context as { projectId?: string; sessionToken: string };
			if (!ctx.projectId) {
				throw new Error("Project ID is required");
			}

			// With correct call signature ({ data: ... }), data should now be available
			if (!data || typeof data !== "object") {
				throw new Error("Invalid data: expected object, received null or invalid type");
			}

			const validatedBody = CreateCronjobSchema.parse(data);

			const { publicToken: accessToken } = await getAccessToken(
				ctx.sessionToken,
				env.EXTENSION_SECRET,
			);

			const client = await MittwaldAPIV2Client.newWithToken(accessToken);
			const result = await client.cronjob.createCronjob({
				projectId: ctx.projectId,
				data: {
					appId: validatedBody.appId,
					description: validatedBody.description,
					interval: validatedBody.interval,
					destination: {
						url: validatedBody.destination,
					},
					timeout: validatedBody.timeout ?? 300,
					active: true,
				},
			});

			assertStatus(result, 201);
			return result.data;
		} catch (error) {
			if (error instanceof z.ZodError) {
				throw new Error(`Validation error: ${error.errors.map((e) => e.message).join(", ")}`);
			}
			if (error instanceof Error) {
				throw error;
			}
			throw new Error("Unknown error while creating cronjob");
		}
	});

