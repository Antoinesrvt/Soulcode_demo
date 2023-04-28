import LatestPosts from "@/components/LatestPosts";
import TrendingPosts from "@/components/TrendingPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Post } from "@/interfaces";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const Posts: Post[] = [
  {
    title: "Mock Post 1",
    date: "28/02/2021",
    author: "John Doe",
    media: "https://via.placeholder.com/150",
    content: "This is a mock post for testing purposes.",
  },
  {
    title: "Mock Post 2",
    date: "28/02/2021",
    author: "Jane Doe",
    media: "https://via.placeholder.com/150",
    content: "This is another mock post for testing purposes.",
  },
  {
    title: "Mock Post 3",
    date: "28/02/2021",
    author: "Jane Doer",
    media: "https://via.placeholder.com/150",
    content: "This is another mock post for testing purposes.",
  },
];
const IndexPage = () => {
  //const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   fetchPosts().then((fetchedPosts) => {
  //     setPosts(fetchedPosts);
  //   });
  // }, []);
  return (
    <Layout title="Home">
      <div className="flex mx-auto text-primary-foreground py-8 px-8">
        <TrendingPosts posts={Posts} />
        <div className="w-4/12 p-6 shadow-md ml-6">
          <h3 className="text-2xl mb-4">Subscribe to AI news</h3>
          <div className="flex w-full max-w-sm items-center space-x-2 mb-8">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
          <LatestPosts posts={Posts} />
        </div>
      </div>
    </Layout>
  );
};

// async function fetchPosts(): Promise<Post[]> {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_PAYLOAD_PUBLIC_SERVER_URL}/api/post`
//   );

//   const data = await response.json();
//   return data.docs.map((post: Post) => ({
//     title: post.title,
//     date: post.date,
//     author: post.author,
//     media: post.media,
//     content: post.content,
//   }));
// }

export default IndexPage;
