import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Sundance Landscaping
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/before-after">Before & After</Link>
          <Link href="/ideas">Ideas</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
