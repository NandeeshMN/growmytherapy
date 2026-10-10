import React from "react";
import Image from "next/image";

export default function WhoWeHelpSection() {
  const cards = [
    {
      title: "Adults",
      image:
        "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg",
      description:
        "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    },
    {
      title: "Couples",
      image:
        "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg",
      description:
        "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    },
    {
      title: "Children & Teens",
      image:
        "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg",
      description:
        "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-serif font-light text-[#2b2b2b]">
            Who we{" "}
            <span className="script-accent text-[0.50em] text-[#86b3b3] ml-2.5 sm:ml-3 align-baseline">
              help
            </span>
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col space-y-5">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-[1.85rem] font-serif font-light text-[#2b2b2b]">
                  {card.title}
                </h3>
                <p className="text-[#444444] font-light text-[0.96rem] leading-[1.75]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
