import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

export const getCronjobs = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		try {
			if (!context) {
				return [];
			}
			const ctx = context as { projectId?: string; sessionToken: string };

			// Wenn kein projectId vorhanden ist (z.B. im Customer-Kontext), leeren Array zurückgeben
			if (!ctx.projectId) {
				return [];
			}

			const { publicToken: accessToken } = await getAccessToken(
				ctx.sessionToken,
				env.EXTENSION_SECRET,
			);

			const client = await MittwaldAPIV2Client.newWithToken(accessToken);
			const result = await client.cronjob.listCronjobs({
				projectId: ctx.projectId,
			});

			assertStatus(result, 200);
			return result.data;
		} catch (error) {
			// Bei Fehlern leeren Array zurückgeben statt Fehler zu werfen
			console.error("Error fetching cronjobs:", error);
			return [];
		}
	});

