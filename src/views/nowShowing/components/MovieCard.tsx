import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../NowShowingStyle";
import { MovieModel1 } from "models/MovieModel";

interface Props {
  movie: MovieModel1;
  width: number;
  onPress?: (movie: MovieModel1) => void;
}

const MovieCard: React.FC<Props> = ({ movie, width, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress?.(movie)}>
      <View style={[styles.gridItem, { width }]}>
        <View style={styles.posterWrapper}>
          <Image
            source={{ uri: movie.Poster }}
            style={styles.poster}
          />

          {movie?.reRelease && (
            <View style={styles.reReleaseBadge}>
              <Text style={styles.reReleaseText}>RE-RELEASE</Text>
            </View>
          )}
        </View>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>★ {movie.rating}</Text>
          <Text style={styles.votes}>{movie.votes}</Text>
        </View>

        <Text style={styles.movieTitle} numberOfLines={2}>
          {movie.Title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MovieCard);
