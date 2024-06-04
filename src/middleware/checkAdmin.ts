import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/handleError";

export const checkAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const user = req.user;

    if (!user || !user.isAdmin) {
        throw new AppError("Unauthorized access - Admin only", 403);
    }

    next();
};