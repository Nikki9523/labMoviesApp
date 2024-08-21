import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateTvSeriesPage";
import { getTvSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { TvDetailsProps } from "../types/interfaces";
import TvSeriesDetails from "../components/tvSeriesDetails";
import StandardImageList from "../components/imageGallery";

const TvSeriesDetailsPage: React.FC= () => {
    const { id } = useParams();
    const { data: tvSeries, error, isLoading, isError } = useQuery<TvDetailsProps, Error>(
      ["tvSeries", id],
      ()=> getTvSeries(id||"")
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{(error as Error).message}</h1>;
    }
  
    return (
    <>
      {tvSeries ? (
        <>
        <PageTemplate tvSeries ={tvSeries}>
        <div className="container">
        <TvSeriesDetails
           {...tvSeries} /> 
           <StandardImageList></StandardImageList>
           </div>
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for tv series details</p>
    )}
    </>
  );
};

export default TvSeriesDetailsPage;