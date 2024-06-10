import { createdMovieService } from "../../service/movie/movie.service";
import { Request, Response } from "express";

export const createdMovieController = async (req: Request, resp: Response) => {
  try {
    const data = req.body; 
    console.log(data,"data que vem do body controller") 

    const newMovie = await createdMovieService(data);

    return resp.status(201).json(newMovie);
  } catch (error) {
    console.error('Error creating movie:', error);
    return resp.status(500).json({ message: 'Internal Server Error' });
  }
};

// Iniciar o processamento ao iniciar o servidor, por exemplo
// startProcessing();