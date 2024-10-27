import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new AppError("Token missing.", 401);
	}

	const [, token] = authHeader.split(" ");

	try {
		const { sub } = verify(token, process.env.JWT_SECRET);
		console.log(sub);
		// const usersRepository = new UsersRepository();
		// usersRepository.findById(sub);

		next();
	} catch (error) {
		throw new AppError("Invalid token!", 401);
	}
}
