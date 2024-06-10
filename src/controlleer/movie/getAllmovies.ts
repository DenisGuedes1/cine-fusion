import { getAllActivatedMovieService } from "../../service/movie/getAllMovies";
import { Request, Response } from "express";

export const getAlMovieController = async (req: Request, resp: Response) => {
    try {
        const result = await getAllActivatedMovieService();
        return resp.status(200).json(result);
      } catch (error) {
        console.error('Error fetching movies:', error);
        return resp.status(500).json({ message: 'Internal Server Error' });
      }
};
