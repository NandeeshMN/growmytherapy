import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HopeSection from "@/components/sections/HopeSection";
import WhoWeHelpSection from "@/components/sections/WhoWeHelpSection";
import QuoteBannerSection from "@/components/sections/QuoteBannerSection";
import AboutSection from "@/components/sections/AboutSection";
import AreasOfExpertiseSection from "@/components/sections/AreasOfExpertiseSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import OurOfficeSection from "@/components/sections/OurOfficeSection";
import MidpageQuoteSection from "@/components/sections/MidpageQuoteSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentCTASection from "@/components/sections/AppointmentCTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4A5055] selection:bg-[#E4E9E3] selection:text-[#263B50]">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Section 2: Holding onto hope / Validation */}
        <HopeSection />

        {/* Section 3: Who we help (Anxiety, Trauma, Burnout) */}
        <section id="who-we-help">
          <WhoWeHelpSection />
        </section>

        {/* Section 4: Quote Parallax Banner */}
        <QuoteBannerSection />

        {/* Section 5: Dedicated About Dr. Maya Reynolds */}
        <AboutSection />

        {/* Section 6: Our areas of expertise */}
        <section id="expertise">
          <AreasOfExpertiseSection />
        </section>

        {/* Section 7: How we work / Approach */}
        <section id="approach">
          <HowWeWorkSection />
        </section>

        {/* Section 8: Our Office / Santa Monica Space */}
        <OurOfficeSection />

        {/* Section 9: Midpage quote and serene landscape */}
        <MidpageQuoteSection />

        {/* Section 8: Our specialties include... */}
        <section id="specialties">
          <SpecialtiesSection />
        </section>

        {/* Section 9: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 10: Schedule an appointment CTA / Contact */}
        <section id="contact">
          <AppointmentCTASection />
        </section>
      </main>

      {/* Sections 10 & 11: Main Footer & Copyright bar */}
      <Footer />
    </div>
  );
}
