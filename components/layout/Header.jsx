"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkClass = (href) =>
    `px-4 py-2 text-sm font-semibold tracking-wide ${
      isActive(href) ? "text-lime-400" : "text-white hover:text-lime-300"
    }`;
  return (
    <header className="sticky top-0 z-50 bg-zinc-900 border-b-2 border-lime-500">
      <div className="relative h-[88px]">
        {/* LOGO || TODO: Update logo to better version */}
        <Link href="/" className="absolute left-6 top-1/2 -translate-y-1/2">
          <div className="relative h-[56px] w-[180px]">
            <Image
              src="/images/logo/sundance-logo.jpg"
              alt="Sundance Landscaping"
              width={180}
              height={56}
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* LINKS */}
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-center px-6">
          <div className="flex gap-8 text-[15px] font-semibold uppercase tracking-wide">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/projects" className={linkClass("/projects")}>
              Projects
            </Link>
            <Link href="/before-after" className={linkClass("/before-after")}>
              Before &amp; After
            </Link>
            <Link href="/ideas" className={linkClass("/ideas")}>
              Ideabooks
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
