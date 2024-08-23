import React, { useContext, useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { BaseMovieProps, FantasyMovie } from "../../types/interfaces";
import styles from "./styles";
import MenuItem from "@mui/material/MenuItem";
import genres from "./genreCategories";

const AddMovieForm: React.FC<BaseMovieProps> = () => {
  const defaultValues = {
    defaultValues: {
      title: "My Fantasy Movie Title",
      overview: "My fantasy movie description",
      runtime: 90
    },
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FantasyMovie>(defaultValues);

  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [genre, setGenre] = useState('');
  const [open, setOpen] = useState(false);  //NEW


  const handleGenreChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handleSnackClose = () => {
    setOpen(false);
    navigate("/movies");
  };
  
  const onSubmit: SubmitHandler<FantasyMovie> = (movie) => {
    context.addMovie(movie);
    console.log(movie);
    movie.genre = genre;
    setOpen(true);
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Add your dream Movie!
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert severity="success" variant="filled" onClose={handleSnackClose}>
          <Typography variant="h4">
            Thank you for creating your fantasy movie
          </Typography>
        </Alert>
      </Snackbar>
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Movie Title is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="title"
              label="Movie Title"
              autoFocus
            />
          )}
        />

<Controller
          name="overview"
          control={control}
          rules={{ required: "Movie overview is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="overview"
              label="Movie overview"
              multiline
              minRows={10}
            />
          )}
        />

        
<Controller
          name="runtime"
          control={control}
          rules={{ required: "runtime is requred" }}
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="runtime"
              type="number"
              label="runtime in minutes"
            />
          )}
        />

<Controller
          name="release_date"
          control={control}
          rules={{ required: "release date is requred" }}
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="release-date"
              type="date"
              label="release date"
            />
          )}
        />

<Controller
              control={control}
              name="genre"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="select-genre"
                  select
                  variant="outlined"
                  label="Select Main Genre"
                  value={genres}
                  onChange={handleGenreChange}
                  helperText="Add the main genre of your fantasy movie"
                >
                  {genres.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Controller
          name="production_countries"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              onChange={onChange}
              value={value}
              id="production-countries"
              label="Production Countries"
              autoFocus
            />
          )}
        />

        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                title: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddMovieForm;
