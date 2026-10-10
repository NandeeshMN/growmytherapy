import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentCTASection() {
  return (
    <section className="bg-[#f6f4ee] py-20 md:py-28 border-b border-stone-200/40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Dual Overlapping / Stacked Images */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] h-[400px] sm:h-[460px]">
              {/* Image 1 */}
              <div className="absolute left-0 top-0 w-[65%] h-[80%] shadow-md overflow-hidden z-10">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
                  alt="Therapist session"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 60vw, 320px"
                />
              </div>

              {/* Image 2 (Overlapping offset) */}
              <div className="absolute right-0 bottom-0 w-[65%] h-[80%] shadow-md overflow-hidden z-20">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
                  alt="Therapy discussion"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 60vw, 320px"
                />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.16em] uppercase font-normal text-[#2b2b2b]">
              SCHEDULE AN APPOINTMENT
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-light text-[#2b2b2b] leading-[1.18]">
              Find a therapist who is the right fit for{" "}
              <span className="script-accent text-[1.12em] text-[#86b1b1] align-baseline">
                you
              </span>
              .
            </h2>

            <p className="text-[#444444] font-light text-[0.96rem] leading-[1.75]">
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>

            <p className="text-[#2b2b2b] font-normal text-[0.92rem]">
              Click the button below to schedule an appointment.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="button-underline text-[0.78rem]"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
