import { MovieModel1 } from "models/MovieModel";
import { IBaseReducerInterface } from "./IBaseReducerInterface";
import { SET_MOVIES } from "redux/actionConstants";

const INITIAL_STATE = {
  movieData: [],
};

interface IMovieReducer {
  movieData: MovieModel1;
}
const movieReducer = (
  state = INITIAL_STATE,
  action: IBaseReducerInterface<IMovieReducer>,
) => {
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        movieData: action.payload,
      };
    }

    default:
      return state;
  }
};
export default movieReducer;