"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { notices, noticeCategories } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function NoticeBoard({ lang, searchQuery, setSearchQuery }) {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [downloadToast, setDownloadToast] = useState("");

  const filteredNotices = notices.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (notice) => {
    setDownloadToast(
      lang === "gu"
        ? `પરિપત્ર "${notice.title.substring(0, 35)}..." ડાઉનલોડ શરૂ થયું.`
        : `Downloading "${notice.title.substring(0, 35)}..." (${notice.fileSize})`
    );
    setTimeout(() => setDownloadToast(""), 3500);
  };

  return (
    <section id="notices" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Icon name="AlertCircle" className="w-3.5 h-3.5" />
              <span>{lang === "gu" ? "સત્તાવાર પરિપત્રો" : "Official Notifications"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.latestNotices}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              {lang === "gu"
                ? "HNGU પરીક્ષા શિડ્યુલ, પ્રવેશ યાદી, સ્કોલરશિપ અને કોલેજ આયોજનના તમામ તાજા પરિપત્રો."
                : "Real-time updates on HNGU examination timetables, admission cutoffs, scholarships, and academic events."}
            </p>
          </div>

          {/* Quick Notice Count */}
          <div className="text-xs font-semibold text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm shrink-0 self-start md:self-auto">
            {lang === "gu" ? "કુલ ઉપલબ્ધ પરિપત્રો:" : "Active Circulars:"}{" "}
            <span className="font-bold text-blue-900">{filteredNotices.length}</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {noticeCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Download Toast notification */}
        {downloadToast && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-900 text-emerald-100 text-xs sm:text-sm font-medium flex items-center justify-between shadow-lg animate-fadeIn border border-emerald-700">
            <div className="flex items-center gap-2.5">
              <Icon name="CheckCircle" className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{downloadToast}</span>
            </div>
            <button onClick={() => setDownloadToast("")} className="text-emerald-300 hover:text-white">
              <Icon name="X" className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Notices Cards Grid */}
        {filteredNotices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="glass-card bg-white rounded-2xl p-6 flex flex-col justify-between border border-slate-200 hover:border-blue-300 transition-all group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Icon name="Calendar" className="w-3.5 h-3.5" />
                      {notice.date}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {notice.isUrgent && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                          Urgent
                        </span>
                      )}
                      <span className="text-[11px] font-semibold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                        {notice.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2.5">
                    {notice.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {notice.summary}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    PDF • {notice.fileSize}
                  </span>

                  <button
                    onClick={() => handleDownload(notice)}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-900 hover:text-white text-blue-900 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <Icon name="Download" className="w-3.5 h-3.5" />
                    <span>{lang === "gu" ? "ડાઉનલોડ PDF" : "Download PDF"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Icon name="Search" className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">
              {lang === "gu" ? "કોઈ પરિપત્ર મળ્યો નથી" : "No Circulars Found"}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              {lang === "gu"
                ? "કૃપા કરીને અન્ય કેટેગરી પસંદ કરો અથવા સર્ચ ફિલ્ટર હટાવો."
                : "Try adjusting your search criteria or select a different category filter above."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
