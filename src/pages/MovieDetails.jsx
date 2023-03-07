import { getMovieDetails } from "components/ApiMovies"
import { useEffect, useState } from "react"


export const MovieDetails = ({ idFilm }) => {
  const [filmDetails, setFilmDetails] = useState([])

  useEffect(() => {

    const fetchFilmDetails = async () => {
      const film = await getMovieDetails(idFilm)
      console.log("film", film);
      setFilmDetails(film)
    }

    fetchFilmDetails()

  }, [idFilm])

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
            <li>CAST</li>
            <li>REVIEWS</li>
          </ul>
        </div>

      </div>

    </>

  )


}