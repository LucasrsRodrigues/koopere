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
		console.log("---sendToClient");
		console.log(lastPulledAt);
		console.log("---sendToClient");
		const updatedEmvs = await this.repository
			.createQueryBuilder()
			.where(lastPulledAt ? "updatedAt > :lastPulledAt" : "1=1", {
				lastPulledAt,
			})
			.getMany();

		console.log(">>>>>>");
		console.log(updatedEmvs);
		console.log(">>>>>>");

		return updatedEmvs;
	}
}
