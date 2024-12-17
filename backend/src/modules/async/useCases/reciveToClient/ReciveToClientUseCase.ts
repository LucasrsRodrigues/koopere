import { inject, injectable } from "tsyringe";
import type { IQrCodeRepository } from "../../../qrcode/repositories/IQrCodeRepository";
import type { Qrcode } from "../../../../entities/Qrcode";
import { AppError } from "../../../../errors/AppError";

interface IQrcodeChanges {
	created: Array<Qrcode>;
	updated: Array<Qrcode & { _changed?: string }>;
	deleted: Array<Qrcode>;
}

interface IRequest {
	emvs: IQrcodeChanges;
}

@injectable()
class ReciveToClientUseCase {
	constructor(
		@inject("QrcodeRepository")
		private qrcodeRepository: IQrCodeRepository,
	) {}

	async execute({ emvs }: IRequest): Promise<void> {
		try {
			for (const qrcode of emvs.created) {
				await this.qrcodeRepository.create(qrcode);
			}

			for (const qrcode of emvs.updated) {
				const existingQrcode = await this.qrcodeRepository.findById(qrcode.id);

				if (!existingQrcode) {
					throw new AppError(`QR Code with id ${qrcode.id} not found`);
				}

				const changedFields = qrcode._changed?.split(",") || [];
				const updateData: Partial<Qrcode> = {};

				updateData.value = qrcode.value;
				updateData.type = qrcode.type;
				updateData.updated_at = qrcode.updated_at;

				if (changedFields.includes("isFavourite")) {
					updateData.isFavourite = qrcode.isFavourite;
				}

				if (changedFields.includes("isActive")) {
					updateData.isActive = qrcode.isActive;
				}

				await this.qrcodeRepository.update(qrcode.id, updateData);
			}

			// Handle deleted items
			for (const qrcode of emvs.deleted) {
				await this.qrcodeRepository.delete(qrcode.id);
			}
		} catch (error) {
			throw new AppError(
				error instanceof AppError ? error.message : "Sync Error",
			);
		}
	}
}

export { ReciveToClientUseCase };
