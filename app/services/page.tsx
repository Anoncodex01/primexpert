"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GRADIENT =
  "linear-gradient(to bottom, #d4e0ff 0%, #e0e9ff 25%, #e8eeff 50%, #f0f4ff 75%, #f8faff 100%)";

const SERVICES = [
  {
    title: "Research",
    description:
      "Our research services include designing and implementing both qualitative and quantitative studies, collecting and analysing data, and producing reports and publications that provide valuable insights and inform the design and implementation of development initiatives.",
    image: "/services/3-1024x884.jpg",
    href: "#",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Data Handling & Management",
    description:
      "We also offer a range of expert data handling and management services, including the design and implementation of data collection systems, the establishment of robust data management processes, and the analysis and interpretation of data to inform program design and decision-making.",
    image: "/services/2-1-scaled.jpg",
    href: "#",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Monitoring & Evaluation",
    description:
      "In addition to our research and data services, we also provide comprehensive monitoring and evaluation services to help organizations track the progress and impact of their development initiatives, identify areas for improvement, and make informed decisions based on evidence.",
    image: "/services/6-664x1024.jpg",
    href: "#",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <div className="min-h-screen w-full" style={{ background: GRADIENT }}>
        <Header />
        <main>
          {/* Hero - gradient background, title and description */}
          <section
            className="relative flex w-full flex-col justify-end overflow-hidden rounded-b-2xl px-4 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-20"
            style={{
              background: "linear-gradient(135deg, #3D66FA 0%, #132947 100%)",
              minHeight: "clamp(280px, 38vh, 420px)",
            }}
          >
            <motion.div
              className="mx-auto max-w-2xl pb-2 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Our Services
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-white/90 md:text-xl">
                High-quality research, data handling & management, and M&E to support development initiatives across Tanzania, East Africa, and beyond.
              </p>
            </motion.div>
          </section>

          {/* Content */}
          <div className="pt-16 pb-20 md:pt-24 md:pb-28" style={{ background: GRADIENT }}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-2xl text-center"
              >
                <h2 className="text-2xl font-bold tracking-tight text-[#3D66F4] md:text-3xl">
                  How we support your initiatives
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
                  Our team has extensive experience in development contexts. We deliver evidence-based solutions tailored to your needs.
                </p>
              </motion.div>

              {/* Service cards - alternating layout on desktop */}
              <div className="mt-16 space-y-12 md:mt-20">
                {SERVICES.map((service, index) => (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`grid overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] ring-1 ring-stone-200/50 transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:ring-[#3D66F4]/25 md:grid-cols-2 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`relative aspect-[16/10] md:aspect-auto md:min-h-[320px] ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        aria-hidden
                      />
                    </div>
                    <div
                      className={`flex flex-col justify-center p-8 md:p-10 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3D66F4]/10 text-[#3D66F4]">
                        {service.icon}
                      </div>
                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#3D66F4] md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-stone-600">
                        {service.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* CTA */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-20"
              >
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#3D66F4] to-[#2d54c4] px-8 py-12 text-center shadow-xl shadow-[#3D66F4]/25 md:px-12 md:py-14">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    Ready to get started?
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-blue-100">
                    Let's discuss how we can support your development initiatives with research, data, and M&E.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#3D66F4] shadow-lg transition hover:bg-blue-50"
                    >
                      View our work
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center rounded-xl border-2 border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
