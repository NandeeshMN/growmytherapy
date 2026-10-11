import React from "react";
import Link from "next/link";

export default function AppointmentCTASection() {
  return (
    <section className="bg-[#E4E9E3] py-20 md:py-28 border-b border-[#D9DED8]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center space-y-7">
        <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.2em] uppercase font-medium text-[#263B50]">
          TAKE THE FIRST STEP
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-light text-[#263B50] leading-[1.18]">
          Let&apos;s find a path forward,{" "}
          <span className="script-accent text-[0.85em] text-[#718779] align-baseline">
            together
          </span>
          .
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto text-[#4A5055] font-light text-[0.96rem] sm:text-[1rem] leading-[1.8]">
          <p>
            Starting therapy can feel like a big step, especially when you&apos;ve been carrying anxiety, stress, or difficult experiences on your own. You deserve a space where you feel heard, supported, and understood.
          </p>
          <p>
            I offer in-person therapy in Santa Monica and secure telehealth sessions for adults located throughout California. We&apos;ll begin by understanding what brings you to therapy, what you hope to change, and whether my approach feels right for you.
          </p>
          <p>
            You don&apos;t need to have all the answers before reaching out. Taking the first step is enough.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="#contact"
            className="inline-block bg-[#263B50] hover:bg-[#1d2d3e] text-[#F7F5F0] px-8 py-3.5 rounded-full text-[0.76rem] tracking-[0.18em] uppercase font-medium transition-colors shadow-sm"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
