import Link from "next/link";

export default async function NavBar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Home Page
        </Link>
        <Link
          href="/nested-layout"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Nested Layout
        </Link>
        <Link
          href="/server-component"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Server Component
        </Link>
        <Link
          href="/client-component"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Client Component
        </Link>
        <Link
          href="/server-action"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Server Action
        </Link>
      </nav>
    </header>
  );
}
