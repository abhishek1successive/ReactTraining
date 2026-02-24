export type MovieDataModel = MovieModel1[];

export interface MovieModel1 {
  Title: string;
  Year: string;
  Runtime: string;
  Poster?: string;
  rating?: string;
  votes?: string;
  reRelease?: boolean;
}

export interface MovieModel {
  isSuccess: boolean;
  data: MovieDataModel;
}
