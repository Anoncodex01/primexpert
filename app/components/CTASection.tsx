"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-8 sm:px-10">
        <motion.div
          className="overflow-hidden rounded-[1.25rem] border border-[#3D66F4]/25 bg-white shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="grid min-h-[360px] grid-cols-1 md:min-h-[400px] md:grid-cols-[1fr_1fr]">
            <div className="relative hidden h-full min-h-[280px] w-full min-w-0 overflow-hidden md:block md:min-h-[400px]">
              <Image
                src="/Register-your-CV-2048x1151.jpg"
                alt="Prime Expertise team during a training session"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-10 md:px-10 md:py-12 lg:px-12">
              <h2 className="text-xl font-bold leading-tight tracking-tight text-stone-900 sm:text-2xl md:text-3xl">
                Register Your CV in Our Database
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Passionate about international development?",
                  "Strong research and data management skills?",
                  "Committed to making a positive impact?",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3D66F4] text-white">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                Look no further! Register your CV with us and unlock exciting opportunities to
                contribute your expertise.
              </p>
              <Link
                href="/register"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#3D66F4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2d54c4]"
              >
                Register Now
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
