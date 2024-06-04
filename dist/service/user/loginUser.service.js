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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createdLoginService = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const handleError_1 = require("../../error/handleError");
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
const createdLoginService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const user = yield userRepository.findOne({
        where: { email: loginData.email },
    });
    if (!user) {
        throw new handleError_1.AppError("wrong email or password", 401);
    }
    const matchPassword = yield (0, bcryptjs_1.compare)(loginData.password, user.password);
    if (!matchPassword) {
        throw new handleError_1.AppError("Wrong email or password", 401);
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id, isAdmin: user.isAdmin }, JWT_SECRET, {
        expiresIn: "24hr",
        subject: user.id.toString(),
    });
    return token;
});
exports.createdLoginService = createdLoginService;
