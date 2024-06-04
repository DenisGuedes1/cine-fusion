import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";
import { AppError } from "../../error/handleError";

export const activateUserService = async (userId: string) => {
    console.log(userId, "id usuario")
    const usersRepository = AppDataSource.getRepository(Users);
    const user = await usersRepository.findOne({ where: { id: userId } });

    if (!user) {
        throw new Error("User not found");
    }
    if (user.activate) {
        throw new AppError("User is already activated", 400);
    }

    user.activate = true;
    await usersRepository.save(user);

    return user;
};