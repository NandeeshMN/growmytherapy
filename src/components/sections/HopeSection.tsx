import React from "react";

export default function HopeSection() {
  return (
    <section className="bg-[#E4E9E3] py-16 md:py-24 border-b border-[#D9DED8]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="space-y-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.2em] uppercase text-[#263B50] font-medium mb-3">
              Therapy that meets you with understanding and care
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-light text-[#263B50] leading-[1.18]">
              You deserve a life that feels calmer, fuller, and more like your own.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 pt-2 border-t border-[#D9DED8]">
            <p className="text-[#4A5055] font-light text-[0.98rem] sm:text-[1.02rem] leading-[1.8] text-justify">
              Whether you&apos;re navigating anxiety, working through past experiences, or feeling exhausted by the pressure to keep everything together, you deserve a space where you can slow down and feel understood.
            </p>
            <p className="text-[#4A5055] font-light text-[0.98rem] sm:text-[1.02rem] leading-[1.8] text-justify">
              You don&apos;t have to figure everything out on your own. Together, we can create space for reflection, build practical tools for everyday life, and help you move toward greater balance, resilience, and connection with yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
