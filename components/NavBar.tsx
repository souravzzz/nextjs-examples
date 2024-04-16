import { NavBarItem, NavBarItemProps } from "@/components/NavBarItem";

const navBarItems: NavBarItemProps[] = [
  { href: "/", text: "Home Page" },
  { href: "/nested-layout", text: "Nested Layout" },
  { href: "/server-component", text: "Server Component" },
  { href: "/client-component", text: "Client Component" },
  { href: "/server-action", text: "Server Action" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {navBarItems.map((item) => (
          <NavBarItem key={item.href} href={item.href} text={item.text} />
        ))}
      </nav>
    </header>
  );
}
