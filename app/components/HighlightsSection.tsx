"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    title:
      "Baseline Survey of the Integrated Programme for Out-of-School Adolescents (IPOSA) in Tanzania",
    dateRange: "April 2024 - January 2025",
    description:
      "In the year 2015, the Ministry of Education, Science, and Technology (MoEST) conducted an out-of-school profiling study and found that a total of 3.5 million children aged 7 to 17 (51% girls) were out of school, including more than 2 million children of lower secondary school age and 1.2 million children who never attended school. To respond to the learning needs of these children, who are being missed out on by the formal education system annually, the Integrated Programme for Out-of-School.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
  },
  {
    title:
      "Supporting a collaborative programme of activity between the Modern Energy Cooking Services (MECS) Programme and the Ministry of Energy in Tanzania – Partnership Liaison Lead",
    dateRange: "September 2024 - January 2026",
    description:
      "The Modern Energy Cooking Services (MECS) Programme, an eight-year research and innovation initiative funded by the UKAid (FCDO), has supported various research and market-strengthening efforts in Tanzania, resulting in an increasingly positive enabling environment for eCooking. Consequently, the Tanzanian Ministry of Energy, FCDO, and MECS are delivering an ambitious programme of activities to strengthen the market and scale up the availability and benefits of eCooking to the Tanzanian.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
  },
  {
    title:
      "A Study of Lessons Learnt and Good Practices from the UNICEF's Integrated Programme on Empowering Adolescent Girls Through Ending Child Marriage in Tanzania (2023-2024)",
    dateRange: "July 2024 - September 2024",
    description:
      "UNICEF Tanzania is implementing an integrated adolescent girls' programme that focuses on the empowerment of adolescent girls through ending child marriage using a multi-sectoral approach. It aims to create a model for adolescent girls' empowerment so that they can be key actors in the development of Tanzania, which is envisioned in UNICEF Tanzania's new country programme 2022-2027 as well as in national priorities such as the National Accelerated Action and Investment Agenda.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop",
  },
  {
    title:
      "Study of Vi Agroforestry's impact on agrobiodiversity through Sustainable Agriculture and Land Management (SALM) and agroforestry",
    dateRange: "March 2024 - May 2024",
    description:
      "Vi Agroforestry has, through sustainable agriculture and land management (SALM) and agroforestry, been promoting a diversification of species planted and animals reared on farmland. This study assessed the impact of these practices on agrobiodiversity and the broader ecosystem.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
  },
  {
    title:
      "Mid-term Evaluation of the project \"Increasing Access to Equitable Cataract Services in Four Regions of Tanzania\"",
    dateRange: "December 2023 - April 2024",
    description:
      "Vision impairment and blindness remain significant public health challenges in Tanzania. The Tanzania National Blindness and Visual Impairment Survey highlighted the need for improved access to eye care services. This project aims to increase access to equitable cataract services across four regions.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop",
  },
  {
    title:
      "Girls' Empowerment Index Baseline Survey of UNICEF's \"Integrated Programme on Empowering Adolescent Girls Through Ending Child Marriage in Tanzania (2023-2024)\"",
    dateRange: "October 2023 - February 2024",
    description:
      "UNICEF Tanzania is implementing an integrated adolescent girls' programme that focuses on the empowerment of adolescent girls through ending child marriage using a multi-sectoral approach. It aims to create a model for adolescent girls' empowerment so that they can be key actors in the development of Tanzania.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
  },
];

const CARD_WIDTH = 340;
const CARD_GAP = 24;

export default function HighlightsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = (CARD_WIDTH + CARD_GAP) * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="our-work"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <header>
            <span className="inline-block rounded-full bg-[#3D66F4]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3D66F4]">
              Case Studies
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#3D66F4] sm:text-4xl md:text-5xl">
              Highlights of Our Work
            </h2>
            <div className="mt-2 flex" aria-hidden>
              <span className="h-1 w-12 rounded-full bg-[#3D66F4]" />
            </div>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-stone-600">
              Selected projects showcasing our expertise in research, data & M&E across East Africa.
            </p>
          </header>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm transition hover:border-[#3D66F4]/30 hover:bg-[#3D66F4]/5 hover:text-[#3D66F4]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm transition hover:border-[#3D66F4]/30 hover:bg-[#3D66F4]/5 hover:text-[#3D66F4]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <Link
              href="/case-studies"
              className="rounded-xl bg-[#3D66F4] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#3D66F4]/25 transition hover:bg-[#2d54c4] hover:shadow-[#3D66F4]/30"
            >
              View All
            </Link>
          </div>
        </motion.div>

        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="highlights-scroll mt-10 -mx-4 overflow-x-auto overflow-y-hidden px-4 pb-2 scroll-smooth sm:-mx-6 sm:px-6 focus:outline-none"
        >
          <div className="flex gap-6" style={{ scrollSnapType: "x mandatory" }}>
            {HIGHLIGHTS.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex w-[min(340px,85vw)] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    sizes="340px"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <div
                  className="flex flex-1 flex-col px-6 py-6"
                  style={{ backgroundColor: "#e8efff" }}
                >
                  <div className="min-h-[3.25rem]">
                    <h3 className="line-clamp-2 text-base font-bold leading-snug tracking-tight text-[#3D66F4] md:text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-3 flex min-h-6 items-center gap-2 text-sm text-stone-600">
                    <svg
                      className="h-4 w-4 shrink-0 text-[#3D66F4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="tabular-nums text-[#3D66F4]">{item.dateRange}</span>
                  </div>
                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-stone-700">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
