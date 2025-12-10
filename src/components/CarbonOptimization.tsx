import { useState } from "react";
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
	Alert,
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
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

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
		setError(null);
		setSuccess(null);
		try {
			await toggleAutoOptimize({
				data: {
					cronjobId: cronjob.id,
					enabled,
				},
			} as any);

			// Invalidate queries um Daten zu aktualisieren
			queryClient.invalidateQueries({ queryKey: ["allCronjobs"] });
			
			setSuccess(
				enabled
					? "CO₂-Optimierung wurde aktiviert. Der Cronjob wird täglich automatisch optimiert."
					: "CO₂-Optimierung wurde deaktiviert.",
			);
			
			// Erfolgs-Message nach 3 Sekunden ausblenden
			setTimeout(() => setSuccess(null), 3000);
		} catch (error) {
			console.error("Error toggling auto-optimize:", error);
			setError(
				error instanceof Error
					? error.message
					: "Fehler beim Aktivieren der CO₂-Optimierung",
			);
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
					Aktiviere die automatische CO₂-Optimierung für tägliche Cronjobs. Der Cronjob
					wird automatisch so umgestellt, dass er einmal täglich zur optimalen Zeit
					ausgeführt wird – auch wenn er vorher häufiger am Tag lief.
				</Text>
				<Text>
					<strong>Wichtig:</strong> Die ursprüngliche Ausführungszeit wird überschrieben
					und muss nach der Deaktivierung manuell wieder eingestellt werden.
				</Text>
				{error && (
					<Alert status="danger">
						<Text>{error}</Text>
					</Alert>
				)}
				{success && (
					<Alert status="success">
						<Text>{success}</Text>
					</Alert>
				)}
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
													{isOptimized
														? "Der Cronjob wird täglich einmal zur optimalen Zeit ausgeführt. Die ursprüngliche Ausführungszeit wurde überschrieben und muss nach der Deaktivierung manuell wieder eingestellt werden."
														: "Der Cronjob wird automatisch so umgestellt, dass er einmal täglich zur optimalen Zeit ausgeführt wird – auch wenn er vorher häufiger am Tag lief. Die ursprüngliche Ausführungszeit wird überschrieben und muss nach der Deaktivierung manuell wieder eingestellt werden."}
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

