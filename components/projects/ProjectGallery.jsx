"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/projects/Lightbox";

export default function ProjectGallery({ images }) {
  const [openSrc, setOpenSrc] = useState(null);

  return (
    <>
      <p className="mb-4 text-sm text-white/80">Click to enlarge</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {images.map((src) => (
          <button
            key={src}
            onClick={() => setOpenSrc(src)}
            className="text-left"
            aria-label="Open image"
          >
            <div className="relative h-[120px] w-full overflow-hidden ring-1 ring-white/10">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>

      <Lightbox src={openSrc} onClose={() => setOpenSrc(null)} />
    </>
  );
}
