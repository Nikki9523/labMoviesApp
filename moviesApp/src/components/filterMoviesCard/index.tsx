import React, { ChangeEvent } from "react";
import { FilterOption, GenreData, DateData } from "../../types/interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres } from "../../api/tmdb-api";
import { getReleaseDate } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface FilterMoviesCardProps {
    onUserInput: (f: FilterOption, s: string) => void;
    genreFilter: string;
    titleFilter: string;
    dateFilter: string;
  }

  

  const FilterMoviesCard: React.FC<FilterMoviesCardProps> = ({ titleFilter, genreFilter, dateFilter, onUserInput }) => {
    const {  data: genreData, error, isLoading, isError } = useQuery<GenreData, Error>("genres",getGenres);
    const {  data: dateData } = useQuery<DateData, Error>("dates",getReleaseDate);
  
    if (isLoading) {
      return <Spinner />;
    }
    if (isError) {
      return <h1>{(error as Error).message}</h1>;
    }
    const genres = genreData?.genres || [];
    if (genres[0].name !== "All") {
      genres.unshift({ id: "0", name: "All" });
    }

    const dates = dateData?.dates || [];
  
    const handleChange = (e: SelectChangeEvent, type: FilterOption, value: string) => {
      e.preventDefault()
        onUserInput(type, value)
    };
  
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e, "title", e.target.value)
    }

    const handleDateChange = (e: SelectChangeEvent) => {
      handleChange(e, "date", e.target.value)
    };
  
    const handleGenreChange = (e: SelectChangeEvent) => {
      handleChange(e, "genre", e.target.value)
    };
  
    return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <FilterAltIcon fontSize="large" />
            Filter the movies.
          </Typography>
          <TextField
            sx={styles.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={titleFilter}
            variant="filled"
            onChange={handleTextChange}
          />

            <InputLabel id="date-label">Date</InputLabel>
            <TextField
              value={dateFilter}
              type="date"
              onChange={handleDateChange}
              
            >
            </TextField>
            
          <FormControl sx={styles.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
  }

export default FilterMoviesCard;
