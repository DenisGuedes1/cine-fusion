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
exports.authorizationMiddleware = void 0;
const handleError_1 = require("../error/handleError");
const authorizationMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (user.isAdmin) {
        if (req.method === "PATCH" && "isAdmin" in req.body) {
            throw new handleError_1.AppError("You are not allowed to change your admin status", 403);
        }
    }
    else {
        if (req.params.id !== user.id.toString()) {
            throw new handleError_1.AppError("Insufficient permission to access this resource", 403);
        }
        if (req.method === "PATCH" && "isAdmin" in req.body) {
            throw new handleError_1.AppError("You are not allowed to change your admin status", 403);
        }
    }
    next();
});
exports.authorizationMiddleware = authorizationMiddleware;
