import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

export const getCronjobs = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		try {
			if (!context.projectId) {
				throw new Error("Project ID is required");
			}

			const { publicToken: accessToken } = await getAccessToken(
				context.sessionToken,
				env.EXTENSION_SECRET,
			);

			const client = await MittwaldAPIV2Client.newWithToken(accessToken);
			const result = await client.cronjob.listCronjobs({
				projectId: context.projectId,
			});

			assertStatus(result, 200);
			return result.data;
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			}
			throw new Error("Unknown error while fetching cronjobs");
		}
	});

