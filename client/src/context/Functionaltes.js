import Toast from "../shared/Toast";
import { useSelector } from "react-redux";
//check if movie is added to favorites
export const IfMovieLiked = (movie) => {
  const { likedMovies } = useSelector((state) => state.user);
  if (likedMovies) {
    return likedMovies.find((likedMovie) => likedMovie._id === movie?._id);
  }
};

//like movie functionalty
export const LikeMovie = (movie, dispatch, userInfo) => {
  if (!userInfo) {
    Toast({ message: "Please login to add to favorites", type: "ERROR" });
    return; // Exit the function if user is not logged in
  }
  // Exit the function if user is not logged in
};
