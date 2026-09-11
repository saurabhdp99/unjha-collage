"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Icon } from "./Icons";
import { heroSlides, collegeInfo } from "@/data/collegeData";

export default function UrbanHeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((p) => (p + 1) % heroSlides.length), []);
  const prev = useCallback(
    () => setIndex((p) => (p === 0 ? heroSlides.length - 1 : p - 1)),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="College campus photos"
    >
      {/* Viewport-cover slides */}
      <div className="relative h-[68vh] min-h-[440px] max-h-[760px] sm:h-[78vh]">
        {heroSlides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.caption}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[6000ms] ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* Readability overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#152a45]/60 via-transparent to-transparent" />

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/45 text-white border border-white/30 backdrop-blur flex items-center justify-center hover:bg-[#1e3a5f]"
        >
          <Icon name="ChevronRight" className="w-5 h-5 rotate-180" />
        </button>
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/45 text-white border border-white/30 backdrop-blur flex items-center justify-center hover:bg-[#1e3a5f]"
        >
          <Icon name="ChevronRight" className="w-5 h-5" />
        </button>

        {/* Bottom content */}
        <div className="absolute bottom-0 inset-x-0 z-20">
          <div className="px-4 sm:px-8 pb-6 sm:pb-8 max-w-5xl">
            <p className="text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-widest">
              {collegeInfo.name}
            </p>
            <h1
              key={index}
              className="text-white text-xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-1 animate-fadeIn"
            >
              {heroSlides[index].caption}
            </h1>
            {/* Dots + progress */}
            <div className="flex items-center gap-2 mt-4">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-9 bg-amber-400" : "w-2.5 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Progress line */}
          <div className="h-1 bg-white/20">
            <div
              key={index + String(paused)}
              className="h-full bg-amber-400 transition-all"
              style={{
                animation: paused ? "none" : "heroProgress 5.5s linear forwards",
                width: paused ? "100%" : undefined,
              }}
            />
          </div>
          <style>{`@keyframes heroProgress { from { width: 0% } to { width: 100% } }`}</style>
        </div>
      </div>
    </section>
  );
}
