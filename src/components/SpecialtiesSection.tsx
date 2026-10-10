import React from "react";
import Link from "next/link";

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Anxiety & Overthinking",
      description:
        "When your mind rarely slows down, even everyday decisions can feel overwhelming. Therapy can help you recognize patterns of worry, manage anxious thoughts, and develop practical tools to feel calmer and more present in your daily life.",
      href: "/anxiety-depression",
    },
    {
      title: "Trauma & EMDR",
      description:
        "Past experiences can continue to affect your sense of safety, relationships, and emotional well-being. Using EMDR and a carefully paced, supportive approach, we'll work toward processing difficult memories and building a greater sense of stability at a pace that feels right for you.",
      href: "/trauma-counseling-newbury-park",
    },
    {
      title: "Burnout & Chronic Stress",
      description:
        "Constantly pushing yourself to meet expectations can leave you feeling emotionally drained and disconnected from yourself. Therapy can help you recognize the patterns contributing to burnout, establish healthier boundaries, and create a more sustainable balance between work and life.",
      href: "/anxiety-depression",
    },
    {
      title: "Perfectionism & Emotional Regulation",
      description:
        "When the pressure to get everything right becomes exhausting, it can be difficult to rest or feel satisfied with what you've accomplished. Together, we'll explore the expectations you place on yourself, develop healthier ways to respond to difficult emotions, and build a more compassionate relationship with yourself.",
      href: "/anxiety-depression",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-stone-200/40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title matching Screenshot 5 */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h3 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif font-light text-[#2b2b2b] leading-[1.15]">
              My{" "}
              <span className="script-accent text-[1.00em] text-[#86b1b1] block mt-2 mb-2 sm:mt-2.5 sm:mb-2.5">
                specialties
              </span>
              include…
            </h3>
          </div>

          {/* Right 2-Column Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {specialties.map((item) => (
              <div key={item.title} className="flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h4 className="text-2xl sm:text-[1.85rem] font-serif font-light text-[#2b2b2b]">
                    {item.title}
                  </h4>
                  <p className="text-[#444444] font-light text-[0.96rem] leading-[1.75]">
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
