import fs from 'fs';
import axios from 'axios';
const apiKey = ' 8b9b25ea5ee57567e9df1645c7a11339';
const batchSize = 40;

const fetchMovies = async (movieIds: string[]) => {
  const requests = movieIds.map(id =>
    axios.get(`https://api.themoviedb.org/3/find/${id}?api_key=${apiKey}&external_source=imdb_id&language=pt-BR`)
  );
  const responses = await Promise.all(requests);
  return responses.flatMap(response => response.data.movie_results);
};

const processBatch = async (batchIds: string[]) => {
  const batchMovies = await fetchMovies(batchIds);
  // Aqui você pode processar e armazenar os resultados conforme necessário
  console.log('Batch processed:', batchMovies.length);
};

const startProcessing = async () => {
  try {
    const rawIds = fs.readFileSync("../../src/utils/Json/private/moviesImdb.json",'utf-8');
    const movieIds = JSON.parse(rawIds);

    for (let i = 0; i < movieIds.length; i += batchSize) {
      const batchIds = movieIds.slice(i, i + batchSize);
      await processBatch(batchIds);
      await new Promise(resolve => setTimeout(resolve, 10000)); // Aguarda 10 segundos antes da próxima requisição
    }

    console.log('All IMDb IDs processed!');
  } catch (error) {
    console.error('Error processing IMDb IDs:', error);
  }
};

// Iniciar o processamento ao iniciar o servidor, por exemplo
startProcessing();