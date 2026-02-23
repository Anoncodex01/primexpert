"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/images/14-scaled.jpg",
  "/images/2-1-scaled.jpg",
  "/images/vi-agroforestry_1-scaled.webp",
  "/images/vi-agroforestry_2-scaled.webp",
  "/images/vi-agroforestry_3-scaled.webp",
  "/images/vi-agroforestry_4-scaled.webp",
];

const ROTATE_INTERVAL_MS = 5000;

export default function HeroImageRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 bg-stone-300">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === currentIndex ? 1 : 0,
            zIndex: i === currentIndex ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`Hero slide ${i + 1}`}
            fill
            className="object-cover object-center"
            sizes="50vw"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
