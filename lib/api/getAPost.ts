import { NextApiRequest, NextApiResponse } from "next";
import payload from "payload";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  try {
    const pageQuery = await payload.find({
      collection: "post",
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    if (!pageQuery.docs[0]) {
      res.status(404).json({ message: "Post not found." });
    } else {
      res.status(200).json(pageQuery.docs[0]);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

export default handler;
