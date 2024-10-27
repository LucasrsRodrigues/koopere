import { inject, injectable } from "tsyringe";
import type { ISyncRepository } from "../../repositories/ISyncRepository";
import type { IQrCodeRepository } from "../../../qrcode/repositories/IQrCodeRepository";
import type { Qrcode } from "../../../../entities/Qrcode";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
	changes: {
		emvs: Array<Qrcode>;
	};
}

@injectable()
class ReciveToClientUseCase {
	constructor(
		@inject("QrcodeRepository")
		private qrcodeRepository: IQrCodeRepository,
	) {}

	async execute({ changes }: IRequest): Promise<void> {
		try {
			for (const emv of changes.emvs) {
				const existingEmv = await this.qrcodeRepository.findById(emv.id);

				if (existingEmv) {
					existingEmv.value = emv.value;
					existingEmv.type = emv.type;
					existingEmv.updated_at = emv.updated_at;

					await this.qrcodeRepository.update(emv.id, existingEmv);
				} else {
					await this.qrcodeRepository.create(emv);
				}
			}
		} catch (error) {
			throw new AppError(error?.message ?? "Sync Error");
		}
	}
}

export { ReciveToClientUseCase };
