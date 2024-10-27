import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { qrcodeRoutes } from "./qrcode.routes";
import { syncRoutes } from "./sync.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/emv", qrcodeRoutes);
router.use("/sync", syncRoutes);
router.use(authenticateRoutes);

export { router };
