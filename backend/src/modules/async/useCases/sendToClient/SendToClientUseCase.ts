import { inject, injectable } from "tsyringe";
import type { ISyncRepository } from "../../repositories/ISyncRepository";
import type { Qrcode } from "../../../../entities/Qrcode";

export interface ISendToClientResponse {
	changes: {
		emvs: {
			created: Array<{
				id: string;
				value: string;
				type: string;
				created_at: number;
				updated_at: number;
			}>;
			updated: Array<{
				id: string;
				value: string;
				type: string;
				created_at: number;
				updated_at: number;
			}>;
			deleted: Array<string>;
		};
	};
	timestamp: number;
}

@injectable()
class SendToClientUseCase {
	constructor(
		@inject("SyncRepository")
		private syncRepository: ISyncRepository,
	) {}

	async execute(lastPulledAt: number | null): Promise<ISendToClientResponse> {
		const updatedEmvs = await this.syncRepository.sendToClient(lastPulledAt);

		const lastPulledDate = lastPulledAt ? new Date(lastPulledAt) : null;

		const createdEmvs = updatedEmvs.filter((emv) => {
			const createdAtDate = new Date(emv.created_at);
			return lastPulledDate === null || createdAtDate > lastPulledDate;
		});

		const updatedEmvsList = updatedEmvs.filter((emv) => {
			const updatedAtDate = new Date(emv.updated_at);

			return (
				(lastPulledDate === null || updatedAtDate > lastPulledDate) &&
				new Date(emv.updated_at).getTime() !==
					new Date(emv.created_at).getTime()
			);
		});

		const changes = {
			emvs: {
				created: createdEmvs.map((emv) => ({
					id: emv.id,
					value: emv.value,
					type: emv.type,
					created_at: emv.created_at,
					updated_at: emv.updated_at,
				})),
				updated: updatedEmvsList.map((emv) => ({
					id: emv.id,
					value: emv.value,
					type: emv.type,
					created_at: emv.created_at,
					updated_at: emv.updated_at,
				})),
				deleted: [],
			},
		};

		console.log(changes);

		const timestamp = Date.now();

		return {
			changes,
			timestamp,
		};
	}
}

export { SendToClientUseCase };
