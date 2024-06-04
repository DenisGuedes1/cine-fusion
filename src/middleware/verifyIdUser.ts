import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/handleError";
import jwt from 'jsonwebtoken';
export const verifyUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const SECRET_KEY = process.env.JWT_SECRET || "default_secret"
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        throw new AppError('Missing bearer token', 401);
    }

    const decoded: any = jwt.verify(token, SECRET_KEY);
    const userIdFromToken = decoded.sub;

    const { userId } = req.params;

    if (userIdFromToken !== userId) {
        throw new AppError('Unauthorized access - Invalid user ID', 403);
    }

    next();
};