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
		console.log("verifyAccessToInstance.client - data:", data);
		if (data && typeof data === "object") {
			sendContext._data = data;
			console.log("verifyAccessToInstance.client - Stored data in sendContext._data:", sendContext._data);
		}

		// IMPORTANT: Pass sendContext with _data to ensure it's available in server middleware
		return (next as any)({
			sendContext: {
				...sendContext,
				_data: sendContext._data, // Explicitly pass _data
			},
			data, // Also pass as data parameter (may be lost due to bug)
		});
	})
	.server(async ({ next, context, data }) => {
		// Log the entire context to see what we're receiving
		console.log("verifyAccessToInstance.server - full context:", JSON.stringify(context, null, 2));
		console.log("verifyAccessToInstance.server - data:", data);
		
		// Try to access _data from context - it might be in different places
		const contextWithToken = context as unknown as {
			sessionToken: string;
			projectId?: string;
			_data?: unknown; // Workaround: data passed via sendContext
		};

		// Also check if _data is directly on context
		const contextData = (context as any)?._data || contextWithToken._data;
		console.log("verifyAccessToInstance.server - context._data:", contextData);
		console.log("verifyAccessToInstance.server - context keys:", Object.keys(context || {}));

		const res = await verify(contextWithToken.sessionToken);

		// WORKAROUND: Use data from sendContext if data parameter is null
		let parsedData: unknown = data;
		
		if (
			(parsedData === null || parsedData === undefined) &&
			contextData !== undefined
		) {
			console.log("verifyAccessToInstance.server - Using context._data as fallback");
			parsedData = contextData;
		}

		return (next as any)({
			context: {
				extensionInstanceId: res.extensionInstanceId,
				extensionId: res.extensionId,
				userId: res.userId,
				contextId: res.contextId,
				projectId: contextWithToken.projectId,
				_data: contextWithToken._data, // Also pass _data in context as fallback
			},
			data: parsedData, // Use data from sendContext if data parameter is null
		});
	});
