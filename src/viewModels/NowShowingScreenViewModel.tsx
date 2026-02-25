import React, { useEffect, useState } from "react";
import NowShowingScreen from "views/nowShowing/NowShowingScreen";

import {MovieModel } from "models/MovieModel";
import { getMoviesDetail } from "controllers/movieListingController";
import { IApiResponse } from "models/IApiResponse";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store/Store";
import { setAllMovies } from "redux/actions/MovieAction";

const NowShowingScreenViewModel = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(
    (state: RootState) => state.movieReducer.movieData as MovieModel[],
  );

  const [selectedFilter, setSelectedFilter] = useState<string>("New Releases");

  const filters = ["New Releases", "Re-releases", "Hindi", "Eng"];

  const onSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
  };

  const onMoviePress = (movie: MovieModel) => {
    console.log("Movie clicked:", movie);
  };

  const onComingSoonPress = () => {
    console.log("Navigate to Coming Soon");
  };

  // const getMovieData = async () => {
  //   try {
  //     const res = await getMoviesDetail();
  //     if (res && typeof res === "object" && "data" in res) {
  //       setMvData(res.data?.data || []);
  //     }
  //   } catch (error) {
  //     console.log("API Error:", error);
  //   }
  // };

  useEffect(() => {
    const getMovieData = async () => {
      const res: IApiResponse<MovieModel> = await getMoviesDetail();
      if (res.isSuccess) dispatch(setAllMovies(res?.data?.data));
    };
    getMovieData();
  }, [dispatch]);

  // useEffect(() => {
  //   getMovieData();
  // }, []);

  return (
    <NowShowingScreen
      filters={filters}
      selectedFilter={selectedFilter}
      onSelectFilter={onSelectFilter}
      onComingSoonPress={onComingSoonPress}
      onMoviePress={onMoviePress}
      mvData={movieData}
    />
  );
};

export default NowShowingScreenViewModel;
