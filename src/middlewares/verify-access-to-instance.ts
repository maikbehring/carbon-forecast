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
			_data?: unknown;
		} = {
			sessionToken,
			projectId: config.projectId,
		};

		// WORKAROUND: Pass data in sendContext for POST requests with middleware
		// TanStack Start v1.131.48 parses body AFTER middleware, so data is null
		// See: updatenotification.md for details
		if (data && typeof data === "object") {
			sendContext._data = data;
		}

		return (next as any)({
			sendContext,
			data, // Also pass as data parameter (may be lost due to bug)
		});
	})
	.server(async ({ next, context, data }) => {
		const contextWithToken = context as unknown as {
			sessionToken: string;
			projectId?: string;
			_data?: unknown; // Workaround: data passed via sendContext
		};

		const res = await verify(contextWithToken.sessionToken);

		// WORKAROUND: Use data from sendContext if data parameter is null
		let parsedData: unknown = data;
		if (
			(parsedData === null || parsedData === undefined) &&
			contextWithToken._data !== undefined
		) {
			parsedData = contextWithToken._data;
		}

		return (next as any)({
			context: {
				extensionInstanceId: res.extensionInstanceId,
				extensionId: res.extensionId,
				userId: res.userId,
				contextId: res.contextId,
				projectId: contextWithToken.projectId,
			},
			data: parsedData, // Use data from sendContext if data parameter is null
		});
	});
