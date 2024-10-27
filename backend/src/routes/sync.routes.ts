import { Router } from "express";
import { ReciveToClientController } from "../modules/async/useCases/reciveToClient/ReciveToClientController";
import { SendToClientController } from "../modules/async/useCases/sendToClient/SendToClientController";

const syncRoutes = Router();

const sendToClientController = new SendToClientController();
const reciveToClientController = new ReciveToClientController();

syncRoutes.get("/", sendToClientController.handle);
syncRoutes.post("/", reciveToClientController.handle);

export { syncRoutes };
