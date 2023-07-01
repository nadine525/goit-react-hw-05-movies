import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '4d5567e6cf5210846af05c06dd64dec1';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=eu-US`
  );

  return response.data;
};
// getTrendingMovies().then(data => console.log(data)); //check

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};
getMovieDetails(455476).then(data => console.log(data)); //check

// export const getMoviesFactorsCast = async id => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
//   );

//   return response.cast;
// };
// getMovieDetails(455476).then(data => console.log(data)); // check

export const getMovieActorsCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data.cast;
};
// getMoviesActorsCast(455476).then(cast => console.log(cast)); // check

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response.data.results;
};
// getMovieReviews(385687).then(results => console.log(results));

export const getMovieSearch = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
  );

  return response.data;
};
// getMovieReviews('lion').then(response => console.log(response));
