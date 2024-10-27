import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateControlled = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateControlled.handle);

export { authenticateRoutes };
