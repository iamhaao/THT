import { createSlice } from "@reduxjs/toolkit";
import { getMovieById } from "../../api/movie";

const initialState = {
  movie: null,
  loading: false,
  error: null,
};

const singlemMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {
    getSignleMovieStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getSingleMovieSuccess: (state, action) => {
      state.loading = false;
      state.movie = action.payload;
    },
    getSingleMovieError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getSignleMovieStart,
  getSingleMovieError,
  getSingleMovieSuccess,
} = singlemMovieSlice.actions;
export default singlemMovieSlice.reducer;

export const fetchSingleMovie = (movieid) => async (dispatch) => {
  try {
    dispatch(getSignleMovieStart());
    const data = await getMovieById(movieid);
    console.log(data);
    dispatch(getSingleMovieSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getSingleMovieError(error.message));
  }
};
