"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterBottomLogo() {
  return (
    <Link href="/" className="shrink-0 self-start sm:self-auto">
      <Image
        src="/primexpert.png"
        alt="PrimeExpertise - Research | Data | M&E"
        width={260}
        height={52}
        className="h-10 w-auto object-contain object-left"
      />
    </Link>
  );
}
