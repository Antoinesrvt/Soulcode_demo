import BigPostCard from "./Posts/BigPostCard";
import { Post } from "@/interfaces";
import PostCard from "./Posts/PostCard";
import SmallPostCard from "./Posts/SmallPostCard";

type Props = {
  posts: Post[];
};

export default function LatestPosts({ posts }: Props) {
  return (
    <div className="pt-8">
      <h3 className="text-2xl">Latest posts</h3>
      <div className="grid flex-2 mt-8 gap-4">
        {posts.map((post, index) => (
          <SmallPostCard {...post} />
        ))}
      </div>
    </div>
  );
}
