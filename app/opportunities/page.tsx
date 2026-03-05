"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileText } from "lucide-react";
import { JOBS, type Job } from "../data/opportunities-jobs";

const PRIMARY = "#3D66FA";
// Match specific opportunity images to vacancies; others use fallback by index
const CARD_IMAGES: Record<string, string> = {
  "16 Research Assistants": "/opportunities/Enumerators-Website-1024x576.jpg",
  "12 Enumerators": "/opportunities/PMS-Enumerators-Website-1024x576.jpg",
};
const CARD_IMAGES_FALLBACK = [
  "/opportunities/Scania-Data-Collectors-Website-1024x576.jpg",
  "/opportunities/TBS-advert-poster-website-1024x576.png",
];
function getCardImage(job: Job, index: number): string {
  return CARD_IMAGES[job.title] ?? CARD_IMAGES_FALLBACK[index % CARD_IMAGES_FALLBACK.length];
}

const INPUT_CLASS =
  "mt-1.5 block w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 focus:border-[#3D66FA] focus:ring-2 focus:ring-[#3D66FA]/20 outline-none transition";

export default function OpportunitiesPage() {
  const [sortBy, setSortBy] = useState<"relevance" | "date" | "days">("relevance");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [cvFileName, setCvFileName] = useState("");
  const router = useRouter();

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCvFileName(file ? file.name : "");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! (Form submission to be connected to backend)");
  };

  const filteredJobs = useMemo(() => {
    let list = [...JOBS];
    if (sortBy === "days") list.sort((a, b) => a.daysRemaining - b.daysRemaining);
    if (sortBy === "date") list.reverse();
    return list;
  }, [sortBy]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <div className="min-h-screen w-full bg-white">
        <Header />

        {/* Hero - solid white */}
        <section
          className="relative flex w-full flex-col justify-end overflow-hidden rounded-b-2xl px-4 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-20"
          style={{ minHeight: "clamp(280px, 38vh, 420px)" }}
        >
          <div className="mx-auto w-full max-w-4xl pb-2 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#3D66F4] sm:text-5xl md:text-6xl">
              Opportunities
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-stone-700 md:text-xl">
              Join our team of experts in research, data & M&E across East Africa.
            </p>
          </div>
        </section>

        <main className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-3xl">
            {/* Intro + form (like screenshot) */}
            <p className="text-stone-700 leading-relaxed">
              Are you a seasoned professional in international development with a passion for making a positive impact on the world? Look no further! We are currently seeking multidisciplinary experts in all areas of our service, including research, data handling and management, and monitoring and evaluation.
            </p>
            <p className="mt-4 text-stone-700 leading-relaxed">
              With over five years of professional experience in the international development arena, you will bring a wealth of knowledge and expertise to our team. We value candidates with international experience, particularly those who have worked in both developing and transitional countries.
            </p>
            <p className="mt-4 text-stone-700 leading-relaxed">
              As a member of our team, you will have the opportunity to work on a variety of assignments, from conducting research to analysing data and evaluating program effectiveness. You will also have the chance to work with a diverse group of experts from around the world, collaborating to make a meaningful difference in the lives of those we serve.
            </p>
            <p className="mt-4 text-stone-700 leading-relaxed">
              If you are a highly motivated individual with a commitment to making a positive impact in the world, we want to hear from you! Apply now and join our team in making a difference.
            </p>

            <form
              onSubmit={handleFormSubmit}
              className="mt-8 rounded-2xl bg-white p-6 shadow-lg border border-white/80 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label htmlFor="opp-firstName" className="block text-sm font-medium text-stone-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="opp-firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your First Name"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="opp-middleName" className="block text-sm font-medium text-stone-700">
                    Middle Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="opp-middleName"
                    name="middleName"
                    type="text"
                    placeholder="Your Middle Name"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="opp-surname" className="block text-sm font-medium text-stone-700">
                    Sur Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="opp-surname"
                    name="surname"
                    type="text"
                    placeholder="Your Sur Name"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="opp-dateOfBirth" className="block text-sm font-medium text-stone-700">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="opp-dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="opp-email" className="block text-sm font-medium text-stone-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="opp-email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="opp-cv" className="block text-sm font-medium text-stone-700">
                  CV <span className="text-red-500">*</span>
                </label>
                <div className="mt-1.5 flex flex-wrap items-center gap-3">
                  <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50 focus-within:ring-2 focus-within:ring-[#3D66FA]/20 transition">
                    <svg className="h-5 w-5" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Choose file
                    <input
                      id="opp-cv"
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleCvChange}
                      className="sr-only"
                    />
                  </label>
                  <span className="text-sm text-stone-500">{cvFileName || "No file chosen"}</span>
                </div>
                <p className="mt-2 text-sm text-stone-500">
                  <a
                    href="/file/Prefix.-FirstName_MiddleName_SurName-CV.doc"
                    download
                    className="underline hover:no-underline"
                    style={{ color: PRIMARY }}
                  >
                    Here is our recommended, commonly used CV template.
                  </a>
                </p>
              </div>
              <div className="mt-6 rounded-xl border p-5" style={{ borderColor: "rgba(61, 102, 250, 0.2)", backgroundColor: "rgba(61, 102, 250, 0.05)" }}>
                <p className="text-sm text-stone-600 leading-relaxed">
                  At Prime Expertise, we understand the importance of protecting personal data and take this responsibility very seriously. We assure you that the information you provide via this questionnaire and your CV will be used solely for the purpose of recruitment and will be handled with the utmost respect and confidentiality. Your personal data will be securely stored on our servers located in Dar es Salaam and will only be accessed by authorized personnel.
                </p>
                <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                  Furthermore, we want to ensure that you have full control over your personal data, so we would like to inform you that you have the right to withdraw your consent at any time, as well as the right to request access, rectification, and erasure of your data. You may exercise these rights at any time by emailing us at{" "}
                  <a href="mailto:dataprotection@primeexpertise.co.tz" className="underline hover:no-underline" style={{ color: PRIMARY }}>
                    dataprotection@primeexpertise.co.tz
                  </a>
                  .
                </p>
                <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                  We believe that transparency is key when it comes to protecting personal data, which is why we have a dedicated Data Protection and Privacy Policy in place. To learn more about how we handle, protect, and process your personal information, please visit the link provided below for detailed information on our policy:
                </p>
                <p className="mt-2">
                  <a
                    href="/file/Data-Protection-Privacy-Policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline font-medium"
                    style={{ color: PRIMARY }}
                  >
                    Data Protection and Privacy Policy
                  </a>
                </p>
              </div>
              <label className="mt-6 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="mt-1 h-5 w-5 rounded border-stone-300 focus:ring-2 focus:ring-[#3D66FA]"
                  style={{ accentColor: PRIMARY }}
                />
                <span className="text-sm text-stone-600">I Agree to the Terms and Conditions</span>
              </label>
              <button
                type="submit"
                disabled={!agreeTerms}
                className="mt-6 w-full rounded-xl px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: PRIMARY }}
              >
                Send
              </button>
            </form>
          </div>

          {/* 2. Vacancies section */}
          <div className="mx-auto max-w-7xl mt-16 lg:mt-20">
            <h2 id="vacancies" className="text-2xl font-bold md:text-3xl mb-2" style={{ color: PRIMARY }}>
              Vacancies
            </h2>
            <p className="text-stone-600 mb-6">Current open positions and tenders.</p>
            <div className="min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <p className="text-stone-700 font-medium">
                    Showing {filteredJobs.length} result{filteredJobs.length !== 1 ? "s" : ""}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-stone-600">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as "relevance" | "date" | "days")}
                      className="px-3 py-2 pr-8 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#3D66FA]/20 focus:border-[#3D66FA] outline-none bg-white appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%239ca3af%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.4rem_center] bg-no-repeat"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="date">Newest Post</option>
                      <option value="days">Days left</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredJobs.length === 0 ? (
                    <div className="sm:col-span-2 xl:col-span-3 rounded-2xl bg-white py-16 px-6 text-center shadow-md border border-white/60">
                      <FileText className="w-16 h-16 text-stone-300 mx-auto mb-4" aria-hidden />
                      <h3 className="text-xl font-semibold text-stone-900 mb-2">No jobs found</h3>
                      <p className="text-stone-600">Try adjusting your filters or search terms</p>
                    </div>
                  ) : (
                    filteredJobs.map((job, index) => {
                      const cardImage = getCardImage(job, index);
                      return (
                        <article
                          key={job.id}
                          className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg border border-white/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                          {/* Opportunity image only - no text */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                            <Image
                              src={cardImage}
                              alt=""
                              fill
                              className="object-cover object-center transition duration-300 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                          {/* White body */}
                          <div className="flex flex-1 flex-col p-5">
                            <h4 className="text-base font-bold leading-snug text-[#3D66FA]">
                              {job.title}
                            </h4>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 line-clamp-3">
                              {job.description}
                            </p>
                            <button
                              type="button"
                              onClick={() => router.push(`/opportunities/${job.id}`)}
                              className="mt-4 w-full rounded-xl border-2 py-2.5 text-sm font-semibold transition border-[#3D66FA] text-[#3D66FA] hover:bg-[#3D66FA]/5"
                            >
                              Read More
                            </button>
                          </div>
                        </article>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
