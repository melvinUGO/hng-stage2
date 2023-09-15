const express = require("express");
const app = express();
const personRoute = require("./routes/person");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connect");

app.use(express.json());
app.use(cors());

app.use("/api", personRoute);

app.get("/", async (req, res) => {
  res.send("stage 2 task");
});

app.listen(5000, () => {
  try {
    connectDB(process.env.MONGODB_URI);
    console.log("server listening");
  } catch (error) {
    console.log(error);
  }
});
