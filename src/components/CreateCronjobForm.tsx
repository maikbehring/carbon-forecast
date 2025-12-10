import { useState, useMemo } from "react";
import {
	Content,
	Heading,
	Text,
	Section,
	Button,
	TextField,
	Label,
	Alert,
	Modal,
	ModalTrigger,
	ActionGroup,
	Action,
	Select,
	Option,
	NumberField,
	SegmentedControl,
	Segment,
	ComboBox,
	ColumnLayout,
	LabeledValue,
	InlineCode,
	CopyButton,
	FieldDescription,
} from "@mittwald/flow-remote-react-components";
import { createCronjob } from "~/server/functions/createCronjob";
import { useQueryClient } from "@tanstack/react-query";

interface CreateCronjobFormProps {
	trigger?: React.ReactNode;
}

type ExecutionType = "command" | "url";
type IntervalType = "1m" | "5m" | "30m" | "1h" | "1d" | "7d" | "14d" | "30d" | "custom";

/**
 * Berechnet die nächsten Ausführungszeiten basierend auf einer Cron-Expression
 */
function calculateNextExecutions(cronExpression: string, count: number = 3): string[] {
	const parts = cronExpression.trim().split(/\s+/);
	if (parts.length < 5) return [];

	const [minute, hour] = parts;
	const now = new Date();
	const results: string[] = [];

	// Vereinfachte Berechnung für häufige Patterns
	// Unterstützt: * (jeder), Zahl, */X (alle X)
	
	let found = 0;
	let current = new Date(now);
	current.setSeconds(0, 0);

	// Versuche die nächsten Ausführungen zu finden
	for (let i = 0; i < 1000 && found < count; i++) {
		const currentMinute = current.getUTCMinutes();
		const currentHour = current.getUTCHours();

		// Prüfe ob dieser Zeitpunkt passt
		const minuteMatch = minute === "*" || minute === currentMinute.toString() || 
			(minute.startsWith("*/") && currentMinute % Number.parseInt(minute.slice(2), 10) === 0);
		const hourMatch = hour === "*" || hour === currentHour.toString() ||
			(hour.startsWith("*/") && currentHour % Number.parseInt(hour.slice(2), 10) === 0);

		if (minuteMatch && hourMatch && current > now) {
			const formatted = new Intl.DateTimeFormat("de-DE", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
				hour: "2-digit",
				minute: "2-digit",
				timeZone: "UTC",
			}).format(current) + " Uhr (UTC)";
			results.push(formatted);
			found++;
		}

		// Gehe zur nächsten Minute
		current.setUTCMinutes(current.getUTCMinutes() + 1);
	}

	return results;
}

/**
 * Konvertiert einen IntervalType in eine Cron-Expression
 */
function intervalTypeToCron(intervalType: IntervalType): string {
	switch (intervalType) {
		case "1m": return "* * * * *";
		case "5m": return "*/5 * * * *";
		case "30m": return "*/30 * * * *";
		case "1h": return "0 * * * *";
		case "1d": return "0 0 * * *";
		case "7d": return "0 0 * * 0";
		case "14d": return "0 0 1,15 * *";
		case "30d": return "0 0 1 * *";
		case "custom": return "42 * * * *";
		default: return "42 * * * *";
	}
}

/**
 * Generiert eine Beschreibung für eine Cron-Expression
 */
function getCronDescription(cronExpression: string): string {
	const parts = cronExpression.trim().split(/\s+/);
	if (parts.length < 5) return "";

	const [minute, hour] = parts;
	
	const hourDesc = hour === "*" ? "jede Stunde" :
		hour.startsWith("*/") ? `alle ${hour.slice(2)} Stunden` :
		`bei Stunde ${hour}`;
	
	return `Bei Minute ${minute === "*" ? "0" : minute}, ${hourDesc}, jeden Tag (UTC)`;
}

