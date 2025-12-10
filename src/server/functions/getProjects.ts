import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

export const getProjects = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }: { context: any }) => {
		try {
			if (!context) {
				throw new Error("Context is required");
			}
			const ctx = context as { sessionToken: string };

			const { publicToken: accessToken } = await getAccessToken(
				ctx.sessionToken,
				env.EXTENSION_SECRET,
			);

			const client = await MittwaldAPIV2Client.newWithToken(accessToken);
			const result = await client.project.listProjects();
			assertStatus(result, 200);

			return result.data.map((project) => ({
				id: project.id,
				name: project.description || project.id,
			}));
		} catch (error) {
			if (error instanceof Error) {
				throw error;
			}
			throw new Error("Unknown error while fetching projects");
		}
	});

