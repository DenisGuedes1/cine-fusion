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
exports.createdMovieService = void 0;
const data_source_1 = require("../../data-source");
const movies_entities_1 = require("../../entities/movies.entities");
const schema_movies_1 = require("../../schema/schema.movies");
let isProcessing = false;
const createdMovieService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (isProcessing) {
        console.log("A chamada de criação de filme já está sendo processada.");
        return null;
    }
    // Marca como processando
    isProcessing = true;
    try {
        const existingMovie = yield data_source_1.AppDataSource.getRepository(movies_entities_1.Movie)
            .createQueryBuilder("movie")
            .where("movie.imdb_id = :imdbId", { imdbId: userData.imdb_id })
            .getOne();
        // Se o filme não existir, insere-o no banco de dados
        if (!existingMovie) {
            const newMovie = data_source_1.AppDataSource.getRepository(movies_entities_1.Movie).create(userData);
            yield data_source_1.AppDataSource.getRepository(movies_entities_1.Movie).save(newMovie);
            const verifyMovieField = schema_movies_1.returnCreatedMovie.parse(newMovie);
            console.log(verifyMovieField, "verificando os campos service");
            return verifyMovieField;
        }
        else {
            // Se o filme já existir, apenas retorna null para indicar que a inserção foi ignorada
            console.log("Filme já existe no banco de dados:", existingMovie);
            return null;
        }
    }
    catch (error) {
        console.error("Erro ao processar a criação do filme:", error);
        return null;
    }
    finally {
        // Marca como não processando após a conclusão
        isProcessing = false;
    }
});
exports.createdMovieService = createdMovieService;
