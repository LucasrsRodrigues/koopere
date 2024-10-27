import type { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { email, name, password, username } = request.body;
		const crateUserUseCase = container.resolve(CreateUserUseCase);

		await crateUserUseCase.execute({
			email,
			name,
			password,
			username,
		});

		return response.status(201).send();
	}
}

export { CreateUserController };
