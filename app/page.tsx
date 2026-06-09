import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaStrip from "@/components/CtaStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <CtaStrip />
    </>
  );
}
