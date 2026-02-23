"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const HERO_IMAGES = [
  { src: "/images/14-scaled.jpg", alt: "Fieldwork", aspect: "extraTall", style: "default" },
  { src: "/images/2-1-scaled.jpg", alt: "Data collection", aspect: "wide", style: "accent" },
  { src: "/images/vi-agroforestry_1-scaled.webp", alt: "Research", aspect: "tall", style: "shadow" },
  { src: "/images/vi-agroforestry_2-scaled.webp", alt: "Impact", aspect: "square", style: "default" },
  { src: "/images/vi-agroforestry_3-scaled.webp", alt: "Initiatives", aspect: "tall", style: "default" },
  { src: "/images/vi-agroforestry_4-scaled.webp", alt: "Development", aspect: "wide", style: "accent" },
];

function ImageCard({
  img,
  i,
  onClick,
}: {
  img: (typeof HERO_IMAGES)[0];
  i: number;
  onClick: () => void;
}) {
  const styleClass =
    img.style === "accent"
      ? "rounded-2xl bg-white shadow-lg ring-2 ring-[#3D66F4]/30 md:rounded-3xl"
      : img.style === "shadow"
        ? "rounded-2xl bg-white shadow-xl shadow-stone-300/60 ring-1 ring-stone-200/60 md:rounded-3xl"
        : "rounded-2xl bg-white shadow-md ring-1 ring-stone-200/60 md:rounded-3xl";
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex shrink-0 transition-[transform,box-shadow,z-index] duration-200 hover:z-10 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#3D66F4] focus:ring-offset-2 rounded-2xl md:rounded-3xl relative"
      aria-label={`View full image: ${img.alt}`}
    >
      <div className={`overflow-hidden ${styleClass} h-full`}>
        {/* Same height for all: fixed card size so short images match tall ones */}
        <div className="relative h-[240px] w-[160px] sm:h-[260px] sm:w-[170px] md:h-[280px] md:w-[190px]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 170px, 190px"
            priority={i < 3}
          />
        </div>
      </div>
    </button>
  );
}

export default function HeroStacked() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="relative w-full overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Overlay ya juu tu (to-b), hakuna to-l/to-r ili kushoto na kulia viwe sawa */}
      <div className="pointer-events-none absolute inset-0 top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#3D66F4]/20 to-transparent z-[5]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Top: text content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Headline */}
          <h1 className="mx-auto mt-8 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#3D66F4] sm:text-4xl md:text-5xl lg:text-6xl">
            Data collection & research services in{" "}
            <span className="italic text-stone-800">Tanzania</span> for your
            development initiatives
          </h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
          <Link
            href="#services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3D66F4] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#3D66F4]/30 transition hover:bg-[#2d54c4] hover:shadow-[#3D66F4]/40"
          >
            See how we can help
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          </motion.div>
        </motion.div>

        {/* Bottom: marquee of images - click to see full */}
        <motion.div
          className="hero-marquee mt-24 w-full overflow-hidden md:mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div
            className="flex animate-marquee gap-6 py-2"
            style={{ width: "max-content" }}
            aria-hidden
          >
            {/* Duplicate set for seamless loop */}
            {[1, 2].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-end gap-6 px-4 md:gap-8 md:px-6"
                style={{ minHeight: "280px" }}
              >
                {HERO_IMAGES.map((img, i) => (
                  <ImageCard
                    key={`${copy}-${img.src}`}
                    img={img}
                    i={i}
                    onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox: full image on click */}
      {lightbox && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 focus:outline-none"
          onClick={() => setLightbox(null)}
          aria-label="Close full image"
        >
          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
          <span
            className="relative max-h-[90vh] max-w-[90vw] shrink-0 cursor-default"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              sizes="90vw"
            />
          </span>
        </button>
      )}
    </section>
  );
}
