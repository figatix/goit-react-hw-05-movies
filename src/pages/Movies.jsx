import { searchMovie } from "components/ApiMovies"
import { useState } from "react"
import { Link } from "react-router-dom";
//  pagination
const requestPage = 1;
// 
export const Movies = () => {
  const [query, setQuery] = useState('')
  const [reqMovies, setReqMovies] = useState([])

  const onInputChange = (e) => {
    setQuery(e.target.value)
  }

  const onInputSubmit = async (e) => {
    e.preventDefault()
    const requestFilm = await searchMovie(query, requestPage);
    setReqMovies(requestFilm.results)
  }

  console.log("🚀 ~ file: Movies.jsx:51 ~ Movies ~ reqMovies:", reqMovies)

  return (
    <>
      <form onSubmit={onInputSubmit}>
        <label>
          <input
            type="text"
            name="inputQuery"
            value={query}
            onChange={onInputChange}
          />
        </label>

        <button type="submit" >
          Search
        </button>
      </form>
      <ul>
        {reqMovies.map(({ id, title }) => {
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

