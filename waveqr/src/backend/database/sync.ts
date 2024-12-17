import { synchronize } from "@nozbe/watermelondb/sync";
import EmvHTTPService from "@infrastructure/service/EmvHTTPService";
import type { Database } from "@nozbe/watermelondb";
//
export async function syncDatabase(database: Database) {
	await synchronize({
		database,
		pullChanges: async ({ lastPulledAt }) => {
			try {
				const lastPulledAtTimestamp = lastPulledAt ?? 0;

				const response = await EmvHTTPService.pullChanges(
					lastPulledAtTimestamp,
				);

				const { changes, timestamp } = response.data;

				console.log("Response data:", JSON.stringify(response.data, null, 2));

				return {
					changes,
					timestamp,
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
				console.log("Pushing changes:", JSON.stringify(changes, null, 2));

				if (!changes || Object.keys(changes).length === 0) {
					console.log("No changes to push.");
					return;
				}

				await EmvHTTPService.pushChanges(changes);
				console.log("Changes pushed successfully");
			} catch (error) {
				console.error("Error pushing changes:", error?.response?.data);
				throw error;
			}
		},
	});
}
