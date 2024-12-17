import type { Qrcode } from "../../../entities/Qrcode";
import type { ICreateQrCodeDTO } from "../../dtos/ICreateQrCodeDTO";

export interface IQrCodeRepository {
	create(data: ICreateQrCodeDTO): Promise<Qrcode>;
	createMany(data: ICreateQrCodeDTO[]): Promise<Qrcode>;
	findById(id: string): Promise<Qrcode | null>;
	findByValue(value: string): Promise<Qrcode | null>;
	list(): Promise<Qrcode[]>;
	update(id: string, data: Qrcode): Promise<Qrcode | null>;
	delete(id: string): Promise<void>;
}
