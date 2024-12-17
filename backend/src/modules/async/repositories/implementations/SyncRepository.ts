import type { Repository } from "typeorm";
import type { ISyncRepository } from "../ISyncRepository";
import { Qrcode } from "../../../../entities/Qrcode";
import { AppDataSource } from "../../../../database";

export class SyncRepository implements ISyncRepository {
	private repository: Repository<Qrcode>;

	constructor() {
		this.repository = AppDataSource.getRepository(Qrcode);
	}
	getDeletedEmvs(): Promise<Qrcode[]> {
		throw new Error("Method not implemented.");
	}

	async sendToClient(lastPulledAt: number): Promise<Qrcode[]> {
		const lastPulledDate = lastPulledAt ? new Date(lastPulledAt) : null;

		const updatedEmvs = await this.repository
			.createQueryBuilder()
			.where(lastPulledDate ? "updated_at > :lastPulledDate" : "1=1", {
				lastPulledDate,
			})
			.getMany();

		return updatedEmvs;
	}
}
