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
exports.loginUserController = void 0;
const loginUser_service_1 = require("../../service/user/loginUser.service");
const loginUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const dataLogin = req.body;
    console.log(dataLogin);
    const loginUser = yield (0, loginUser_service_1.createdLoginService)(dataLogin);
    console.log(loginUser);
    return resp.json(loginUser).status(200);
});
exports.loginUserController = loginUserController;
