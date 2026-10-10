import React from "react";
import Link from "next/link";

export default function AreasOfExpertiseSection() {
  const col1 = [
    { title: "ANXIETY & OVERTHINKING", href: "/anxiety-depression" },
    { title: "PANIC & CHRONIC WORRY", href: "/anxiety-depression" },
    { title: "TRAUMA & PTSD", href: "/trauma-counseling-newbury-park" },
    { title: "BURNOUT & CHRONIC STRESS", href: null },
    { title: "PERFECTIONISM & HIGH ACHIEVEMENT PRESSURE", href: null },
    { title: "EMOTIONAL REGULATION", href: null },
  ];

  const col2 = [
    { title: "CHILDHOOD & RELATIONSHIP TRAUMA", href: "/trauma-counseling-newbury-park" },
    { title: "SLEEP DIFFICULTIES & PHYSICAL TENSION", href: null },
    { title: "SELF-ESTEEM & SELF-CONNECTION", href: null },
    { title: "MINDFULNESS & RESILIENCE", href: null },
    { title: "...AND MORE.", href: null },
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-b border-stone-200/50">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Title */}
          <div className="lg:col-span-4 pt-2">
            <h3 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif font-light text-[#2b2b2b] leading-[1.1]">
              My areas of
              <br />
              <span className="script-accent text-[0.80em] text-[#86b1b1] mt-1.5 block">
                expertise
              </span>
            </h3>
          </div>

          {/* Right Columns with Subtle Dividers matching Screenshot 1 */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-14">
            {/* Column 1 */}
            <div>
              {col1.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#e8e4dc] py-4"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="inline-block text-[0.78rem] tracking-[0.16em] uppercase font-normal text-[#2b2b2b] hover:text-[#86b1b1] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="inline-block text-[0.78rem] tracking-[0.16em] uppercase font-normal text-[#2b2b2b]">
                      {item.title}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div>
              {col2.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#e8e4dc] py-4"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="inline-block text-[0.78rem] tracking-[0.16em] uppercase font-normal text-[#2b2b2b] hover:text-[#86b1b1] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="inline-block text-[0.78rem] tracking-[0.16em] uppercase font-normal text-[#2b2b2b]">
                      {item.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
