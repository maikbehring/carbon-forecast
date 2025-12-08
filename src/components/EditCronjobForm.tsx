import { useState, useEffect } from "react";
import {
	Content,
	Heading,
	Text,
	Section,
	Button,
	TextField,
	Label,
	FieldDescription,
	Alert,
	Modal,
	ModalTrigger,
	ActionGroup,
	Action,
	Switch,
} from "@mittwald/flow-remote-react-components";
import { updateCronjob } from "~/server/functions/updateCronjob";
import { useQueryClient } from "@tanstack/react-query";

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

interface EditCronjobFormProps {
	cronjob: Cronjob;
}

export function EditCronjobForm({ cronjob }: EditCronjobFormProps) {
	const queryClient = useQueryClient();
	const [description, setDescription] = useState(cronjob.description || "");
	const [interval, setInterval] = useState(cronjob.interval || "");
	const [destination, setDestination] = useState(
		typeof cronjob.destination === "string"
			? cronjob.destination
			: "url" in cronjob.destination
				? cronjob.destination.url
				: cronjob.destination.path,
	);
	const [timeoutValue, setTimeoutValue] = useState<string>(
		cronjob.timeout ? cronjob.timeout.toString() : "",
	);
	const [active, setActive] = useState(cronjob.active ?? true);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	// Update form when cronjob changes
	useEffect(() => {
		setDescription(cronjob.description || "");
		setInterval(cronjob.interval || "");
		setDestination(
			typeof cronjob.destination === "string"
				? cronjob.destination
				: "url" in cronjob.destination
					? cronjob.destination.url
					: cronjob.destination.path,
		);
		setTimeoutValue(cronjob.timeout ? cronjob.timeout.toString() : "");
		setActive(cronjob.active ?? true);
		setError(null);
		setSuccess(false);
	}, [cronjob]);

	const handleSubmit = async () => {
		if (!cronjob.projectId) {
			setError("Projekt-ID fehlt");
			return;
		}

		setError(null);
		setSuccess(false);
		setIsSubmitting(true);

		try {
			await updateCronjob({
				cronjobId: cronjob.id,
				projectId: cronjob.projectId,
				description,
				interval,
				destination,
					timeout: timeoutValue ? Number.parseInt(timeoutValue, 10) : undefined,
				active,
			} as Parameters<typeof updateCronjob>[0]);

			setSuccess(true);

			// Invalidate cronjobs query to refresh the list
			queryClient.invalidateQueries({ queryKey: ["allCronjobs"] });

			// Close modal after a short delay
			setTimeout(() => {
				// Modal will close automatically via Action closeOverlay
			}, 1000);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Fehler beim Aktualisieren des Cronjobs");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<ModalTrigger>
			<Button variant="soft" color="secondary">
				Bearbeiten
			</Button>
			<Modal size="m">
				<Heading>Cronjob bearbeiten</Heading>
				<Content>
					<Section>
						<TextField
							value={description}
							onChange={setDescription}
							isRequired
							placeholder="z.B. Tägliches Backup"
						>
							<Label>Beschreibung</Label>
							<FieldDescription>
								Ein beschreibender Name für den Cronjob
							</FieldDescription>
						</TextField>

						<TextField
							value={interval}
							onChange={setInterval}
							isRequired
							placeholder="0 2 * * *"
						>
							<Label>Interval (Cron-Expression)</Label>
							<FieldDescription>
								Cron-Expression im Format: Minute Stunde Tag Monat Wochentag
							</FieldDescription>
						</TextField>

						<TextField
							value={destination}
							onChange={setDestination}
							isRequired
							placeholder="https://example.com/webhook"
						>
							<Label>Destination</Label>
							<FieldDescription>
								URL oder Endpunkt, der beim Ausführen des Cronjobs aufgerufen wird
							</FieldDescription>
						</TextField>

						<TextField
							type="number"
							value={timeoutValue}
							onChange={setTimeoutValue}
							placeholder="300"
						>
							<Label>Timeout (optional)</Label>
							<FieldDescription>
								Timeout in Sekunden (optional)
							</FieldDescription>
						</TextField>

						<Switch isSelected={active} onChange={setActive}>
							<Label>Aktiv</Label>
							<FieldDescription>
								Bestimmt, ob der Cronjob aktiv ist und ausgeführt wird
							</FieldDescription>
						</Switch>

						{error && (
							<Alert status="danger">
								<Text>{error}</Text>
							</Alert>
						)}

						{success && (
							<Alert status="success">
								<Text>Cronjob erfolgreich aktualisiert!</Text>
							</Alert>
						)}
					</Section>
				</Content>
				<ActionGroup>
					<Action closeOverlay="Modal" action={handleSubmit}>
						<Button color="accent" isDisabled={isSubmitting}>
							{isSubmitting ? "Wird gespeichert..." : "Speichern"}
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

