import type { Request, Response } from "express";
import { container } from "tsyringe";
import { ReciveToClientUseCase } from "./ReciveToClientUseCase";

class ReciveToClientController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { changes } = request.body;

		const reciveToClientUseCase = container.resolve(ReciveToClientUseCase);

		reciveToClientUseCase.execute(changes);

		return response.status(201).send();
	}
}

export { ReciveToClientController };
