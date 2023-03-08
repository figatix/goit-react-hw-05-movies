import { searchMovie } from "components/ApiMovies"
import { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import styled from "styled-components";

//  pagination
const requestPage = 1;
// 
export const Movies = () => {
  const [query, setQuery] = useState('')
  const [reqMovies, setReqMovies] = useState([])

  const onInputChange = (e) => {
    setQuery(e.target.value)
  }

  const onInputSubmit = async (e) => {
    e.preventDefault()
    const value = query.toLowerCase().trim()
    console.log(value);
    if (!value) {
      console.log("UPS");
      toast.warn('Empty input!');
      return
    }

    try {
      const requestFilm = await searchMovie(query, requestPage);
      setReqMovies(requestFilm.results)
      if (requestFilm.results.length === 0) {
        toast.info('We can`t find anything. Please, try again')
        return
      }
      toast.success(`We found ${requestFilm.results.length} movies!`)

    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  }

  // console.log("🚀 ~ file: Movies.jsx:51 ~ Movies ~ reqMovies:", reqMovies)

  return (
    <StyledMoviesContainer>
      <StyledMoviesForm onSubmit={onInputSubmit}>
        <label>
          <StyledMoviesInput
            type="text"
            name="inputQuery"
            value={query}
            onChange={onInputChange}
          />
        </label>

        <StyledMoviesButton type="submit">Search</StyledMoviesButton>
      </StyledMoviesForm>
      <StyledMoviesList>
        {reqMovies.map(({ id, title }) => {
          return (
            <StyledMoviesListItem key={id}>
              <StyledLink to={`/movies/${id}`}>
                <StyledTitle>{title}</StyledTitle>
              </StyledLink>
            </StyledMoviesListItem>
          );
        })}
      </StyledMoviesList>
    </StyledMoviesContainer>
  );
}


// 

const StyledMoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  
`;

const StyledMoviesForm = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const StyledMoviesInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const StyledMoviesButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

const StyledMoviesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width:100%;
`;

const StyledMoviesListItem = styled.li`
  background-color: #f7f7f7;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const StyledTitle = styled.p`
  font-size: 20px;
  margin: 0;
`;