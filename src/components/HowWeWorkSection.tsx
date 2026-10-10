import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#dfd4c7] py-20 md:py-28">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-[#2b2b2b] order-2 lg:order-1">
            <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.16em] uppercase font-normal text-[#2b2b2b]">
              HOW I WORK
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-serif font-light text-[#2b2b2b] leading-[1.18]">              Therapy that meets you where you are.
            </h2>

            <p className="text-[#2b2b2b] font-normal text-[0.98rem] leading-[1.7] pt-1">
              Many of the people I work with spend so much time managing responsibilities, meeting expectations, and pushing through difficult emotions that their own needs get lost along the way.
            </p>

            <p className="text-[#3a3a3a] font-light text-[0.96rem] leading-[1.75]">
              Therapy offers a space to slow down, feel heard, and understand what you&apos;re experiencing without judgment. I take a personalized, collaborative approach because your experiences, challenges, and goals are uniquely yours. Together, we&apos;ll explore the patterns behind anxiety, trauma, or burnout and find practical ways to navigate them.
            </p>

            <p className="text-[#3a3a3a] font-light text-[0.96rem] leading-[1.75]">
              Some sessions may focus on building tools to manage overwhelming thoughts and emotions. Others may create space to process past experiences, understand your responses, or reconnect with parts of yourself you&apos;ve neglected. Using evidence-based approaches such as CBT, EMDR, and mindfulness-based practices, we&apos;ll work at a pace that feels safe and manageable for you.
            </p>

            <p className="text-[#3a3a3a] font-light text-[0.96rem] leading-[1.75]">
              My goal isn&apos;t simply to help you get through difficult moments. It&apos;s to help you build lasting resilience, feel more grounded in everyday life, and develop a healthier relationship with yourself. You don&apos;t need to have everything figured out before you begin—we can start wherever you are.
            </p>

            <div className="pt-3">
              <Link
                href="/therapists-newbury-park"
                className="button-underline text-[0.78rem]"
              >
                LEARN MORE ABOUT ME
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[480px] aspect-square shadow-md rounded-sm overflow-hidden">
              <Image
                src="/together.png"
                alt="Therapy together"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
