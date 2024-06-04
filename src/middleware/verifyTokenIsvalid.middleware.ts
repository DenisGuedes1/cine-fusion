import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error/handleError";
const SECRET_KEY = process.env.JWT_SECRET || "default_secret";
export const veriFyTokenIsValid = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<void> => {
    let token = req.headers.authorization;
    if (!token) {
        throw new AppError("Missing bearer token", 401);
    }
    token = token.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (error, decoded: any) => {
        if (error) {
            throw new AppError(error.message, 401);
        }
        req.user = decoded;
        req.user = {
            id: decoded.sub,
            isAdmin: decoded.isAdmin,
        };
    });

    return next();
};
