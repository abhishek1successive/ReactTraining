import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./NowShowingStyle";

import ComingSoonBanner from "./components/ComingSoonBanner";
import FilterChips from "./components/FilterChips";

import { MovieDataModel, MovieModel1 } from "models/MovieModel";
import MovieCard from "./components/MovieCard";

interface NowShowingProps {
  filters: string[];
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
  onMoviePress: (movie: MovieModel1) => void;
  onComingSoonPress: () => void;
  mvData: MovieDataModel;
}

const NowShowingScreen = (props: NowShowingProps) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 48) / 2;

  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      <FlatList
        data={props.mvData || []}
        keyExtractor={(item, index) => item?.Title + index}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 16,
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 10,
        }}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            width={cardWidth}
            onPress={props.onMoviePress}
          />
        )}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={5}
        removeClippedSubviews
        ListHeaderComponent={
          <>
            {/* Banner */}
            <View style={styles.bannerWrapper}>
              <View style={styles.banner}>
                <View style={styles.bannerLeft}>
                  <Text style={styles.bannerSmall}>
                    120+ MOVIES EARLY BIRD OFFER
                  </Text>
                  <Text style={styles.bannerSub}>
                    EXCLUSIVE LIMITED TIME DEAL
                  </Text>

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
                  <Text style={styles.bannerRightSub}>
                    12-15 MAR 2026, MUMBAI
                  </Text>
                </View>
              </View>
            </View>

            {/* Filters */}
            <FilterChips
              filters={props.filters}
              selectedFilter={props.selectedFilter}
              onSelect={props.onSelectFilter}
            />

            {/* Coming Soon */}
            <ComingSoonBanner onPress={props.onComingSoonPress} />
          </>
        }
        ListFooterComponent={null}
      />
    </SafeAreaView>
  );
};

export default NowShowingScreen;
