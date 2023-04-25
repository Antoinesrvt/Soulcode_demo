import React from "react";
import payload from "payload";
import { GetServerSideProps } from "next";
import { Post } from "interfaces/index";

type Props = {
  post: Post;
};

const Post: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug
    ? (ctx.params.slug as string[]).join("/")
    : "home";

  const pageQuery = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      post: pageQuery.docs[0],
    },
  };
};
