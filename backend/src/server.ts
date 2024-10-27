import "reflect-metadata";
import * as dotenv from "dotenv";

dotenv.config();

import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import "express-async-errors";

import { router } from "./routes";
import { AppDataSource } from "./database";
import "./shared/container";
import { AppError } from "./errors/AppError";

const app = express();
app.use(express.json());

AppDataSource.initialize()
	.then(() => {
		console.log(`Conexão com ${process.env.DB_DATABASE} estabelecida.`);
		app.use("/", router);

		app.use(
			(
				err: Error,
				_request: Request,
				response: Response,
				_next: NextFunction,
			) => {
				if (err instanceof AppError) {
					return response.status(err.statusCode).json({
						message: err.message,
					});
				}

				return response.status(500).json({
					status: "error",
					message: `Internal server error ${err.message}`,
				});
			},
		);

		const PORT = process.env.PORT || 3333;

		app.listen(PORT, () => {
			console.log(`Server running in port ${PORT} 🚀`);
		});
	})
	.catch((error) => {
		console.error(`Erro ao conectar ao ${process.env.DB_DATABASE}`, error);
	});
