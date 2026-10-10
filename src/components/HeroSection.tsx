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
          alt="Therapy office in Santa Monica"
          fill
          priority
          className="object-cover object-right md:object-center"
          sizes="100vw"
        />
        {/* Subtle soft gradient overlay on the left to ensure high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f1ea]/95 via-[#f4f1ea]/80 to-transparent sm:via-[#f4f1ea]/60 md:to-transparent lg:w-[65%]" />
      </div>

      {/* Hero Content on the Left */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28">
        <div className="max-w-xl xl:max-w-2xl flex flex-col items-start space-y-6 sm:space-y-7">
          {/* Top Eyebrow / Label */}
          <p className="text-[0.70rem] sm:text-[0.76rem] tracking-[0.22em] uppercase text-[#3e5652] font-medium">
            In-Person &amp; ONLINE THERAPY IN SANTA MONICA &amp; ACROSS CALIFORNIA
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-serif font-light text-[#2d433e] leading-[1.18] tracking-tight">
            <span className="block">Find your way back to</span>
            <span className="block">yourself and begin to</span>
            <span className="block">
              <span className="script-accent text-[0.95em] text-[#86b1b1] font-light align-baseline">
                thrive
              </span>
              .
            </span>
          </h1>

          {/* Narrative Body Text */}
          <p className="text-[#4a5552] font-light text-[0.95rem] sm:text-[1.02rem] leading-[1.75] max-w-lg">
            Compassionate, evidence-based therapy for adults navigating anxiety, trauma, and burnout to feel grounded, heal, and reconnect with themselves.
          </p>

          {/* Pill CTA Button Matching Reference (Deep Green Pill with arrow) */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#2d4e47] hover:bg-[#233f39] text-[#f7f6f2] px-8 py-3.5 rounded-full text-[0.76rem] tracking-[0.16em] uppercase font-medium shadow-sm transition-all duration-300 group"
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
