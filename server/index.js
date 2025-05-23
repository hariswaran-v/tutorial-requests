//server router
import express from "express";
import mainRouter from "./routers/index.router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const server = express();
const SERVER_PORT = 3000;
dotenv.config();

server.use(express.json());
server.use(cors());

server.use("/", mainRouter);

//invalid path specified show this
server.use((req, res) => {
  return res.status(404);
});

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on: http://localhost:${SERVER_PORT}`);
});

//mongoose connect
if (process.env.MONGODB_URL) {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connection successfully! established");
  } catch (error) {
    console.log("Error FROM mongoDB", error);
  }
} else {
  console.error("ENV is not set");
}
