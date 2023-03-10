import { getMovieDetails, IMAGE_BASE_URL } from "components/utils/ApiMovies"
import { Suspense, useEffect, useState } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"

import { toast } from "react-toastify"
import { Loader } from "components/Loader";
import { AdditionalInfoContainer, GenresContainer, GenresTitle, InfoTitle, MainDetailsSection, MovieDetailsContainer, MovieTitle, OverviewContainer, OverviewTitle, PosterImg, StyledLink, StyledNavLink } from "./MovieDetails.styled";


const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState([])
  const { detailsId } = useParams();
  const location = useLocation()

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

  const profileImageUrl = poster_path
    ? `${IMAGE_BASE_URL}w500${poster_path}`
    : 'https://via.placeholder.com/300x425?text=No+Image';

  const goBack = location.state?.from ?? '/movies';

  return (
    <MovieDetailsContainer>

      <StyledLink to={goBack}>
        BACK
      </StyledLink>

      <MainDetailsSection>

        <PosterImg src={profileImageUrl} alt={title} width="500" />

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
            <StyledNavLink
              to="cast"
              state={{ from: location.state?.from }}
            >
              CAST
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews"
              state={{ from: location.state?.from }}
            >REVIEWS</StyledNavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>

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
