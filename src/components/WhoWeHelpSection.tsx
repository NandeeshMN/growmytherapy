import React from "react";
import Image from "next/image";

export default function WhoWeHelpSection() {
  const cards = [
    {
      title: "Anxiety & Overthinking",
      image: "/Anxiety%20%26%20Overthinking.png",
      description:
        "For adults who feel caught in cycles of worry, constant mental noise, or the pressure to always have everything under control. Find space to slow down, feel grounded, and reconnect with the present.",
    },
    {
      title: "Trauma & Past Experiences",
      image: "/Trauma%20%26%20Past%20Experiences.png",
      description:
        "For adults carrying the effects of difficult experiences, painful relationships, or long-standing emotional patterns. Work toward a greater sense of safety, understanding, and emotional balance at your own pace.",
    },
    {
      title: "Burnout & Perfectionism",
      image: "/Burnout%20%26%20Perfectionism.png",
      description:
        "For professionals, entrepreneurs, and creatives who feel exhausted from constantly pushing themselves. Rediscover your needs, ease the pressure to be perfect, and build a more sustainable way of living.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-serif font-light text-[#2b2b2b]">
            Who I{" "}
            <span className="script-accent text-[0.70em] text-[#86b3b3] ml-2.5 sm:ml-3 align-baseline">
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
