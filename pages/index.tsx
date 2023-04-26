import LatestPosts from "@/components/LatestPosts";
import TrendingPosts from "@/components/TrendingPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Post } from "@/interfaces";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
const dotenv = require("dotenv");

dotenv.config();

const IndexPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((fetchedPosts) => {
      setPosts(fetchedPosts);
    });
  }, []);
  return (
    <Layout title="Home">
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
};

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts`
  );
  const data = await response.json();
  return data.docs.map((post: Post) => ({
    title: post.title,
    date: post.date,
    author: post.author,
    media: post.media,
    content: post.content,
  }));
}

export default IndexPage;
