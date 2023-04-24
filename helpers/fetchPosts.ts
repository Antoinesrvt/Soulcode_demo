// utils/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const getBlogPosts = async () => {
  const { data } = await api.get("/posts");
  return data.docs;
};

export const getBlogPostBySlug = async (slug: string) => {
  const { data } = await api.get(`/posts/${slug}`);
  return data.doc;
};
