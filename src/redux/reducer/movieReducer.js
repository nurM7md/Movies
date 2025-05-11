import { ALLMOVIES } from "../types/moviesType";

const initialValue = {movies:[], pageCount:0}



export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return {
        movies: action.data,
        pageCount: action.pages,
      };
      default:
        return state
  }
};