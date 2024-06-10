import { Router } from "express";
import { createdMovieSchema } from "../../schema/schema.movies";
import { validateDataMiddleware } from "../../middleware/validatedBody.middleware";
import { createdMovieController } from "../../controlleer/movie/created.movie.controller";
import { getAlMovieController } from "../../controlleer/movie/getAllmovies";
import { deleteMovieController } from "../../controlleer/movie/deleteMovie";
import { getAlMovieCountController } from "../../controlleer/movie/get.count.controller";
const movieRouter: Router = Router();


movieRouter.post(
    "/movie/new",
    validateDataMiddleware(createdMovieSchema),
    createdMovieController
  
);
movieRouter.get("/get", getAlMovieController)
movieRouter.get("/count", getAlMovieCountController)


movieRouter.delete("/del/", deleteMovieController)
export default movieRouter;