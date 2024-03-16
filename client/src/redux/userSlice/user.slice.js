import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, getFavorite } from "../../api/movie";

const initialState = {
  currentUser: null,
  likedMovies: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    fetchFavoriteSuccess: (state, action) => {
      state.likedMovies = action.payload;
    },
    addFavorites: (state, action) => {
      state.likedMovies.push(action.payload);
    },
  },
});
export const {
  signInSuccess,
  updateUserSuccess,
  addFavorites,
  fetchFavoriteSuccess,
} = userSlice.actions;
export default userSlice.reducer;
export const fetchFavorite = () => async (dispatch) => {
  const data = await getFavorite();
  dispatch(fetchFavoriteSuccess(data));
};
