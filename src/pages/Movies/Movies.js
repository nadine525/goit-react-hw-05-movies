import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from '../../servises/requestApi';
import { Input, Button } from './Movies.styled';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);

  const handleChange = event => {
    setInput(event.target.value.toLowerCase().trim());
    console.log(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    setSearchParams({ query: form.query.value });
    setInput('');
  };

  useEffect(() => {
    if (query === '') return;

    getMovieSearch(query)
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, [query]);

  // console.log(movies);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="query" value={input} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
