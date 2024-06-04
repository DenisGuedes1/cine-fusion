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
exports.verifyUserId = void 0;
const handleError_1 = require("../error/handleError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const SECRET_KEY = process.env.JWT_SECRET || "default_secret";
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        throw new handleError_1.AppError('Missing bearer token', 401);
    }
    const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
    const userIdFromToken = decoded.sub;
    const { userId } = req.params;
    if (userIdFromToken !== userId) {
        throw new handleError_1.AppError('Unauthorized access - Invalid user ID', 403);
    }
    next();
});
exports.verifyUserId = verifyUserId;
