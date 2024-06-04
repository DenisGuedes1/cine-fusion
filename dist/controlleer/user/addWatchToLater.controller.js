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
exports.getWatchLater = exports.addToWatchLater = void 0;
const addToWatchLater_service_1 = require("../../service/user/addToWatchLater.service");
const addToWatchLater = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { movieId } = req.body;
    try {
        const user = yield (0, addToWatchLater_service_1.addToWatchLaterService)(userId, movieId);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: 'Ops algo deu errado' + error });
    }
});
exports.addToWatchLater = addToWatchLater;
const getWatchLater = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const watchLaterList = yield (0, addToWatchLater_service_1.getWatchLaterService)(userId);
        res.status(200).json(watchLaterList);
    }
    catch (error) {
        res.status(400).json({ message: 'Ops algo deu errado' + error });
    }
});
exports.getWatchLater = getWatchLater;
