import express from "express";
import {createMovie, getMovieById,updateMovie} from "../Controller/movie.controller.js";
const router = express.Router();


router.post("/", createMovie);
router.get("/:id", getMovieById)
router.put("/:id", updateMovie)


export default router;
