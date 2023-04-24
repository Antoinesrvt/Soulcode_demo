import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Post } from "@/interfaces";

export default function SmallPostCard(props: Post) {
  return (
    <div className="grid grid-cols-2 shadow-md rounded-lg">
      <img
        className="rounded-lg object-cover mb-2 w-2/3"
        src={props.media}
        alt={props.title}
      />
      <div className="flex flex-col justify-center -ml-16">
        <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
        <a href="#" className="text-secondary">
          Read more
        </a>
      </div>
    </div>
  );
}
