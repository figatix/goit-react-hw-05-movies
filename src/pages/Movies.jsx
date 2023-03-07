import { searchMovie } from "components/ApiMovies"
import { useState } from "react"
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
              {title}
            </li>
          )
        })}
      </ul>
    </>

  )
}