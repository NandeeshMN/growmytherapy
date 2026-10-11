import React from "react";
import Image from "next/image";

export default function OurOfficeSection() {
  return (
    <section id="office" className="bg-[#F7F5F0] py-20 md:py-28 border-b border-[#D9DED8]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Header & Copy */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.2em] uppercase font-medium text-[#718779] mb-2.5">
            OUR OFFICE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif font-light text-[#263B50] leading-[1.18] mb-6">
            A Calm Space to Pause and Reconnect
          </h2>
          <div className="space-y-4 text-[#4A5055] font-light text-[0.98rem] sm:text-[1.02rem] leading-[1.8]">
            <p>
              Therapy offers a space where you can slow down, feel heard, and explore what you&apos;re experiencing without judgment. Dr. Maya Reynolds provides in-person therapy in Santa Monica, California, with a warm, collaborative approach that respects your pace and individual needs.
            </p>
            <p className="text-[#4A5055] italic">
              Prefer meeting from home? Secure telehealth sessions are also available to clients in California.
            </p>
          </div>
        </div>

        {/* Genuine Office Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm border border-[#D9DED8]">
            <Image
              src="/images/office1.jpeg"
              alt="Sunlit therapy office seating area with comfortable armchairs and warm natural light"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm border border-[#D9DED8]">
            <Image
              src="/images/office2.jpeg"
              alt="Quiet counseling space with soothing neutral decor and natural light"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
