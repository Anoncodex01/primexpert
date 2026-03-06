"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// All images from public/images/ — rotate every ROTATE_SECONDS with smooth crossfade.
const HERO_IMAGES = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.webp",
  "/images/6.webp",
];
const ROTATE_SECONDS = 8;
const FADE_DURATION_MS = 800;
const HERO_CACHE_BUSTER = 1;

function getImageUrl(i: number) {
  return `${HERO_IMAGES[i]}?v=${HERO_CACHE_BUSTER}`;
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentSrc = getImageUrl(index);
  const nextIndex = (index + 1) % HERO_IMAGES.length;
  const nextSrc = getImageUrl(nextIndex);

  // Preload next image so it’s ready before the fade
  useEffect(() => {
    const img = new window.Image();
    img.src = getImageUrl((index + 1) % HERO_IMAGES.length);
  }, [index]);

  useEffect(() => {
    const id = setInterval(() => {
      setShowNext(true);
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % HERO_IMAGES.length);
        setShowNext(false);
        timeoutRef.current = null;
      }, FADE_DURATION_MS);
    }, ROTATE_SECONDS * 1000);
    return () => {
      clearInterval(id);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Current image */}
      <div
        className="absolute inset-0 transition-opacity ease-in-out"
        style={{
          opacity: showNext ? 0 : 1,
          transitionDuration: `${FADE_DURATION_MS}ms`,
        }}
      >
        <Image
          src={currentSrc}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          unoptimized
        />
      </div>
      {/* Next image (crossfade in) */}
      <div
        className="absolute inset-0 transition-opacity ease-in-out"
        style={{
          opacity: showNext ? 1 : 0,
          transitionDuration: `${FADE_DURATION_MS}ms`,
        }}
      >
        <Image
          src={nextSrc}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
      </div>
      {/* Dark overlay on the left for text readability, like the screenshot */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        aria-hidden
      />
      {/* Left-aligned content, positioned lower in the hero */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10 md:pb-16 lg:px-16 lg:pb-20">
          <div className="max-w-xl">
            <h1 className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              Data Collection & Research Services in Tanzania
            </h1>
            <p className="mt-4 text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              From Tanzania to East Africa and beyond, PrimeExpertise supports development agencies with high-quality data collection, research, and M&E services so communities can chart their own development paths.
            </p>
            <Link
              href="#services"
              className="mt-6 inline-block rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
