"use client";

import PostList from "@/components/PostList";
import UserList from "@/components/UserList";
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
        <UserList users={users} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}
