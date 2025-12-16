export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* green line on top */}
      <div className="h-[2px] bg-lime-500" />

      <div className="mx-auto max-w-6xl px-6 py-5">
        <p className="text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Sundance Landscaping Limited&nbsp;
          |&nbsp; Phone: 403-288-7300&nbsp; Fax: 403-678-5219&nbsp; |&nbsp; Site
          Design by Rocky McGoey
        </p>
      </div>
    </footer>
  );
}
