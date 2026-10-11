"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);

  const specialties = [
    { name: "Anxiety & Panic Therapy", href: "#specialties" },
    { name: "Trauma & EMDR Therapy", href: "#specialties" },
    { name: "Burnout & Chronic Stress", href: "#specialties" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F0] border-b border-[#D9DED8]/60 transition-colors">
      <div className="w-full px-8 lg:px-14 py-5 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-60 sm:w-72 md:w-80 lg:w-[320px] h-16 sm:h-20">
            <Image
              src="/images/dr-maya-reynolds-logo.png"
              alt="Dr. Maya Reynolds, PsyD logo"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 280px, 320px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[0.74rem] tracking-[0.16em] uppercase text-[#263B50] font-normal">
          <Link
            href="#about"
            className="hover:text-[#718779] transition-colors py-2"
          >
            About
          </Link>

          <Link
            href="#approach"
            className="hover:text-[#718779] transition-colors py-2"
          >
            My Approach
          </Link>

          {/* Specialties Dropdown */}
          <div className="relative group">
            <button className="hover:text-[#718779] transition-colors py-2 uppercase tracking-[0.16em]">
              Specialties
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out">
              <div className="w-60 bg-[#F7F5F0] shadow-lg rounded-none border border-[#D9DED8] py-2">
                {specialties.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-[0.76rem] tracking-normal normal-case text-[#4A5055] hover:bg-[#E4E9E3]/60 hover:text-[#263B50] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="#faqs"
            className="hover:text-[#718779] transition-colors py-2"
          >
            FAQs
          </Link>

          <Link
            href="#contact"
            className="hover:text-[#718779] transition-colors py-2"
          >
            Contact
          </Link>

          {/* Get Started Button */}
          <Link
            href="#contact"
            className="border border-[#263B50] rounded-full px-6 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[#263B50] hover:bg-[#263B50] hover:text-[#F7F5F0] transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#263B50] hover:text-[#718779] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F0] border-b border-[#D9DED8] px-6 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm tracking-[0.14em] uppercase text-[#263B50] border-b border-[#D9DED8]/60"
          >
            About
          </Link>

          <Link
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm tracking-[0.14em] uppercase text-[#263B50] border-b border-[#D9DED8]/60"
          >
            My Approach
          </Link>

          <div className="border-b border-[#D9DED8]/60 pb-2">
            <button
              onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
              className="w-full flex items-center justify-between py-2 text-sm tracking-[0.14em] uppercase text-[#263B50]"
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
                    className="block text-xs text-[#4A5055] py-1 hover:text-[#263B50]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm tracking-[0.14em] uppercase text-[#263B50] border-b border-[#D9DED8]/60"
          >
            FAQs
          </Link>

          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm tracking-[0.14em] uppercase text-[#263B50] border-b border-[#D9DED8]/60"
          >
            Contact
          </Link>

          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center border border-[#263B50] rounded-full py-2 text-xs uppercase tracking-[0.18em] text-[#263B50] hover:bg-[#263B50] hover:text-[#F7F5F0]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
