import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { BaseTvSeriesProps } from "../../types/interfaces"; 
import { Link } from "react-router-dom";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface TvSeriesCardProps {
    tvSeries: BaseTvSeriesProps;
    action: (tvSeries: BaseTvSeriesProps) => React.ReactNode;
  }

  const TvSeriesCard: React.FC<TvSeriesCardProps> = ({tvSeries, action}) => {


  return (
    <Card sx={styles.card}>
    <CardHeader
      title={
        <Typography variant="h5" component="p">
          {tvSeries.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        sx={styles.media}
        image={
          tvSeries.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tvSeries.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvSeries.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action(tvSeries)}
        <Link to={`/tv-series/${tvSeries.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default TvSeriesCard;
