import { Request, Response, NextFunction } from 'express';
import { Users } from '../entities/user.entities';
import { AppDataSource } from '../data-source';

export const checkActivation = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const userRepository = AppDataSource.getRepository(Users);
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.activate) {
            return res.status(403).json({ message: "Solicite a ativação do seu perfil via suporte" });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};