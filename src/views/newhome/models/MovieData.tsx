import { ImageSourcePropType } from "react-native";
import Glyphs from "assets/Glyphs";

export interface Movie {
  id: string;
  title: string;
  rating: string;
  votes: string;
  image: ImageSourcePropType;
}

export const RECOMMENDED_MOVIES: Movie[] = [
  {
    id: "1",
    title: "Border 2",
    rating: "8.6",
    votes: "82.6K+",
    image: Glyphs.Border,
  },
  {
    id: "2",
    title: "Mardaani 3",
    rating: "9.2",
    votes: "10.8K+",
    image: Glyphs.Mardaani,
  },
  {
    id: "3",
    title: "Adventure 7D",
    rating: "9.1",
    votes: "5.2K+",
    image: Glyphs.Adventure,
  },
];
