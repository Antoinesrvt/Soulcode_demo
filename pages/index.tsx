import LatestPosts from "@/components/LatestPosts";
import TrendingPosts from "@/components/TrendingPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Post } from "@/interfaces";
import Link from "next/link";
import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import { getPosts } from "../lib/getPosts";

const posts: Post[] = [
  {
    title: "Example Post 1",
    content:
      "This is an example description for the first post. It should be a brief summary of the post content.",
    media: "https://via.placeholder.com/300x200",
    author: "John Doe",
    date: "yersterday",
  },
  {
    title: "Example Post 1",
    content:
      "This is an example description for the first post. It should be a brief summary of the post content.",
    media: "https://via.placeholder.com/300x200",
    author: "John Doe",
    date: "yersterday",
  },
  {
    title: "Example Post 1",
    content:
      "This is an example description for the first post. It should be a brief summary of the post content.",
    media: "https://via.placeholder.com/300x200",
    author: "John Doe",
    date: "yersterday",
  },
];

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex text-primary-foreground py-8 px-8">
      <TrendingPosts posts={posts} />
      <div className="container flex-1">
        <h3 className="text-2xl mb-4">Subscribe to AI news</h3>
        <div className="flex w-full max-w-sm items-center space-x-2 mb-8">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
        <LatestPosts posts={posts} />
      </div>
    </div>
  </Layout>
);

export default IndexPage;

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPosts();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
