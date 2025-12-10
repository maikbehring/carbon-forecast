import {
	Content,
	Heading,
	Text,
	Section,
	Switch,
	Label,
	FieldDescription,
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Badge,
	InlineCode,
} from "@mittwald/flow-remote-react-components";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCronjobs } from "~/server/functions/getAllCronjobs";
import { toggleAutoOptimize, isCo2Optimized } from "~/server/functions/toggleAutoOptimize";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";

interface Cronjob {
	id: string;
	description?: string;
	interval?: string;
	projectId?: string;
	projectName?: string;
}

/**
 * Prüft ob ein Cronjob täglich ausgeführt wird
 */
function isDailyCronjob(interval?: string): boolean {
	if (!interval) return false;
	const parts = interval.trim().split(/\s+/);
	if (parts.length < 5) return false;
	const [, , day, month, weekday] = parts;
	return day === "*" && month === "*" && weekday === "*";
}

export function CarbonOptimization() {
	const queryClient = useQueryClient();

	const {
		data: cronjobs = [],
		isLoading: isLoadingCronjobs,
		error: cronjobsError,
	} = useQuery({
		queryKey: ["allCronjobs"],
		queryFn: () => getAllCronjobs(),
		staleTime: 30 * 1000,
	});

	// Filtere nur tägliche Cronjobs
	const dailyCronjobs = cronjobs.filter((cronjob) =>
		isDailyCronjob(cronjob.interval),
	);

	const handleToggle = async (cronjob: Cronjob, enabled: boolean) => {
		try {
			await toggleAutoOptimize({
				data: {
					cronjobId: cronjob.id,
					enabled,
				},
			} as any);

			// Invalidate queries um Daten zu aktualisieren
			queryClient.invalidateQueries({ queryKey: ["allCronjobs"] });
		} catch (error) {
			console.error("Error toggling auto-optimize:", error);
			// TODO: Zeige Fehler-Message an
		}
	};

	if (isLoadingCronjobs) {
		return <Loader />;
	}

	if (cronjobsError) {
		return (
			<ErrorMessage
				title="Fehler beim Laden der Cronjobs"
				message={
					cronjobsError instanceof Error
						? cronjobsError.message
						: "Unbekannter Fehler"
				}
			/>
		);
	}

	return (
		<Content>
			<Section>
				<Heading level={2}>CO₂-Optimierung</Heading>
				<Text>
					Aktiviere die automatische CO₂-Optimierung für tägliche Cronjobs. Diese
					werden dann automatisch auf die Zeit mit dem geringsten CO₂-Verbrauch
					verschoben.
				</Text>
			</Section>

			{dailyCronjobs.length === 0 ? (
				<Section>
					<Text>Keine täglichen Cronjobs gefunden.</Text>
					<Text>
						Die automatische CO₂-Optimierung ist nur für Cronjobs verfügbar, die
						täglich ausgeführt werden (Interval: * * * * *).
					</Text>
				</Section>
			) : (
				<Section>
					<Text>
						{dailyCronjobs.length} tägliche Cronjob{dailyCronjobs.length !== 1 ? "s" : ""} gefunden
					</Text>
					<Table aria-label="CO₂-Optimierung">
						<TableHeader>
							<TableColumn>Projekt</TableColumn>
							<TableColumn>Beschreibung</TableColumn>
							<TableColumn>Interval</TableColumn>
							<TableColumn>Status</TableColumn>
							<TableColumn>CO₂-Optimierung</TableColumn>
						</TableHeader>
						<TableBody>
							{dailyCronjobs.map((cronjob) => {
								const isOptimized = isCo2Optimized(cronjob.description);
								// Entferne Marker für Anzeige
								const displayDescription = cronjob.description
									?.replace("[CO2-OPT]", "")
									.trim() || "Unbenannter Cronjob";

								return (
									<TableRow key={cronjob.id}>
										<TableCell>
											{cronjob.projectName || "Unbekanntes Projekt"}
										</TableCell>
										<TableCell>{displayDescription}</TableCell>
										<TableCell>
											<InlineCode>{cronjob.interval}</InlineCode>
										</TableCell>
										<TableCell>
											{isOptimized ? (
												<Badge color="green">Aktiviert</Badge>
											) : (
												<Badge color="neutral">Deaktiviert</Badge>
											)}
										</TableCell>
										<TableCell>
											<Switch
												isSelected={isOptimized}
												onChange={(enabled) =>
													handleToggle(cronjob, enabled)
												}
											>
												<Label>
													{isOptimized
														? "Automatische Optimierung aktiv"
														: "Automatische Optimierung aktivieren"}
												</Label>
												<FieldDescription>
													Dieser Cronjob wird täglich automatisch auf die Zeit
													mit dem geringsten CO₂-Verbrauch verschoben.
												</FieldDescription>
											</Switch>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Section>
			)}
		</Content>
	);
}

