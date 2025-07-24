const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // to parse JSON in POST requests if needed

const weatherRoute = require("./routes/weather");
app.use("/api/weather", weatherRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




