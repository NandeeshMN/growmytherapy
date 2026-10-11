"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who do you typically work with?",
    answer:
      "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware individuals—including entrepreneurs, creatives, and professionals—who may appear functional on the outside while internally feeling exhausted, caught in overthinking, or emotionally on edge.",
  },
  {
    question: "How do you help clients navigating anxiety and burnout?",
    answer:
      "Clients frequently come to me struggling with constant worry, physical tension in their body, difficulty sleeping, or a persistent sense that they are always bracing for something to go wrong. For those experiencing burnout, perfectionism, and high internal pressure, therapy provides a dedicated space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive while still leaving ample space for reflection and depth. I believe therapy works best when clients feel respected, understood, and actively involved in the process—aiming not just for symptom relief, but for insight, resilience, and a stronger relationship with yourself over time.",
  },
  {
    question: "What therapeutic modalities do you integrate, including CBT and EMDR?",
    answer:
      "I integrate evidence-based methods such as Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques. This combination helps clients understand and address both the emotional and physiological sides of what they are experiencing.",
  },
  {
    question: "How is trauma work approached and paced?",
    answer:
      "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns stemming from childhood, relationships, or chronic stress. My approach is paced carefully, with a strong emphasis on safety, stabilization, and emotional readiness so you feel more regulated in daily life—not just during sessions.",
  },
  {
    question: "Do you offer in-person sessions in Santa Monica or telehealth?",
    answer:
      "I offer both in-person therapy from my Santa Monica office (located at 123th Street 45 W, Santa Monica, CA 90401) and secure telehealth sessions for clients located anywhere in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#F7F5F0] py-20 md:py-28 border-b border-[#D9DED8]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-[0.74rem] sm:text-[0.78rem] tracking-[0.2em] uppercase font-medium text-[#718779] mb-2.5">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-light text-[#263B50] leading-[1.18]">
            Questions &amp; Clarity
          </h2>
          <p className="text-[#4A5055] font-light text-[0.96rem] sm:text-[1rem] leading-[1.7] mt-3">
            Helpful information about my practice, therapeutic approaches, and what to expect.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#D9DED8] border-y border-[#D9DED8]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#263B50] group-hover:text-[#718779] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#4A5055] group-hover:text-[#263B50] transition-transform duration-200">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#263B50]" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-4 sm:pr-8 text-[#4A5055] font-light text-[0.95rem] sm:text-[0.98rem] leading-[1.75] text-justify">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
