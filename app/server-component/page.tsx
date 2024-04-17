import { getAllUsers, getAllPosts } from "@/db/db";

export default async function ServerComponentPage() {
  const users = await getAllUsers();
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Server Component Page</h1>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
