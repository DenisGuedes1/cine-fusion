import { Request, Response } from "express";
import { createdLoginService } from "../../service/user/loginUser.service";

export const loginUserController = async(req:Request, resp:Response) =>{

    const dataLogin = req.body;
    console.log(dataLogin);
    const loginUser = await createdLoginService(dataLogin);
    console.log(loginUser)
    return resp.json(loginUser).status(200)

}