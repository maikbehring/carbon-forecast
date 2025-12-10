import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

const GetAppsSchema = z.object({
	projectId: z.string().min(1),
});

export const getApps = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: any; data: unknown }) => {
		try {
			if (!context) {
				throw new Error("Context is required");
			}
			const ctx = context as { sessionToken: string };

			// Validate data
			if (!data || typeof data !== "object") {
				throw new Error("Invalid data: expected object");
			}
			const validatedBody = GetAppsSchema.parse(data);

			const { publicToken: accessToken } = await getAccessToken(
				ctx.sessionToken,
				env.EXTENSION_SECRET,
			);

			const client = await MittwaldAPIV2Client.newWithToken(accessToken);
			const result = await client.app.listApps({
				queryParameters: {
					projectId: validatedBody.projectId,
				},
			});
			assertStatus(result, 200);

			return result.data.map((app) => ({
				id: app.id,
				name: app.name || app.id,
			}));
		} catch (error) {
			if (error instanceof z.ZodError) {
				throw new Error(`Validation error: ${error.errors.map((e) => e.message).join(", ")}`);
			}
			if (error instanceof Error) {
				throw error;
			}
			throw new Error("Unknown error while fetching apps");
		}
	});

