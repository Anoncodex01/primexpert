"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderSearch from "./HeaderSearch";

const NAV_ITEMS = [
  { href: "/who-we-are", label: "Who We Are", dropdown: true },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/news-and-resources", label: "News & Resources", dropdown: true },
  { href: "/opportunities", label: "Opportunities", dropdown: true },
  { href: "/contact", label: "Contact Us", dropdown: false },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-stone-200 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-4 px-4 md:h-14 md:px-6"
      >
        <Link href="/" className="relative flex shrink-0 items-center">
          <Image
            src="/primexpert.png"
            alt="PrimeExpertise - Research | Data | M&E"
            width={260}
            height={52}
            className="h-9 w-auto object-contain object-left md:h-10"
            priority
          />
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-6 pl-4 md:gap-8 lg:pl-0">
          {NAV_ITEMS.map(({ href, label, dropdown }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 text-sm font-normal text-stone-600 transition hover:text-stone-900"
            >
              {label}
              {dropdown && <ChevronDown className="h-3 w-3 text-stone-500" />}
            </Link>
          ))}
        </nav>

        <HeaderSearch variant="pill" />
      </motion.div>
    </header>
  );
}
