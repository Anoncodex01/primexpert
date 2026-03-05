"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 md:px-8 md:pt-5"
      style={{ background: "linear-gradient(to bottom, #e4ecff 0%, rgba(228,236,255,0.85) 60%, transparent 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-[#3D66F4]/15 px-5 shadow-lg backdrop-blur-sm md:h-16 md:gap-6 md:px-6"
        style={{
          background: "#e4ecff",
          boxShadow: "0 4px 24px rgba(61, 102, 244, 0.12)",
        }}
      >
        <Link href="/" className="relative flex shrink-0 items-center">
          <Image
            src="/primexpert.png"
            alt="PrimeExpertise - Research | Data | M&E"
            width={260}
            height={52}
            className="h-10 w-auto object-contain object-left md:h-12"
            priority
          />
        </Link>

        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <Link href="/who-we-are" className="text-sm font-medium text-stone-700 transition hover:text-stone-900">
            Who We Are
          </Link>
          <Link href="/services" className="text-sm font-medium text-stone-700 transition hover:text-stone-900">
            Services
          </Link>
          <Link href="/news-and-resources" className="text-sm font-medium text-stone-700 transition hover:text-stone-900">
            News & Resources
          </Link>
          <Link href="/opportunities" className="text-sm font-medium text-stone-700 transition hover:text-stone-900">
            Opportunities
          </Link>
          <Link href="/contact" className="text-sm font-medium text-stone-700 transition hover:text-stone-900">
            Contact Us
          </Link>
        </nav>

        <HeaderSearch />
      </motion.div>
    </header>
  );
}
