import PropTypes from 'prop-types';
import { Division, AddInfoTitle, List, StyledLink } from './Additional.styled';

const Additional = ({ location }) => {
  return (
    <Division>
      <AddInfoTitle>Additional information</AddInfoTitle>
      <List>
        <li>
          <StyledLink to="cast" state={{ from: location }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: location }}>
            Reviews
          </StyledLink>
        </li>
      </List>
    </Division>
  );
};

export default Additional;

Additional.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    hash: PropTypes.string,
    state: PropTypes.bool,
  }).isRequired,
};
