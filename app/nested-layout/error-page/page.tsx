"use client";
import { unstable_noStore as noStore } from "next/cache";

export default function ErrorPage() {
  noStore();
  // cause this page to throw an error 50% of the time
  if (Math.random() > 0.5) throw new Error("This is an error page");

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">You got lucky!</h1>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
}
