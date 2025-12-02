import { Content } from "@mittwald/flow-remote-react-components";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getCarbonForecast } from "~/server/functions/getCarbonForecast";
import { CarbonForecast } from "~/components/CarbonForecast";
import { Loader } from "~/components/Loader";
import { ErrorMessage } from "~/components/ErrorMessage";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const queryClient = useQueryClient();
	const {
		data: forecast,
		isLoading,
		isFetching,
		error,
		refetch,
	} = useQuery({
		queryKey: ["carbonForecast"],
		queryFn: () => getCarbonForecast(),
		staleTime: 15 * 60 * 1000, // 15 minutes - forecast updates every 15 minutes
	});

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return (
			<ErrorMessage
				title="Fehler beim Laden des Carbon Forecasts"
				message={
					error instanceof Error ? error.message : "Unbekannter Fehler"
				}
			/>
		);
	}

	if (!forecast) {
		return (
			<ErrorMessage
				title="Keine Daten verfügbar"
				message="Es konnten keine Carbon Forecast Daten geladen werden."
			/>
		);
	}

	const handleRefresh = () => {
		console.log("Refresh button clicked");
		// Invalidate and refetch the query
		queryClient.invalidateQueries({ queryKey: ["carbonForecast"] });
		refetch();
	};

	return (
		<Content>
			<CarbonForecast
				forecast={forecast}
				onRefresh={handleRefresh}
				isRefreshing={isFetching}
			/>
		</Content>
	);
}
