import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice/user.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoryReducer from "./categorySlice/category.slice";
import packageReducer from "./packageSlice/packageSlice";
import movieReducer from "./movieSlice/movieSlice";

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  package: packageReducer,
  movie: movieReducer,
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
