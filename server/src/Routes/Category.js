import express from "express";
import { getCategories } from "../Controller/Category.js";
const route = express.Router();

route.get("/", getCategories);

export default route;
