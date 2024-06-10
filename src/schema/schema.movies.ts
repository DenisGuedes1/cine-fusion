import z from"zod";
export const createdMovieSchema = z.object({
    imdb_id: z.string(),
    adult: z.boolean(),
    backdrop_path:z.string(),
    genre_ids: z.array(z.number()),
    media_type:z.string(),
    original_language:z.string(),
    original_title:z.string(),
    overview:z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    release_date:z.string(),
    title: z.string(),
    video:z.boolean(),
    vote_average: z.number(),
    vote_count: z.number()


});
export const returnCreatedMovie = createdMovieSchema.extend({
    id: z.string(),
});