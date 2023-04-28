import BigPostCard from "./Posts/BigPostCard";
import { Post } from "@/interfaces";
import PostCard from "./Posts/PostCard";

type Props = {
  posts: Post[];
};

export default function TrendingPosts({ posts }: Props) {
  return (
    <div className="w-8/12 px-14 py-6 rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-8">Trending Posts</h1>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 grid-areas-layout">
        {posts.map((post, index) =>
          index === 0 ? <BigPostCard {...post} /> : <PostCard {...post} />
        )}
      </div>
    </div>
  );
}
