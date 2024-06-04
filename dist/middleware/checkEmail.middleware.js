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
exports.checkEmailMiddle = void 0;
const data_source_1 = require("../data-source");
const user_entities_1 = require("../entities/user.entities");
const handleError_1 = require("../error/handleError");
const checkEmailMiddle = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email) {
        return next();
    }
    const { email } = req.body;
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const duplicatedEmail = yield userRepository.findOne({ where: { email } });
    if (duplicatedEmail) {
        throw new handleError_1.AppError("Email already exists", 409);
    }
    return next();
});
exports.checkEmailMiddle = checkEmailMiddle;
