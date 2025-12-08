import {
	Heading,
	Text,
	Section,
	typedList,
	Badge,
	InlineCode,
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

	return (
		<Section>
			<Heading level={2}>Cronjobs</Heading>
			<Text>
				{cronjobs.length} von insgesamt {cronjobs.length} angezeigt
			</Text>
			<CronjobList.List aria-label="Cronjobs">
				<CronjobList.StaticData data={cronjobs} />
				<CronjobList.Table>
					<CronjobList.TableHeader>
						<CronjobList.TableColumn>Projekt</CronjobList.TableColumn>
						<CronjobList.TableColumn>Beschreibung</CronjobList.TableColumn>
						<CronjobList.TableColumn>Status</CronjobList.TableColumn>
						<CronjobList.TableColumn>Interval</CronjobList.TableColumn>
						<CronjobList.TableColumn>Destination</CronjobList.TableColumn>
						<CronjobList.TableColumn>Timeout</CronjobList.TableColumn>
					</CronjobList.TableHeader>
					<CronjobList.TableBody>
						<CronjobList.TableRow>
							<CronjobList.TableCell>
								{(cronjob) => cronjob.projectName || "Unbekanntes Projekt"}
							</CronjobList.TableCell>
							<CronjobList.TableCell>
								{(cronjob) => cronjob.description || "Unbenannter Cronjob"}
							</CronjobList.TableCell>
							<CronjobList.TableCell>
								{(cronjob) =>
									cronjob.active !== undefined ? (
										<Badge color={cronjob.active ? "green" : "neutral"}>
											{cronjob.active ? "Aktiv" : "Inaktiv"}
										</Badge>
									) : (
										"-"
									)
								}
							</CronjobList.TableCell>
							<CronjobList.TableCell>
								{(cronjob) =>
									cronjob.interval ? <InlineCode>{cronjob.interval}</InlineCode> : "-"
								}
							</CronjobList.TableCell>
							<CronjobList.TableCell>
								{(cronjob) => {
									if (typeof cronjob.destination === "string") {
										return <InlineCode>{cronjob.destination}</InlineCode>;
									}
									if ("url" in cronjob.destination) {
										return <InlineCode>{cronjob.destination.url}</InlineCode>;
									}
									return <InlineCode>{cronjob.destination.path}</InlineCode>;
								}}
							</CronjobList.TableCell>
							<CronjobList.TableCell>
								{(cronjob) =>
									cronjob.timeout ? `${cronjob.timeout} Sekunden` : "-"
								}
							</CronjobList.TableCell>
						</CronjobList.TableRow>
					</CronjobList.TableBody>
				</CronjobList.Table>
			</CronjobList.List>
		</Section>
	);
}

