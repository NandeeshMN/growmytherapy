import React from "react";

export default function QuoteBannerSection() {
  return (
    <section className="bg-[#263B50] flex items-center justify-center py-20 md:py-28 px-6 border-b border-[#1d2d3e]">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[#F7F5F0] leading-snug md:leading-[1.3] tracking-wide">
          You don&apos;t have to carry anxiety, trauma, or burnout alone.{" "}
          <span className="italic block mt-3 font-serif font-normal text-[#E4E9E3]">
            Your story deserves to be heard, without judgment.
          </span>
        </h2>
      </div>
    </section>
  );
}
