import { getAllPosts } from "@/db/db";

export async function PostList() {
  const posts = await getAllPosts();

  return (
    <div className="mt-8 w-1/2 bg-blue-50 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Posts</h2>
      <table className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.authorId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
