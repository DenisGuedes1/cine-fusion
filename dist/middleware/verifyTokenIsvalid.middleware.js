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
exports.veriFyTokenIsValid = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const handleError_1 = require("../error/handleError");
const SECRET_KEY = process.env.JWT_SECRET || "default_secret";
const veriFyTokenIsValid = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.headers.authorization;
    if (!token) {
        throw new handleError_1.AppError("Missing bearer token", 401);
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new handleError_1.AppError(error.message, 401);
        }
        req.user = decoded;
        req.user = {
            id: decoded.sub,
            isAdmin: decoded.isAdmin,
        };
    });
    return next();
});
exports.veriFyTokenIsValid = veriFyTokenIsValid;
