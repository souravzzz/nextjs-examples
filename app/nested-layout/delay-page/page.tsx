import { unstable_noStore as noStore } from "next/cache";

export default async function DelayPage() {
  noStore();
  // This is a delay page, it will take 2 seconds to load
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Nested Delay Page</h1>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
}
