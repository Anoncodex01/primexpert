"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurOfficesMap() {
  return (
    <section
      id="our-offices"
      className="relative w-full bg-white py-6 md:py-8"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.header
          className="mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block rounded-full bg-[#3D66F4]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3D66F4]">
            Our Reach
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#3D66F4] sm:text-4xl md:text-5xl">
            Our Offices
          </h2>
          <div className="mt-1.5 flex justify-center" aria-hidden>
            <span className="h-1 w-12 rounded-full bg-[#3D66F4]" />
          </div>
          <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-stone-600">
            Headquartered in Tanzania, we deliver research, data & M&E services
            across East Africa and beyond.
          </p>
        </motion.header>
      </div>

      {/* Image + SDG panel - side by side on lg */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-8">
          {/* Static map image - left side, transparent background */}
          <div className="flex-1 lg:min-w-0 lg:pt-0">
            <div className="relative overflow-hidden rounded-2xl bg-transparent">
              <div className="relative aspect-[16/10] w-full bg-transparent">
                <Image
                  src="/Map_TRIMMED.svg"
                  alt="Prime Expertise offices map"
                  fill
                  className="object-contain p-4 md:p-6"
                  sizes="(max-width: 1024px) 100vw, 700px"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* SDG panel - right side */}
          <div className="mt-8 flex flex-col lg:mt-0 lg:w-[380px] lg:shrink-0">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60 lg:sticky lg:top-24">
              <h3 className="text-xl font-bold tracking-tight text-[#3D66F4] sm:text-2xl">
                Our Outreach: Serving the SDGs
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                We support the Sustainable Development Goals. The icons below (excluding the black and white ones) symbolise the areas in which we have provided our services to make a contribution towards achieving these goals.
              </p>
              <div className="relative mt-6 overflow-hidden rounded-xl bg-stone-50">
                <Image
                  src="/map.jpg"
                  alt="Sustainable Development Goals icons - areas we have contributed to"
                  width={600}
                  height={400}
                  className="w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
