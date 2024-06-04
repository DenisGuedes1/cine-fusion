import { Router } from "express";
import {
    validateDataMiddleware,
    veriFyTokenIsValid,
} from "../middleware/middlewares";
import { checkEmailMiddle } from "../middleware/middlewares";
import { createdUserController } from "../controlleer/user/createdUser";
import { createdUserSchema, loginUserSchema } from "../schema/schema.user";
import { loginUserController } from "../controlleer/user/loginUser.controler";
import { deleteUserController } from "../controlleer/user/deleteUser.controller";
import { getAllUserController } from "../controlleer/user/getAllusers";
import {
    resetPasswordController,
    sendEmailResetPasswordController,
} from "../controlleer/user/sendReseteEmailPassword";
import { checkActivation } from "../middleware/check.activate.middle";
import { checkAdmin } from "../middleware/checkAdmin";
import { activateUser } from "../controlleer/admin/updateActivate.controller";
const userRouter: Router = Router();

userRouter.post(
    "/register",
    checkEmailMiddle,
    validateDataMiddleware(createdUserSchema),
    createdUserController
);
userRouter.post(
    "/login",
    validateDataMiddleware(loginUserSchema),
    checkActivation,
    loginUserController
);

userRouter.post("/users/reset-password", sendEmailResetPasswordController);
userRouter.get("/list-users", veriFyTokenIsValid,checkAdmin,getAllUserController);
userRouter.delete("/users/delete", veriFyTokenIsValid,checkAdmin,deleteUserController);
userRouter.patch("/reset-password/:token", resetPasswordController);
userRouter.put('/:userId/activate', veriFyTokenIsValid,checkAdmin,activateUser);

export default userRouter;
