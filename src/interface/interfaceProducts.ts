import { z } from "zod";
import {
    createdUserSchema,
    returnCreatedUser,
    loginUserSchema,
 
} from "../schema/schema.user";
import { createdMovieSchema, returnCreatedMovie } from "../schema/schema.movies";

export type TcreatedUser = z.infer<typeof createdUserSchema>;
export type TreturnCreateUser = z.infer<typeof returnCreatedUser>;
export type TLoginUser = z.infer<typeof loginUserSchema>;
export type TcreatedMovie = z.infer<typeof createdMovieSchema>
export type TreturnCreatedMovie = z.infer<typeof returnCreatedMovie>

export interface IemailRequest {
    to: string;
    subject: string;
    text: string;
}
export interface IMovie {
    imdb_id: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}