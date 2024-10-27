import type { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateQrCodeUseCase } from "./CreateQrCodeUseCase";

class CreateQrCodeController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { type, value } = request.body;
		const createQrCodeUseCase = container.resolve(CreateQrCodeUseCase);

		await createQrCodeUseCase.execute({
			type,
			value,
		});

		return response.status(201).send();
	}
}

export { CreateQrCodeController };
