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
exports.getWatchLaterService = exports.addToWatchLaterService = void 0;
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const addToWatchLaterService = (userId, movieId) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const user = yield usersRepository.findOne({ where: { id: userId } });
    if (!user) {
        throw new Error("User not found");
    }
    if (!user.watchLater) {
        user.watchLater = [];
    }
    user.watchLater.push(movieId);
    yield usersRepository.save(user);
    return user;
});
exports.addToWatchLaterService = addToWatchLaterService;
const getWatchLaterService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const user = yield usersRepository.findOne({ where: { id: userId } });
    if (!user) {
        throw new Error("User not found");
    }
    return user.watchLater;
});
exports.getWatchLaterService = getWatchLaterService;
