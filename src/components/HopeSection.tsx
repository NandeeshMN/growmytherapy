import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="bg-[#f6f4ee] py-16 md:py-24 border-b border-stone-200/40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text Area */}
          <div className="lg:col-span-7 space-y-9">
            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-light text-[#2b2b2b] leading-[1.18]">
              You’re holding onto hope that life can be better than it is right now.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
              {/* Left Sub-column */}
              <div className="space-y-5">
                <p className="text-[0.82rem] tracking-[0.14em] uppercase text-[#2b2b2b] font-normal leading-relaxed">
                  AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
                </p>
                <p className="text-[#444444] font-light text-[0.96rem] leading-[1.75]">
                  Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
                </p>
              </div>

              {/* Right Sub-column */}
              <div>
                <p className="text-[#444444] font-light text-[0.96rem] leading-[1.75]">
                  First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/5] shadow-sm overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
                alt="Therapy office interior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
