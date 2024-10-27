import { inject, injectable } from "tsyringe";
import type { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";
import { verify } from "argon2";
import { sign } from "jsonwebtoken";

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	user: {
		username: string;
		email: string;
	};
	token: string;
}

@injectable()
class AuthenticateUserUseCase {
	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository,
	) {}

	async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.usersRepository.findByEmail(email);

		if (!user) {
			throw new AppError("Email or Password incorrect!");
		}

		const passwordMatch = await verify(user.password, password);

		if (!passwordMatch) {
			throw new AppError("Email or Password incorrect!");
		}

		const token = sign({}, process.env.JWT_SECRET, {
			subject: user.id,
			expiresIn: "1d",
		});

		return {
			user: {
				username: user.username,
				email: email,
			},
			token,
		};
	}
}

export { AuthenticateUserUseCase };
