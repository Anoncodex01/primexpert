import Link from "next/link";
import HeroImageRotator from "./HeroImageRotator";

const BLUE_GRADIENT =
  "linear-gradient(to bottom, #d4e0ff 0%, #e0e9ff 25%, #e8eeff 50%, #f0f4ff 75%, #f8faff 90%, #ffffff 100%)";

export default function Hero() {
  return (
    <section
      className="grid min-h-[85vh] w-full grid-cols-1 md:grid-cols-2"
      style={{ background: BLUE_GRADIENT }}
    >
      <div className="flex min-h-[50vh] min-w-0 flex-col justify-center md:min-h-[85vh]">
        <div className="flex flex-col justify-center px-8 py-14 md:px-12 md:py-20 lg:px-16">
          <h1 className="truncate text-xl font-bold leading-snug tracking-tight sm:text-2xl lg:text-3xl" style={{ color: "#3D66F4" }}>
            Data Collection & Research Services in Tanzania
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl text-justify">
            We are a world-class, multi-disciplinary, local Tanzanian data
            collection and research services firm dedicated to supporting the
            missions of international development agencies in support of
            socioeconomic development initiatives in Tanzania, East Africa, and
            beyond. We strive to provide high-quality, cost-effective, and
            evidence-based solutions across the project life-cycle, empowering
            organisations to effectively design, implement, and evaluate their
            development initiatives.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl hidden">
            We possess extensive expertise in executing assessments and learning
            exercises tailored for diverse development initiatives, with a
            particular emphasis on all sectors within the realm of international
            development.
          </p>
          <div className="mt-8">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-[#3D66F4] px-6 py-3.5 text-base font-medium text-white transition hover:bg-[#2d54c4]"
            >
              Learn how we can be of service
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative min-h-[50vh] min-w-0 px-6 py-8 md:min-h-[85vh] md:flex md:items-center md:justify-center md:px-8 md:py-10">
        <div className="relative h-full min-h-[45vh] w-full overflow-hidden rounded-2xl md:min-h-[70vh] md:rounded-3xl">
          <HeroImageRotator />
        </div>
      </div>
    </section>
  );
}
