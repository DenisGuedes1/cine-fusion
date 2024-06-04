import { Request, Response } from "express";
import { getAllActivatedUsersService} from "../../service/user/getAllUsers";

export const getAllUserController = async (req: Request, resp: Response) => {
    const getAllUserAdmin = await getAllActivatedUsersService();

    return resp.json(getAllUserAdmin).status(200);
};
