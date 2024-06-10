"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnCreatedMovie = exports.createdMovieSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createdMovieSchema = zod_1.default.object({
    imdb_id: zod_1.default.string(),
    adult: zod_1.default.boolean(),
    backdrop_path: zod_1.default.string(),
    genre_ids: zod_1.default.array(zod_1.default.number()),
    media_type: zod_1.default.string(),
    original_language: zod_1.default.string(),
    original_title: zod_1.default.string(),
    overview: zod_1.default.string(),
    popularity: zod_1.default.number(),
    poster_path: zod_1.default.string(),
    release_date: zod_1.default.string(),
    title: zod_1.default.string(),
    video: zod_1.default.boolean(),
    vote_average: zod_1.default.number(),
    vote_count: zod_1.default.number()
});
exports.returnCreatedMovie = exports.createdMovieSchema.extend({
    id: zod_1.default.string(),
});
