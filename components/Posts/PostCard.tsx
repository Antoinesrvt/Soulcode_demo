import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Post } from "@/interfaces";

export default function PostCard(props: Post) {
  return (
    <div className="shadow-md rounded-lg overflow-hidden w-1/2">
      <p>{props.date}</p>
      <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
      <img
        className="rounded-lg object-cover mb-2"
        src={props.media}
        alt={props.title}
      />
      <p className="mb-2">
        by
        <a href="#" className="truncate ml-2 text-primary-foreground font-bold">
          {props.author}
        </a>
      </p>
      <p className="line-clamp-2 overflow-hidden">{props.content}</p>
      <a href="#" className="text-secondary">
        Read more
      </a>
    </div>
  );
}
