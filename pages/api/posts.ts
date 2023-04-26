import { NextApiRequest, NextApiResponse } from 'next';
import payload from 'payload';
import "./payload-init"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await payload.find({ collection: 'post' });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error });
  }
};

export default handler;
