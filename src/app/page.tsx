import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HopeSection from "@/components/HopeSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import QuoteBannerSection from "@/components/QuoteBannerSection";
import AboutSection from "@/components/AboutSection";
import AreasOfExpertiseSection from "@/components/AreasOfExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import OurOfficeSection from "@/components/OurOfficeSection";
import MidpageQuoteSection from "@/components/MidpageQuoteSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import FAQSection from "@/components/FAQSection";
import AppointmentCTASection from "@/components/AppointmentCTASection";
import Footer from "@/components/Footer";

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
