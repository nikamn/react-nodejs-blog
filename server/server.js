const express = require("express");

const app = express();

require("dotenv").config();

const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");

app.use(express.json());

app.use("/api/v1/users", usersRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
