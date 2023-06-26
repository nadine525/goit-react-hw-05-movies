import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />;
    </>
  );
};

export default SharedLayout;
