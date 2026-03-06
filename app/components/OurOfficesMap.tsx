"use client";

import Image from "next/image";

export default function OurOfficesMap() {
  return (
    <section id="our-offices" className="bg-stone-50/50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Our Outreach: Serving the SDGs
          </h2>
          <div className="mt-3 flex justify-center" aria-hidden>
            <span className="h-1 w-12 rounded-full bg-[#3D66FA]" />
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* Map - left */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/Map_TRIMMED.svg"
                alt="Prime Expertise offices and outreach map"
                fill
                className="object-contain p-6 md:p-8"
                sizes="(max-width: 1024px) 100vw, 60vw"
                unoptimized
              />
            </div>
          </div>

          {/* SDG panel - right */}
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]">
              <div className="p-6 md:p-7">
                <p className="text-sm leading-relaxed text-stone-600">
                  We support the Sustainable Development Goals. The icons below (excluding the black and white ones) symbolise the areas in which we have provided our services to make a contribution towards achieving these goals.
                </p>
              </div>
              <div className="relative aspect-[4/3] bg-stone-50 sm:aspect-auto sm:min-h-[280px]">
                <Image
                  src="/map.jpg"
                  alt="Sustainable Development Goals — areas we have contributed to"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
