// import { NavLink } from 'react-router-dom';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

// import { Header, StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header> */}

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
