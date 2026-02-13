import React, { memo } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Movie, RECOMMENDED_MOVIES } from "views/newhome/models/MovieData";

import { styles } from "views/newhome/NewHomeStyles";

const MovieCard = memo(({ item }: { item: Movie }) => (
  <TouchableOpacity style={styles.movieCard}>
    <View style={styles.moviePoster}>
      <Image
        source={item.image}
        style={styles.moviePosterImage}
        resizeMode="cover"
      />
    </View>

    <View style={styles.movieRating}>
      <Text style={styles.movieRatingText}>★ {item.rating}</Text>
      <Text style={styles.movieVotes}>{item.votes} votes</Text>
    </View>

    <Text style={styles.movieTitle}>{item.title}</Text>
  </TouchableOpacity>
));

const MovieHorizontalList = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended Movies</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>See All ›</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={RECOMMENDED_MOVIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard item={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.moviesScroll}
        initialNumToRender={3}
        windowSize={5}
        removeClippedSubviews
      />
    </View>
  );
};

export default memo(MovieHorizontalList);
