import { inject, injectable } from "tsyringe";
import type { IUsersRepository } from "../../repositories/IUsersRepository";

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
    private usersRepository: IUsersRepository
  ){}

	async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or Password incorrect!");
    }

		return {
			user: {
				username: "",
				email: email,
			},
			token: "",
		};
	}
}

export { AuthenticateUserUseCase };
