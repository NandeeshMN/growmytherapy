import React from "react";
import Image from "next/image";

export default function MidpageQuoteSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-stone-200/40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Wide Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[1200/937] shadow-sm rounded-sm overflow-hidden">
              <Image
                src="/Honoring%20your%20past.png"
                alt="Honoring your past, healing in the present"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          {/* Right Quote Matching Screenshot 5 */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-light text-[#2b2b2b] leading-[1.25]">
              Honoring your past,
              <br />
              healing in the present,
              <br />
              <span className="script-accent text-[0.85em] text-[#86b1b1] align-middle mr-1.5">
                &amp;
              </span>{" "}
              moving toward a
              <br />
              more grounded future.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
