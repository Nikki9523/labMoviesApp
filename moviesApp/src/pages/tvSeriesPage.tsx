import React from "react";
//import TvSeriesListPageTemplate from "../components/templateTvSeriesListPage";
//import AddToTvSeriesFavouritesIcon from "../components/cardIcons/addToTvSeriesFavourites";
import { BaseTvSSeriesProps } from "../types/interfaces";
//import { getTvSeries } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
//import TvSeriesFilterUi, { titleFilter, genreFilter } from "../components/tvSeriesFilterUi"; 
//import { DiscoverTvShows } from "../types/interfaces";
import MovieFilterUI, {
    titleFilter,
    genreFilter,
  } from "../components/movieFilterUI";

import { useQuery } from "react-query";
import Spinner from "../components/spinner";

import PageTemplate from "../components/templateMovieListPage";
import { getPopularMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


const titleFiltering = {
    name: "title",
    value: "",
    condition: titleFilter,
  };
  const genreFiltering = {
    name: "genre",
    value: "0",
    condition: genreFilter,
  };
  
  const TvSeriesPage: React.FC = () => {
    const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>("popular", getPopularMovies);
    const { filterValues, setFilterValues, filterFunction } = useFiltering(
      [titleFiltering, genreFiltering]
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
  
    const changeFilterValues = (type: string, value: string) => {
      const changedFilter = { name: type, value: value };
      const updatedFilterSet =
        type === "title"
          ? [changedFilter, filterValues[1]]
          : [filterValues[0], changedFilter];
      setFilterValues(updatedFilterSet);
    };

    const movies = data ? data.results : [];
    const displayedMovies = filterFunction(movies);

    return (
        <>
          <PageTemplate
            title="Popular Movies"
            movies={displayedMovies}
            action={(movie: BaseMovieProps) => {
              return <AddToPlaylistIcon {...movie} />
            }}
          />
    <MovieFilterUI
      onFilterValuesChange={changeFilterValues}
      titleFilter={filterValues[0].value}
      genreFilter={filterValues[1].value}
    />
  </>
  );
  }

  export default TvSeriesPage;