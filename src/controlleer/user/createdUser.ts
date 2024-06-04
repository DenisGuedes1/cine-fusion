import { Request, Response } from "express";
import { createdUserService } from "../../service/user/createdUser.service";
import { upload } from "../../multer-config";
export const createdUserController = async (req: Request, resp: Response) => {
    const data = req.body;
    const avatarFileName = req.file ? req.file.filename : null;

    console.log(req.file, "req.file");
    data.avatar = avatarFileName;
    console.log(data.avatar, "data.avatar");

    const newUser = await createdUserService(data);

    return resp.status(201).json(newUser);
};
