"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "./Icons";

export default function UrbanHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/images/campus_front.jpg",
      alt: "Dr. Ashaben Patel Government Science College Campus",
    },
    {
      src: "/images/convocation.jpg",
      alt: "Annual Degree Convocation Ceremony",
    },
    {
      src: "/images/library.jpg",
      alt: "Central Science Library & Laboratories",
    },
    {
      src: "/images/youth_festival.jpg",
      alt: "Campus Sports & Youth Festival",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="w-full font-sans bg-[#071a2e] relative group">
      {/* PURE IMAGE SLIDER (CLEAN VIEW - NO TEXT OVERLAYS) */}
      <div className="relative w-full h-[340px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-hidden select-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-[#071a2e]/60 hover:bg-[#071a2e]/90 text-white hover:text-[#fde68a] hover:border-[#d97706]/60 transition-all backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous Slide"
        >
          <Icon name="ChevronDown" className="w-5 h-5 rotate-90" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-[#071a2e]/60 hover:bg-[#071a2e]/90 text-white hover:text-[#fde68a] hover:border-[#d97706]/60 transition-all backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next Slide"
        >
          <Icon name="ChevronDown" className="w-5 h-5 -rotate-90" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#071a2e]/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "w-8 bg-[#d97706] shadow-sm"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
