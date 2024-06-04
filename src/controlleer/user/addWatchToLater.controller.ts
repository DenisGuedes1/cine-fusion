import { Request, Response } from 'express';
import { addToWatchLaterService,getWatchLaterService } from '../../service/user/addToWatchLater.service';

export const addToWatchLater = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { movieId } = req.body;

    try {
        const user = await addToWatchLaterService(userId, movieId);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Ops algo deu errado'+error });
    }
};

export const getWatchLater = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const watchLaterList = await getWatchLaterService(userId);
        res.status(200).json(watchLaterList);
    } catch (error) {
        res.status(400).json({ message: 'Ops algo deu errado'+error });
    }
};