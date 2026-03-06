import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import WhoWeAreSection from "./components/WhoWeAreSection";
import ServicesSection from "./components/ServicesSection";
import OurOfficesMap from "./components/OurOfficesMap";
import HighlightsSection from "./components/HighlightsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <div className="w-full overflow-hidden">
        <Header />
        <Hero />
        <TrustedBy />
        <WhoWeAreSection />
        <ServicesSection />
        <OurOfficesMap />
        <HighlightsSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}
