import { Router } from "express";
import {
    resetPasswordController,
    sendEmailResetPasswordController,
} from "../controlleer/user/sendReseteEmailPassword";
import { validateDataMiddleware } from "../middleware/validatedBody.middleware";
import { createdUserSchema, loginUserSchema } from "../schema/schema.user";
import { loginUserController } from "../controlleer/user/loginUser.controler";
import { checkEmailMiddle } from "../middleware/checkEmail.middleware";
import { createdUserController } from "../controlleer/user/createdUser";
import { veriFyTokenIsValid } from "../middleware/verifyTokenIsvalid.middleware";
import { deleteUserController } from "../controlleer/user/deleteUser.controller";
import { updatedUserController } from "../controlleer/user/updateUser.controller";
import { getuserByIdController } from "../controlleer/user/getUserForId.controller";
import { addToWatchLater, getWatchLater } from "../controlleer/user/addWatchToLater.controller";
import { verifyUserId } from "../middleware/verifyIdUser";



const NotAdminRouter: Router = Router();

NotAdminRouter.post("/reset-password", sendEmailResetPasswordController);
NotAdminRouter.post(
    "/login",
    validateDataMiddleware(loginUserSchema),
    loginUserController
);

NotAdminRouter.post(
    "/register",
    checkEmailMiddle,
    validateDataMiddleware(createdUserSchema),
    createdUserController
);
NotAdminRouter.get("/user", veriFyTokenIsValid, getuserByIdController);
NotAdminRouter.delete(
    "/users/delete",
    veriFyTokenIsValid,
    verifyUserId,
    deleteUserController
);
NotAdminRouter.patch("/update-user", veriFyTokenIsValid,verifyUserId, updatedUserController);
NotAdminRouter.patch("/reset-password/:token", resetPasswordController);
NotAdminRouter.post('/:userId/watch-later', veriFyTokenIsValid,addToWatchLater);
NotAdminRouter.get('/:userId/watch-later', veriFyTokenIsValid,verifyUserId,getWatchLater);
export default NotAdminRouter;
