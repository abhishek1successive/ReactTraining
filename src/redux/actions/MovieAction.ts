import { IApiResponse } from "models/IApiResponse";
import { MovieDataModel } from "models/MovieModel";
import { SET_MOVIES } from "redux/actionConstants";

export const setAllMovies = (movies: IApiResponse<MovieDataModel>) => {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
};
