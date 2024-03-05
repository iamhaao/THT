import express from "express";
import {createMovie} from "../Controller/movies.controller.js";
const route = express.Router();


route.post("/", createMovie);
export default route;
