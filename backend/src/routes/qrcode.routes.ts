import { Router } from "express";
import { CreateQrCodeController } from "../modules/qrcode/useCases/createQrCode/CreateQrCodeController";
import { ListQrCodeController } from "../modules/qrcode/useCases/listQrCode/ListQrCodeController";

const qrcodeRoutes = Router();

const createQrCodeUseCase = new CreateQrCodeController();
const listQrCodeUseCase = new ListQrCodeController();

qrcodeRoutes.post("/", createQrCodeUseCase.handle);
qrcodeRoutes.get("/", listQrCodeUseCase.handle);

export { qrcodeRoutes };
