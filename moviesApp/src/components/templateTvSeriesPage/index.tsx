import React from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTvImages } from "../../api/tmdb-api";
import { TvSeriesImage, TvDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
};

interface TemplateTvSeriesPageProps {
    tvSeries: TvDetailsProps;
    children: React.ReactElement;
}


const TemplateTvPage: React.FC<TemplateTvSeriesPageProps> = ({tvSeries, children}) => {
    const { data, error, isLoading, isError } = useQuery<TvSeriesImage[], Error>(
        ["images", tvSeries.id],
        () => getTvImages(tvSeries.id)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error

        ).message}</h1>;
    }

    const images = data as TvSeriesImage[];

    return (
        <>

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                        <ImageList cols={1}>
                            {images.map((image: TvSeriesImage) => (
                                <ImageListItem
                                    key={image.file_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                        alt={'Image alternative'}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateTvPage;