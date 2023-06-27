import { HeaderContainer, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
