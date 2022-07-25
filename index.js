import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import mongoose from "mongoose";
import { Event } from "./schema.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const model = mongoose.model("events", Event);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", express.static(__dirname + '/'));

app.post("/", async (req, res) => {
    console.log(req);
  const { title } = req.body;
  console.log(title);
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