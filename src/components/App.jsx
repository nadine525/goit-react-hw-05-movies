import { Routes, Route, NavLink } from "react-router-dom";

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetail from "pages/MovieDetail";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";
import NotFound from "pages/NotFound";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Домашня сторінка</NavLink>
        <NavLink to="/movies">Фільми</NavLink>
      </nav>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
