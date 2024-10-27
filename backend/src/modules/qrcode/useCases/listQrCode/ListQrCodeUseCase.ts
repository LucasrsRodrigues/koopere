import { inject, injectable } from "tsyringe";
import type { IQrCodeRepository } from "../../repositories/IQrCodeRepository";
import type { Qrcode } from "../../../../entities/Qrcode";

@injectable()
class ListQrCodeUseCase {
	constructor(
		@inject("QrcodeRepository")
		private qrcodeRepository: IQrCodeRepository,
	) {}

	async execute(): Promise<Qrcode[]> {
		const emvs = await this.qrcodeRepository.list();

		return emvs;
	}
}

export { ListQrCodeUseCase };
