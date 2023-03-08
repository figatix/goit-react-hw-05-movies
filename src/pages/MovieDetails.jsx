import { getMovieDetails, IMAGE_BASE_URL } from "components/ApiMovies"
import { useEffect, useState } from "react"
import { NavLink, Route, Routes, useParams } from "react-router-dom"
import { MovieCast } from "./MovieCast"
import { MovieReviews } from "./MovieReviews"

import styled from "styled-components";
import { toast } from "react-toastify"


export const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState([])
  const { detailsId } = useParams();
  console.log(detailsId);

  useEffect(() => {
    if (!detailsId) return;
    const fetchFilmDetails = async (detailsId) => {

      try {
        const film = await getMovieDetails(detailsId)
        // console.log("film", film);
        setFilmDetails(film)

      } catch (err) {
        console.log(err);
        toast.error(err.message)
      }
    }

    fetchFilmDetails(detailsId)

  }, [detailsId])

  const { genres, overview, title, poster_path, vote_average } = filmDetails;

  // console.log(genres);
  return (
    <StyledMovieDetailsContainer>

      <StyledMainDetailsSection>
        <StyledPosterImg src={`${IMAGE_BASE_URL}w500${poster_path}`} alt={title} width="500" />
        <div>
          <div>
            <StyledMovieTitle>{title}</StyledMovieTitle>
            <p>User Score {Math.ceil(vote_average * 10)}%</p>
          </div>

          <StyledOverviewContainer>
            <StyledOverviewTitle>Overview</StyledOverviewTitle>
            <p>{overview}</p>
          </StyledOverviewContainer>

          <StyledGenresContainer>
            <StyledGenresTitle>Genres</StyledGenresTitle>
            <p>{genres && genres.map(({ name }) => `${name} `)}</p>
          </StyledGenresContainer>
        </div>
      </StyledMainDetailsSection>

      <StyledAdditionalInfoContainer>
        <StyledInfoTitle>Additional information</StyledInfoTitle>
        <ul>
          <li>
            <StyledNavLink to="cast">CAST</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews">REVIEWS</StyledNavLink>
          </li>
        </ul>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </StyledAdditionalInfoContainer>
    </StyledMovieDetailsContainer>
  )
}

//

const StyledMovieDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
      flex-direction: column;
  gap: 20px;
`;

const StyledMainDetailsSection = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 30px;
`;

const StyledPosterImg = styled.img`
  width: 300px;
  /* height: 300px; */
`;

const StyledMovieTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

const StyledOverviewContainer = styled.div`
  margin-top: 20px;
`;

const StyledOverviewTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledGenresContainer = styled.div`
  margin-top: 20px;
`;

const StyledGenresTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledAdditionalInfoContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;
`;

const StyledInfoTitle = styled.p`
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
