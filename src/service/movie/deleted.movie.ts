import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/movies.entities";
import { AppError } from "../../error/handleError";

export const deleteAllMoviesService = async (): Promise<void> => {
    const getRepositoryMovies: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const allMovies = await getRepositoryMovies.find(); // Obtém todos os filmes

    if (!allMovies || allMovies.length === 0) {
        throw new AppError("No movies found to delete!", 404);
    }

    await getRepositoryMovies.delete(allMovies.map(movie => movie.id));
};