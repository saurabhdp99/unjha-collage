"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "./Icons";
import { notices, collegeInfo } from "@/data/collegeData";

export default function UrbanHomeGrid({
  onNavigateSection,
}) {
  const [activeNoticeTab, setActiveNoticeTab] = useState("All");

  const noticeTabs = [
    { id: "All", label: "All" },
    { id: "HNGU Exams", label: "Exams" },
    { id: "Admissions", label: "Admissions" },
    { id: "Academic", label: "Academic" },
  ];

  const filteredNotices = notices.filter((n) => {
    if (activeNoticeTab === "All") return true;
    return n.category === activeNoticeTab;
  });

  return (
    <section className="py-10 bg-[#f8fafc] border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* 2-COLUMN HOMEPAGE GRID (About & Notices) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ================= COLUMN 1: ABOUT & COLLEGE PROFILE (5 Cols) ================= */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm">
            {/* Header */}
            <div className="border-b-2 border-[#0a2540] pb-2.5 mb-4 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-[#0a192f] uppercase tracking-wide flex items-center gap-2">
                <Icon name="Building" className="w-5 h-5 text-[#0a2540]" />
                <span>About The College</span>
              </h3>
              <span className="text-[11px] font-bold text-[#53657d] font-mono">ESTD. 2020</span>
            </div>

            {/* Campus Image Preview */}
            <div className="rounded-lg overflow-hidden border border-slate-200 mb-3.5 relative h-36">
              <Image
                src="/images/campus_front.jpg"
                alt="Dr. Ashaben Patel Government Science College Campus"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071a2e]/90 to-transparent p-2 text-white text-[11px] font-semibold flex items-center justify-between z-10">
                <span>MRS Highschool Campus, Unjha</span>
                <span className="text-[#fde68a] font-mono">Code: {collegeInfo.hnguCode}</span>
              </div>
            </div>

            {/* Brief Introduction */}
            <p className="text-xs sm:text-sm text-[#53657d] leading-relaxed text-justify mb-4">
              <strong className="text-[#0a192f]">{collegeInfo.name}</strong>, located at MRS Highschool Campus, Unjha (Dist. Mehsana), is a premier government science institution affiliated to Hemchandracharya North Gujarat University (HNGU), Patan, dedicated to excellence in pure and applied sciences.
            </p>

            {/* Key Quality Accreditations Box */}
            <div className="space-y-2 text-xs bg-[#f4f7fb] p-3.5 rounded-lg border border-[#e2ebf5] mb-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#53657d]">Institution Type:</span>
                <span className="font-bold text-[#0a2540]">Government Science College</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#53657d]">Governance:</span>
                <span className="font-bold text-[#d97706]">Higher Education Dept, Gujarat</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#53657d]">HNGU College Code:</span>
                <span className="font-bold text-[#0a192f] font-mono">{collegeInfo.hnguCode} (Patan Univ)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#53657d]">AISHE Code:</span>
                <span className="font-bold text-[#0a192f] font-mono">{collegeInfo.aisheCode}</span>
              </div>
            </div>

            <button
              onClick={() => onNavigateSection("about")}
              className="w-full py-2.5 rounded-lg bg-[#0a2540] hover:bg-[#14385e] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 group"
            >
              <span>Read Full Profile & History</span>
              <Icon name="ArrowRight" className="w-3.5 h-3.5 text-[#fde68a] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* ================= COLUMN 2: LATEST NOTICES & CIRCULARS (7 Cols) ================= */}
          <div id="notice-section" className="lg:col-span-7 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm">
            {/* Header */}
            <div className="border-b-2 border-[#0a2540] pb-2.5 mb-3 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-[#0a192f] uppercase tracking-wide flex items-center gap-2">
                <Icon name="AlertCircle" className="w-5 h-5 text-[#d97706]" />
                <span>Circulars & Notices</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#fffbeb] border border-[#fde68a] text-[#b45309] text-[11px] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse"></span>
                <span>Live Updates</span>
              </span>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2 mb-3 overflow-x-auto scrollbar-none">
              {noticeTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveNoticeTab(tab.id)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                    activeNoticeTab === tab.id
                      ? "bg-[#0a2540] text-white shadow-sm"
                      : "bg-slate-100 text-[#53657d] hover:bg-[#f4f7fb] hover:text-[#0a2540]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Scrollable Notices List */}
            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {filteredNotices.map((notice) => {
                const dateParts = notice.date.split("-");
                const day = dateParts[2] || "01";
                const month = dateParts[1] === "03" ? "MAR" : dateParts[1] === "02" ? "FEB" : "JAN";

                return (
                  <div
                    key={notice.id}
                    className="p-3 rounded-lg border border-slate-200/80 hover:border-[#d97706]/60 bg-white hover:bg-[#f4f7fb]/60 transition-all flex items-start gap-3 group"
                  >
                    {/* Date Calendar Box */}
                    <div className="w-11 h-11 rounded-lg bg-[#071a2e] group-hover:bg-[#0a2540] transition-colors text-white flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#fde68a] leading-none">{month}</span>
                      <span className="text-sm font-black leading-none mt-0.5">{day}</span>
                    </div>

                    {/* Notice Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        {notice.isUrgent && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#d97706] text-[#071a2e] uppercase tracking-wider">
                            NEW
                          </span>
                        )}
                        <span className="text-[10px] font-bold text-[#0a2540] bg-[#f4f7fb] border border-[#e2ebf5] px-2 py-0.5 rounded">
                          {notice.category}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-[13px] font-bold text-[#0a192f] group-hover:text-[#0a2540] leading-snug line-clamp-2">
                        {notice.title}
                      </h4>

                      <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-slate-100 text-[11px] text-[#53657d]">
                        <span>PDF • {notice.fileSize}</span>
                        <span className="text-[#0a2540] font-bold group-hover:underline flex items-center gap-1">
                          <Icon name="Download" className="w-3 h-3 text-[#d97706]" />
                          Download
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 text-center">
              <button
                onClick={() => onNavigateSection("notice-section")}
                className="text-xs font-bold text-[#0a2540] hover:text-[#d97706] hover:underline"
              >
                View All Circulars Archive →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
