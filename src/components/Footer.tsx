import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Approach", href: "#approach" },
    { label: "Specialties", href: "#specialties" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ];

  const specialtiesLinks = [
    { label: "Anxiety & Overthinking", href: "#specialties" },
    { label: "Trauma & EMDR", href: "#specialties" },
    { label: "Burnout & Chronic Stress", href: "#specialties" },
    { label: "Perfectionism & Regulation", href: "#specialties" },
  ];

  return (
    <footer className="w-full">
      {/* Top Footer Section (Clean light cream theme matching redesigned brand) */}
      {/* Top Footer Section (Clean light cream theme matching redesigned brand) */}
      <div className="bg-[#F7F5F0] pt-16 pb-20 md:pt-20 md:pb-28 border-t border-[#D9DED8]">
        <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Column 1: Logo & Practice Overview */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start">
              <div className="w-full max-w-[420px]">
                <div className="relative w-64 sm:w-72 h-16 sm:h-20 mb-5">
                  <Image
                    src="/dr-maya-reynolds-logo.png"
                    alt="Dr. Maya Reynolds, PsyD logo"
                    fill
                    className="object-contain object-left"
                    sizes="288px"
                  />
                </div>

                <p className="text-[12px] sm:text-[12.5px] text-[#4A5055] font-light leading-[1.75] w-full">
                  We make getting started feel simple and comfortable. Visit my office in Santa Monica or schedule a secure virtual therapy session from anywhere in California. We&apos;ll find an approach that fits your needs and feels right for you.
                </p>
              </div>
            </div>

            {/* Right Columns: NAVIGATE, SPECIALTIES, LOCATION & PRACTICE */}
            <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pt-1 lg:pt-3">
              
              {/* Column 2: NAVIGATE */}
              <div className="space-y-3.5">
                <h4 className="text-[0.72rem] tracking-[0.18em] uppercase font-normal text-[#263B50] font-sans">
                  NAVIGATE
                </h4>
                <ul className="space-y-2 text-[0.82rem] font-light text-[#4A5055]">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-[#718779] transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: SPECIALTIES */}
              <div className="space-y-3.5">
                <h4 className="text-[0.72rem] tracking-[0.18em] uppercase font-normal text-[#263B50] font-sans">
                  SPECIALTIES
                </h4>
                <ul className="space-y-2 text-[0.82rem] font-light text-[#4A5055]">
                  {specialtiesLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-[#718779] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: LOCATION & PRACTICE DETAILS */}
              <div className="space-y-3.5">
                <h4 className="text-[0.72rem] tracking-[0.18em] uppercase font-normal text-[#263B50] font-sans">
                  PRACTICE LOCATION
                </h4>
                <div className="space-y-3 text-[0.82rem] font-light text-[#4A5055]">
                  <p className="leading-[1.65]">
                    <span className="font-normal block text-[#263B50]">Dr. Maya Reynolds, PsyD</span>
                    123th Street 45 W
                    <br />
                    Santa Monica, CA 90401
                  </p>
                  
                  <div className="pt-1 space-y-1">
                    <p className="font-normal text-[0.75rem] uppercase tracking-[0.12em] text-[#718779]">
                      In-Person &amp; Telehealth
                    </p>
                    <p className="italic text-[#4A5055] text-[0.80rem] leading-[1.6]">
                      Offering in-person therapy in Santa Monica and secure virtual sessions throughout California.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar (Midnight Blue theme #263B50) */}
      <div className="bg-[#263B50] text-[#F7F5F0] py-6 px-6 border-t border-[#1d2d3e] text-xs font-light">
        <div className="max-w-[1450px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 text-[#E4E9E3]">
            <span>&copy; 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</span>
          </div>

          <div className="text-[#E4E9E3] text-xs">
            Santa Monica, CA &bull; Telehealth across California
          </div>
        </div>
      </div>
    </footer>
  );
}
