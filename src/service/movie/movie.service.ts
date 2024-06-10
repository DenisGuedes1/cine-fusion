import { AppDataSource } from "../../data-source";
import {Movie} from "../../entities/movies.entities";
import { returnCreatedMovie} from "../../schema/schema.movies";
import {
    TcreatedMovie,
    TreturnCreatedMovie,
} from "../../interface/interfaceProducts";
let isProcessing = false;
export const createdMovieService = async (
    userData: TcreatedMovie
): Promise<TreturnCreatedMovie | null> => {
if (isProcessing) {
    console.log("A chamada de criação de filme já está sendo processada.");
    return null;
}

// Marca como processando
isProcessing = true;

try {
    const existingMovie = await AppDataSource.getRepository(Movie)
        .createQueryBuilder("movie")
        .where("movie.imdb_id = :imdbId", { imdbId: userData.imdb_id })
        .getOne();

    // Se o filme não existir, insere-o no banco de dados
    if (!existingMovie) {
        const newMovie: Movie = AppDataSource.getRepository(Movie).create(userData);
        await AppDataSource.getRepository(Movie).save(newMovie);

        const verifyMovieField = returnCreatedMovie.parse(newMovie);
        console.log(verifyMovieField, "verificando os campos service");

        return verifyMovieField;
    } else {
        // Se o filme já existir, apenas retorna null para indicar que a inserção foi ignorada
        console.log("Filme já existe no banco de dados:", existingMovie);
        return null;
    }
} catch (error) {
    console.error("Erro ao processar a criação do filme:", error);
    return null;
} finally {
    // Marca como não processando após a conclusão
    isProcessing = false;
}
};