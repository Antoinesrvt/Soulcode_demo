import express from "express";
import payload from "payload";
import { postHandler } from "./pages/api/posts";
const dotenv = require('dotenv')

dotenv.config();
const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
  });

  app.use("/api/posts", (req, res) => postHandler(req, res));

  app.listen(3000, async () => {
    console.log(
      "Express is now listening for incoming connections on port 3000."
    );
  });
};

start();