// express js main server
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import categoryRouters from "./src/Routes/Category.js";
import { connectDB } from "./src/config/connectDB.js";

const app = express();
// add view template engine
dotenv.config();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend origin
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
connectDB();
// route to test server
app.use("/categories", categoryRouters);

app.get("/", (req, res) => res.send("API Running"));
// run server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