export function CreateCronjobForm({ trigger }: CreateCronjobFormProps = {}) {
	const queryClient = useQueryClient();
	const [appId, setAppId] = useState("");
	const [name, setName] = useState("");
	const [executionType, setExecutionType] = useState<ExecutionType>("command");
	const [interpreter, setInterpreter] = useState("");
	const [filePath, setFilePath] = useState("/");
	const [parameters, setParameters] = useState("");
	const [url, setUrl] = useState("");
	const [intervalType, setIntervalType] = useState<IntervalType>("custom");
	const [customCron, setCustomCron] = useState("42 * * * *");
	const [timeout, setTimeout] = useState<string>("300");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	const cronExpression = intervalType === "custom" ? customCron : intervalTypeToCron(intervalType);
	const cronDescription = useMemo(() => getCronDescription(cronExpression), [cronExpression]);
	const nextExecutions = useMemo(() => calculateNextExecutions(cronExpression, 3), [cronExpression]);

	const commandString = useMemo(() => {
		if (executionType === "command" && interpreter && filePath) {
			return `${interpreter} ${filePath}${parameters ? ` ${parameters}` : ""}`;
		}
		return "";
	}, [executionType, interpreter, filePath, parameters]);

	const handleSubmit = async () => {
		setError(null);
		setSuccess(false);
		setIsSubmitting(true);

		try {
			const destination = executionType === "command" 
				? { interpreter, path: filePath, parameters: parameters || undefined }
				: { url };

			await createCronjob({
				data: {
					appId,
					description: name,
					interval: cronExpression,
					destination,
					timeout: timeout ? Number.parseInt(timeout, 10) : undefined,
				},
			} as any);

			setSuccess(true);
			setAppId("");
			setName("");
			setExecutionType("command");
			setInterpreter("");
			setFilePath("/");
			setParameters("");
			setUrl("");
			setIntervalType("custom");
			setCustomCron("42 * * * *");
			setTimeout("300");

			// Invalidate cronjobs query to refresh the list
			queryClient.invalidateQueries({ queryKey: ["allCronjobs"] });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Fehler beim Erstellen des Cronjobs");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<ModalTrigger>
			{trigger || <Button color="accent">Anlegen</Button>}
			<Modal size="m">
				<Heading>Cronjob anlegen</Heading>
				<Content>
					<Section>
						<Text>
							Mit wiederkehrenden Aufgaben, den sogenannten Cronjobs, lassen sich einzelne Skripte oder Webseitenaufrufe automatisiert ausführen.
						</Text>

						<ColumnLayout>
							<TextField
								value={name}
								onChange={setName}
								isRequired
								maxLength={80}
							>
								<Label>Name</Label>
							</TextField>

							<Select selectedKey={appId} onSelectionChange={(key) => setAppId(key as string)}>
								<Label>Verknüpfte App</Label>
								<Option key="app-1">Meine App</Option>
							</Select>
						</ColumnLayout>

						<Heading level={3}>Ausführungstyp</Heading>
						<SegmentedControl
							defaultValue={executionType}
							onChange={(value) => setExecutionType(value as ExecutionType)}
						>
							<Label>Typ</Label>
							<Segment value="command">Befehl ausführen</Segment>
							<Segment value="url">URL aufrufen</Segment>
						</SegmentedControl>

						{executionType === "command" && (
							<>
								<ColumnLayout>
									<Select selectedKey={interpreter} onSelectionChange={(key) => setInterpreter(key as string)}>
										<Label>Interpreter</Label>
										<Option key="/usr/bin/bash">Bash</Option>
										<Option key="/usr/bin/php">PHP</Option>
									</Select>
								</ColumnLayout>

								<ColumnLayout>
									<ComboBox
										defaultSelectedKey={filePath}
										onSelectionChange={(key) => setFilePath(key as string)}
									>
										<Label>Datei</Label>
										<Option key="/">/</Option>
										<Option key="/html">/html</Option>
										<Option key="/html/scripts">/html/scripts</Option>
									</ComboBox>

									<TextField
										value={parameters}
										onChange={setParameters}
									>
										<Label>Parameter (optional)</Label>
									</TextField>
								</ColumnLayout>

								{commandString && (
									<LabeledValue>
										<Label>
											Auszuführender Befehl
										</Label>
										<Content>
											<InlineCode>{commandString}</InlineCode>
											<CopyButton text={commandString} />
										</Content>
									</LabeledValue>
								)}
							</>
						)}

						{executionType === "url" && (
							<TextField
								value={url}
								onChange={setUrl}
								isRequired
							>
								<Label>URL</Label>
							</TextField>
						)}

						<Heading level={3}>Ausführungsintervall</Heading>
						<Select
							selectedKey={intervalType}
							onSelectionChange={(key) => setIntervalType(key as IntervalType)}
						>
							<Label>Intervall</Label>
							<Option key="1m">Jede Minute</Option>
							<Option key="5m">Alle 5 Minuten</Option>
							<Option key="30m">Alle 30 Minuten</Option>
							<Option key="1h">Jede Stunde</Option>
							<Option key="1d">Jeden Tag</Option>
							<Option key="7d">Alle 7 Tage</Option>
							<Option key="14d">Alle 14 Tage</Option>
							<Option key="30d">Alle 30 Tage</Option>
							<Option key="custom">Cron-Syntax</Option>
						</Select>

						{intervalType === "custom" && (
							<ColumnLayout>
								<TextField
									value={customCron}
									onChange={setCustomCron}
									isRequired
								>
									<Label>Cron-Syntax</Label>
									<FieldDescription>{cronDescription}</FieldDescription>
								</TextField>
							</ColumnLayout>
						)}

						{intervalType !== "custom" && (
							<ColumnLayout>
								<TextField
									value={cronExpression}
									isReadOnly
								>
									<Label>Cron-Syntax</Label>
									<FieldDescription>{cronDescription}</FieldDescription>
								</TextField>
							</ColumnLayout>
						)}

						{nextExecutions.length > 0 && (
							<LabeledValue>
								<Label>Nächste Ausführungen</Label>
								<Content>
									{nextExecutions.map((exec, idx) => (
										<Text key={idx}>
											{exec}
										</Text>
									))}
								</Content>
							</LabeledValue>
						)}

						<NumberField
							value={timeout ? Number.parseInt(timeout, 10) : undefined}
							onChange={(value) => setTimeout(value?.toString() || "")}
						>
							<Label>Timeout (optional)</Label>
						</NumberField>

						{error && (
							<Alert status="danger">
								<Text>{error}</Text>
							</Alert>
						)}

						{success && (
							<Alert status="success">
								<Text>Cronjob erfolgreich erstellt!</Text>
							</Alert>
						)}
					</Section>
				</Content>
				<ActionGroup>
					<Action closeOverlay="Modal">
						<Button
							color="accent"
							isDisabled={isSubmitting}
							onPress={handleSubmit}
						>
							{isSubmitting ? "Wird erstellt..." : "Anlegen"}
						</Button>
						<Button variant="soft" color="secondary">
							Abbrechen
						</Button>
					</Action>
				</ActionGroup>
			</Modal>
		</ModalTrigger>
	);
}
