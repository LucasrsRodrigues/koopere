import type { Request, Response } from "express";

class CreateUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { email, password, username } = request.body;

    console.log({
      email,
      password,
      username
    })

		return response.status(201).send();
	}
}

export { CreateUserController };
