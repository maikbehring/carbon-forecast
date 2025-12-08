import { createServerFn } from "@tanstack/react-start";
import { MittwaldAPIV2Client, assertStatus } from "@mittwald/api-client";
import { getAccessToken } from "@mittwald/ext-bridge/node";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { env } from "~/env";

interface CronjobWithProject {
	id: string;
	description?: string;
	interval?: string;
	destination: string | { url: string } | { interpreter: string; path: string; parameters?: string };
	timeout?: number;
	active?: boolean;
	appId?: string;
	projectId: string;
	projectName?: string;
}

export const getAllCronjobs = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		try {
			const { publicToken: accessToken } = await getAccessToken(
				context.sessionToken,
				env.EXTENSION_SECRET,
			);

			const client = await MittwaldAPIV2Client.newWithToken(accessToken);

			// Alle Projekte abrufen
			const projectsResult = await client.project.listProjects();
			assertStatus(projectsResult, 200);

			const projects = projectsResult.data;
			const allCronjobs: CronjobWithProject[] = [];

			// Für jedes Projekt die Cronjobs abrufen
			for (const project of projects) {
				try {
					const cronjobsResult = await client.cronjob.listCronjobs({
						projectId: project.id,
					});
					assertStatus(cronjobsResult, 200);

					// Cronjobs mit Projekt-Informationen versehen
					const cronjobs = cronjobsResult.data.map((cronjob) => ({
						...cronjob,
						projectId: project.id,
						projectName: project.description || project.id,
					}));

					allCronjobs.push(...cronjobs);
				} catch (error) {
					// Wenn ein Projekt keine Cronjobs hat oder ein Fehler auftritt, einfach überspringen
					console.error(`Error fetching cronjobs for project ${project.id}:`, error);
				}
			}

			return allCronjobs;
		} catch (error) {
			console.error("Error fetching all cronjobs:", error);
			// Bei Fehlern leeren Array zurückgeben statt Fehler zu werfen
			return [];
		}
	});

