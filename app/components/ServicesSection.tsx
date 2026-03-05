"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Research",
    description:
      "Our research services include designing and implementing both qualitative and quantitative studies, collecting and analysing data, and producing reports and publications that provide valuable insights and inform the design and implementation of development initiatives.",
    image: "/services/3-1024x884.jpg",
  },
  {
    title: "Data Handling & Management",
    description:
      "We also offer a range of expert data handling and management services, including the design and implementation of data collection systems, the establishment of robust data management processes, and the analysis and interpretation of data to inform program design and decision-making.",
    image: "/services/2-1-scaled.jpg",
  },
  {
    title: "Monitoring & Evaluation",
    description:
      "In addition to our research and data services, we also provide comprehensive monitoring and evaluation services to help organizations track the progress and impact of their development initiatives, identify areas for improvement, and make informed decisions based on evidence.",
    image: "/services/6-664x1024.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden pt-10 pb-20 md:pt-12 md:pb-28"
      style={{
        background:
          "linear-gradient(180deg, #f8faff 0%, #eef2ff 50%, #f0f4ff 100%)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#3D66F4] sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <div className="mt-4 flex justify-center" aria-hidden>
            <span className="h-1 w-12 rounded-full bg-[#3D66F4]" />
          </div>
          
        </motion.header>

        <motion.div
          className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_8px_32px_-8px_rgba(61,102,244,0.12)] ring-1 ring-stone-200/50 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] hover:ring-[#3D66F4]/25"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8faff 40%, #eef2ff 100%)",
              }}
            >
              <div className="relative flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-stone-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col p-5 px-6 md:px-8">
                  <h3 className="text-lg font-bold tracking-tight text-[#3D66F4] md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-[#3D66F4] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#3D66F4]/25 transition hover:bg-[#2d54c4] hover:shadow-[#3D66F4]/30"
                  >
                    Learn more
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
