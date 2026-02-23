"use client";

import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";

export default function IntroSection() {
  return (
    <section
      id="about"
      className="intro-section relative w-full overflow-hidden px-6 pt-16 pb-8 md:px-12 md:pt-20 md:pb-10"
      aria-labelledby="intro-heading"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <AnimateOnScroll>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3D66F4]">
              Our firm
            </span>
            <h2
              id="intro-heading"
              className="mt-3 text-xl font-semibold leading-snug text-[#3D66F4] md:text-2xl"
            >
              Data collection & research services in Tanzania
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-stone-600 md:text-lg">
              We are a world-class, multi-disciplinary, local Tanzanian data
              collection and research services firm dedicated to supporting the
              missions of international development agencies in support of
              socioeconomic development initiatives in Tanzania, East Africa, and
              beyond. We strive to provide high-quality, cost-effective, and
              evidence-based solutions across the project life-cycle, empowering
              organisations to effectively design, implement, and evaluate their
              development initiatives.
            </p>
            <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
              We possess extensive expertise in executing assessments and
              learning exercises tailored for diverse development initiatives,
              with a particular emphasis on all sectors within the realm of
              international development.
            </p>
            <Link
              href="#services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#3D66F4] transition hover:text-[#2d54c4]"
            >
              Learn how we can be of service
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
