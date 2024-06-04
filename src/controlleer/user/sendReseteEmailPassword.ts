import { Request, Response } from "express";
import {
    resetPasswordService,
    sendResetPassword,
} from "../../service/user/sendPassword.controller";

export const sendEmailResetPasswordController = async (
    req: Request,
    resp: Response
) => {
    const { email } = req.body;
    await sendResetPassword(email);
    return resp.json({ message: "token send" });
};
export const resetPasswordController = async (req: Request, resp: Response) => {
    const { password } = req.body;
    const { token } = req.params;
    await resetPasswordService(password, token);
    return resp.json({ message: "Password change with sucess" });
};
