import React from "react";
import TvSeriesListPageTemplate from "../components/templateTvSeriesListPage";
//import AddToTvSeriesFavouritesIcon from "../components/cardIcons/addToTvSeriesFavourites";
import { BaseTvSeriesProps } from "../types/interfaces";
import { getAllTvSeries } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import TvSeriesFilterUI, { titleFilter, genreFilter } from "../components/tvSeriesFilterUI"; 
import { DiscoverTvSeries } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


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
    const { data, error, isLoading, isError } = useQuery<DiscoverTvSeries, Error>("discoverTvSeries", getAllTvSeries);
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

    const tvSeries = data ? data.results : [];
    const displayedTvSeries = filterFunction(tvSeries);

    return (
        <>
          <TvSeriesListPageTemplate
            title="Discover TV Series"
            tvSeries={displayedTvSeries}
            action={(tvSeries: BaseTvSeriesProps) => {
               return console.log(tvSeries.id);
            }}
          />
        </>
      );
    };

  export default TvSeriesPage;