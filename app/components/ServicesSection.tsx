"use client";

import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    title: "Research",
    description: "We design and implement qualitative and quantitative studies, collect and analyse data, and produce reports that inform development initiatives.",
    image: "/services/3-1024x884.jpg",
    iconColor: "teal" as const,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Data Handling & Management",
    description: "Expert data handling and management: data collection systems, robust data management processes, and analysis to inform program design and decision-making.",
    image: "/services/2-1-scaled.jpg",
    iconColor: "teal" as const,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Monitoring & Evaluation",
    description: "Comprehensive M&E services to help organisations track progress and impact, identify improvements, and make evidence-based decisions.",
    image: "/services/6-664x1024.jpg",
    iconColor: "orange" as const,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-14 md:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="text-center">
          <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <div className="mt-3 flex justify-center" aria-hidden>
            <span className="h-1 w-12 rounded-full bg-[#3D66FA]" />
          </div>
        </header>

        <ul className="mt-10 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.title} className="h-full">
              <Link href="/services" className="group block h-full">
                <article className="flex h-full flex-col">
                  {/* Image at top — rounded top only, sharp bottom */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Icon, title, description on white — no card, no background */}
                  <div className="mt-5 flex flex-col">
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 ${
                        service.iconColor === "orange"
                          ? "border-amber-500 text-amber-500"
                          : "border-teal-500 text-teal-500"
                      }`}
                    >
                      {service.icon}
                    </span>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-stone-900 md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-700">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
