import { searchMovie } from "components/utils/ApiMovies"
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchFilms } from "components/SearchFilms/SearchFilms";
import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';

import { StyledMoviesContainer } from "./Movies.styled";

//  pagination
const requestPage = 1;
// 
const Movies = () => {
  const [reqMovies, setReqMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryParams = searchParams.get('query') ?? ''

  useEffect(() => {
    if (!queryParams) return
    const fn = async (q) => {
      try {
        const { results } = await searchMovie(q, requestPage);
        setReqMovies(results)

        if (results.length === 0) {
          toast.info('We can`t find anything. Please, try again')
          return
        }
        toast.success(`We found ${results.length} movies!`)
      } catch (err) {
        console.log(err);
        toast.error(err.message)
      }
    }
    fn(queryParams)
  }, [queryParams])

  const onInputSubmit = async (value) => {
    setSearchParams({ query: value })
  }

  return (
    <StyledMoviesContainer>
      <SearchFilms
        onSubmitFn={onInputSubmit}
        lastQuery={queryParams}
      />
      <MoviesList
        request={reqMovies}
      />
    </StyledMoviesContainer>
  );
}

export default Movies;

