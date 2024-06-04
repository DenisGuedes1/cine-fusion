import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Users } from "../entities/user.entities";
import { AppError } from "../error/handleError";

export const checkEmailMiddle = async (
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    if (!req.body.email) {
        return next();
    }
    const { email } = req.body;

    const userRepository = AppDataSource.getRepository(Users);

    const duplicatedEmail = await userRepository.findOne({ where: { email } });
    if (duplicatedEmail) {
        throw new AppError("Email already exists", 409);
    }
    return next();
};
