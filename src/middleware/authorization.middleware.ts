import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/handleError";

export const authorizationMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const user = req.user;

    if (user.isAdmin) {
        if (req.method === "PATCH" && "isAdmin" in req.body) {
            throw new AppError(
                "You are not allowed to change your admin status",
                403
            );
        }
    } else {
        if (req.params.id !== user.id.toString()) {
            throw new AppError(
                "Insufficient permission to access this resource",
                403
            );
        }

        if (req.method === "PATCH" && "isAdmin" in req.body) {
            throw new AppError(
                "You are not allowed to change your admin status",
                403
            );
        }
    }

    next();
};
