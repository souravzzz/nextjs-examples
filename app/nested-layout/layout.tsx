import { SideBar } from "@/components/SideBar";
import { Suspense } from "react";
import Loading from "./loading";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <SideBar />
      <Suspense fallback={<Loading />}>
        <div className="w-4/5 flex items-center justify-center p-4">
          {children}
        </div>
      </Suspense>
    </div>
  );
}
