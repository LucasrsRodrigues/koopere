import { container } from "tsyringe";
import { SendToClientUseCase } from "./SendToClientUseCase";
import type { Request, Response } from "express";

class SendToClientController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { lastPulledAt } = request.query;

		console.log("---> handle");
		console.log(lastPulledAt);
		console.log("---> handle");

		const sendToClientUseCase = container.resolve(SendToClientUseCase);

		const updatedEmvs = await sendToClientUseCase.execute(Number(lastPulledAt));

		return response.json(updatedEmvs);
	}
}

export { SendToClientController };
