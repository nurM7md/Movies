import { ALLMOVIES, movieApi } from "../types/moviesType";
import axios from "axios";

//
export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(movieApi);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=3a9754a073e16e672d7a65e17b043e74&query=${word}`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=3a9754a073e16e672d7a65e17b043e74&page=${page}`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
