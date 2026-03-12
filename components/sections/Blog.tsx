import { getAllPosts } from "@/lib/blog";
import { BlogClient } from "./BlogClient";

export function Blog() {
  const posts = getAllPosts();
  return <BlogClient posts={posts.slice(0, 3)} />;
}
