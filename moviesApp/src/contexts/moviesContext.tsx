import React, { useState, useCallback } from "react";
import { BaseMovieProps, FantasyMovie, Review } from "../types/interfaces";


interface MovieContextInterface {
    favourites: number[];
    mustWatch: number[];
    myMovies: string[];
    addToMustWatch: ((movie: BaseMovieProps) => void);
    addToFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addReview: ((movie: BaseMovieProps, review: Review) => void);
    addMovie: ((movie: FantasyMovie) => void);
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    mustWatch: [],
    myMovies: [],
    addToMustWatch: () => {},
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addReview: (movie, review) => { movie.id, review},
    addMovie: () => {}
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<Review[]>( [] );
    const [myMovies, setMyMovies] = useState<FantasyMovie[]>( [] );

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(movie.id)) {
                return [...prevMustWatch, movie.id];
            }
            return prevMustWatch;
        });
    }, []);

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

    const addReview = (movie:BaseMovieProps, review: Review) => {
        setMyReviews( {...myReviews, [movie.id]: review } )
      };

      const addMovie = (movie:FantasyMovie) => {
        setMyMovies( {...myMovies } )
      };


    return (
        <MoviesContext.Provider
            value={{
                favourites,
                mustWatch,
                addToMustWatch,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addMovie
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;