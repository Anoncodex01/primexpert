"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Content aligned with Who We Are page: Vision, Mission, Core Values
const TABS = [
  {
    id: "vision",
    label: "Our Vision",
    title: "Our Vision",
    description:
      "To be the leading provider of research, data handling and management, and monitoring and evaluation services in support of socio-economic development initiatives in Tanzania, East Africa, and beyond.",
    cta: "Learn More",
    href: "/who-we-are",
    image: "/about/1-1024x768.jpg",
    imageAlt: "Prime Expertise team collaborating",
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Our Mission",
    description:
      "To provide high-quality, cost-effective, and evidence-based solutions that empower organisations to design, implement, and evaluate their development initiatives. We strive to be a trusted partner, delivering tailored services that drive impact and support sustainable development.",
    cta: "Learn More",
    href: "/who-we-are",
    image: "/about/4-1024x768.jpg",
    imageAlt: "Community and market development",
  },
  {
    id: "values",
    label: "Core Values",
    title: "What We Stand For",
    description:
      "The principles that guide everything we do: Integrity, Excellence, Collaboration, Innovation, and Inclusivity. We are committed to the highest ethical standards, quality, partnerships, continuous learning, and an inclusive work environment that values and respects all individuals.",
    cta: "Learn More",
    href: "/who-we-are",
    image: "/images/3.jpg",
    imageAlt: "Our values in action",
  },
];

const SLIDER_INTERVAL_MS = 5000;

export default function WhoWeAreSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [slideIndex, setSlideIndex] = useState(0);
  const content = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  // Optional: auto-rotate right-side image slider
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % TABS.length);
      setActiveTab((prev) => {
        const idx = TABS.findIndex((t) => t.id === prev);
        return TABS[(idx + 1) % TABS.length].id;
      });
    }, SLIDER_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  // When user changes tab, sync slider to that tab’s image
  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const idx = TABS.findIndex((t) => t.id === id);
    if (idx >= 0) setSlideIndex(idx);
  };

  const handleDotClick = (idx: number) => {
    setSlideIndex(idx);
    setActiveTab(TABS[idx].id);
  };

  return (
    <section className="bg-white py-12 md:py-16" aria-labelledby="supporting-mission-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Who We Are pill + vertical line */}
        <div className="flex flex-col items-center">
          <Link
            href="/who-we-are"
            className="rounded-full border border-[#3D66F4]/30 bg-white px-6 py-2 text-sm font-medium text-[#3D66F4] shadow-sm transition hover:bg-[#3D66F4]/5"
          >
            Who We Are
          </Link>
          <div className="mt-3 h-8 w-px bg-[#3D66F4]/20" aria-hidden />
        </div>

        {/* Outer card (like home-supporting_box) */}
        <div className="mt-4 overflow-visible rounded-[36px] border-2 border-[#A7D7F0] bg-white shadow-sm">
          {/* Top block: full-width centered intro (hsb_top) */}
          <div
            id="supporting-mission-heading"
            className="px-6 pt-10 pb-10 text-center md:px-10 md:pt-14 md:pb-12"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-black md:text-5xl">
              Supporting Development Initiatives
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-sm leading-relaxed text-stone-700 md:text-base">
              We are a world-class, multi-disciplinary, local Tanzanian data collection and research services firm dedicated to supporting the missions of international development agencies in support of socioeconomic development initiatives in Tanzania, East Africa, and beyond. We strive to provide high-quality, cost-effective, and evidence-based solutions across the project life-cycle, empowering organisations to effectively design, implement, and evaluate their development initiatives.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-stone-600 md:text-base">
              We possess extensive expertise in executing assessments and learning exercises tailored for diverse development initiatives, with a particular emphasis on all sectors within the realm of international development.
            </p>
          </div>

          {/* Bottom: two columns (hsb_bot) — left = tabs + content (like tis_v2__left), right = image slider */}
          <div className="grid overflow-hidden rounded-b-[34px] md:grid-cols-2 md:min-h-[460px]">
            {/* Left column: solid brand blue; pattern image outside/on top in bottom-left (reference) */}
            <div
              className="relative flex flex-col overflow-hidden bg-[#132947]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(19,41,71,0.72), rgba(19,41,71,0.72)), url('/bg_home-supporting_tis_v2.png')",
                backgroundPosition: "left bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                className="pointer-events-none absolute -left-24 -bottom-12 h-[360px] w-[360px] opacity-45 md:-left-20 md:h-[460px] md:w-[460px]"
                aria-hidden
              >
                <Image
                  src="/bg_home-supporting_tis_v2.png"
                  alt=""
                  fill
                  className="object-contain object-left-bottom"
                  sizes="40vw"
                />
              </div>
              {/* Tabs + content (tab-info-slider_v2__content style) */}
              <div className="relative z-10 flex flex-1 flex-col p-7 text-white md:p-9">
                {/* Tabs: Empower | Celebrate | Educate — active has light blue underline */}
                <div className="flex flex-nowrap items-center justify-between gap-3 pb-4 md:gap-6">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabClick(tab.id)}
                      className={`relative whitespace-nowrap px-0 py-2 text-lg font-medium tracking-tight transition md:text-[24px] ${
                        activeTab === tab.id ? "text-white" : "text-white/85 hover:text-white"
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#18B9ED]" aria-hidden />
                      )}
                    </button>
                  ))}
                </div>
                {/* Content block: heading + paragraph + Learn More (light blue button) */}
                <div className="mt-6 flex flex-1 flex-col justify-start">
                  <h3 className="text-3xl font-semibold tracking-tight md:text-[50px]">{content.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-[#D9E7FF] md:text-[18px] md:leading-[1.4]">
                    {content.description}
                  </p>
                  <Link
                    href={content.href}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#3D66FA] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#2d54e0] md:px-8 md:py-3 md:text-[20px]"
                  >
                    {content.cta}
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column: image slider (swiper-style, one visible slide with background) */}
            <div className="relative min-h-[320px] md:min-h-full">
              {TABS.map((tab, idx) => (
                <div
                  key={tab.id}
                  className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: idx === slideIndex ? 1 : 0,
                    pointerEvents: idx === slideIndex ? "auto" : "none",
                  }}
                >
                  <Image
                    src={tab.image}
                    alt={tab.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
              {/* Slider dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {TABS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleDotClick(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === slideIndex ? "w-7 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
