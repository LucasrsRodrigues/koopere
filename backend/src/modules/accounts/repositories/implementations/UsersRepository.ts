import type { User } from "../../../../entities/User";
import type { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import type { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
	create(data: ICreateUserDTO): Promise<User> {
		throw new Error("Method not implemented.");
	}
	findByEmail(email: string): Promise<User | null> {
		throw new Error("Method not implemented.");
	}
	findById(id: string): Promise<User | null> {
		throw new Error("Method not implemented.");
	}
}
