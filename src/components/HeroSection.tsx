import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-[#f6f4ee] pt-4 pb-20 md:pb-28 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative min-h-[580px] lg:min-h-[660px] flex flex-col lg:flex-row items-center justify-between">

          {/* Left Tall Image */}
          <div className="w-full lg:w-[32%] xl:w-[30%] flex justify-center lg:justify-start mb-10 lg:mb-0">
            <div className="relative w-full max-w-[430px] aspect-[3/4] shadow-sm overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
                alt="counseling newbury park ca"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 430px"
              />
            </div>
          </div>

          {/* Center Main Text */}
          <div className="w-full lg:w-[46%] xl:w-[48%] lg:px-6 xl:px-10 flex flex-col items-start space-y-7 z-10">
            <div className="space-y-4 max-w-xl">
              <p className="text-[0.72rem] sm:text-[0.76rem] tracking-[0.16em] uppercase text-[#2b2b2b] font-normal leading-relaxed">
                ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS
                <br />
                CA
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-serif font-light text-[#2b2b2b] leading-[1.12]">
                Rebuild your foundation on solid ground and finally begin to{" "}
                <span className="script-accent text-[0.50em] text-[#86b1b1] font-light ml-3 sm:ml-3.5 align-baseline">
                  thrive
                </span>
                .
              </h1>
            </div>

            <p className="text-[#444444] font-light text-[0.95rem] sm:text-[1rem] leading-relaxed max-w-md">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="button-underline text-[0.72rem] tracking-[0.18em]"
              >
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </div>

          {/* Right Image Pinned to Right Edge */}
          <div className="hidden lg:block lg:w-[22%] xl:w-[20%] relative self-stretch">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[220px] xl:w-[260px] h-[480px] xl:h-[540px] shadow-sm overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
                alt="child therapy"
                fill
                priority
                className="object-cover object-left"
                sizes="260px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
