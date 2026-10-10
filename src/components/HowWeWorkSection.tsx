import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#dfd4c7] py-20 md:py-28">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] aspect-[4/5] shadow-sm overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
                alt="Counselor portrait"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6 text-[#2b2b2b]">
            <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.16em] uppercase font-normal text-[#2b2b2b]">
              HOW WE WORK
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-light text-[#2b2b2b] leading-[1.18]">
              We’re here to make a difference.
            </h2>

            <p className="text-[#2b2b2b] font-normal text-[0.98rem] leading-[1.7] pt-1">
              The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.
            </p>

            <p className="text-[#3a3a3a] font-light text-[0.96rem] leading-[1.75]">
              Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
            </p>

            <p className="text-[#3a3a3a] font-light text-[0.96rem] leading-[1.75]">
              Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
            </p>

            <div className="pt-3">
              <Link
                href="/therapists-newbury-park"
                className="button-underline text-[0.78rem]"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
