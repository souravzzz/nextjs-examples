import { getAllPosts } from "@/db/db";

export async function GET() {
  const posts = await getAllPosts();
  return Response.json(posts);
}
