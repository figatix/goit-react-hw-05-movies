
import { Homepage } from "pages/Home";
// import { MovieCast } from "pages/MovieCast";
import { MovieDetails } from "pages/MovieDetails";
// import { MovieReviews } from "pages/MovieReviews";
import { Movies } from "pages/Movies";
import { NavLink, Route, Routes } from "react-router-dom";

import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { getMovieCredits, getMovieDetails, getMovieReviews, getPopularMovies, searchMovie } from "./ApiMovies";

export const App = () => {
  // console.log(getPopularMovies());
  // console.log(searchMovie("batman", 1));
  // console.log(getMovieDetails(268));
  // console.log(getMovieCredits(268));
  // console.log(getMovieReviews(268));

  return (
    <>
      <StyledNav>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">
          Movies
        </StyledNavLink>
      </StyledNav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/:detailsId" element={<MovieDetails idFilm={268} />} /> */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:detailsId/*" element={<MovieDetails />} />
        <Route path="*" element={<Homepage />} />
      </Routes>

      {/* <MovieReviews idFilm={268}></MovieReviews> */}
      {/* <MovieCast idFilm={268}></MovieCast> */}
      {/* <Movies></Movies> */}
      {/* <MovieDetails idFilm={268}></MovieDetails> */}
      {/* <Homepage></Homepage> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

//


const StyledNav = styled.nav`
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  margin-bottom: 40px;
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  margin-right: 20px;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;