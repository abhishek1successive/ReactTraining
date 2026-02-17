import React, { useMemo, useState } from "react";
import NowShowingScreen from "views/nowShowing/NowShowingScreen";
import { Movie,RECOMMENDED_MOVIES } from "views/newhome/models/MovieData";


const NowShowingScreenViewModel = () => {

  const [selectedFilter, setSelectedFilter] = useState<string>("New Releases");

  const filters = ["New Releases", "Re-releases", "Hindi", "Eng"];


  const filteredMovies: Movie[] = useMemo(() => {
    switch (selectedFilter) {
      case "Re-releases":
        return RECOMMENDED_MOVIES.filter((m) => m.reRelease);
      default:
        return RECOMMENDED_MOVIES;
    }
  }, [selectedFilter]);


   const onSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
  };

  const onMoviePress = (movie: Movie) => {
    console.log("Movie clicked:", movie.title);
  };

  const onComingSoonPress = () => {
    console.log("Navigate to Coming Soon");
  };

  return (
    <NowShowingScreen
      filters={filters}
      selectedFilter={selectedFilter}
      filteredMovies={filteredMovies}
      onSelectFilter={onSelectFilter}
      onMoviePress={onMoviePress}
      onComingSoonPress={onComingSoonPress}
    />
  );
};




export default NowShowingScreenViewModel;
