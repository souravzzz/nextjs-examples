import { PostList } from "@/components/PostList";
import { UserList } from "@/components/UserList";

// export const dynamic = "force-dynamic";

export default async function ServerComponentPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Server Component Page</h1>
      <div className="flex w-full">
        <UserList />
        <PostList />
      </div>
    </div>
  );
}
