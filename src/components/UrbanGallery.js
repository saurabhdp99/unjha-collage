"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";

export default function UrbanGallery({ lang }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const galleryItems = [
    {
      title: lang === "gu" ? "HNGU ઉત્તર ઝોન યુવા મહોત્સવ વિજેતા ટ્રોફી ૨૦૨૫" : "HNGU North Zone Inter-College Youth Festival Champions",
      category: "Youth Festival",
      date: "Feb 2025",
      image: "/images/youth_festival.jpg",
      icon: "Trophy",
    },
    {
      title: lang === "gu" ? "વાર્ષિક પદવીદાન સમારોહ અને ગોલ્ડ મેડલિસ્ટ સન્માન" : "Annual Degree Convocation & Gold Medalist Felicitation",
      category: "Events",
      date: "Jan 2025",
      image: "/images/convocation.jpg",
      icon: "Award",
    },
    {
      title: lang === "gu" ? "શ્રી બી. પી. બ્રહ્મભટ્ટ કોલેજ મુખ્ય સંકુલ ઇમારત" : "Shri B. P. Brahmbhatt Main Campus & Administrative Tower",
      category: "Campus",
      date: "Oct 2024",
      image: "/images/campus_front.jpg",
      icon: "Building",
    },
    {
      title: lang === "gu" ? "કેન્દ્રીય પુસ્તકાલય અને ડિજિટલ રીડિંગ રૂમ" : "Central Knowledge Repository & E-Learning Resource Hall",
      category: "Campus",
      date: "Nov 2024",
      image: "/images/library.jpg",
      icon: "BookOpen",
    },
    {
      title: lang === "gu" ? "ઇન્ટર-કોલેજ ક્રિકેટ & ૪૦૦ મીટર એથ્લેટિક્સ ટ્રેક" : "Inter-College Athletics Ground & Sports Complex",
      category: "Sports",
      date: "Dec 2024",
      image: "/images/sports.jpg",
      icon: "Trophy",
    },
    {
      title: lang === "gu" ? "અદ્યતન કમ્પ્યુટર લેબોરેટરી અને ટેલી સેન્ટર" : "Advanced IT Computer Laboratory & SPSS Research Center",
      category: "Campus",
      date: "Sep 2024",
      image: "/images/lab.jpg",
      icon: "Monitor",
    },
  ];

  const categories = ["All", "Youth Festival", "Events", "Sports", "Campus"];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  return (
    <section id="gallery-section" className="py-14 bg-[#f8fafc] border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-slate-200 pb-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#800000] mb-1">
              {lang === "gu" ? "કેમ્પસ જીવન અને કાર્યક્રમો" : "Campus Memories & Photo Gallery"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b3557] tracking-tight">
              {lang === "gu" ? "ફોટો અને ઇવેન્ટ ગેલેરી" : "Events & Cultural Glimpses"}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? "bg-[#800000] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with REAL PHOTOGRAPHY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              {/* Photo Frame */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 text-amber-300">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold font-mono text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.date}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <h4 className="text-sm font-black text-white leading-snug drop-shadow-md">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3 bg-white flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Shri Unjha College Campus</span>
                <span className="text-[#800000] font-bold group-hover:underline">View Photo →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
