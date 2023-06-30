import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout";
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy (() => import('pages/Movies'));
const MovieDetails = lazy(() => ("pages/MovieDetails/MovieDetails")) ;
const Cast = lazy(() => ('pages/Cast'));
const Reviews = lazy(() => ('pages/Reviews'));
const NotFound = lazy(() => ('pages/NotFound/NotFound'));


export const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />          
        </Route>
      </Routes>
    </>
  );
};
