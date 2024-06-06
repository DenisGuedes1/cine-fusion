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
exports.getUserByIdService = void 0;
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const handleError_1 = require("../../error/handleError");
const getUserByIdService = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const findUser = yield userRepository.findOne({
        where: { id: idUser }
    });
    if (!findUser) {
        throw new handleError_1.AppError("User not found", 404);
    }
    return findUser;
});
exports.getUserByIdService = getUserByIdService;
