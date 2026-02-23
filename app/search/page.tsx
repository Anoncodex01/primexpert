import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BLUE_GRADIENT =
  "linear-gradient(to bottom right, #d4e0ff 0%, #e0e9ff 25%, #e8eeff 50%, #f0f4ff 75%, #f5f7ff 100%)";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q ?? "";

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: BLUE_GRADIENT }}
    >
      <div className="w-full overflow-hidden" style={{ background: BLUE_GRADIENT }}>
        <Header />
        <main className="mx-auto max-w-2xl px-6 py-20">
          <h1 className="text-2xl font-bold text-stone-900">Search</h1>
          {query ? (
            <p className="mt-4 text-stone-600">
              Results for: <strong className="text-stone-900">&quot;{query}&quot;</strong>
            </p>
          ) : (
            <p className="mt-4 text-stone-600">Enter a search term above to find content.</p>
          )}
          <Link
            href="/"
            className="mt-8 inline-block text-[#3D66F4] hover:underline"
          >
            ← Back to home
          </Link>
        </main>
        <Footer />
      </div>
    </div>
  );
}
