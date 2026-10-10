import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[720px] xl:min-h-[780px] flex items-center overflow-hidden">
      {/* Background Image Matching Reference */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-therapy-office.jpg"
          alt="Sunlit therapy office interior with comfortable seating and natural light"
          fill
          priority
          className="object-cover object-right md:object-center"
          sizes="100vw"
        />
        {/* Subtle soft gradient overlay on the left to ensure high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F0]/95 via-[#F7F5F0]/85 to-transparent sm:via-[#F7F5F0]/65 md:to-transparent lg:w-[65%]" />
      </div>

      {/* Hero Content on the Left */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28">
        <div className="max-w-xl xl:max-w-2xl flex flex-col items-start space-y-6 sm:space-y-7">
          {/* Top Eyebrow / Label */}
          <p className="text-[0.70rem] sm:text-[0.76rem] tracking-[0.22em] uppercase text-[#718779] font-medium">
            In-Person &amp; ONLINE THERAPY IN SANTA MONICA &amp; ACROSS CALIFORNIA
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] xl:text-[3.3rem] font-serif font-light text-[#263B50] leading-[1.18] tracking-tight">
            Anxiety, Trauma &amp; Burnout Therapy in Santa Monica, California
          </h1>

          {/* Supporting Emotional Subtitle */}
          <p className="text-lg sm:text-xl font-serif font-light italic text-[#4A5055]">
            Find your way back to yourself and begin to{" "}
            <span className="script-accent text-[1.1em] text-[#718779] font-light not-italic">
              thrive
            </span>
            .
          </p>

          {/* Narrative Body Text */}
          <p className="text-[#4A5055] font-light text-[0.95rem] sm:text-[1.02rem] leading-[1.75] max-w-lg">
            Compassionate, evidence-based therapy for adults navigating anxiety, trauma, and burnout to feel grounded, heal, and reconnect with themselves.
          </p>

          {/* Pill CTA Button (Midnight Blue with subtle hover) */}
          <div className="pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#263B50] hover:bg-[#1d2d3e] text-[#F7F5F0] px-8 py-3.5 rounded-full text-[0.76rem] tracking-[0.16em] uppercase font-medium shadow-sm transition-all duration-300 group"
            >
              <span>Get Started</span>
              <span className="text-base leading-none group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
