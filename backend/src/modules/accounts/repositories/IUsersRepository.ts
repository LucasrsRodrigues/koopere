import type { User } from "../../../entities/User";
import type { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

export interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<User>;
	findByEmail(email: string): Promise<User | null>;
	findById(id: string): Promise<User | null>;
}
