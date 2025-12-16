"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function HeroCarousel() {
  {
    /*  TODO: update to actual client photos*/
  }
  const slides = useMemo(
    () => [
      {
        src: "/images/hero/Landscape-1.jpg",
        alt: "Sundance landscaping hero 1",
      },
      {
        src: "/images/hero/Landscape-2.jpg",
        alt: "Sundance landscaping hero 2",
      },
      {
        src: "/images/hero/Landscape-3.jpg",
        alt: "Sundance landscaping hero 3",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Image */}
      <Image
        src={slides[index].src}
        alt={slides[index].alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-4 py-3 text-3xl text-zinc-900 font-bold shadow hover:bg-white"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-4 py-3 text-3xl text-zinc-900 font-bold shadow hover:bg-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
