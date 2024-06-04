"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordController = exports.sendEmailResetPasswordController = void 0;
const sendPassword_controller_1 = require("../../service/user/sendPassword.controller");
const sendEmailResetPasswordController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    yield (0, sendPassword_controller_1.sendResetPassword)(email);
    return resp.json({ message: "token send" });
});
exports.sendEmailResetPasswordController = sendEmailResetPasswordController;
const resetPasswordController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    const { token } = req.params;
    yield (0, sendPassword_controller_1.resetPasswordService)(password, token);
    return resp.json({ message: "Password change with sucess" });
});
exports.resetPasswordController = resetPasswordController;
