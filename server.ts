import express from "express";
import payload from "payload";
import PostHandler from "./pages/api/post";
const dotenv = require('dotenv')

dotenv.config();
const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
  });

  app.use("/api/post", (req, res) => PostHandler(req, res));

  app.listen(3000, async () => {
    console.log(
      "Express is now listening for incoming connections on port 3000."
    );
  });
};

start();