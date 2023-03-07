import { Homepage } from "pages/Home";
import { Movies } from "pages/Movies";
import { getMovieCredits, getMovieDetails, getMovieReviews, getPopularMovies, searchMovie } from "./ApiMovies";

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
      <Movies></Movies>
      <Homepage></Homepage>
    </>
  );
};
