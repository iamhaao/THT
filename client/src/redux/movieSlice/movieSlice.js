import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesApi } from "../../api/movie";

const initialState = {
  movies: null,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie", // Corrected slice name
  initialState,
  reducers: {
    getMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    getMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getMoviesStart, getMoviesSuccess, getMoviesError } =
  movieSlice.actions;

export default movieSlice.reducer;
// Async action creator to fetch movies
export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(getMoviesStart());
    const data = await fetchMoviesApi();

    dispatch(getMoviesSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getMoviesError(error.message));
  }
};
