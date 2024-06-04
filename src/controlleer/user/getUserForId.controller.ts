import { getUserByIdService } from "../../service/user/getUserForId.service";
import { Request, Response } from "express";

export const getuserByIdController = async (req: Request, resp: Response) => {
    const idUser = req.user.id;
    const getUser = await getUserByIdService(idUser);

    return resp.json(getUser).status(200);
};
