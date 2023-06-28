import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../servises/requestApi';
import GoBackButton from 'components/Button/Button';
import Information from 'components/Information/Information';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(console.error());
  }, [movieId]);
  console.log(movie);

  if (!movie) {
    return;
  }

  return (
    <>
      <GoBackButton backLinkHref={backLinkHref} />
      <Information movie={movie} />
      {/* <Additional /> */}
    </>
  );
};

export default MovieDetails;
