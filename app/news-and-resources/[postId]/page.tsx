"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getPostById, getOtherPosts } from "../../data/news-posts";

const PRIMARY = "#3D66FA";
const GRADIENT =
  "linear-gradient(to bottom, #d4e0ff 0%, #e0e9ff 25%, #e8eeff 50%, #f0f4ff 75%, #f8faff 100%)";

export default function NewsReadPage() {
  const params = useParams();
  const router = useRouter();
  const postId = (params?.postId as string) || "";
  const post = postId ? getPostById(postId) : undefined;
  const relatedPosts = post ? getOtherPosts(postId, 3) : [];

  if (!post) {
    return (
      <div className="min-h-screen" style={{ background: GRADIENT }}>
        <Header />
        <main className="px-4 py-24 text-center">
          <p className="text-stone-700 text-lg font-semibold">Article not found.</p>
          <button
            type="button"
            onClick={() => router.push("/news-and-resources")}
            className="mt-4 inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            ← Back to News & Resources
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <div className="min-h-screen w-full" style={{ background: GRADIENT }}>
        <Header />

        {/* Hero with image */}
        <section className="relative pt-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <Link
              href="/news-and-resources"
              className="inline-flex items-center gap-1 text-sm font-medium text-stone-600 mb-6 transition hover:opacity-80"
              style={{ color: PRIMARY }}
            >
              ← Back to News & Resources
            </Link>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-xl ring-1 ring-stone-200/50">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                {post.category && (
                  <span className="inline-block rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-800 backdrop-blur-sm">
                    {post.category}
                  </span>
                )}
                <h1 className="mt-3 text-2xl font-bold leading-tight text-white drop-shadow-md sm:text-3xl md:text-4xl">
                  {post.title}
                </h1>
                {(post.author || post.readTime) && (
                  <p className="mt-3 text-sm text-white/90">
                    {post.author && <span>{post.author}</span>}
                    {post.author && post.readTime && <span className="mx-2">·</span>}
                    {post.readTime && <span>{post.readTime}</span>}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <main className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <article className="mt-8 md:mt-10">
              <p className="text-base leading-relaxed text-stone-700 whitespace-pre-line text-justify md:text-lg">
                {post.body ?? post.description}
              </p>
            </article>

            {/* You might also be interested */}
            {relatedPosts.length > 0 && (
              <section className="mt-16 md:mt-20">
                <h2 className="text-xl font-bold tracking-tight text-stone-900 md:text-2xl">
                  You might also be interested
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/news-and-resources/${related.id}`}
                      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-stone-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#3D66FA]/25"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                        <Image
                          src={related.image}
                          alt=""
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-base font-bold leading-snug text-stone-900 group-hover:text-[#3D66FA] transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">
                          {related.description}
                        </p>
                        {related.readTime && (
                          <span className="mt-3 text-xs font-medium text-stone-500">
                            {related.readTime}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12 text-center">
              <Link
                href="/news-and-resources"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-[#3D66FA]/40 hover:bg-[#3D66FA]/5 hover:text-[#3D66FA]"
              >
                ← All News & Resources
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
