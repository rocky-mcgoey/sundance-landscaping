import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-900 border-b-2 border-lime-500">
      <div className="relative h-[88px]">
        {/* LOGO || TODO: Update logo to better version */}
        <Link href="/" className="absolute left-6 top-1/2 -translate-y-1/2">
          <div className="relative h-[56px] w-[180px]">
            <Image
              src="/images/logo/sundance-logo.jpg"
              alt="Sundance Landscaping"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* LINKS */}
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-center px-6">
          <div className="flex gap-8 text-[15px] font-semibold uppercase tracking-wide text-zinc-100">
            <Link href="/" className="text-lime-400 hover:text-lime-300">
              Home
            </Link>
            <Link href="/projects" className="hover:text-lime-400">
              Projects
            </Link>
            <Link href="/before-after" className="hover:text-lime-400">
              Before &amp; After
            </Link>
            <Link href="/ideas" className="hover:text-lime-400">
              Ideabooks
            </Link>
            <Link href="/about" className="hover:text-lime-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-lime-400">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
