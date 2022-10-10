export interface IMoviesResponse<ResType> {
  page: number;
  results: ResType[];
  total_pages: number;
  total_results: number
}

export interface IShowsResponse<ResType> {
  page: number;
  results: ResType[];
  total_pages: number;
  total_results: number
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[]
}

export interface IShow {
  backdrop_path: string;
  first_air_date: string
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  "original_language": string;
  "original_name": string;
  "overview": string;
  "popularity": number;
  "poster_path": string;
  "vote_average": number
  "vote_count": string
}

export interface IRoute {
  closed: boolean;
  currentObservers: null,
  observers: [];
  isStopped: boolean;
  hasError: boolean;
  thrownError: null,
  _value: {
    movieId: string
  }
}

interface IGenre {
  id: number;
  name: string
}

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null,
  budget: 0,
  genres: IGenre[],
  homepage: string;
  id: number
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
}

export interface IShowDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: any[];
  episode_run_time: number[]
  first_air_date: string;
  genres: IGenre[];
  homepage: string
  id: number;
  in_production: boolean
  languages: string[];
  last_air_date: string
  last_episode_to_air: object;
  name: string
  next_episode_to_air: null,
  networks: any[]
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  seasons: any[];
  spoken_languages: any[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number
  vote_count: number
}
