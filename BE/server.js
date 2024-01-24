// express js main server
const express = require("express");
const app = express();

// add view template engine
app.set("view engine", "pug");
// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));

// run server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// route to test server
app.get("/", (req, res) => res.send("API Running"));