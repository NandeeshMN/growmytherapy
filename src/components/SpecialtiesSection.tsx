import React from "react";
import Link from "next/link";

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Trauma",
      description:
        "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
      href: "/trauma-counseling-newbury-park",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
      href: "/emdr-therapy-newbury-park",
    },
    {
      title: "Dissociation",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
      href: "/dissociative-identity-disorder-therapist-newbury-park",
    },
    {
      title: "Special Needs Parenting",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
      href: "/counseling-special-needs-parents-newbury-park",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-stone-200/40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title matching Screenshot 5 */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h3 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif font-light text-[#2b2b2b] leading-[1.15]">
              Our{" "}
              <span className="script-accent text-[1.18em] text-[#86b1b1] block mt-2 mb-2 sm:mt-2.5 sm:mb-2.5">
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
