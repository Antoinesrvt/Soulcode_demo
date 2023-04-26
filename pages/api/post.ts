import { NextApiRequest, NextApiResponse } from "next";
import payload from "payload";

export default async function PostHandler(req: NextApiRequest, res: NextApiResponse) {

console.log("Request method:", req.method);
console.log("Request body:", req.body);

  try {
    if (req.method === "GET") {
      // getAll function
      const postsQuery = await payload.find({ collection: "post" });

      if (!postsQuery.docs) {
        res.status(404).json({ message: "No posts found." });
      } else {
        console.log("Response data:", postsQuery.docs);
        res.status(200).json(postsQuery.docs);
      }
    } else if (req.method === "POST") {
      // create function
      const newPost = await payload.create({
        collection: "post",
        data: req.body,
      });

      if (!newPost) {
        res.status(500).json({ message: "Error creating the post." });
      } else {
        res.status(201).json(newPost);
      }
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error.", error });
  }
};

