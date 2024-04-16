"use client"; // Error components must be Client Components

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{new Date().toTimeString()}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={reload}
      >
        Try again
      </button>
    </div>
  );
}
