import BackgroundShell from "@/components/ui/BackgroundShell";
import Link from "next/link";

export default function IdeasPage() {
  return (
    <BackgroundShell backgroundSrc="/images/background/Landscape-1.jpg">
      <div className="h-[calc(100vh-88px-64px)] flex items-center justify-center px-6">
        <div className="w-full max-w-xl rounded-2xl bg-black/45 p-10 text-center ring-1 ring-white/10 backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-white">Ideabooks</h1>

          <p className="mt-4 text-white/85">Content coming soon.</p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-lime-500 px-8 py-3 text-sm font-semibold text-black hover:bg-lime-400 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </BackgroundShell>
  );
}
