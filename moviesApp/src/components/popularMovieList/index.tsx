import React from "react";
import Grid from "@mui/material/Grid";
import { BaseMovieProps } from "../../types/interfaces";

const PopularMovieList: React.FC<BaseMovieProps> = ({movies, title, popularity}) => {
  // eslint-disable-next-line prefer-const
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
   /
    </Grid>
  ));
  return movieCards;
}

  export default PopularMovieList;