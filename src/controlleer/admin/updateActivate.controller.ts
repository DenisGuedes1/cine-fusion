import { Request, Response } from 'express';
import { activateUserService } from '../../service/admin/updateActivate.service';

export const activateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await activateUserService(userId);
        res.status(200).json(user);
    } catch (error:any) {
        res.status(error.status || 500).json({ message: 'usuario nao existe'+error });
    }
};