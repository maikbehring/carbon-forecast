import {
	Heading,
	Text,
	Section,
	typedList,
	Badge,
	InlineCode,
	Flex,
} from "@mittwald/flow-remote-react-components";
import { EditCronjobForm } from "./EditCronjobForm";

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

/**
 * Prüft, ob ein Cronjob sehr häufig läuft (öfter als alle 30 Minuten)
 * @param interval Cron-Expression im Format "Minute Stunde Tag Monat Wochentag"
 * @returns true wenn der Cronjob sehr häufig läuft
 */
function isVeryFrequent(interval: string): boolean {
	const parts = interval.trim().split(/\s+/);
	if (parts.length < 5) return false;

	const minute = parts[0];
	const hour = parts[1];

	// Wenn Minute ein */X Pattern ist (z.B. */15 = alle 15 Minuten)
	if (minute.startsWith("*/")) {
		const minutes = Number.parseInt(minute.slice(2), 10);
		if (!Number.isNaN(minutes) && minutes <= 30) {
			return true;
		}
	}

	// Wenn Minute ein einzelner Wert ist und Stunde ein * ist, läuft es stündlich
	// Das ist nicht "sehr häufig"
	if (minute !== "*" && hour === "*") {
		return false;
	}

	// Wenn beide * sind, läuft es minütlich - das ist sehr häufig
	if (minute === "*" && hour === "*") {
		return true;
	}

	// Wenn Minute ein Bereich oder Liste ist und häufig vorkommt
	if (minute.includes(",") || minute.includes("-")) {
		// Vereinfachte Prüfung: Wenn es mehr als 2 Ausführungen pro Stunde gibt
		const minuteValues = minute.split(",").flatMap((m) => {
			if (m.includes("-")) {
				const [start, end] = m.split("-").map(Number.parseInt);
				if (!Number.isNaN(start) && !Number.isNaN(end)) {
					return Array.from({ length: end - start + 1 }, (_, i) => start + i);
				}
			}
			const num = Number.parseInt(m, 10);
			return Number.isNaN(num) ? [] : [num];
		});
		return minuteValues.length > 2;
	}

	return false;
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
			<CronjobList.List aria-label="Cronjobs" defaultViewMode="table">
				<CronjobList.StaticData data={cronjobs} />
				<CronjobList.Table>
					<CronjobList.TableHeader>
						<CronjobList.TableColumn>Projekt</CronjobList.TableColumn>
						<CronjobList.TableColumn>Beschreibung</CronjobList.TableColumn>
						<CronjobList.TableColumn>Status</CronjobList.TableColumn>
						<CronjobList.TableColumn>Interval</CronjobList.TableColumn>
						<CronjobList.TableColumn>Destination</CronjobList.TableColumn>
						<CronjobList.TableColumn>Timeout</CronjobList.TableColumn>
						<CronjobList.TableColumn>Aktionen</CronjobList.TableColumn>
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
								{(cronjob) => {
									if (!cronjob.interval) return "-";
									
									const frequent = isVeryFrequent(cronjob.interval);
									
									return (
										<Flex direction="column" gap="xs">
											<InlineCode>{cronjob.interval}</InlineCode>
											{frequent && (
												<Text>
													💡 Dieser Cronjob läuft sehr häufig. Ist das wirklich notwendig? 
													Weniger häufige Ausführungen können Energie sparen.
												</Text>
											)}
										</Flex>
									);
								}}
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
							<CronjobList.TableCell>
								{(cronjob) => <EditCronjobForm cronjob={cronjob} />}
							</CronjobList.TableCell>
						</CronjobList.TableRow>
					</CronjobList.TableBody>
				</CronjobList.Table>
			</CronjobList.List>
		</Section>
	);
}

