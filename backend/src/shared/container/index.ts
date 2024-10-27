import { container } from "tsyringe";
import type { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import type { IQrCodeRepository } from "../../modules/qrcode/repositories/IQrCodeRepository";
import { QrCodeRepository } from "../../modules/qrcode/repositories/implementations/QrCodeRepository";
import { SyncRepository } from "../../modules/async/repositories/implementations/SyncRepository";
import type { ISyncRepository } from "../../modules/async/repositories/ISyncRepository";

container.registerSingleton<IUsersRepository>(
	"UsersRepository",
	UsersRepository,
);

container.registerSingleton<IQrCodeRepository>(
	"QrcodeRepository",
	QrCodeRepository,
);

container.registerSingleton<ISyncRepository>("SyncRepository", SyncRepository);
