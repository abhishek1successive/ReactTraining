export type MovieDataModel = MovieModel[];

export interface MovieModel {
  Title: string;
  Year: string;
  Runtime: string;
  Poster?: string;
  rating?: string;
  votes?: string;
  reRelease?: boolean;
}
