import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";
import { Repository } from "typeorm";
import { AppError } from "../../error/handleError";

export const getUserByIdService = async (idUser: string) => {
    const userRepository = AppDataSource.getRepository(Users);
    const findUser = await userRepository.findOne({
        where: { id: idUser },
        relations: ["adress"],
    });
    if (!findUser) {
        throw new AppError("User not found", 404);
    }

    return findUser;
};
