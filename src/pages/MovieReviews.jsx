import { getMovieReviews } from "components/ApiMovies"
import { useEffect, useState } from "react"

export const MovieReviews = ({ idFilm }) => {
  const [reviews, setReviews] = useState('')

  useEffect(() => {

    const fetchReviews = async () => {
      const { results } = await getMovieReviews(idFilm)
      console.log(results);
      setReviews(results)
    }

    fetchReviews()
  }, [idFilm])

  return (
    <ul>
      {
        reviews.length &&
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          )
        })
      }

    </ul>
  )


}