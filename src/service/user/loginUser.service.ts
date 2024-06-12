import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";
import { AppError } from "../../error/handleError";
import { TLoginUser } from "../../interface/interfaceProducts";
const JWT_SECRET = process.env.JWT_SECRET || "noisuf";
export const createdLoginService = async (
    loginData: TLoginUser
): Promise<string> => {
    const userRepository = AppDataSource.getRepository(Users);
    const user = await userRepository.findOne({
        where: { email: loginData.email },
    });
    if (!user) {
        throw new AppError("wrong email or password", 401);
    }

    const matchPassword: boolean = await compare(
        loginData.password,
        user.password
    );
    if (!matchPassword) {
        throw new AppError("Wrong email or password", 401);
    }
    const token: string = jwt.sign(
        { id: user.id, isAdmin: user.isAdmin },
        JWT_SECRET,
        {
            expiresIn: "24hr",
            subject: user.id.toString(),
        }
    );
    return token;
};
