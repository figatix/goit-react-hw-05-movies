import { getPopularMovies } from "components/ApiMovies"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const { results } = await getPopularMovies();
      setPopularMovies(results)
    }

    fetchPopularMovies();
  }, [])


  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {popularMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}