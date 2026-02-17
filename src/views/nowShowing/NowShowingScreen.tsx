import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./NowShowingStyle";
import { Movie } from "views/newhome/models/MovieData";
import ComingSoonBanner from "./components/ComingSoonBanner";
import FilterChips from "./components/FilterChips";
import MovieCard from "./components/MovieCard";

interface NowShowingProps {
  filters: string[];
  selectedFilter: string;
  filteredMovies: Movie[];
  onSelectFilter: (filter: string) => void;
  onMoviePress: (movie: Movie) => void;
  onComingSoonPress: () => void;
}

const NowShowingScreen = (pros: NowShowingProps) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 48) / 2;

  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Promotional Banner */}
        <View style={styles.bannerWrapper}>
          <View style={styles.banner}>
            <View style={styles.bannerLeft}>
              <Text style={styles.bannerSmall}>
                120+ MOVIES EARLY BIRD OFFER
              </Text>
              <Text style={styles.bannerSub}>EXCLUSIVE LIMITED TIME DEAL</Text>
              <TouchableOpacity style={styles.codeBtn}>
                <Text style={styles.codeText}>USE CODE: </Text>
                <Text style={styles.codeHighlight}>RL26</Text>
              </TouchableOpacity>
              <Text style={styles.bannerBook}>BOOK ON: bookmyshow</Text>
              <Text style={styles.bannerTc}>T&C APPLY</Text>
            </View>
            <View style={styles.bannerRight}>
              <Text style={styles.bannerRightTitle}>
                RED LORRY{"\n"}FILM FESTIVAL
              </Text>
              <Text style={styles.bannerRightSub}>12-15 MAR 2026, MUMBAI</Text>
            </View>
          </View>
        </View>

        {/* Filters */}
        <FilterChips
          filters={pros.filters}
          selectedFilter={pros.selectedFilter}
          onSelect={pros.onSelectFilter}
        />

        {/* Coming Soon */}
        <ComingSoonBanner onPress={() => {}}></ComingSoonBanner>

        {/* Movie Grid */}
        <View style={styles.grid}>
          {pros.filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              width={cardWidth}
              onPress={pros.onMoviePress}
            />
          ))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NowShowingScreen;
