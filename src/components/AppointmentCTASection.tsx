import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentCTASection() {
  return (
    <section className="bg-[#f6f4ee] py-20 md:py-28 border-b border-stone-200/40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] aspect-square shadow-md rounded-sm overflow-hidden">
              <Image
                src="/together.png"
                alt="Therapy session together"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.16em] uppercase font-normal text-[#2b2b2b]">
              TAKE THE FIRST STEP
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-light text-[#2b2b2b] leading-[1.18]">
              Let's find a path forward,{" "}
              <span className="script-accent text-[0.85em] text-[#86b1b1] align-baseline">
                together
              </span>
              .
            </h2>

            <p className="text-[#444444] font-light text-[0.96rem] leading-[1.75]">
              Starting therapy can feel like a big step, especially when you've been carrying anxiety, stress, or difficult experiences on your own. You deserve a space where you feel heard, supported, and understood..
            </p>

            <p className="text-[#444444] font-light text-[0.96rem] leading-[1.75]">
              I offer in-person therapy in Santa Monica and secure telehealth sessions for adults located in California. We'll begin by understanding what brings you to therapy, what you hope to change, and whether my approach feels right for you.
            </p>

            <p className="text-[#444444] font-light text-[0.96rem] leading-[1.75]">
              You don't need to have all the answers before reaching out. Taking the first step is enough,
              <br />Click the button below to Get In Touch
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="button-underline text-[0.78rem]"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
