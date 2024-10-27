import { inject, injectable } from "tsyringe";
import type { IUsersRepository } from "../../repositories/IUsersRepository";
import type { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { AppError } from "../../../../errors/AppError";
import { hash } from "argon2";

@injectable()
class CreateUserUseCase {
	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository,
	) {}

	async execute({
		email,
		name,
		password,
		username,
	}: ICreateUserDTO): Promise<void> {
		const userAlreadyExists = await this.usersRepository.findByEmail(email);

		if (userAlreadyExists) {
			throw new AppError("User already exists!", 401);
		}

		const passwordHash = await hash(password);

		await this.usersRepository.create({
			email,
			name,
			password: passwordHash,
			username,
		});
	}
}

export { CreateUserUseCase };
