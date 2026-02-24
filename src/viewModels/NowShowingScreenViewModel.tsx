import React, { useEffect, useState } from "react";
import NowShowingScreen from "views/nowShowing/NowShowingScreen";

import { MovieDataModel, MovieModel1 } from "models/MovieModel";
import { getMoviesDetail } from "controllers/movieListingController";

const NowShowingScreenViewModel = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("New Releases");
  const [mvData, setMvData] = useState<MovieDataModel>([]);

  const filters = ["New Releases", "Re-releases", "Hindi", "Eng"];

  const onSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
  };

  const onMoviePress = (movie: MovieModel1) => {
    console.log("Movie clicked:", movie);
  };

  const onComingSoonPress = () => {
    console.log("Navigate to Coming Soon");
  };

  const getMovieData = async () => {
    try {
      const res = await getMoviesDetail();
      if (res && typeof res === "object" && "data" in res) {
        setMvData(res.data?.data || []);
      }
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <NowShowingScreen
      filters={filters}
      selectedFilter={selectedFilter}
      onSelectFilter={onSelectFilter}
      onComingSoonPress={onComingSoonPress}
      onMoviePress={onMoviePress}
      mvData={mvData}
    />
  );
};

export default NowShowingScreenViewModel;
