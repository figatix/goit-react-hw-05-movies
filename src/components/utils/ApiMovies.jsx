import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c0f6c237cceca90b2071a7042fc52b4a';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export const getPopularMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      page: 1,
    }
  })
  return data;
}


export const searchMovie = async (query, page = 1) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
      page,
    }
  })
  return data
}

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    }
  })
  return data;
}

export const getMovieCredits = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    }
  })
  return data;
}

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    }
  })
  return data;
}
