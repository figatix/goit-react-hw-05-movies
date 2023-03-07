import { getMovieCredits } from "components/ApiMovies"
import { useEffect, useState } from "react"


export const MovieCast = ({ idFilm }) => {
  const [actors, setActors] = useState([])

  useEffect(() => {
    const fetchActors = async () => {
      const { cast } = await getMovieCredits(idFilm);
      console.log(cast);
      setActors(cast)
    }

    fetchActors()
  }, [idFilm])


  return (
    <ul>
      {
        actors.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img src={profile_path} alt={name} width="100" height="200" />
              <h4>{name}</h4>
              <p>{character}</p>
            </li>
          )
        })
      }

    </ul>

  )
} 