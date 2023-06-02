const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);

const conn = mongoose.connection;

conn.on("connected", () => console.log("Mongodb connected successfully"));

conn.on("error", (err) => console.log("Mongodb connection error"));

module.exports = conn;
