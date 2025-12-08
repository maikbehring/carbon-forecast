import {
	Content,
	Heading,
	Text,
	Section,
	typedList,
	Badge,
	InlineCode,
	Flex,
} from "@mittwald/flow-remote-react-components";

interface Cronjob {
	id: string;
	description?: string;
	interval?: string;
	destination: string | { url: string } | { interpreter: string; path: string; parameters?: string };
	timeout?: number;
	active?: boolean;
	appId?: string;
	projectId?: string;
	projectName?: string;
}

const CronjobList = typedList<Cronjob>();

interface CronjobListProps {
	cronjobs: Cronjob[];
}

export function CronjobListComponent({ cronjobs }: CronjobListProps) {
	if (cronjobs.length === 0) {
		return (
			<Section>
				<Heading level={2}>Cronjobs</Heading>
				<Text>Keine Cronjobs vorhanden.</Text>
			</Section>
		);
	}

	// Gruppiere Cronjobs nach Projekt
	const cronjobsByProject = cronjobs.reduce(
		(acc, cronjob) => {
			const projectName = cronjob.projectName || "Unbekanntes Projekt";
			if (!acc[projectName]) {
				acc[projectName] = [];
			}
			acc[projectName].push(cronjob);
			return acc;
		},
		{} as Record<string, Cronjob[]>,
	);

	return (
		<Section>
			<Heading level={2}>Cronjobs</Heading>
			<Text>
				{cronjobs.length} von insgesamt {cronjobs.length} angezeigt
			</Text>
			<Content>
				{Object.entries(cronjobsByProject).map(([projectName, projectCronjobs]) => (
					<Section key={projectName}>
						<Heading level={3}>{projectName}</Heading>
						<CronjobList.List aria-label={`Cronjobs für ${projectName}`}>
							<CronjobList.StaticData data={projectCronjobs} />
							<CronjobList.Item>
								{(cronjob) => (
									<CronjobList.ItemView>
										<Content>
											<Flex justify="start" gap="s">
												<Heading level={4}>
													{cronjob.description || "Unbenannter Cronjob"}
												</Heading>
												{cronjob.active !== undefined && (
													<Badge color={cronjob.active ? "green" : "neutral"}>
														{cronjob.active ? "Aktiv" : "Inaktiv"}
													</Badge>
												)}
											</Flex>
											<Content>
												{cronjob.interval && (
													<Text>
														<strong>Interval:</strong>{" "}
														<InlineCode>{cronjob.interval}</InlineCode>
													</Text>
												)}
												<Text>
													<strong>Destination:</strong>{" "}
													{typeof cronjob.destination === "string" ? (
														<InlineCode>{cronjob.destination}</InlineCode>
													) : "url" in cronjob.destination ? (
														<InlineCode>{cronjob.destination.url}</InlineCode>
													) : (
														<InlineCode>{cronjob.destination.path}</InlineCode>
													)}
												</Text>
												{cronjob.timeout && (
													<Text>
														<strong>Timeout:</strong> {cronjob.timeout} Sekunden
													</Text>
												)}
											</Content>
										</Content>
									</CronjobList.ItemView>
								)}
							</CronjobList.Item>
						</CronjobList.List>
					</Section>
				))}
			</Content>
		</Section>
	);
}

