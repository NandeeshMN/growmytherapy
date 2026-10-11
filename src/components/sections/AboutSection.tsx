import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F7F5F0] py-20 md:py-28 border-b border-[#D9DED8]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[2/3] overflow-hidden rounded-sm shadow-sm border border-[#D9DED8]">
              <Image
                src="/images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </div>

          {/* Biography Text Column */}
          <div className="lg:col-span-7 space-y-6 text-[#4A5055]">
            <div>
              <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.2em] uppercase font-medium text-[#718779] mb-2">
                About My Practice
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-light text-[#263B50] leading-[1.18]">
                Meet Dr. Maya Reynolds
              </h2>
              <p className="text-base sm:text-lg font-serif italic text-[#4A5055] mt-2 pb-4 border-b border-[#D9DED8]">
                Licensed Clinical Psychologist, PsyD
              </p>
            </div>

            <div className="space-y-4 text-[#4A5055] font-light text-[0.96rem] sm:text-[1rem] leading-[1.8] text-justify">
              <p>
                I am a licensed clinical psychologist based in Santa Monica, California, offering thoughtful therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <p>
                My work centers on anxiety, panic, trauma, and burnout. Clients frequently arrive feeling &ldquo;functional&rdquo; on the outside while quietly struggling with constant worry, physical tension, difficulty sleeping, or a sense that they are always bracing for something to go wrong. I take a collaborative, compassionate, and grounded approach where sessions are structured enough to feel supportive while leaving ample space for reflection and depth.
              </p>
              <p>
                I integrate evidence-based modalities—including Cognitive Behavioral Therapy (CBT), EMDR, and mindfulness-based practices—to help you understand both the emotional and physiological sides of your experience. Because trauma work and nervous system recovery require deep care, therapy is always personalized and paced with close attention to safety, stabilization, and emotional readiness.
              </p>
              <p>
                Whether you visit my quiet, sunlit Santa Monica office or connect via secure telehealth throughout California, our goal is not just symptom relief, but cultivating lasting resilience, insight, and a grounded relationship with yourself.
              </p>
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="#contact"
                className="inline-block bg-[#263B50] text-[#F7F5F0] px-7 py-3 text-[0.74rem] uppercase tracking-[0.18em] font-medium rounded-full hover:bg-[#1d2d3e] transition-colors duration-200"
              >
                Schedule a Consultation
              </Link>
              <span className="text-[0.74rem] tracking-[0.12em] uppercase text-[#718779]">
                Santa Monica, CA &bull; Telehealth Across California
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
