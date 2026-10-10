import React from "react";
import Image from "next/image";

export default function MidpageQuoteSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-stone-200/40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Wide Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] shadow-sm overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
                alt="Therapy space with peaceful view"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          {/* Right Quote Matching Screenshot 5 */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-light text-[#2b2b2b] leading-[1.25]">
              Honoring where you’ve
              <br />
              been{" "}
              <span className="script-accent text-[0.75em] text-[#86b1b1] align-middle px-1">
                &amp;
              </span>{" "}
              helping shape
              <br />
              where you’re headed.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
