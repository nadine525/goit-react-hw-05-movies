import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem, StyledLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => (
        <ListItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
