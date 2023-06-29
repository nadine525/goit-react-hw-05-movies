import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from '../servises/requestApi';

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

    console.log(query);
    setInput('');
  };

  useEffect(() => {
    if (query === '') return;

    getMovieSearch(query)
      .then(data => setMovies(data))
      .catch(error => console.log(error));
  }, [query]);

  console.log(movies);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Movies;
