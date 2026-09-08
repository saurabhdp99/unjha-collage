"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "./Icons";
import { marqueeAnnouncements, collegeInfo } from "@/data/collegeData";

export default function UrbanHeroSlider({ lang, onNavigateSection }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: lang === "gu" ? "વિજ્ઞાન શિક્ષણ અને સંશોધનમાં અગ્રેસર" : "Advancing Science, Research & Academic Excellence",
      subtitle: lang === "gu" ? "ડૉ. આશાબેન પટેલ સરકારી વિજ્ઞાન કોલેજ, ઊંઝા (જી. મહેસાણા)" : "Dr. Ashaben Patel Government Science College, Unjha (Dist. Mehsana)",
      badge: lang === "gu" ? "શિક્ષણ વિભાગ, ગુજરાત સરકાર • એમ. આર. એસ. કેમ્પસ" : "Govt. of Gujarat • MRS Highschool Campus",
      image: "/images/campus_front.jpg",
      highlight: "Government Science College • HNGU Code: 879",
    },
    {
      title: lang === "gu" ? "હેમચંદ્રાચાર્ય ઉત્તર ગુજરાત યુનિવર્સિટી પરિણામોમાં શ્રેષ્ઠ" : "Consistently Leading in HNGU University Exam Results",
      subtitle: lang === "gu" ? "B.Sc. કેમિસ્ટ્રી, ફિઝિક્સ, મેથેમેટિક્સ અને બોટની અભ્યાસક્રમો" : "Offering B.Sc. Degrees in Chemistry, Physics, Mathematics & Botany",
      badge: lang === "gu" ? "HNGU કોલેજ કોડ: ૮૭૯ • પાટણ" : "HNGU College Code: 879 • Patan",
      image: "/images/convocation.jpg",
      highlight: "98.2% University Exam Pass Rate & Distinction Scholars",
    },
    {
      title: lang === "gu" ? "અદ્યતન સાયન્સ લેબ્સ & કેન્દ્રીય સંશોધન પુસ્તકાલય" : "Advanced Science Laboratories & Research Library",
      subtitle: lang === "gu" ? "કેમિસ્ટ્રી, ફિઝિક્સ, બોટની લેબોરેટરીઝ અને INFLIBNET N-LIST" : "Sophisticated Wet Chemistry, Laser Physics & Digital Herbarium",
      badge: lang === "gu" ? "અદ્યતન પ્રાયોગિક સંકુલ" : "Modern Scientific Infrastructure",
      image: "/images/library.jpg",
      highlight: "Fume Hoods, Laser Darkroom, Digital Spectrophotometers",
    },
    {
      title: lang === "gu" ? "રાજ્ય વિજ્ઞાન મેળો, રમતગમત અને NSS યુવા પ્રવૃત્તિઓ" : "State Science Fairs, NSS Leadership & Campus Sports",
      subtitle: lang === "gu" ? "એમ. આર. એસ. હાઇસ્કૂલ કેમ્પસ રમતગમત મેદાન અને સર્વાંગી વિકાસ" : "Active Scientific Temper & Holistic Student Personality at MRS Campus",
      badge: lang === "gu" ? "સર્વાંગી વિદ્યાર્થી વિકાસ" : "Holistic Student Development",
      image: "/images/youth_festival.jpg",
      highlight: "Winners in HNGU Inter-College Science & Sports Meets",
    },
  ];

  // Auto slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full font-sans">
      {/* 1. SLIDER BANNER WITH REAL BACKGROUND IMAGES */}
      <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden select-none bg-slate-950">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            } text-white px-6 sm:px-12`}
          >
            {/* Background Image with Dark Vignette Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[8000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b2b]/90 via-[#0b1b2b]/75 to-[#0b1b2b]/85"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold mb-4 shadow-lg">
                <Icon name="Award" className="w-4 h-4 text-amber-400" />
                <span>{slide.badge}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3 sm:mb-4 text-white drop-shadow-lg">
                {slide.title}
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-slate-100 font-medium max-w-3xl mx-auto mb-6 drop-shadow-md">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigateSection("departments")}
                  className="px-6 py-2.5 sm:py-3 rounded-lg bg-[#800000] hover:bg-[#600000] text-white font-extrabold text-xs sm:text-sm shadow-xl transition-transform hover:scale-105 flex items-center gap-2 border border-amber-400/50"
                >
                  <Icon name="BookOpen" className="w-4 h-4 text-amber-300" />
                  <span>{lang === "gu" ? "અભ્યાસક્રમો અને વિભાગો જુઓ" : "Explore Academic Programs"}</span>
                </button>

                <button
                  onClick={() => onNavigateSection("contact-section")}
                  className="px-6 py-2.5 sm:py-3 rounded-lg bg-black/40 hover:bg-black/60 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/40 transition-all flex items-center gap-2 shadow-lg"
                >
                  <Icon name="MapPin" className="w-4 h-4 text-amber-300" />
                  <span>{lang === "gu" ? "કેમ્પસ મુલાકાત & સંપર્ક" : "Campus Location & Helpdesk"}</span>
                </button>
              </div>

              {/* Slide highlight subtext */}
              <div className="mt-5 text-xs text-amber-300 font-semibold tracking-wide drop-shadow-sm">
                ✦ {slide.highlight}
              </div>
            </div>
          </div>
        ))}

        {/* Previous / Next Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-sm border border-white/20"
          aria-label="Previous Slide"
        >
          <Icon name="ChevronDown" className="w-5 h-5 rotate-90" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-sm border border-white/20"
          aria-label="Next Slide"
        >
          <Icon name="ChevronDown" className="w-5 h-5 -rotate-90" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide ? "w-8 bg-amber-400 shadow-md" : "w-2.5 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. FLASH NEWS / LATEST CIRCULAR MARQUEE */}
      <div className="bg-[#800000] text-white py-2 px-4 flex items-center shadow-md border-y-2 border-amber-500 overflow-hidden">
        {/* Flash Label */}
        <div className="flex items-center gap-2 pr-4 border-r-2 border-amber-500 font-extrabold uppercase tracking-wider text-xs sm:text-sm text-amber-300 shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>
          <Icon name="AlertCircle" className="w-4 h-4 text-amber-300" />
          <span>{lang === "gu" ? "તાજી સૂચનાઓ / ન્યૂઝ ફ્લેશ" : "Latest Notices & News Flash"}</span>
        </div>

        {/* Scrolling News */}
        <div className="overflow-hidden whitespace-nowrap w-full pl-4 text-xs sm:text-sm font-medium">
          <div className="animate-marquee inline-block text-slate-100">
            {marqueeAnnouncements.map((news, index) => (
              <span
                key={index}
                onClick={() => onNavigateSection("notice-section")}
                className="mx-6 inline-flex items-center gap-2 cursor-pointer hover:text-amber-300 transition-colors"
              >
                <span>{news}</span>
                <span className="text-amber-400 font-bold">★★★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
