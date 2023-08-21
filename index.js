const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

//built-in middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("E-Mart server is running...");
});

app.listen(port, () => {
  console.log(`The server listening on port ${port}`);
});
