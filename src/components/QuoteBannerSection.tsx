import React from "react";
import Image from "next/image";

export default function QuoteBannerSection() {
  return (
    <section className="relative min-h-[420px] md:min-h-[500px] flex items-center justify-center py-24 md:py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
        alt="Background texture"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-brightness-75" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[#f7f5f0] leading-snug md:leading-[1.3] tracking-wide">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <span className="italic block mt-3 font-serif font-normal text-stone-200">
            Nothing will be too heavy for us to carry together.
          </span>
        </h2>
      </div>
    </section>
  );
}
