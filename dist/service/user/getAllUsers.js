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
exports.getAllActivatedUsersService = void 0;
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const getAllActivatedUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    // Buscar apenas usuários ativados
    // const activatedUsers = await usersRepository.find({
    //     where: { activate: true },
    // });
    const allUsers = yield usersRepository.find();
    // Filtrar os usuários ativados e não ativados
    const activatedUsers = allUsers.filter(user => user.activate);
    const nonActivatedUsers = allUsers.filter(user => !user.activate);
    return { activatedUsers, nonActivatedUsers };
});
exports.getAllActivatedUsersService = getAllActivatedUsersService;
