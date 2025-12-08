import { getConfig, getSessionToken } from "@mittwald/ext-bridge/browser";
import { verify } from "@mittwald/ext-bridge/node";
import { createMiddleware } from "@tanstack/react-start";

export const verifyAccessToInstance = createMiddleware({
	type: "function",
	validateClient: true,
})
	.client(async ({ next, data }) => {
		const sessionToken = await getSessionToken();
		const config = await getConfig();

		const sendContext: {
			sessionToken: string;
			projectId: string | undefined;
		} = {
			sessionToken,
			projectId: config.projectId,
		};

		// With correct call signature ({ data: ... }), data should now be available
		console.log("verifyAccessToInstance.client - data:", data);

		return next({
			sendContext,
		});
	})
	.server(async ({ next, context }) => {
		const contextWithToken = context as unknown as {
			sessionToken: string;
			projectId?: string;
		};

		const res = await verify(contextWithToken.sessionToken);

		return next({
			context: {
				extensionInstanceId: res.extensionInstanceId,
				extensionId: res.extensionId,
				userId: res.userId,
				contextId: res.contextId,
				projectId: contextWithToken.projectId,
			},
		});
	});
