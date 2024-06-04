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
exports.updateUserService = void 0;
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const schema_user_1 = require("../../schema/schema.user");
const handleError_1 = require("../../error/handleError");
const updateUserService = (userData, idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const userFind = yield userRepository.findOne({
        where: { id: idUser },
    });
    if (!userFind) {
        throw new handleError_1.AppError("User not exist", 404);
    }
    const updatedUser = userRepository.merge(userFind, userData);
    yield userRepository.save(updatedUser);
    const newUser = schema_user_1.UpdatedUserSchema.parse(userData);
    return newUser;
});
exports.updateUserService = updateUserService;
