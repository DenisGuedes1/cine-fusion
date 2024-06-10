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
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
const apiKey = ' 8b9b25ea5ee57567e9df1645c7a11339';
const batchSize = 40;
const fetchMovies = (movieIds) => __awaiter(void 0, void 0, void 0, function* () {
    const requests = movieIds.map(id => axios_1.default.get(`https://api.themoviedb.org/3/find/${id}?api_key=${apiKey}&external_source=imdb_id&language=pt-BR`));
    const responses = yield Promise.all(requests);
    return responses.flatMap(response => response.data.movie_results);
});
const processBatch = (batchIds) => __awaiter(void 0, void 0, void 0, function* () {
    const batchMovies = yield fetchMovies(batchIds);
    // Aqui você pode processar e armazenar os resultados conforme necessário
    console.log('Batch processed:', batchMovies.length);
});
const startProcessing = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rawIds = fs_1.default.readFileSync("../../src/utils/Json/private/moviesImdb.json", 'utf-8');
        const movieIds = JSON.parse(rawIds);
        for (let i = 0; i < movieIds.length; i += batchSize) {
            const batchIds = movieIds.slice(i, i + batchSize);
            yield processBatch(batchIds);
            yield new Promise(resolve => setTimeout(resolve, 10000)); // Aguarda 10 segundos antes da próxima requisição
        }
        console.log('All IMDb IDs processed!');
    }
    catch (error) {
        console.error('Error processing IMDb IDs:', error);
    }
});
// Iniciar o processamento ao iniciar o servidor, por exemplo
startProcessing();
