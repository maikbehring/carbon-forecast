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
	.server(async ({ next, context, data }) => {
		const contextWithToken = context as unknown as {
			sessionToken: string;
			projectId?: string;
		};

		console.log("verifyAccessToInstance.server - data:", data);
		console.log("verifyAccessToInstance.server - data type:", typeof data);

		const res = await verify(contextWithToken.sessionToken);

		// Pass data through - needed for POST requests
		return (next as any)({
			context: {
				extensionInstanceId: res.extensionInstanceId,
				extensionId: res.extensionId,
				userId: res.userId,
				contextId: res.contextId,
				projectId: contextWithToken.projectId,
			},
			data, // Pass data through to handler
		});
	});
