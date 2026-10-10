import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const teamMembers = [
    { name: "Jennifer Anderson", href: "/jennifer-anderson" },
    { name: "Heather Williams-Baumgart", href: "/heather-williams-baumgart" },
    { name: "Autumn Bodily", href: "/autumn-bodily" },
    { name: "Candace Bletscher", href: "/candace-bletscher" },
    { name: "Samantha Johnson", href: "/samantha-johnson" },
    { name: "Rosa Gomez", href: "/rosa-gomez" },
    { name: "Chad Flores", href: "/chad-flores" },
    { name: "Simran Sidhu", href: "/simran-sidhu" },
    { name: "Jessica Jauregui", href: "/jessica-jauregui" },
  ];

  return (
    <footer className="w-full">
      {/* Top Footer Section (White theme matching reference) */}
      <div className="bg-white pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* Column 1: Logo & Intro text (Logo sized to match reference + fitted text) */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start">
              <div className="w-full max-w-[440px]">
                <div className="relative w-[360px] sm:w-[390px] max-w-full aspect-[2225/525] mb-4">
                  <Image
                    src="/conejo-valley-counseling-logo-full.png"
                    alt="Conejo Valley Family Counseling"
                    fill
                    className="object-contain object-left"
                    priority
                    sizes="(max-width: 768px) 100vw, 390px"
                  />
                </div>

                <p className="text-[12px] sm:text-[12.5px] text-[#404040] font-light leading-[1.7] w-full">
                  We make getting started feel simple and comfortable. Visit my office in Santa Monica or schedule a secure virtual therapy session from anywhere in California. We&apos;ll find an approach that fits your needs and feels right for you.
                </p>
              </div>
            </div>

            {/* Right Columns: NAVIGATE, OUR TEAM, CONTACT with equal spacing */}
            <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pt-1 lg:pt-2">
              
              {/* Column 2: NAVIGATE */}
              <div className="space-y-3.5">
                <h4 className="text-[0.72rem] tracking-[0.18em] uppercase font-normal text-[#2b2b2b] font-sans">
                  NAVIGATE
                </h4>
                <ul className="space-y-1.5 text-[0.82rem] font-light text-[#333333]">
                  <li>
                    <Link href="/" className="hover:text-stone-500 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/therapists-newbury-park" className="hover:text-stone-500 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" className="hover:text-stone-500 transition-colors">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-stone-500 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: OUR TEAM */}
              <div className="space-y-3.5">
                <h4 className="text-[0.72rem] tracking-[0.18em] uppercase font-normal text-[#2b2b2b] font-sans">
                  OUR TEAM
                </h4>
                <ul className="space-y-1.5 text-[0.82rem] font-light text-[#333333]">
                  {teamMembers.map((member) => (
                    <li key={member.name}>
                      <Link
                        href={member.href}
                        className="hover:text-stone-500 transition-colors"
                      >
                        {member.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: CONTACT */}
              <div className="space-y-3.5">
                <h4 className="text-[0.72rem] tracking-[0.18em] uppercase font-normal text-[#2b2b2b] font-sans">
                  CONTACT
                </h4>
                <div className="space-y-3 text-[0.82rem] font-light text-[#333333]">
                  <p className="leading-[1.65]">
                    925 Broadbeck Dr
                    <br />
                    Suites 200 and 225
                    <br />
                    Newbury Park, CA 91320
                  </p>
                  <p className="leading-[1.65]">
                    <a
                      href="mailto:info@conejovalleycounseling.com"
                      className="text-[#333333] hover:text-stone-500 transition-colors block"
                    >
                      info@conejovalleycounseling.com
                    </a>
                    <a
                      href="tel:8052423120"
                      className="text-[#333333] hover:text-stone-500 transition-colors block"
                    >
                      805.242.3120
                    </a>
                  </p>
                  <p className="italic text-[#444444] text-[0.82rem] leading-[1.6] pt-1 max-w-[260px]">
                    Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar (Dark theme #2b2b2b) */}
      <div className="bg-[#2b2b2b] text-[#dfd4c7] py-6 px-6 border-t border-stone-800 text-xs font-light">
        <div className="max-w-[1450px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 text-stone-400">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>

          <div className="text-stone-400">
            Website by{" "}
            <a
              href="https://www.walkerstrategyco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfd4c7] hover:underline"
            >
              Walker Strategy Co.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
