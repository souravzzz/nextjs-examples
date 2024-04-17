import { getAllUsers, getAllPosts } from "@/db/db";
import PostList from "@/components/PostList";
import UserList from "@/components/UserList";

export default async function ServerComponentPage() {
  const users = await getAllUsers();
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Server Component Page</h1>
      <div className="flex w-full">
        <UserList users={users} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}
