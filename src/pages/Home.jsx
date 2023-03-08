import { getPopularMovies } from "components/ApiMovies"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";



export const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {

    const fetchPopularMovies = async () => {

      try {
        const { results } = await getPopularMovies();
        setPopularMovies(results)
      } catch (err) {
        console.log(err);
        toast.error(err.message)
      }
    }

    fetchPopularMovies();
  }, [])


  return (
    <StyledContainer>
      <StyledHeading>Trending today</StyledHeading>
      <StyledList>
        {popularMovies.map(({ id, title }) => {
          return (
            <StyledListItem key={id}>
              <StyledLink to={`/movies/${id}`}>
                <StyledTitle>{title}</StyledTitle>
              </StyledLink>
            </StyledListItem>
          )
        })}
      </StyledList>
    </StyledContainer>
  )
}

// 

const StyledContainer = styled.div`
  margin: 0 auto;
  /* max-width: 800px; */
  padding: 0 20px;
`;

const StyledHeading = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 40px 0;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
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