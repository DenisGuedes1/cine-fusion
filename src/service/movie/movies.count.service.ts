import { AppDataSource } from "../../data-source";
import { Movie} from "../../entities/movies.entities";

export const getAllCountMovieService = async () => {
    const movieRepository = AppDataSource.getRepository(Movie);
  
    // Contar o número de filmes
    const movieCount = await movieRepository.count();
    
    // Buscar todos os filmes
   
    // Retornar a contagem e os filmes
    return { movieCount};

};