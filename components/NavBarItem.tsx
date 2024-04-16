import Link from "next/link";

export type NavBarItemProps = {
  href: string;
  text: string;
};

export function NavBarItem({ href, text }: Readonly<NavBarItemProps>) {
  return (
    <Link
      href={href}
      className="text-foreground transition-colors hover:text-blue-500"
    >
      {text}
    </Link>
  );
}
