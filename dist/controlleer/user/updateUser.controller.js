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
exports.updatedUserController = void 0;
const updateUser_service_1 = require("../../service/user/updateUser.service");
const updatedUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const userData = req.body;
    const updated = yield (0, updateUser_service_1.updateUserService)(userData, userId);
    return resp.json(updated).status(200);
});
exports.updatedUserController = updatedUserController;
