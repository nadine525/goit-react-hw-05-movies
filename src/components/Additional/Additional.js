// import { Link } from 'react-router-dom';
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
