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
exports.resetPasswordService = exports.sendResetPassword = void 0;
const crypto_1 = require("crypto");
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const handleError_1 = require("../../error/handleError");
const sendResetEmail_utils_1 = require("../../utils/sendResetEmail.utils");
const bcryptjs_1 = require("bcryptjs");
const sendResetPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const find = yield userRepository.findOne({ where: { email } });
    if (!find) {
        throw new handleError_1.AppError("user not found", 404);
    }
    const resetToken = (0, crypto_1.randomUUID)();
    yield userRepository.update({ email }, { reset_token: resetToken });
    const resetPasswordTemplate = sendResetEmail_utils_1.emailService.resetPasswordTemplate(find.name, email, resetToken);
    yield sendResetEmail_utils_1.emailService.sendEmail(resetPasswordTemplate);
});
exports.sendResetPassword = sendResetPassword;
const resetPasswordService = (password, resetToken) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const findUser = yield userRepository.findOne({
        where: {
            reset_token: resetToken,
        },
    });
    if (!findUser) {
        throw new handleError_1.AppError("User Not found", 404);
    }
    const hashedPassword = (0, bcryptjs_1.hashSync)(password, 10);
    yield userRepository.update({ id: findUser.id }, { password: hashedPassword, reset_token: null });
});
exports.resetPasswordService = resetPasswordService;
