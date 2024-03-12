import { createSlice } from "@reduxjs/toolkit";
import { getCategoryApi } from "../../api/category";
import { getPackages } from "../../api/packagePremium";

const initialState = {
  packages: null,
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getPackagesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getPackagesSuccess: (state, action) => {
      state.loading = false;
      state.packages = action.payload;
      state.error = null;
    },
    getPackagesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getPackagesStart, getPackagesError, getPackagesSuccess } =
  categorySlice.actions;

export default categorySlice.reducer;
export const fetchPackages = () => async (dispatch) => {
  try {
    dispatch(getPackagesStart());
    const data = await getPackages();

    dispatch(getPackagesSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getPackagesError(error.message));
  }
};
