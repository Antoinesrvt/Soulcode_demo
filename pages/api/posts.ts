import { NextApiRequest, NextApiResponse } from 'next';
import payload from 'payload';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
      const posts = await payload.find({ collection: 'post' });
      res.status(200).json(posts);
      fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/post`).then((res) => console.log(res))
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error });
  }
};

export default handler;
