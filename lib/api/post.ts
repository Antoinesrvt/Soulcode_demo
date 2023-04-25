import { NextApiRequest, NextApiResponse } from 'next';
import { getAll, create } from "./controllers/post"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const posts = await getAll();
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const newPost = await create(req.body);
    res.status(201).json(newPost);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
