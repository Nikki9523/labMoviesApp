import React from "react";
import PageTemplate from "../components/templateMoviePage";
import MovieForm from "../components/addFantasyMovieForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { BaseMovieProps, MovieDetailsProps } from "../types/interfaces";

const CreateFantasyMoviePage: React.FC = () => {


    return (
        <>
                  
                        <MovieForm />

        </>
    );
};

export default CreateFantasyMoviePage;