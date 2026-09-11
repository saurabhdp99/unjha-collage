"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "./Icons";
import { heroSlides } from "@/data/collegeData";

export default function UrbanHeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((p) => (p === 0 ? heroSlides.length - 1 : p - 1));
  const next = () => setIndex((p) => (p + 1) % heroSlides.length);

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="container-shell py-4">
        <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-900 group">
          <div className="relative h-[280px] sm:h-[380px] md:h-[420px]">
            {heroSlides.map((s, i) => (
              <div
                key={s.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={s.src}
                  alt={s.caption}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Caption bar */}
          <div className="absolute bottom-0 inset-x-0 z-20 bg-black/60 text-white text-xs sm:text-sm px-4 py-2.5 flex items-center justify-between gap-3">
            <p className="truncate">{heroSlides[index].caption}</p>
            <p className="font-mono shrink-0">
              {index + 1} / {heroSlides.length}
            </p>
          </div>

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 text-white border border-white/30 flex items-center justify-center hover:bg-black/70"
          >
            <Icon name="ChevronRight" className="w-4 h-4 rotate-180" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 text-white border border-white/30 flex items-center justify-center hover:bg-black/70"
          >
            <Icon name="ChevronRight" className="w-4 h-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-[#1e3a5f]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
