"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getJobById } from "../../../data/opportunities-jobs";

const PRIMARY = "#3D66FA";

export default function ApplyPage() {
  const params = useParams();
  const jobId = (params?.jobId as string) || "";
  const job = jobId ? getJobById(jobId) : undefined;

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [cvFileName, setCvFileName] = useState("");

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCvFileName(file ? file.name : "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! (Form submission to be connected to backend)");
  };

  if (!jobId) {
    return (
      <div className="min-h-screen bg-[#E4EAFE]">
        <Header />
        <main className="px-4 py-24 text-center">
          <p className="text-stone-600">No job selected.</p>
          <Link href="/opportunities" className="mt-4 inline-block font-medium hover:underline" style={{ color: PRIMARY }}>
            Back to opportunities
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-[#E4EAFE]">
        <Header />
        <main className="px-4 py-24 text-center">
          <p className="text-stone-600">Job not found.</p>
          <Link href="/opportunities" className="mt-4 inline-block font-medium hover:underline" style={{ color: PRIMARY }}>
            Back to opportunities
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const inputClass =
    "mt-1.5 block w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 focus:border-[#3D66FA] focus:ring-2 focus:ring-[#3D66FA]/20 outline-none transition";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#E4EAFE]">
      <Header />
      <main className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-1 text-sm font-medium text-stone-600 mb-6 transition hover:opacity-80"
            style={{ color: PRIMARY }}
          >
            ← Back to opportunities
          </Link>
          <h1 className="text-3xl font-bold md:text-4xl" style={{ color: PRIMARY }}>
            Opportunities
          </h1>
          <p className="mt-4 text-stone-700 leading-relaxed">
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
          <p className="mt-6 text-stone-600 text-sm">
            Applying for: <span className="font-semibold text-stone-900">{job.title}</span>
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-2xl bg-white p-6 shadow-lg border border-white/80 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-stone-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Your First Name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="middleName" className="block text-sm font-medium text-stone-700">
                  Middle Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="middleName"
                  name="middleName"
                  type="text"
                  placeholder="Your Middle Name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-stone-700">
                  Sur Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Your Sur Name"
                  required
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-stone-700">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="cv" className="block text-sm font-medium text-stone-700">
                CV <span className="text-red-500">*</span>
              </label>
              <div className="mt-1.5 flex flex-wrap items-center gap-3">
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50 focus-within:ring-2 focus-within:ring-[#3D66FA]/20 transition">
                  <svg className="h-5 w-5" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Choose file
                  <input
                    id="cv"
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
      </main>
      <Footer />
    </div>
  );
}
