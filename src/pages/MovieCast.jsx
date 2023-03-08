import { getMovieCredits } from "components/ApiMovies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const MovieCast = () => {
  const [actors, setActors] = useState([])
  const { detailsId } = useParams();
  console.log("detailsId", detailsId);

  useEffect(() => {
    if (detailsId === null) return
    const fetchActors = async (detailsId) => {
      const { cast } = await getMovieCredits(detailsId);
      console.log(cast);
      setActors(cast)
    }

    fetchActors(detailsId)
  }, [detailsId])


  return (
    <ul>
      {
        actors.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id + character}>
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

// 