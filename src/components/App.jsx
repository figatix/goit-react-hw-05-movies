import { getMovieCredits, getMovieDetails, getMovieReviews, getPopularMovies, searchMovie } from "./ApiMovies";

export const App = () => {
  getPopularMovies()
  searchMovie("batman", 1)
  getMovieDetails(268)
  getMovieCredits(268)
  getMovieReviews(268)

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
