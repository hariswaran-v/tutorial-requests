//server router
import express from "express";
import mainRouter from "./routers/main.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const server = express();
const SERVER_PORT = 3000;
dotenv.config();

server.use(express.json());

server.use("/", mainRouter);

//invalid path specified show this
server.use((req, res) => {
  return res.json({
    success: false,
    message: "Empty here! Go and get a life!",
  });
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
