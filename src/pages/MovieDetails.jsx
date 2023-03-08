import { getMovieDetails } from "components/ApiMovies"
import { useEffect, useState } from "react"
import { NavLink, Route, Routes, useParams } from "react-router-dom"
import { MovieCast } from "./MovieCast"
import { MovieReviews } from "./MovieReviews"


export const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState([])
  const { detailsId } = useParams();
  console.log(detailsId);

  useEffect(() => {
    if (!detailsId) return;
    const fetchFilmDetails = async (detailsId) => {
      const film = await getMovieDetails(detailsId)
      // console.log("film", film);
      setFilmDetails(film)
    }

    fetchFilmDetails(detailsId)

  }, [detailsId])

  const { genres, overview, title, poster_path, vote_average } = filmDetails;

  console.log(genres);
  return (
    <>
      <div>
        <img src={`${poster_path}`} alt={title} width="150" height="300" />
        <div>
          <h2>
            {title}
          </h2>
          <p>User Score {Math.ceil(vote_average * 10)}%</p>
        </div>

        <div>
          <h3>
            Overview
          </h3>
          <p>{overview}</p>
        </div>

        <div>
          <h3>Genres</h3>

          <p>{genres && genres.map(({ name }) => `${name} `)}</p>
        </div>

        <div>
          <p>
            Additional information
          </p>
          <ul>
            <li>
              <NavLink to="cast">
                CAST
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews">
                REVIEWS
              </NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </div>

      </div>

    </>

  )
}

// 