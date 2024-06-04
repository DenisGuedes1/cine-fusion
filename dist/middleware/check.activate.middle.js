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
exports.checkActivation = void 0;
const user_entities_1 = require("../entities/user.entities");
const data_source_1 = require("../data-source");
const checkActivation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    try {
        const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
        const user = yield userRepository.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!user.activate) {
            return res.status(403).json({ message: "Solicite a ativação do seu perfil via suporte" });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.checkActivation = checkActivation;
