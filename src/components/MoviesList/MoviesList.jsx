
import PropTypes from 'prop-types'

import { StyledLink } from "pages/MovieDetails/MovieDetails.styled";
import { useLocation } from "react-router-dom";
import { StyledMoviesList, StyledMoviesListItem, StyledTitle } from "./MoviesList.styled";


export const MoviesList = ({ request }) => {
  const location = useLocation()

  return (
    <StyledMoviesList>
      {request.map(({ id, title }) => {
        return (
          <StyledMoviesListItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <StyledTitle>{title}</StyledTitle>
            </StyledLink>
          </StyledMoviesListItem>
        );
      })}
    </StyledMoviesList>
  );
}

MoviesList.propTypes = {
  request: PropTypes.arrayOf(PropTypes.shape()).isRequired
}

// 

