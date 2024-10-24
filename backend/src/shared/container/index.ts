import { container } from "tsyringe";
import type { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<IUsersRepository>(
	"UsersRepository",
	UsersRepository,
);
