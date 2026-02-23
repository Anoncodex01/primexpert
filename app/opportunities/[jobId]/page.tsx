"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getJobById } from "../../data/opportunities-jobs";

const PRIMARY = "#3D66FA";

export default function OpportunityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = (params?.jobId as string) || "";
  const job = jobId ? getJobById(jobId) : undefined;

  if (!job) {
    return (
      <div className="min-h-screen bg-[#E4EAFE]">
        <Header />
        <main className="px-4 py-24 text-center">
          <p className="text-stone-700 text-lg font-semibold">Opportunity not found.</p>
          <button
            type="button"
            onClick={() => router.push("/opportunities")}
            className="mt-4 inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            ← Back to opportunities
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#E4EAFE]">
      <Header />
      {/* Hero */}
      <section
        className="relative flex w-full flex-col justify-end overflow-hidden rounded-b-2xl px-4 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-20"
        style={{
          background: "linear-gradient(135deg, #3D66FA 0%, #132947 100%)",
          minHeight: "clamp(260px, 36vh, 380px)",
        }}
      >
        <div className="mx-auto w-full max-w-5xl pb-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Opportunity · {job.type}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {job.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            {job.location} · {job.experienceMin}-{job.experienceMax} years experience · {job.compensation}
          </p>
        </div>
      </section>

      <main className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row">
          {/* Main description */}
          <section className="flex-1 rounded-2xl bg-white p-6 shadow-md ring-1 ring-white/60 md:p-8">
            <h2 className="text-lg font-semibold text-stone-900">Role overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-700 whitespace-pre-line">
              {job.description}
            </p>

            <div className="mt-8 grid gap-4 rounded-xl bg-[#E4EAFE] px-4 py-4 text-sm text-stone-800 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-stone-900">Type</p>
                <p className="mt-1 capitalize">{job.type.toLowerCase()}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-900">Experience</p>
                <p className="mt-1">
                  {job.experienceMin}-{job.experienceMax} years ({job.experienceLevel})
                </p>
              </div>
              <div>
                <p className="font-semibold text-stone-900">Location</p>
                <p className="mt-1">{job.location}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-900">Compensation</p>
                <p className="mt-1">{job.compensation}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-900">Application deadline</p>
                <p className="mt-1">{job.daysRemaining} days left</p>
              </div>
              {job.postedDate && (
                <div>
                  <p className="font-semibold text-stone-900">Posted</p>
                  <p className="mt-1">{job.postedDate}</p>
                </div>
              )}
            </div>
          </section>

          {/* Apply / meta panel */}
          <aside className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md ring-1 ring-white/60 lg:sticky lg:top-28">
            <h2 className="text-base font-semibold text-stone-900">Ready to apply?</h2>
            <p className="mt-3 text-sm text-stone-700">
              Submit your application through our secure form. You can review the full data protection and
              privacy details on the next page.
            </p>
            <Link
              href={`/opportunities/apply/${job.id}`}
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
              style={{ backgroundColor: PRIMARY }}
            >
              Apply for this opportunity
            </Link>
            <Link
              href="/opportunities#vacancies"
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
            >
              ← Back to all vacancies
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

