"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FooterLogo from "./FooterLogo";

const NAVIGATE_LINKS = [
  { href: "#", label: "Ethics and Safeguards" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "#services", label: "What We Do" },
  { href: "#", label: "Standard CV Template" },
  { href: "#", label: "Data Protection and Privacy Policy" },
  { href: "#", label: "Whistleblowing Policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-stone-100 px-4 py-12 sm:px-6 lg:px-8">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white shadow-sm"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,40,71,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,40,71,0.02) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      >
        {/* Get In Touch CTA - merged with footer, no gap */}
        <div className="rounded-t-3xl bg-[#3D66F4] px-6 py-10 text-center sm:px-8 md:py-12">
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/95 sm:text-base">
            Got an inquiry? Contact us by clicking the button below. Your email address will only be used to respond to your inquiry.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#132947] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f1f38]"
          >
            Contact Us
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="relative px-8 pb-14 pt-10 sm:px-10 lg:px-14 lg:pb-16 lg:pt-12">
        {/* Faint watermark */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]"
          aria-hidden
        >
          <span className="text-[12rem] font-bold text-stone-900">PrimeExpertise</span>
        </div>

        <motion.div
          className="relative grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr_1fr] lg:gap-x-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Brand column - Logo & Photographs description */}
          <div>
            <FooterLogo />
            <h3 className="mt-4 text-sm font-semibold tracking-tight text-[#3D66F4]">
              Photographs Usage
            </h3>
            <div className="mt-2 space-y-3 text-sm leading-relaxed text-stone-600 text-justify">
              <p>
                All photographs featured on this website were taken by Prime Expertise personnel with the prior consent of the subjects for our clients. We have obtained written consent from our clients to use and publish these photographs. Therefore, they should not be used or republished without explicit, written permission.
              </p>
              <p>
                If you see a photograph on this website that features your likeness and you would like it to be removed, please contact us at{" "}
                <a
                  href="mailto:dataprotection@primeexpertise.co.tz"
                  className="text-[#3D66F4] underline hover:no-underline"
                >
                  dataprotection@primeexpertise.co.tz
                </a>
                , and we will promptly take it down.
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/primeexpertise"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#3D66F4] transition hover:bg-[#3D66F4]/10 hover:text-[#2342a8]"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/PrimeExpertise"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#3D66F4] transition hover:bg-[#3D66F4]/10 hover:text-[#2342a8]"
                aria-label="X (Twitter)"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://wa.me/255735074907"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#3D66F4] transition hover:bg-[#3D66F4]/10 hover:text-[#2342a8]"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold text-stone-900">Contact Us</h4>
            <address className="mt-4 not-italic text-sm leading-relaxed text-stone-600">
              Prime Expertise Limited,
              <br />
              Plot 1040, Haile Selassie Road, Masaki,
              <br />
              P.O. Box 60021,
              <br />
              Dar es Salaam, 14111
              <br />
              Tanzania.
              <br />
              <br />
              <a href="tel:+255653074907" className="text-[#3D66F4] hover:underline">
                +255 (0) 653 074 907
              </a>
              <br />
              <a
                href="mailto:info@primeexpertise.co.tz"
                className="text-[#3D66F4] hover:underline"
              >
                info@primeexpertise.co.tz
              </a>
            </address>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-stone-900">Navigate</h4>
            <nav className="mt-4 flex flex-col gap-3">
              {NAVIGATE_LINKS.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-stone-600 transition hover:text-stone-900"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
        </div>

        {/* Copyright & legal - blue bar with white text */}
        <div className="relative -mx-8 mt-12 rounded-b-3xl bg-[#3D66F4] px-8 py-6 text-center sm:-mx-10 lg:-mx-14">
          <p className="text-xs text-white">
            © {currentYear} Prime Expertise Limited. All Rights Reserved.
          </p>
          <p className="mt-2 mx-auto max-w-4xl text-[11px] leading-relaxed text-white/90">
            We are a registered, limited liability company in the United Republic of Tanzania (Registration Certificate No. 144452399). Prime Expertise Limited also has a valid Business License No. BL01396912024-2500038016, reissued on 10 June 2025, and a Tanzania Revenue Authority certificate of registration with Taxpayer Identification Number No. 144-452-399.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="#" className="text-xs text-white transition hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white transition hover:text-white/80">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-white transition hover:text-white/80">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
