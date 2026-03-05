import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#3D66F4]/20 bg-gradient-to-r from-[#e4ecff] via-white to-[#e4ecff] px-6 py-8 shadow-[0_18px_45px_rgba(61,102,244,0.18)] md:flex md:items-center md:justify-between md:px-10 md:py-9">
          {/* Accent background blob */}
          <div
            className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#3D66F4]/15 blur-3xl"
            aria-hidden
          />

          <div className="relative max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#3D66F4] shadow-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#3D66F4]" />
              Get in touch
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Have a project or question?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Share a brief about your research, data, or M&amp;E needs and our team will get back to
              you with next steps. We only use your details to respond to your inquiry.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Prefer email?{" "}
              <a
                href="mailto:info@primeexpertise.co.tz"
                className="font-medium text-[#3D66F4] underline-offset-2 hover:underline"
              >
                info@primeexpertise.co.tz
              </a>
            </p>
          </div>

          <div className="relative mt-6 flex flex-col items-stretch gap-3 md:mt-0 md:w-64">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3D66F4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3D66F4]/40 transition hover:bg-[#2d54c4] hover:shadow-[#3D66F4]/50"
            >
              Contact Us
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-center text-[11px] text-slate-500">
              Typical response time:{" "}
              <span className="font-medium text-slate-700">1–2 business days</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


