"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#e8eeff] via-[#eef2ff] to-[#f0f4ff] shadow-[0_8px_40px_-12px_rgba(61,102,244,0.15)] ring-1 ring-[#3D66F4]/10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="grid min-h-[320px] grid-cols-1 md:grid-cols-[0.45fr_1fr]">
            <div className="relative hidden aspect-[4/3] md:block md:aspect-auto">
              <Image
                src="/Register-your-CV-2048x1151.jpg"
                alt="Prime Expertise team during a training session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#3D66F4]/20 to-transparent md:from-transparent md:to-transparent"
                aria-hidden
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#3D66F4] sm:text-3xl md:text-4xl">
                Register Your CV in Our Database
              </h2>
              <ul className="mt-5 space-y-2">
                {[
                  "Passionate about international development?",
                  "Strong research and data management skills?",
                  "Committed to making a positive impact?",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700">
                    <svg
                      className="h-5 w-5 shrink-0 text-[#3D66F4]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                Look no further! Register your CV with us and unlock exciting opportunities to
                contribute your expertise.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#3D66F4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3D66F4]/25 transition hover:bg-[#2d54c4] hover:shadow-[#3D66F4]/30"
                >
                  Register Now
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
