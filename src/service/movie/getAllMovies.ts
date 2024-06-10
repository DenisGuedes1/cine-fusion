import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entities";

export const getAllActivatedMovieService = async () => {
    const movieRepository = AppDataSource.getRepository(Movie);
  
    // Contar o número de filmes
    const movieCount = await movieRepository.count();
    
    // Buscar todos os filmes
    const allMovies = await movieRepository.find();
    
    // Retornar a contagem e os filmes
    return { movieCount, allMovies };

};