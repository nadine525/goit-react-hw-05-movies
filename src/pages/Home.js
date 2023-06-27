import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'servises/requestApi';
import Caption from 'components/Caption';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Caption />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
