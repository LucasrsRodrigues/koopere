import type { Repository } from "typeorm";
import { User } from "../../../../entities/User";
import type { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import type { IUsersRepository } from "../IUsersRepository";
import { AppDataSource } from "../../../../database";

export class UsersRepository implements IUsersRepository {
	private repository: Repository<User>;

	constructor() {
		this.repository = AppDataSource.getRepository(User);
	}

	async create({
		name,
		username,
		email,
		password,
	}: ICreateUserDTO): Promise<User> {
		const user = this.repository.create({
			name,
			username,
			email,
			password,
		});

		return await this.repository.save(user);
	}

	async findByEmail(email: string): Promise<User | null> {
		return await this.repository.findOne({
			where: {
				email,
			},
		});
	}

	async findById(id: string): Promise<User | null> {
		return await this.repository.findOne({
			where: {
				id,
			},
		});
	}
}
