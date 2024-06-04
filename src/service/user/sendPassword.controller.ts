import { randomUUID } from "crypto";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";
import { AppError } from "../../error/handleError";
import { emailService } from "../../utils/sendResetEmail.utils";
import { hashSync } from "bcryptjs";
export const sendResetPassword = async (email: string) => {
    const userRepository = AppDataSource.getRepository(Users);
    const find = await userRepository.findOne({ where: { email } });

    if (!find) {
        throw new AppError("user not found", 404);
    }
    const resetToken = randomUUID();
    await userRepository.update({ email }, { reset_token: resetToken });
    const resetPasswordTemplate = emailService.resetPasswordTemplate(
        find.name,
        email,
        resetToken
    );
    await emailService.sendEmail(resetPasswordTemplate);
};
export const resetPasswordService = async (
    password: string,
    resetToken: string
) => {
    const userRepository = AppDataSource.getRepository(Users);
    const findUser = await userRepository.findOne({
        where: {
            reset_token: resetToken,
        },
    });

    if (!findUser) {
        throw new AppError("User Not found", 404);
    }
    const hashedPassword = hashSync(password, 10);
    await userRepository.update(
        { id: findUser.id },
        { password: hashedPassword, reset_token: null }
    );
};
