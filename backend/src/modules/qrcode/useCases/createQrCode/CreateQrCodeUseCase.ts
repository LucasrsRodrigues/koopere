import { inject, injectable } from "tsyringe";
import type { IQrCodeRepository } from "../../repositories/IQrCodeRepository";
import type { ICreateQrCodeDTO } from "../../../dtos/ICreateQrCodeDTO";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateQrCodeUseCase {
	constructor(
		@inject("QrcodeRepository")
		private qrcodeRepository: IQrCodeRepository,
	) {}

	async execute({ type, value }: ICreateQrCodeDTO): Promise<void> {
		const qrcodeAlreadyExists = await this.qrcodeRepository.findByValue(value);

		if (qrcodeAlreadyExists) {
			throw new AppError("QRCode already registred!");
		}

		await this.qrcodeRepository.create({
			type,
			value,
		});
	}
}

export { CreateQrCodeUseCase };
