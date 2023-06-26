import { NavLink } from 'react-router-dom';
// import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
