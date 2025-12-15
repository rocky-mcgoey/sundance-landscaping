import HeroCarousel from "@/components/home/HeroCarousel";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Full viewport hero */}
      <div className="relative h-[calc(100vh-72px)] min-h-[520px]">
        <HeroCarousel />
      </div>
    </section>
  );
}
