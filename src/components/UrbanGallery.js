"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "./Icons";

export default function UrbanGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const galleryItems = [
    {
      title: "HNGU North Zone Inter-College Youth Festival Champions",
      category: "Youth Festival",
      date: "Feb 2025",
      image: "/images/youth_festival.jpg",
      icon: "Trophy",
    },
    {
      title: "Annual Degree Convocation & Gold Medalist Felicitation",
      category: "Events",
      date: "Jan 2025",
      image: "/images/convocation.jpg",
      icon: "Award",
    },
    {
      title: "Dr. Ashaben Patel Govt. Science College (MRS Highschool Campus)",
      category: "Campus",
      date: "Oct 2024",
      image: "/images/campus_front.jpg",
      icon: "Building",
    },
    {
      title: "Central Knowledge Repository & E-Learning Resource Hall",
      category: "Campus",
      date: "Nov 2024",
      image: "/images/library.jpg",
      icon: "BookOpen",
    },
    {
      title: "Inter-College Athletics Ground & Sports Complex",
      category: "Sports",
      date: "Dec 2024",
      image: "/images/sports.jpg",
      icon: "Trophy",
    },
    {
      title: "Advanced IT Computer Laboratory & SPSS Research Center",
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
    <section id="gallery-section" className="py-14 bg-[#f8fafc] border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-[#0a2540] pb-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#d97706] mb-1">
              Campus Memories & Photo Gallery
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
              Events & Cultural Glimpses
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? "bg-[#0a2540] text-white shadow-sm"
                    : "bg-white text-[#53657d] border border-slate-200 hover:bg-[#f4f7fb] hover:text-[#0a2540]"
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
              className="bg-white rounded-xl border border-slate-200/80 hover:border-[#d97706] shadow-sm overflow-hidden transition-all group"
            >
              {/* Photo Frame */}
              <div className="relative h-48 w-full overflow-hidden bg-[#071a2e]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/95 via-black/20 to-transparent z-10"></div>

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#071a2e]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#d97706]/40 text-[#fde68a]">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold font-mono text-white bg-[#071a2e]/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                    {item.date}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <h4 className="text-sm font-black text-white leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3 bg-white flex items-center justify-between text-xs text-[#53657d] font-semibold">
                <span>MRS Highschool Campus, Unjha</span>
                <span className="text-[#0a2540] font-bold group-hover:text-[#d97706] group-hover:underline transition-colors">View Photo →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
