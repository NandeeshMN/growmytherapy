import React from "react";
import Link from "next/link";

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Anxiety & Panic Therapy",
      description:
        "When your mind rarely slows down, constant worry, physical tension, and difficulty sleeping can take a toll. Therapy helps you recognize patterns of anxiety, understand both emotional and physiological stress responses, and develop practical tools to feel calm, grounded, and present.",
      href: "#contact",
    },
    {
      title: "Trauma & EMDR Therapy",
      description:
        "Whether you are carrying the impact of single-incident trauma or complex, long-standing experiences from earlier in life, trauma work is paced carefully with an emphasis on safety, stabilization, and emotional readiness. Using EMDR and mindfulness practices, we work toward processing difficult memories and building greater stability.",
      href: "#contact",
    },
    {
      title: "Burnout & Chronic Stress Support",
      description:
        "For professionals, entrepreneurs, and high-achievers feeling exhausted from constant internal pressure, perfectionism, and pushing through stress. Therapy provides a dedicated space to slow down, ease the pressure to be perfect, establish healthier boundaries, and create sustainable ways of living and working.",
      href: "#contact",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-[#D9DED8]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title matching Screenshot 5 */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif font-light text-[#263B50] leading-[1.15]">
              My{" "}
              <span className="script-accent text-[1.00em] text-[#718779] block mt-2 mb-2 sm:mt-2.5 sm:mb-2.5">
                specialties
              </span>
              include…
            </h2>
          </div>

          {/* Right 2-Column Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {specialties.map((item) => (
              <div key={item.title} className="flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-[1.85rem] font-serif font-light text-[#263B50]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5055] font-light text-[0.96rem] leading-[1.75]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={item.href}
                    className="button-underline text-[0.78rem]"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
