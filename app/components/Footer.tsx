export async function Footer() {
  return (
    <footer className="sticky top-0 flex h-16 items-center gap-4 border-t bg-background px-4 md:px-6">
      <p className="text-sm text-muted-foreground">
        {new Date().toTimeString()}
      </p>
    </footer>
  );
}
