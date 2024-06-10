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
exports.getAlMovieController = void 0;
const getAllMovies_1 = require("../../service/movie/getAllMovies");
const getAlMovieController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, getAllMovies_1.getAllActivatedMovieService)();
        return resp.status(200).json(result);
    }
    catch (error) {
        console.error('Error fetching movies:', error);
        return resp.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.getAlMovieController = getAlMovieController;
