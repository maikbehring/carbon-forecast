import {
	Content,
	Heading,
	Text,
	Section,
	typedList,
} from "@mittwald/flow-remote-react-components";

interface Cronjob {
	id: string;
	description?: string;
	interval?: string;
	destination: string | { url: string } | { interpreter: string; path: string; parameters?: string };
	timeout?: number;
	active?: boolean;
	appId?: string;
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

	return (
		<Section>
			<Heading level={2}>Cronjobs</Heading>
			<CronjobList.List aria-label="Cronjobs">
				<CronjobList.StaticData data={cronjobs} />
				<CronjobList.Item>
					{(cronjob) => (
						<CronjobList.ItemView>
							<Content>
								<Heading level={3}>{cronjob.description || "Unbenannter Cronjob"}</Heading>
								{cronjob.interval && (
									<Text>
										<strong>Interval:</strong> {cronjob.interval}
									</Text>
								)}
								<Text>
									<strong>Destination:</strong>{" "}
									{typeof cronjob.destination === "string"
										? cronjob.destination
										: "url" in cronjob.destination
											? cronjob.destination.url
											: cronjob.destination.path}
								</Text>
								{cronjob.timeout && (
									<Text>
										<strong>Timeout:</strong> {cronjob.timeout} Sekunden
									</Text>
								)}
							</Content>
						</CronjobList.ItemView>
					)}
				</CronjobList.Item>
			</CronjobList.List>
		</Section>
	);
}

