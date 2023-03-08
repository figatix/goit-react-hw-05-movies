
import { Homepage } from "pages/Home";
// import { MovieCast } from "pages/MovieCast";
import { MovieDetails } from "pages/MovieDetails";
// import { MovieReviews } from "pages/MovieReviews";
import { Movies } from "pages/Movies";
import { NavLink, Route, Routes } from "react-router-dom";


// import { getMovieCredits, getMovieDetails, getMovieReviews, getPopularMovies, searchMovie } from "./ApiMovies";

export const App = () => {
  // console.log(getPopularMovies());
  // console.log(searchMovie("batman", 1));
  // console.log(getMovieDetails(268));
  // console.log(getMovieCredits(268));
  // console.log(getMovieReviews(268));

  return (
    <>
      <div>
        React homework template
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        {/* <NavLink to="/movies/:details">Details</NavLink> */}
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/:detailsId" element={<MovieDetails idFilm={268} />} /> */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:detailsId/*" element={<MovieDetails />} />
      </Routes>

      {/* <MovieReviews idFilm={268}></MovieReviews> */}
      {/* <MovieCast idFilm={268}></MovieCast> */}
      {/* <Movies></Movies> */}
      {/* <MovieDetails idFilm={268}></MovieDetails> */}
      {/* <Homepage></Homepage> */}
    </>
  );
};

// 