import type { Request, Response } from "express";
import { container } from "tsyringe";
import { ListQrCodeUseCase } from "./ListQrCodeUseCase";

class ListQrCodeController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listQrCodeUseCase = container.resolve(ListQrCodeUseCase);

		const emvs = await listQrCodeUseCase.execute();

		return response.json(emvs);
	}
}

export { ListQrCodeController };
