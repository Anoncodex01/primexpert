"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-[#0f2847]">
          CV Registration
        </h1>
        <p className="mt-4 max-w-md text-center text-stone-600">
          Our CV registration form is coming soon. In the meantime, please contact us at{" "}
          <a
            href="mailto:info@primeexpertise.co.tz"
            className="text-[#3D66F4] underline hover:no-underline"
          >
            info@primeexpertise.co.tz
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#3D66F4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2d54c4]"
        >
          ← Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
