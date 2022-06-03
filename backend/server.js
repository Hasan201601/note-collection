const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is Running");
});
app.get("/api/notes", (req, res) => {
  res.send("API is Running");
});
app.get("/api/notes/:id", (req, res) => {
  res.send("API is Running");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
