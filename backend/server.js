const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");

app.use(cors());

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running...");
});
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log("listening to port", port);
});
