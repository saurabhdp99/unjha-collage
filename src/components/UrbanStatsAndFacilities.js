"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "./Icons";
import { facilities } from "@/data/collegeData";

export default function UrbanStatsAndFacilities({ lang }) {
  const facilityImages = {
    library: "/images/library.jpg",
    "computer-lab": "/images/lab.jpg",
    "sports-gym": "/images/sports.jpg",
    "nss-ncc": "/images/youth_festival.jpg",
    auditorium: "/images/convocation.jpg",
    hostel: "/images/campus_front.jpg",
  };

  return (
    <section id="facilities-section" className="py-14 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b-2 border-slate-200 pb-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#800000] mb-1">
              {lang === "gu" ? "કેમ્પસ આંતરમાળખું અને સંસાધનો" : "Campus Infrastructure & Learning Resources"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b3557] tracking-tight">
              {lang === "gu" ? "વિદ્યાર્થી સુવિધાઓ અને સંસાધનો" : "State-of-the-Art Student Facilities"}
            </h2>
          </div>
        </div>

        {/* Facilities 6-Card Grid with REAL PHOTO THUMBNAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac) => {
            const imgPath = facilityImages[fac.id] || "/images/campus_front.jpg";

            return (
              <div
                key={fac.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-[#800000] shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Header with Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={imgPath}
                    alt={fac.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-black/50 text-amber-300 backdrop-blur-sm border border-white/20 z-20">
                    <Icon name={fac.icon} className="w-5 h-5" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white z-20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
                      {fac.stats.split("|")[0]}
                    </span>
                    <h3 className="text-base font-black text-white leading-tight drop-shadow-md">
                      {lang === "gu" ? fac.titleGu : fac.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {fac.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="text-emerald-700 font-bold truncate">{fac.stats.split("|")[1] || "All Students"}</span>
                    <span className="text-[#800000] font-bold group-hover:underline">Explore →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
