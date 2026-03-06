"use client";

import Image from "next/image";
import Link from "next/link";

const HIGHLIGHTS = [
  {
    title: "Baseline Survey of the Integrated Programme for Out-of-School Adolescents (IPOSA) in Tanzania",
    shortDescription:
      "Supporting the learning needs of out-of-school children aged 7 to 17 through the Integrated Programme for Out-of-School Adolescents (IPOSA).",
    image: "/images/1.webp",
    href: "/news-and-resources",
  },
  {
    title: "Supporting MECS and the Ministry of Energy in Tanzania – Partnership Liaison Lead",
    shortDescription:
      "Collaborative programme between the Modern Energy Cooking Services (MECS) Programme and the Ministry of Energy to scale up eCooking in Tanzania.",
    image: "/images/2.webp",
    href: "/news-and-resources",
  },
  {
    title: "Lessons Learnt from UNICEF's Programme on Empowering Adolescent Girls in Tanzania",
    shortDescription:
      "Study of lessons learnt and good practices from UNICEF's integrated programme on empowering adolescent girls through ending child marriage.",
    image: "/images/3.jpg",
    href: "/news-and-resources",
  },
];

export default function HighlightsSection() {
  return (
    <section id="our-work" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Decorative curved line + title */}
        <div className="flex flex-col items-center">
          <svg
            className="mb-2 w-full max-w-md text-[#3D66FA]/40"
        viewBox="0 0 400 8"
            fill="none"
            aria-hidden
          >
            <path
              d="M2 6C80 2 320 2 398 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <header className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              Highlights of Our Work
            </h2>
          </header>
        </div>

        {/* Three columns: each card = image + text; Read more aligned in a row */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white sm:flex-row lg:flex-col"
            >
              {/* Image - rounded */}
              <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-2xl sm:w-[44%] sm:aspect-[3/4] lg:w-full lg:aspect-[4/3]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 44vw, 33vw"
                />
              </div>
              {/* Text block: title + description fill space, Read more at bottom */}
              <div className="flex min-h-0 flex-1 flex-col py-5 sm:py-6 sm:pl-5 lg:pl-0 lg:pt-5">
                <h3 className="text-base font-bold leading-snug tracking-tight text-stone-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {item.shortDescription}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-stone-900 hover:underline"
                >
                  Read more
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-700 transition hover:bg-stone-300">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
