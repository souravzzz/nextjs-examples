"use client";

import { Post, User } from "@prisma/client";
import { useEffect, useState } from "react";

export default function ClientComponentPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  }

  async function fetchPosts() {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  }

  async function fetchAll() {
    // use promise.all to fetch users and posts at the same time
    await Promise.all([fetchUsers(), fetchPosts()]);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Client Component Page</h1>
      <div className="flex w-full">
        <div className="mt-8 w-1/2 bg-red-50 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Users</h2>
          <table className="mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      </div>
    </div>
  );
}
