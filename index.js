const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require("./db.js");
const mongoose = require("mongoose");
const { Event } = require("./schema.js");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
const port = 3000;

const model = mongoose.model("events", Event);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", express.static(__dirname + '/'));

app.post("/", async (req, res) => {
  const { title } = req.body;
  try{
    await model.create({title:title});

    res.send("done");
  }
  catch{
    res.send("aldaa");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});