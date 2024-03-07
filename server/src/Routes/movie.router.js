import express from "express";
import { createMovie, getMovieById, updateMovie, getMovies, deleteMovie } from "../Controller/movie.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyToken, createMovie);
router.put("/:id", verifyToken, updateMovie);
router.delete("/:id", verifyToken, deleteMovie);
router.get("/", getMovies);
router.get("/:id", getMovieById);

export default router;
