"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterLogo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/primexpert.png"
        alt="PrimeExpertise - Research | Data | M&E"
        width={260}
        height={52}
        className="h-12 w-auto object-contain object-left"
      />
    </Link>
  );
}
