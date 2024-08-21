import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { TvDetailsProps } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const TvSeriesDetails: React.FC<TvDetailsProps> = (tvSeries) => {

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {tvSeries.overview}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {tvSeries.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} />
                    </li>
                ))}

            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Chip
                    icon={<StarRate />}
                    label={`${tvSeries.vote_average}`}
                />
                <Chip label={`First aired: ${tvSeries.first_air_date}`} />
            </Paper>
            <Fab
                color="secondary"
                variant="extended"
                sx={styles.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab>
        </>
    );
};
export default TvSeriesDetails;