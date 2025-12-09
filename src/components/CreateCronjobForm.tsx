import { useState } from "react";
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
} from "@mittwald/flow-remote-react-components";
import { createCronjob } from "~/server/functions/createCronjob";
import { useQueryClient } from "@tanstack/react-query";

interface CreateCronjobFormProps {
	trigger?: React.ReactNode;
}

export function CreateCronjobForm({ trigger }: CreateCronjobFormProps = {}) {
	const queryClient = useQueryClient();
	const [appId, setAppId] = useState("");
	const [description, setDescription] = useState("");
	const [interval, setInterval] = useState("36 * * * *");
	const [destination, setDestination] = useState("https://example.com/webhook");
	const [timeout, setTimeout] = useState<string>("300");
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
			setInterval("36 * * * *");
			setDestination("https://example.com/webhook");
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
						<Select selectedKey={appId} onSelectionChange={(key) => setAppId(key as string)}>
							<Label>App</Label>
							<Option key="app-1">Meine App</Option>
						</Select>

						<TextField
							value={description}
							onChange={setDescription}
							isRequired
							placeholder="Ein beschreibender Name für den Cronjob"
						>
							<Label>Beschreibung</Label>
						</TextField>

						<TextField
							value={interval}
							onChange={setInterval}
							isRequired
						>
							<Label>Cron-Syntax</Label>
						</TextField>
						<Text>
							Bei Minute {interval.split(" ")[0] || "36"}, jede Stunde, jeden Tag (UTC)
						</Text>

						<TextField
							value={destination}
							onChange={setDestination}
							isRequired
						>
							<Label>Destination</Label>
						</TextField>
						<Text>
							URL oder Endpunkt, der beim Ausführen des Cronjobs aufgerufen wird
						</Text>

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

