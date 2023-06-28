import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '4d5567e6cf5210846af05c06dd64dec1';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=eu-US`
  );

  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};
