"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GRADIENT =
  "linear-gradient(to bottom, #d4e0ff 0%, #e0e9ff 25%, #e8eeff 50%, #f0f4ff 75%, #f8faff 100%)";

/* Images from public/about */
const VISION_IMAGE = "/about/1-1024x768.jpg";
const MISSION_IMAGE = "/about/4-1024x768.jpg";

const CORE_VALUES = [
  {
    title: "Integrity",
    description:
      "We are committed to upholding the highest ethical standards in all aspects of our work and interactions.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do and hold ourselves accountable to the highest standards of quality and professionalism.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of partnerships, working closely with our clients and stakeholders to develop solutions that are tailored to their specific needs and priorities.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We embrace new ideas, technologies, and approaches to improve our services and are committed to staying at the forefront through continuous learning and innovation.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Inclusivity",
    description:
      "We believe in the importance of diverse perspectives and experiences, and we strive to create an inclusive work environment that values and respects all individuals.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhoWeArePage() {
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
                Who We Are
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-white/90 md:text-xl">
                A world-class, multi-disciplinary Tanzanian consulting firm dedicated to supporting development initiatives across East Africa and beyond.
              </p>
            </motion.div>
          </section>

          {/* Content starts here */}
          <div className="pt-16 pb-16 md:pt-24 md:pb-24" style={{ background: GRADIENT }}>

          {/* Intro block */}
          <section className="px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] ring-1 ring-stone-200/50 md:p-10"
              >
                <p className="text-lg leading-relaxed text-stone-700 md:text-xl">
                  Prime Expertise Limited is a world-class, multi-disciplinary, local Tanzanian international development consulting firm dedicated to supporting the missions of international development agencies through high-quality research, data handling and management, and monitoring and evaluation services in support of socioeconomic development initiatives in Tanzania, East Africa, and beyond.
                </p>
                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  The firm has a network of experienced professionals with a deep understanding of the complexities of development initiatives and is dedicated to delivering customized solutions that meet the unique needs of our clients.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Legal / Registration */}
          <section className="mt-12 px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-2xl border border-[#3D66F4]/20 bg-[#3D66F4]/5 px-6 py-5 md:px-8 md:py-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3D66F4]">
                  Registration & Compliance
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  The firm is incorporated and registered in the United Republic of Tanzania as a private limited liability company under Registration Certificate No. 144452399 and has a valid Business License No. B4243757 reissued on 4 October 2022. The firm also has a Tanzania Revenue Authority certificate of registration with Taxpayer Identification Number (TIN) No. 144-452-399, effective from 22 October 2020.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Vision - image left, text right */}
          <section className="mt-20 px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] ring-1 ring-stone-200/50 md:grid-cols-2"
              >
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                  <Image
                    src={VISION_IMAGE}
                    alt="Prime Expertise team collaborating"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-[#3D66F4]">Our Vision</h3>
                  <p className="mt-4 text-base leading-relaxed text-stone-600">
                    To be the leading provider of research, data handling and management, and monitoring and evaluation services in support of socio-economic development initiatives in Tanzania, East Africa, and beyond.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Mission - text left, image right */}
          <section className="mt-8 px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] ring-1 ring-stone-200/50 md:grid-cols-2"
              >
                <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-10">
                  <h3 className="text-2xl font-bold text-[#3D66F4]">Our Mission</h3>
                  <p className="mt-4 text-base leading-relaxed text-stone-600">
                    To provide high-quality, cost-effective, and evidence-based solutions that empower organizations to effectively design, implement, and evaluate their development initiatives in Tanzania, East Africa, and beyond. We strive to be a trusted partner and advisor to our clients, delivering personalized, tailored services that drive impact and support sustainable development.
                  </p>
                </div>
                <div className="relative order-1 aspect-[4/3] md:order-2 md:aspect-auto md:min-h-[400px]">
                  <Image
                    src={MISSION_IMAGE}
                    alt="Community and market development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Core Values - Timeline design */}
          <section className="mt-20 px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-center"
              >
                <span className="text-sm font-medium uppercase tracking-widest text-[#3D66F4]">
                  What we stand for
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#3D66F4] md:text-4xl">
                  Our Core Values
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-base text-stone-600">
                  The principles that guide everything we do
                </p>
              </motion.div>

              {/* Vertical timeline - cards with accent bar and numbered nodes */}
              <div className="relative mt-14">
                {/* Connecting line - vertical line on the left */}
                <div
                  className="absolute left-5 top-6 bottom-6 w-0.5 bg-[#3D66F4]/30"
                  aria-hidden
                />
                <div className="space-y-6">
                {CORE_VALUES.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="relative flex gap-4 pl-14 sm:pl-16"
                  >
                    {/* Numbered node on the line */}
                    <div className="absolute left-0 top-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#3D66F4] text-sm font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                    {/* Card with accent bar */}
                    <div className="min-w-0 flex-1 rounded-2xl border-l-4 border-[#3D66F4] bg-white p-6 shadow-sm ring-1 ring-stone-200/50 transition-all hover:shadow-md hover:ring-[#3D66F4]/20 sm:p-7">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3D66F4]/10 text-[#3D66F4]">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#3D66F4]">
                            {value.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-stone-600">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="rounded-2xl bg-gradient-to-br from-[#3D66F4] to-[#2d54c4] px-8 py-10 text-center shadow-lg shadow-[#3D66F4]/25 md:px-12 md:py-12"
              >
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  Ready to work with us?
                </h3>
                <p className="mt-3 text-blue-100">
                  Discover how we can support your development initiatives.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#3D66F4] shadow transition hover:bg-blue-50"
                  >
                    Our Services
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center rounded-xl border-2 border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
