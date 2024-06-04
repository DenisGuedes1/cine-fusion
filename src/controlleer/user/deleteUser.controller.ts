import { Request, Response } from "express";
import { deleteUserService } from "../../service/user/deleteUser.service";

export const deleteUserController = async (req: Request, resp: Response) => {
    const idUser = req.user.id;
    await deleteUserService(idUser);
    return resp.status(204).send();
};
