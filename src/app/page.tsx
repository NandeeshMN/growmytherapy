import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HopeSection from "@/components/HopeSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import QuoteBannerSection from "@/components/QuoteBannerSection";
import AreasOfExpertiseSection from "@/components/AreasOfExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import MidpageQuoteSection from "@/components/MidpageQuoteSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AppointmentCTASection from "@/components/AppointmentCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2b2b] selection:bg-[#dfd4c7] selection:text-[#2b2b2b]">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Holding onto hope / Validation */}
        <HopeSection />

        {/* Section 3: Who we help (Adults, Couples, Children & Teens) */}
        <WhoWeHelpSection />

        {/* Section 4: Quote Parallax Banner */}
        <QuoteBannerSection />

        {/* Section 5: Our areas of expertise */}
        <AreasOfExpertiseSection />

        {/* Section 6: How we work */}
        <HowWeWorkSection />

        {/* Section 7: Midpage quote and serene landscape */}
        <MidpageQuoteSection />

        {/* Section 8: Our specialties include... */}
        <SpecialtiesSection />

        {/* Section 9: Schedule an appointment CTA */}
        <AppointmentCTASection />
      </main>

      {/* Sections 10 & 11: Main Footer & Copyright bar */}
      <Footer />
    </div>
  );
}
