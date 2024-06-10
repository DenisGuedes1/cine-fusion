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
exports.createdMovieController = void 0;
const movie_service_1 = require("../../service/movie/movie.service");
const createdMovieController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log(data, "data que vem do body controller");
        const newMovie = yield (0, movie_service_1.createdMovieService)(data);
        return resp.status(201).json(newMovie);
    }
    catch (error) {
        console.error('Error creating movie:', error);
        return resp.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.createdMovieController = createdMovieController;
// Iniciar o processamento ao iniciar o servidor, por exemplo
// startProcessing();
