import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";

export const addToWatchLaterService = async (userId: string, movieId: string) => {
    const usersRepository = AppDataSource.getRepository(Users);

    const user = await usersRepository.findOne({ where: { id: userId } });

    if (!user) {
        throw new Error("User not found");
    }

    if (!user.watchLater) {
        user.watchLater = [];
    }

    user.watchLater.push(movieId);

    await usersRepository.save(user);

    return user;
};
export const getWatchLaterService = async (userId: string) => {
    const usersRepository = AppDataSource.getRepository(Users);

    const user = await usersRepository.findOne({ where: { id: userId } });

    if (!user) {
        throw new Error("User not found");
    }

    return user.watchLater;
};
