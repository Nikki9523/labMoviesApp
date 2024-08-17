import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import TvSeriesList from "../tvSeriesList";
import { TVSeriesListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const TvSeriesListPageTemplate: React.FC<TVSeriesListPageTemplateProps> = ({ tvSeries, title, action })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      <TvSeriesList action={action} tvSeries={tvSeries}></TvSeriesList>
      </Grid>
    </Grid>
  );
}
export default TvSeriesListPageTemplate;