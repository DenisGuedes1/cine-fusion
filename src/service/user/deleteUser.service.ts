import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";
import { AppError } from "../../error/handleError";

export const deleteUserService = async (idUser: string): Promise<void> => {
    const getRepositoryUser: Repository<Users> =
        AppDataSource.getRepository(Users);

    const findOneUser = await getRepositoryUser.findOne({
        where: { id: idUser },
    });

    if (!idUser) {
        throw new AppError("User not exists!", 404);
    }
    await getRepositoryUser.delete(idUser);
};
