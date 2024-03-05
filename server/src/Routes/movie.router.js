import express from "express";
import {createMovie, getMovieById} from "../Controller/movie.controller.js";
const router = express.Router();


router.post("/", createMovie);
router.get("/:id", getMovieById)
export default router;
