const express = require("express");

const cors = require("cors");

const app = express();

require("dotenv").config();

const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");

app.use(cors());

app.use(express.json());

app.use("/api/v1/users", usersRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
