"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const BLUE_GRADIENT =
  "linear-gradient(to bottom, #e4ecff 0%, #f3f6ff 40%, #ffffff 100%)";

const HERO_MEDIA = [
  { src: "/images/14-scaled.jpg", alt: "Field team conducting interviews" },
  { src: "/images/2-1-scaled.jpg", alt: "Workshop and training session" },
  { src: "/images/vi-agroforestry_1-scaled.webp", alt: "Agroforestry and livelihoods research" },
  { src: "/images/vi-agroforestry_2-scaled.webp", alt: "Community discussion and planning" },
];

export default function Hero() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="w-full" style={{ background: BLUE_GRADIENT }}>
      <div className="mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-start px-6 pt-20 pb-16 sm:px-8 sm:pt-24 lg:px-10 lg:pt-28 lg:pb-20">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Left: big headline + body + CTAs */}
          <div className="space-y-7">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-[#3D66F4] sm:text-3xl lg:text-4xl">
              Data Collection & Research Services in Tanzania
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg text-justify">
              We are a world-class, multi-disciplinary, local Tanzanian data collection and research
              services firm dedicated to supporting the missions of international development agencies
              in support of socioeconomic development initiatives in Tanzania, East Africa, and beyond.
              We strive to provide high-quality, cost-effective, and evidence-based solutions across the
              project life-cycle, empowering organisations to effectively design, implement, and evaluate
              their development initiatives.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg text-justify">
              We possess extensive expertise in executing assessments and learning exercises tailored for
              diverse development initiatives, with a particular emphasis on all sectors within the realm
              of international development.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3D66F4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3D66F4]/30 transition hover:bg-[#2d54c4] hover:shadow-[#3D66F4]/40"
              >
                Learn how we can be of service
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: stacked gallery, inspired by reference design */}
          <div className="grid h-full grid-cols-2 gap-4 sm:gap-5">
            <div className="flex flex-col gap-4 sm:gap-5">
              <button
                type="button"
                className="relative h-40 overflow-hidden rounded-2xl bg-stone-200 sm:h-48 lg:h-56 focus:outline-none focus:ring-2 focus:ring-[#3D66F4] focus:ring-offset-2"
                onClick={() => setLightbox(HERO_MEDIA[0])}
              >
                <Image
                  src={HERO_MEDIA[0].src}
                  alt={HERO_MEDIA[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
              </button>
              <button
                type="button"
                className="relative h-56 overflow-hidden rounded-2xl bg-stone-200 sm:h-64 lg:h-72 focus:outline-none focus:ring-2 focus:ring-[#3D66F4] focus:ring-offset-2"
                onClick={() => setLightbox(HERO_MEDIA[1])}
              >
                <Image
                  src={HERO_MEDIA[1].src}
                  alt={HERO_MEDIA[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-10 sm:gap-5">
              <button
                type="button"
                className="relative h-52 overflow-hidden rounded-2xl bg-stone-200 sm:h-60 lg:h-72 focus:outline-none focus:ring-2 focus:ring-[#3D66F4] focus:ring-offset-2"
                onClick={() => setLightbox(HERO_MEDIA[2])}
              >
                <Image
                  src={HERO_MEDIA[2].src}
                  alt={HERO_MEDIA[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </button>
              <button
                type="button"
                className="relative h-36 overflow-hidden rounded-2xl bg-stone-200 sm:h-40 lg:h-44 focus:outline-none focus:ring-2 focus:ring-[#3D66F4] focus:ring-offset-2"
                onClick={() => setLightbox(HERO_MEDIA[3])}
              >
                <Image
                  src={HERO_MEDIA[3].src}
                  alt={HERO_MEDIA[3].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {lightbox && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 focus:outline-none"
          onClick={() => setLightbox(null)}
          aria-label="Close full image"
        >
          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
          <span
            className="relative max-h-[90vh] max-w-[90vw] shrink-0 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              sizes="90vw"
            />
          </span>
        </button>
      )}
    </section>
  );
}
