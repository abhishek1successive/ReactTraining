import { ImageSourcePropType } from "react-native";
import Glyphs from "assets/Glyphs";

export interface Movie {
  id: string;
  title: string;
  rating: string;
  votes: string;
  image: ImageSourcePropType;
  reRelease: boolean;
}

export const RECOMMENDED_MOVIES: Movie[] = [
  {
    id: "1",
    title: "Border 2",
    rating: "8.6",
    votes: "82.7K+",
    image: Glyphs.Border,
    reRelease: false,
  },
  {
    id: "2",
    title: "Mardaani 3",
    rating: "9.2",
    votes: "10.9K+",
    image: Glyphs.Mardaani,
    reRelease: false,
  },
  {
    id: "3",
    title: "Adventure of Jetcat 7D - Combo",
    rating: "9.1",
    votes: "5.2K+",
    image: Glyphs.Adventure,
    reRelease: true,
  },
  {
    id: "4",
    title: "Adventure of Iceberg 7D - Combo",
    rating: "8.8",
    votes: "3.1K+",
    image: Glyphs.Adventure,
    reRelease: true,
  },
  {
    id: "5",
    title: "Dhurandhar",
    rating: "8.5",
    votes: "12.4K+",
    image: Glyphs.Adventure,
    reRelease: false,
  },
  {
    id: "6",
    title: "Romeo",
    rating: "8.2",
    votes: "2.8K+",
    image: Glyphs.Adventure,
    reRelease: false,
  },
];
