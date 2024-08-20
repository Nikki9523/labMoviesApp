export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    genre_ids?: number[];
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
  }

  export type FilterOption = "title" | "genre";

  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    selectFavourite: (movieId: number) => void;
  }

  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
      }[];
  }

  export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
  }

  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  
  export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
  }

  export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }

  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
  }
  export interface Review{
    id: string;
    content: string
    author: string
  }

  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }
  
  export interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
  }

  export interface BaseTvSeriesProps {
    name: string;
    id: number;
    overview: string;
    poster_path?: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    genre_ids?: number[];
  }

  export interface BaseTvSeriesListProps {
    tvSeries: BaseTvSeriesProps[];
    action: (tvSeries: BaseTvSeriesProps) => React.ReactNode;
  }

  export interface TVSeriesListPageTemplateProps extends BaseTvSeriesListProps {
    title: string;
  }

  export interface TvDetailsProps extends BaseTvSeriesProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
      }[];

      
  }

  export interface TvSeriesProps {
    tvSeries: TvDetailsProps;
    images: TvSeriesImage[];
  }

  export interface TvSeriesImage {
    file_path: string;
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }


  export interface DiscoverTvSeries {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseTvSeriesProps[];
  }