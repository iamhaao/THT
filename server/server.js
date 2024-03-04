// express js main server
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/connectDB.js";

const app = express();
// add view template engine
dotenv.config();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

connectDB();
// run server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// route to test server
app.get("/", (req, res) => res.send("API Running"));
