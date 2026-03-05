"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FEATURED_POST, OTHER_FEATURED_POSTS, RECENT_POSTS } from "../data/news-posts";

export default function NewsAndResourcesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <div className="min-h-screen w-full bg-white">
        <Header />
        <main>
          {/* Hero - solid white background, title and description */}
          <section
            className="relative flex w-full flex-col justify-end overflow-hidden rounded-b-2xl px-4 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-20"
            style={{ minHeight: "clamp(280px, 38vh, 420px)" }}
          >
            <motion.div
              className="mx-auto max-w-2xl pb-2 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-[#3D66F4] sm:text-5xl md:text-6xl">
                News & Resources
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-stone-700 md:text-xl">
                Latest publications, reports, and updates from our research and M&E work across East Africa.
              </p>
            </motion.div>
          </section>

          {/* Content - matching reference layout */}
          <div className="pt-12 pb-20 md:pt-16 md:pb-28 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

              {/* Top section: Hero featured post (left) + Other featured posts (right) */}
              <section className="grid gap-8 lg:grid-cols-12 lg:grid-rows-1 lg:items-stretch lg:gap-10">
                {/* Left: Hero featured post - full height to match right sidebar */}
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-7 lg:flex lg:min-h-0"
                >
                  <Link
                    href={`/news-and-resources/${FEATURED_POST.id}`}
                    className="group flex min-h-0 flex-1 overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] ring-1 ring-stone-200/50 transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] lg:flex-col"
                  >
                    <div className="relative min-h-[280px] flex-1 overflow-hidden sm:min-h-[320px] lg:min-h-0">
                      <Image
                        src={FEATURED_POST.image}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                        aria-hidden
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <span className="inline-block rounded-full bg-stone-900/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                          {FEATURED_POST.category}
                        </span>
                        <h2 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                          {FEATURED_POST.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </motion.article>

                {/* Right: Other featured posts sidebar */}
                <aside className="lg:col-span-5">
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg font-bold tracking-tight text-stone-900"
                  >
                    Other featured posts
                  </motion.h3>
                  <div className="mt-4 space-y-4">
                    {OTHER_FEATURED_POSTS.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                      >
                        <Link
                          href={`/news-and-resources/${post.id}`}
                          className="group flex gap-4 overflow-hidden rounded-xl bg-white p-3 shadow-sm ring-1 ring-stone-200/50 transition-all hover:shadow-md hover:ring-[#3D66F4]/20"
                        >
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={post.image}
                              alt=""
                              fill
                              className="object-cover transition duration-300 group-hover:scale-105"
                              sizes="80px"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-semibold leading-snug text-stone-900 line-clamp-2 group-hover:text-[#3D66F4] transition-colors">
                              {post.title}
                            </h4>
                            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-500">
                              {post.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </aside>
              </section>

              {/* Recent Posts section */}
              <section className="mt-16 md:mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap items-center justify-between gap-4"
                >
                  <h3 className="text-xl font-bold tracking-tight text-[#3D66F4] md:text-2xl">
                    Recent Posts
                  </h3>
                  <Link
                    href="/news-and-resources"
                    className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50 hover:border-[#3D66F4]/30 hover:text-[#3D66F4]"
                  >
                    All Posts
                  </Link>
                </motion.div>

                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {RECENT_POSTS.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] ring-1 ring-stone-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:ring-[#3D66F4]/25"
                    >
                      <Link href={`/news-and-resources/${post.id}`} className="flex flex-1 flex-col">
                        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                          <Image
                            src={post.image}
                            alt=""
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-1 flex-col px-6 py-5">
                          <h2 className="text-lg font-bold leading-snug tracking-tight text-stone-900 group-hover:text-[#3D66F4] transition-colors md:text-xl">
                            {post.title}
                          </h2>
                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-600">
                            {post.description}
                          </p>
                          <div className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3D66F4]/15 text-xs font-bold text-[#3D66F4]">
                              {post.authorInitials}
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-sm font-medium text-stone-700">{post.author}</span>
                              <span className="mx-2 text-stone-300">·</span>
                              <span className="text-sm text-stone-500">{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
