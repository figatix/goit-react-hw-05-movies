import { getMovieReviews } from "components/ApiMovies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MovieReviews = () => {
  const [reviews, setReviews] = useState('')
  const { detailsId } = useParams();

  useEffect(() => {

    const fetchReviews = async (idFilm) => {
      const { results } = await getMovieReviews(idFilm)
      console.log(results);
      setReviews(results)
    }

    fetchReviews(detailsId)
  }, [detailsId])

  const isReviews = reviews.length !== 0

  return (
    <ul>
      {
        isReviews ?
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            )
          }) :
          `We don't have any reviews for this movie.`
      }

    </ul>
  )
}


// 