import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="font-serif text-7xl">404</h1>
        <p className="mt-4 text-muted-ink">This page couldn’t be found.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-sage px-6 py-3 text-sm">Go home</Link>
      </div>
    </main>
  );
}
