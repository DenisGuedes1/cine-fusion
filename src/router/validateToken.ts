import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../error/handleError';
import { Router } from "express";

const SECRET_KEY = process.env.JWT_SECRET || 'noisuf';

const tokenValidationRouter = Router();

tokenValidationRouter.post('', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            throw new AppError('Missing bearer token', 401);
        }
        token = token.split(' ')[1];

        jwt.verify(token, SECRET_KEY, (error, decoded: any) => {
            if (error) {
                throw new AppError(error.message, 401);
            }
            // Se o token for válido, pode responder com um status 200 OK
            res.status(200).json({ message: 'Token is valid' });
        });
    } catch (error) {
        next(error);
    }
});

export default tokenValidationRouter;