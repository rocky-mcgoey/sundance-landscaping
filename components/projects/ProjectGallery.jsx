"use client";

import Image from "next/image";
import { useState } from "react";

/*
  This component:
  1) Shows a grid of images
  2) When an image is clicked, it opens a larger version (lightbox)
*/
export default function ProjectGallery({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  function openImage(index) {
    setSelectedImageIndex(index);
  }

  function closeImage() {
    setSelectedImageIndex(null);
  }

  function showNextImage() {
    if (selectedImageIndex === null) return;

    const nextIndex =
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1;

    setSelectedImageIndex(nextIndex);
  }

  function showPreviousImage() {
    if (selectedImageIndex === null) return;

    const prevIndex =
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;

    setSelectedImageIndex(prevIndex);
  }

  return (
    <>
      {/* IMAGE GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((imageSrc, index) => (
          <button
            key={imageSrc}
            onClick={() => openImage(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/30 ring-1 ring-white/10"
          >
            <Image
              src={imageSrc}
              alt={`Project image ${index + 1}`}
              fill
              sizes="(min-width: 1280px) 25vw,
                    (min-width: 1024px) 33vw,
                    (min-width: 640px) 50vw,
                    100vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* LIGHTBOX OVERLAY */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm p-6"
          onClick={closeImage}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/15 backdrop-blur-sm">
              <Image
                src={images[selectedImageIndex]}
                alt="Large project image"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={closeImage}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-lime-400 ring-1 ring-white/15 hover:bg-black/80 hover:text-lime-300 transition"
              aria-label="Close"
            >
              ✕
            </button>

            {/* PREVIOUS / NEXT BUTTONS */}
            {images.length > 1 && (
              <>
                <button
                  onClick={showPreviousImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-2xl font-bold text-lime-400 ring-1 ring-white/15 hover:bg-black/80 hover:text-lime-300 transition"
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <button
                  onClick={showNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-2xl font-bold text-lime-400 ring-1 ring-white/15 hover:bg-black/80 hover:text-lime-300 transition"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
