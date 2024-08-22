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


const AddMovieForm: React.FC<BaseMovieProps> = (movie) => {
  const defaultValues = {
      defaultValues: {
        title: "",
      }
    };
  
    const {
      control,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm<FantasyMovie>(defaultValues);

  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [open, setOpen] = useState(false);

  const handleSnackClose = () => {
    setOpen(false);
    navigate("/movies");
  };

  const onSubmit: SubmitHandler<FantasyMovie> = (data) => {
    context.addMovie(data);
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
        <Alert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
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

       
<Box >
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