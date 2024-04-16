import Link from "next/link";

const sidebarNavItems = [
  {
    title: "Nested Home Page",
    href: "/nested-layout/",
  },

  {
    title: "Nested Regular Page",
    href: "/nested-layout/regular-page",
  },
  {
    title: "Loading Skeleton",
    href: "/nested-layout/delay-page",
  },
  {
    title: "Error Page",
    href: "/nested-layout/error-page",
  },
];

export function SideBar() {
  return (
    <nav className="w-1/5 bg-gray-100 p-4 flex flex-col">
      {sidebarNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="p-4 hover:text-red-500 hover:underline justify-start"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
