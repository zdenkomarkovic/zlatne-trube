import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CelebrationsSection from "@/components/CelebrationsSection";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="pt-0">
      <HeroSection />
      <AboutSection />
      <CelebrationsSection />
      <CTASection />
      <GallerySection />
      <Testimonials />
      <Statistics />
      <LocationsSection />
    </main>
  );
}
