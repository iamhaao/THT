import express from "express";
import {
  createMovie,
  getMovieById,
  updateMovie,
  getMovies,
  deleteMovie,
} from "../Controller/movie.controller.js";
import { addLikeMovie, getLikeMovies } from "../Controller/MovieController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyToken, createMovie);
router.put("/:id", verifyToken, updateMovie);
router.delete("/:id", verifyToken, deleteMovie);
router.get("/", getMovies);
router.get("/:id", getMovieById);
router
  .get("/like", verifyToken, getLikeMovies)
  .post("/like", verifyToken, addLikeMovie);

export default router;
