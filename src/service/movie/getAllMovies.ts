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


//com paginação no retorno da api

// import { AppDataSource } from "../../data-source";
// import { Movie } from "../../entities/movies.entities";

// export const getAllActivatedMovieService = async (page: number = 1, limit: number = 40) => {
//     const movieRepository = AppDataSource.getRepository(Movie);
  
//     // Contar o número total de filmes
//     const movieCount = await movieRepository.count();
    
//     // Calcular o número total de páginas
//     const totalPages = Math.ceil(movieCount / limit);

//     // Validar o valor da página
//     if (page < 1 || page > totalPages) {
//         throw new Error('Página inválida');
//     }

//     // Buscar os filmes paginados
//     const movies = await movieRepository.find({
//         skip: (page - 1) * limit,
//         take: limit,
//     });
    
//     // Retornar o total de filmes, o número total de páginas e os filmes paginados
//     return { movieCount, totalPages, movies };
// };