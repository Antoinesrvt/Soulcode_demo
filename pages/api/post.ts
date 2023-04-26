import { NextApiRequest, NextApiResponse } from "next";
import type { NextApiHandler } from "next";
import payload from "payload";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      // getAll function
      const postsQuery = await payload.find({ collection: "posts" });

      if (!postsQuery.docs) {
        res.status(404).json({ message: "No posts found." });
      } else {
        res.status(200).json(postsQuery.docs);
      }
    } else if (req.method === "POST") {
      // create function
      const newPost = await payload.create({
        collection: "posts",
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

export const postHandler: NextApiHandler = handler;
