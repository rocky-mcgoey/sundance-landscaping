export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Sundance Landscaping</p>
        <p>Calgary, Alberta</p>
      </div>
    </footer>
  );
}
