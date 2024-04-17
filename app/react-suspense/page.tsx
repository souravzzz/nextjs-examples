import { PostList } from "@/components/PostList";
import { UserList } from "@/components/UserList";
import { Suspense } from "react";

export default async function ReactSuspensePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">React Suspense Page</h1>
      <div className="flex w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <UserList />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <PostList />
        </Suspense>
      </div>
    </div>
  );
}
