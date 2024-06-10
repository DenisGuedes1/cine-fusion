import { getAllCountMovieService } from "../../service/movie/movies.count.service";
import { Request, Response } from "express";

export const getAlMovieCountController = async (req: Request, resp: Response) => {
    try {
        const result = await getAllCountMovieService();
        return resp.status(200).json(result);
      } catch (error) {
        console.error('Error fetching movies:', error);
        return resp.status(500).json({ message: 'Internal Server Error' });
      }
};
