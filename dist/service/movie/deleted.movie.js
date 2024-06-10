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
exports.deleteAllMoviesService = void 0;
const data_source_1 = require("../../data-source");
const movies_entities_1 = require("../../entities/movies.entities");
const handleError_1 = require("../../error/handleError");
const deleteAllMoviesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const getRepositoryMovies = data_source_1.AppDataSource.getRepository(movies_entities_1.Movie);
    const allMovies = yield getRepositoryMovies.find(); // Obtém todos os filmes
    if (!allMovies || allMovies.length === 0) {
        throw new handleError_1.AppError("No movies found to delete!", 404);
    }
    yield getRepositoryMovies.delete(allMovies.map(movie => movie.id));
});
exports.deleteAllMoviesService = deleteAllMoviesService;
