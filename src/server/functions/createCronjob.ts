import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

const CreateCronjobSchema = z.object({
	projectId: z.string().min(1),
	appId: z.string().min(1),
	description: z.string().min(1),
	interval: z.string().min(1),
	destination: z.union([
		z.string(),
		z.object({
			interpreter: z.string(),
			path: z.string(),
			parameters: z.string().optional(),
		}),
		z.object({
			url: z.string(),
		}),
	]),
	timeout: z.number().optional(),
});

export const createCronjob = createServerFn({ method: "POST" })
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
			const validatedBody = CreateCronjobSchema.parse(data);

			const { publicToken: accessToken } = await getAccessToken(
				ctx.sessionToken,
				env.EXTENSION_SECRET,
			);

			const client = await MittwaldAPIV2Client.newWithToken(accessToken);
			
			// Handle different destination types
			let destination;
			if (typeof validatedBody.destination === "string") {
				destination = { url: validatedBody.destination };
			} else if ("url" in validatedBody.destination) {
				destination = validatedBody.destination;
			} else {
				destination = validatedBody.destination;
			}

			const result = await client.cronjob.createCronjob({
				projectId: validatedBody.projectId,
				data: {
					appId: validatedBody.appId,
					description: validatedBody.description,
					interval: validatedBody.interval,
					destination,
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

