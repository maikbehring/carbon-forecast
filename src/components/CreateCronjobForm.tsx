import { useState } from "react";
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
} from "@mittwald/flow-remote-react-components";
import { createCronjob } from "~/server/functions/createCronjob";
import { useQueryClient } from "@tanstack/react-query";

export function CreateCronjobForm() {
	const queryClient = useQueryClient();
	const [appId, setAppId] = useState("");
	const [description, setDescription] = useState("");
	const [interval, setInterval] = useState("");
	const [destination, setDestination] = useState("");
	const [timeout, setTimeout] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async () => {
		setError(null);
		setSuccess(false);
		setIsSubmitting(true);

		try {
			await createCronjob({
				data: {
					appId,
					description,
					interval,
					destination,
					timeout: timeout ? Number.parseInt(timeout, 10) : undefined,
				},
			} as any);

			setSuccess(true);
			setAppId("");
			setDescription("");
			setInterval("");
			setDestination("");
			setTimeout("");

			// Invalidate cronjobs query to refresh the list
			queryClient.invalidateQueries({ queryKey: ["allCronjobs"] });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Fehler beim Erstellen des Cronjobs");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Section>
			<Heading level={2}>Neuen Cronjob erstellen</Heading>
			<Content>
				<TextField
					value={appId}
					onChange={setAppId}
					isRequired
					placeholder="app-xxxxx"
				>
					<Label>App ID</Label>
					<FieldDescription>
						Die ID der App, der dieser Cronjob zugeordnet werden soll
					</FieldDescription>
				</TextField>

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
					value={timeout}
					onChange={setTimeout}
					placeholder="300"
				>
					<Label>Timeout (optional)</Label>
					<FieldDescription>
						Timeout in Sekunden (optional)
					</FieldDescription>
				</TextField>

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

				<Button onPress={handleSubmit} isDisabled={isSubmitting}>
					{isSubmitting ? "Wird erstellt..." : "Cronjob erstellen"}
				</Button>
			</Content>
		</Section>
	);
}

