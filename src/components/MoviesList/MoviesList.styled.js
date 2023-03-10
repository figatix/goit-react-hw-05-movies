import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const StyledMoviesListItem = styled.li`
  background-color: #f7f7f7;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export const StyledTitle = styled.p`
  font-size: 20px;
  margin: 0;
`;
