import { createSlice } from "@reduxjs/toolkit";
import { getCategoryApi } from "../../api/category";

const initialState = {
  categories: null,
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoriesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = null;
    },
    getCategoriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCategoryStart, getCategorySuccess, getCategoryError } =
  categorySlice.actions;

export default categorySlice.reducer;
export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoryStart());
    const data = await getCategoryApi();

    dispatch(getCategorySuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getCategoryError(error.message));
  }
};
