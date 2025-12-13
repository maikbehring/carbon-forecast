import { getAccessToken } from "@mittwald/ext-bridge/node";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { env } from "../src/env";

const API_BASE_URL = "https://api.mittwald.de/v2";

async function requestVerification() {
	try {
		// Get session token from environment or CLI argument
		const sessionToken = process.env.SESSION_TOKEN;
		if (!sessionToken) {
			throw new Error(
				"SESSION_TOKEN environment variable is required. Get it from your browser's extension context.",
			);
		}

		const extensionId = env.EXTENSION_ID;

		// Get access token for API calls
		const { publicToken: accessToken } = await getAccessToken(
			sessionToken,
			env.EXTENSION_SECRET,
		);

		const client = await MittwaldAPIV2Client.newWithToken(accessToken);

		// Get current user to determine contributorId
		// Note: contributorId might be the same as userId, or you might need to get it differently
		const userResult = await client.user.getCurrentUser();
		assertStatus(userResult, 200);

		const userId = userResult.data.id;
		const contributorId = userId; // Assuming contributorId equals userId

		console.log(`Extension ID: ${extensionId}`);
		console.log(`Contributor ID: ${contributorId}`);
		console.log(`Requesting verification...`);

		// Request verification via direct API call
		const response = await fetch(
			`${API_BASE_URL}/contributors/${contributorId}/extensions/${extensionId}/verification-process/`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${accessToken}`,
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`API-Fehler: ${response.status} ${response.statusText} - ${errorText}`,
			);
		}

		const data = await response.json();

		console.log("\n✅ Verifizierungsanfrage erfolgreich eingereicht!");
		console.log("Die Prüfung dauert in der Regel 3-5 Werktage.");
		console.log("\nResponse:", JSON.stringify(data, null, 2));
	} catch (error) {
		console.error("\n❌ Fehler bei der Verifizierungsanfrage:");
		if (error instanceof Error) {
			console.error(error.message);
		} else {
			console.error("Unbekannter Fehler:", error);
		}
		process.exit(1);
	}
}

requestVerification();











