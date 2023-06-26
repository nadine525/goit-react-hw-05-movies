import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      {['film-1', 'film-2', 'film-3', 'film-4'].map(film => {
        return (
          <Link key={film} to={`${film}`}>
            {film}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
