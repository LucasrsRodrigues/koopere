import { synchronize } from "@nozbe/watermelondb/sync";
import EmvHTTPService from "@infrastructure/service/EmvHTTPService";
import type { Database } from "@nozbe/watermelondb";

export async function syncDatabase(database: Database) {
	await synchronize({
		database,
		pullChanges: async ({ lastPulledAt }) => {
			try {
				const lastPulledAtTimestamp = lastPulledAt ?? 0;

				const response = await EmvHTTPService.pullChanges(
					lastPulledAtTimestamp,
				);

				// const { changes, timestamp } = response.data;

				console.log("Response data:", JSON.stringify(response.data, null, 2)); // Log da resposta
				//
				return {
					changes: {
						emvs: {
							created: [
								{
									id: "707d09c7-4677-4fc7-80e6-50117ed71fd5",
									value: "texto de teste",
									type: "text",
									created_at: "2024-10-27T03:33:54.280Z",
									updated_at: "2024-10-27T03:34:09.610Z",
								},
							],
							updated: [
								{
									id: "707d09c7-4677-4fc7-80e6-50117ed71fd5",
									value: "texto de teste",
									type: "text",
									created_at: "2024-10-27T03:33:54.280Z",
									updated_at: "2024-10-27T03:34:09.610Z",
								},
							],
							deleted: [],
						},
					},
					timestamp: 1730001187664,
				};
			} catch (error) {
				console.error(
					"Error pulling changes:",
					error?.response?.data || error.message,
				);
				throw error;
			}
		},
		pushChanges: async ({ changes }) => {
			try {
				if (!changes || Object.keys(changes).length === 0) {
					console.log("No changes to push.");
					return;
				}

				console.log("Pushing changes:", changes);

				await EmvHTTPService.pushChanges(changes);
				console.log("Changes pushed successfully");
			} catch (error) {
				console.error("Error pushing changes:", error);
				throw error;
			}
		},
	});
}
