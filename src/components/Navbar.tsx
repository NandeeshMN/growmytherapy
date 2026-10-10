"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [methodsOpen, setMethodsOpen] = useState(false);

  const teamMembers = [
    { name: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
    { name: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
    { name: "Heather Williams-Baumgart, AMFT", href: "/heather-williams-baumgart" },
    { name: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
    { name: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
    { name: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
    { name: "Chad Flores, AMFT", href: "/chad-flores" },
    { name: "Simran Sidhu, AMFT", href: "/simran-sidhu" },
    { name: "Jessica Jauregui, MA, AMFT", href: "/jessica-jauregui" },
  ];

  const specialties = [
    { name: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
    { name: "Trauma", href: "/trauma-counseling-newbury-park" },
    { name: "Special Needs Parenting", href: "/counseling-special-needs-parents-newbury-park" },
    { name: "Couples", href: "/couples-therapy" },
    { name: "Children & Teens", href: "/children-and-teens" },
    { name: "Anxiety & Depression", href: "/anxiety-depression" },
    { name: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
  ];

  const methods = [
    { name: "EMDR", href: "/emdr-therapy-newbury-park" },
    { name: "Brainspotting", href: "/brainspotting" },
    { name: "Somatic Therapy", href: "/somatic-therapy" },
    { name: "Parts Work Therapy", href: "/parts-work-therapy" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f6f4ee] transition-colors">
      <div className="w-full px-8 lg:px-14 py-5 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-60 sm:w-72 md:w-80 lg:w-[320px] h-16 sm:h-20">
            <Image
              src="/dr-maya-reynolds-logo.png"
              alt="Dr. Maya Reynolds - Psychologist Therapy"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 280px, 320px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[0.74rem] tracking-[0.16em] uppercase text-[#2b2b2b] font-normal">
          <Link
            href="/therapists-newbury-park"
            className="hover:text-stone-500 transition-colors py-2"
          >
            About
          </Link>

          <Link
            href="/therapists-newbury-park"
            className="hover:text-stone-500 transition-colors py-2"
          >
            My Approach
          </Link>

          {/* Specialties Dropdown */}
          <div className="relative group">
            <button className="hover:text-stone-500 transition-colors py-2 uppercase tracking-[0.16em]">
              Specialties
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out">
              <div className="w-60 bg-[#f6f4ee] shadow-lg rounded-none border border-stone-200/80 py-2">
                {specialties.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-[0.76rem] tracking-normal normal-case text-[#2b2b2b] hover:bg-stone-200/50 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/faqs"
            className="hover:text-stone-500 transition-colors py-2"
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            className="hover:text-stone-500 transition-colors py-2"
          >
            Contact
          </Link>

          {/* Get Started Button */}
          <Link
            href="/contact"
            className="border border-[#2b2b2b] rounded-full px-6 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-[#f6f4ee] transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2b2b2b] hover:text-stone-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f6f4ee] border-b border-stone-300 px-6 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          <Link
            href="/therapists-newbury-park"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-stone-200/60"
          >
            About
          </Link>

          <Link
            href="/therapists-newbury-park"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-stone-200/60"
          >
            My Approach
          </Link>

          <div className="border-b border-stone-200/60 pb-2">
            <button
              onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
              className="w-full flex items-center justify-between py-2 text-sm tracking-[0.14em] uppercase text-[#2b2b2b]"
            >
              <span>Specialties</span>
              <span>{specialtiesOpen ? "-" : "+"}</span>
            </button>
            {specialtiesOpen && (
              <div className="pl-4 space-y-2 mt-1 mb-2">
                {specialties.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-stone-700 py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-stone-200/60"
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm tracking-[0.14em] uppercase text-[#2b2b2b] border-b border-stone-200/60"
          >
            Contact
          </Link>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center border border-[#2b2b2b] rounded-full py-2 text-xs uppercase tracking-[0.18em] text-[#2b2b2b]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
