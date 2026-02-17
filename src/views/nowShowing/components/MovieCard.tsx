import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../NowShowingStyle";
import { Movie } from "views/newhome/models/MovieData";

interface Props {
  movie: Movie;
  width: number;
  onPress: (movie: Movie) => void;
}

const MovieCard: React.FC<Props> = ({ movie, width, onPress }) => {
  return (
    <View style={[styles.gridItem, { width }]}>
      <TouchableOpacity onPress={() => onPress(movie)} style={styles.movieCard}>
        <View style={styles.posterWrapper}>
          <Image source={movie.image} style={styles.poster} />

          {movie.reRelease && (
            <View style={styles.reReleaseBadge}>
              <Text style={styles.reReleaseText}>RE-RELEASE</Text>
            </View>
          )}
        </View>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>★ {movie.rating}</Text>
          <Text style={styles.votes}>{movie.votes} votes</Text>
        </View>

        <Text style={styles.movieTitle} numberOfLines={2}>
          {movie.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(MovieCard);
