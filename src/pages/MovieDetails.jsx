import { getMovieDetails, IMAGE_BASE_URL } from "components/ApiMovies"
import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"


import styled from "styled-components";
import { toast } from "react-toastify"


const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState([])
  const { detailsId } = useParams();
  const location = useLocation()
  console.log(detailsId);


  useEffect(() => {
    if (!detailsId) return;
    const fetchFilmDetails = async (detailsId) => {
      try {
        const film = await getMovieDetails(detailsId)
        setFilmDetails(film)

      } catch (err) {
        console.log(err);
        toast.error(err.message)
      }
    }

    fetchFilmDetails(detailsId)
  }, [detailsId])

  const { genres, overview, title, poster_path, vote_average } = filmDetails;

  if (!poster_path) return null;

  console.log(filmDetails);
  console.log(genres);
  console.log("location", location);

  const goBack = location.state?.from ?? '/movies';

  return (
    <MovieDetailsContainer>

      <Link to={goBack}>
        BACK
      </Link>

      <MainDetailsSection>
        <PosterImg src={`${IMAGE_BASE_URL}w500/${poster_path}`} alt={title} width="500" />
        <div>
          <div>
            <MovieTitle>{title}</MovieTitle>
            <p>User Score {Math.ceil(vote_average * 10)}%</p>
          </div>

          <OverviewContainer>
            <OverviewTitle>Overview</OverviewTitle>
            <p>{overview}</p>
          </OverviewContainer>

          <GenresContainer>
            <GenresTitle>Genres</GenresTitle>
            <p>{genres && genres.map(({ name }) => `${name} `)}</p>
          </GenresContainer>
        </div>
      </MainDetailsSection>

      <AdditionalInfoContainer>
        <InfoTitle>Additional information</InfoTitle>
        <ul>
          <li>
            <StyledNavLink to="cast">CAST</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews">REVIEWS</StyledNavLink>
          </li>
        </ul>
        <Outlet />
      </AdditionalInfoContainer>


      {/* <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes> */}
    </MovieDetailsContainer>
  )
}

export default MovieDetails;

//

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
      flex-direction: column;
  gap: 20px;
`;

const MainDetailsSection = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 30px;
`;

const PosterImg = styled.img`
  width: 300px;
  /* height: 300px; */
`;

const MovieTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

const OverviewContainer = styled.div`
  margin-top: 20px;
`;

const OverviewTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const GenresContainer = styled.div`
  margin-top: 20px;
`;

const GenresTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AdditionalInfoContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;
`;

const InfoTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  margin-right: 20px;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;
