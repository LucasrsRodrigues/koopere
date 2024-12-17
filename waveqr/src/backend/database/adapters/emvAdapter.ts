interface BackendResponse {
	changes: {
		emvs: {
			created: Array<{
				id: string;
				value: string;
				type: string;
				created_at: string;
				updated_at: string;
			}>;
			updated: Array<{
				id: string;
				value: string;
				type: string;
				created_at: string;
				updated_at: string;
			}>;
			deleted: string[];
		};
	};
	timestamp: number;
}

function adaptEmvBackendResponse(response: BackendResponse) {
	const createdIds = new Set(
		response.changes.emvs.created.map((item) => item.id),
	);
	const filteredUpdated = response.changes.emvs.updated.filter(
		(item) => !createdIds.has(item.id),
	);

	return {
		changes: {
			emvs: {
				created: response.changes.emvs.created.map((item) => ({
					id: item.id,
					value: item.value,
					type: item.type,
					created_at: new Date(item.created_at).getTime(),
					updated_at: new Date(item.updated_at).getTime(),
				})),
				updated: filteredUpdated.map((item) => ({
					id: item.id,
					value: item.value,
					type: item.type,
					created_at: new Date(item.created_at).getTime(),
					updated_at: new Date(item.updated_at).getTime(),
				})),
				deleted: response.changes.emvs.deleted,
			},
		},
		timestamp: response.timestamp,
	};
}

export default adaptEmvBackendResponse;
