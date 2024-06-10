import { deleteAllMoviesService } from "../../service/movie/deleted.movie";
import { Request, Response } from "express";
export const deleteMovieController = async (req: Request, resp: Response) => {
    const id = req.params.id;
    console.log(id, "esse eo id");
    await deleteAllMoviesService();
    return resp.status(204).send();
};