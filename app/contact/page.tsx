"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Mail, Phone, MapPin, Home, Inbox } from "lucide-react";

const PRIMARY = "#3D66FA";

const INPUT_CLASS =
  "mt-1.5 block w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:border-[#3D66FA] focus:ring-2 focus:ring-[#3D66FA]/20 outline-none transition";

export default function ContactPage() {
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message submitted! (Hook this up to your backend or email service.)");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#E4EAFE]">
      <Header />
      <main className="px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-5xl">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-[#3D66FA] sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-3 text-sm leading-relaxed text-stone-700 md:text-base">
              Got an inquiry? Submit the form below and our team will respond as soon as possible. Your email
              will only be used in response to your inquiry.
            </p>
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
            {/* Form column */}
            <section className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-white/80 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-800">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select id="subject" name="subject" required className={INPUT_CLASS}>
                    <option value="General Inquiries">General Inquiries</option>
                    <option value="Partnerships">Partnerships</option>
                    <option value="Opportunities">Opportunities</option>
                    <option value="Services">Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-stone-800">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company"
                    required
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-800">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Full Name"
                      required
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-800">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-800">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    required
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-800">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    required
                    className="mt-1.5 block w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:border-[#3D66FA] focus:ring-2 focus:ring-[#3D66FA]/20 outline-none transition"
                  />
                </div>

                <div className="pt-2">
                  <p className="text-xs font-semibold text-stone-800">
                    Acceptance of Prime Expertise&apos;s Data Protection and Privacy Policy
                  </p>
                  <label className="mt-2 flex cursor-pointer items-start gap-3 text-xs text-stone-600 md:text-sm">
                    <input
                      type="checkbox"
                      checked={agreePolicy}
                      onChange={(e) => setAgreePolicy(e.target.checked)}
                      required
                      className="mt-0.5 h-4 w-4 rounded border-stone-300 focus:ring-2 focus:ring-[#3D66FA]"
                      style={{ accentColor: PRIMARY }}
                    />
                    <span>
                      By checking the box, you acknowledge that you have read, understood, and agree to abide by
                      Prime Expertise&apos;s{" "}
                      <a
                        href="/file/Data-Protection-Privacy-Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline"
                        style={{ color: PRIMARY }}
                      >
                        Data Protection and Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreePolicy}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Submit
                </button>
              </form>
            </section>

            {/* Contact details & map */ }
            <aside className="space-y-5">
              <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-white/80">
                <h2 className="text-base font-semibold text-stone-900">Contact details</h2>
                <div className="mt-4 space-y-4 text-sm text-stone-700">
                  <div className="flex items-start gap-3">
                    <Home className="mt-0.5 h-5 w-5 text-[#3D66FA]" />
                    <div>
                      <p className="font-semibold">Physical Address</p>
                      <p>Prime Expertise Limited,</p>
                      <p>Plot 1040, Haile Selassie Road, Masaki,</p>
                      <p>Dar es Salaam, 14111, Tanzania.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Inbox className="mt-0.5 h-5 w-5 text-[#3D66FA]" />
                    <div>
                      <p className="font-semibold">Postal Address</p>
                      <p>Prime Expertise Limited,</p>
                      <p>P.O. Box 60021,</p>
                      <p>Dar es Salaam, Tanzania.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-[#3D66FA]" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:info@primeexpertise.co.tz"
                        className="text-[#3D66FA] underline hover:no-underline"
                      >
                        info@primeexpertise.co.tz
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-[#3D66FA]" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+255653074907"
                        className="text-[#3D66FA] underline hover:no-underline"
                      >
                        +255 (0) 653 074 907
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-white/80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3962.1167955447886!2d39.282858!3d-6.755609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4fc2928184e5%3A0x46794b35043689c!2sPrime%20Expertise%20Limited!5e0!3m2!1sen!2sus!4v1771843625286!5m2!1sen!2sus"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prime Expertise Limited location on map"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

