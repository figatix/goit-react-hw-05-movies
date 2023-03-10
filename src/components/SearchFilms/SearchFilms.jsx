
import PropTypes from 'prop-types'

import { useState } from "react"
import { toast } from "react-toastify";
import { StyledMoviesButton, StyledMoviesForm, StyledMoviesInput } from "./SearchFilms.styled";


export const SearchFilms = ({ onSubmitFn, lastQuery }) => {
  const [query, setQuery] = useState(lastQuery ?? '')

  const onInputChange = (e) => {
    setQuery(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const value = query.toLowerCase().trim()
    if (!value) {
      toast.warn('Empty input!');
      return
    }

    onSubmitFn(value)
  }

  return (
    <StyledMoviesForm onSubmit={onSubmit}>
      <label>
        <StyledMoviesInput
          type="text"
          name="inputQuery"
          value={query}
          onChange={onInputChange}
        />
      </label>

      <StyledMoviesButton type="submit">Search</StyledMoviesButton>
    </StyledMoviesForm>

  );
}


SearchFilms.propTypes = {
  lastQuery: PropTypes.string.isRequired,
  onSubmitFn: PropTypes.func
}

