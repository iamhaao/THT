import moviesSchema from "../models/movie.model.js";
import User from "../models/User.js";

export const addLikeMovie = async (req, res) => {
  try {
    const { movieId } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    const movie = await moviesSchema.findById(movieId);
    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
    }
    if (user.favoriteMovies.includes(movieId)) {
      res.status(400).json({ message: "Movie already liked" });
    }
    user.favoriteMovies.push(movieId);
    await user.save();
    res.status(200).json({ message: "Liked movie successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLikeMovies = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favoriteMovies");
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.favoriteMovies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
