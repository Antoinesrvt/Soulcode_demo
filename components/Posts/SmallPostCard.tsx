import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Post } from "@/interfaces";

export default function SmallPostCard(props: Post) {
  return (
    <div className="grid grid-cols-2 shadow-md rounded-lg">
      <img
        className="rounded-lg object-cover mb-2 col-span-1"
        src={props.media}
        alt={props.title}
      />
      <div className="flex flex-col col-span-1 justify-center ml-8">
        <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
        <a href="#" className="text-secondary">
          Read more
        </a>
      </div>
    </div>
  );
}
