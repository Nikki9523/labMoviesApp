import React from "react";
import Grid from "@mui/material/Grid";
import { BaseTvSeriesListProps } from "../../types/interfaces";
import TvSeries from "../tvSeriesCard/";

const TvSeriesList: React.FC<BaseTvSeriesListProps> = ({tvSeries, action}) => {
  // eslint-disable-next-line prefer-const
  let tvSeriesCards = tvSeries.map((tvSeries) => (
    <Grid key={tvSeries.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvSeries key={tvSeries.id} tvSeries={tvSeries} action={action}/>
    </Grid>
  ));
  return tvSeriesCards;
}

  export default TvSeriesList;