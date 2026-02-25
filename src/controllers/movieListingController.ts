import APIConstants from "core/ApiConstants";
import { MovieDataModel } from "models/MovieModel";
import { sendGetRequest } from "services/network/Network";
import LocalString from "shared/localization/localEnums";

export const getMoviesDetail = async () => {
  try {
    const response = await sendGetRequest<MovieDataModel>(APIConstants.Getmovie);
    if (response.isSuccess) {
      return response;
    } else return response.errors;
  } catch (e) {
    return LocalString.serverError;
  }
};
