import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Post } from "@/interfaces";

export default function BigPostCard(props: Post) {
  return (
    <div className="col-span-2 shadow-md rounded-lg relative overflow-hidden">
      <p>{props.date}</p>
      <h1 className="text-2xl font-bold mb-8">{props.title}</h1>
      <img
        className="relative w-full aspect-[16/7] rounded-lg object-cover mb-4"
        src={props.media}
        alt={props.title}
      />

      <div>
        <p className="mb-2">
          by
          <a
            href="#"
            className="truncate ml-2 text-primary-foreground font-bold"
          >
            {props.author}
          </a>
        </p>
        <p className="line-clamp-2  mb-2 truncate">{props.content}</p>
        <a href="#" className="text-secondary">
          Read more
        </a>
      </div>
    </div>
  );
}
