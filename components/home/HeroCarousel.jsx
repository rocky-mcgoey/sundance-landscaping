"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function HeroCarousel() {
  {
    /*TODO: Update to actual photos from client*/
  }
  const slides = useMemo(
    () => [
      { src: "/images/hero/Landscape-1.jpg", alt: "Landscaping project 1" },
      { src: "/images/hero/Landscape-2.jpg", alt: "Landscaping project 2" },
      { src: "/images/hero/Landscape-3.jpg", alt: "Landscaping project 3" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      {/* adjust these to taste */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        <div className="relative h-[260px] sm:h-[320px] lg:h-[360px]">
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 66vw, 100vw"
          />
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium shadow hover:bg-white"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium shadow hover:bg-white"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
