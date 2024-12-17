import type { Repository } from "typeorm";
import type { IQrCodeRepository } from "../IQrCodeRepository";
import { Qrcode } from "../../../../entities/Qrcode";
import { AppDataSource } from "../../../../database";
import type { ICreateQrCodeDTO } from "../../../dtos/ICreateQrCodeDTO";

export class QrCodeRepository implements IQrCodeRepository {
	private repository: Repository<Qrcode>;

	constructor() {
		this.repository = AppDataSource.getRepository(Qrcode);
	}

	createMany(data: ICreateQrCodeDTO[]): Promise<Qrcode> {
		throw new Error("Method not implemented.");
	}

	async update(id: string, data: Qrcode): Promise<Qrcode | null> {
		this.repository.update(id, data);

		return await this.repository.findOne({
			where: {
				id,
			},
		});
	}

	async list(): Promise<Qrcode[]> {
		return await this.repository.find();
	}

	async findByValue(value: string): Promise<Qrcode | null> {
		return await this.repository.findOne({
			where: {
				value,
			},
		});
	}

	async create({
		type,
		value,
		isActive = true,
		isFavourite = false,
	}: ICreateQrCodeDTO): Promise<Qrcode> {
		const emv = this.repository.create({
			type,
			value,
			isActive,
			isFavourite,
		});
		return await this.repository.save(emv);
	}

	async findById(id: string): Promise<Qrcode | null> {
		return await this.repository.findOne({
			where: {
				id,
			},
		});
	}

	async delete(id: string): Promise<void> {
		await this.repository.delete(id);
	}
}
