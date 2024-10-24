import type { Request, Response } from "express";

class AuthenticateUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { password, email } = request.body;

		return response.json();
	}
}

export { AuthenticateUserController };
