import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";
import { Repository } from "typeorm";
import { createdUserSchema, returnCreatedUser } from "../../schema/schema.user";
import {
    TcreatedUser,
    TreturnCreateUser,
} from "../../interface/interfaceProducts";
export const createdUserService = async (
    userData: TcreatedUser
): Promise<TreturnCreateUser> => {
    const newUser: Users = AppDataSource.getRepository(Users).create(userData);
    await AppDataSource.getRepository(Users).save(newUser);

    const verifyFieldsUsers = returnCreatedUser.parse(newUser);

    return verifyFieldsUsers;
};
