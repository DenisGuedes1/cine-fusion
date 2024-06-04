import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";
import { Repository } from "typeorm";
import { UpdatedUserSchema, createdUserSchema } from "../../schema/schema.user";
import { AppError } from "../../error/handleError";
import { TcreatedUser } from "../../interface/interfaceProducts";

export const updateUserService = async (
    userData: Partial<TcreatedUser>,
    idUser: string
) => {
    const userRepository: Repository<Users> =
        AppDataSource.getRepository(Users);
    const userFind = await userRepository.findOne({
        where: { id: idUser },
    });

    if (!userFind) {
        throw new AppError("User not exist", 404);
    }

    const updatedUser = userRepository.merge(userFind, userData);
    await userRepository.save(updatedUser);
    const newUser = UpdatedUserSchema.parse(userData);
    return newUser;
};
