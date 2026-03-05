import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import ServicesSection from "./components/ServicesSection";
import OurOfficesMap from "./components/OurOfficesMap";
import HighlightsSection from "./components/HighlightsSection";
import CTASection from "./components/CTASection";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

const HERO_GRADIENT =
  "linear-gradient(to bottom, #d4e0ff 0%, #e0e9ff 25%, #e8eeff 50%, #f0f4ff 75%, #f8faff 90%, #ffffff 100%)";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <div className="min-h-screen w-full overflow-hidden rounded-none md:rounded-none">
        <div className="w-full" style={{ background: HERO_GRADIENT }}>
          <Header />
          <div className="pt-10 md:pt-14">
            <Hero />
          </div>
        </div>
        <TrustedBy />
        <ServicesSection />
        <OurOfficesMap />
        <HighlightsSection />
        <CTASection />
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
}
