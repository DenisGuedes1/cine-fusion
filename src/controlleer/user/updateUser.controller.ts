import { Request, Response } from "express";
import { updateUserService } from "../../service/user/updateUser.service";

export const updatedUserController = async (req: Request, resp: Response) => {
    const userId = req.user.id;
    const userData = req.body;

    const updated = await updateUserService(userData, userId);

    return resp.json(updated).status(200);
};
