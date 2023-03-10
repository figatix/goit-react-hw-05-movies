import { getPopularMovies } from "components/utils/ApiMovies"
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { StyledContainer, StyledHeading } from "./Home.styled";


const Homepage = () => {
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

      <MoviesList request={popularMovies} />
    </StyledContainer>
  )
}

export default Homepage;

// 

