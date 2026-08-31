"use client";

import React from "react";
import { Icon } from "./Icons";
import { translations } from "@/data/translations";

export default function StudentHub({ lang, onNavigateSection, searchQuery, setSearchQuery }) {
  const t = translations[lang];

  const studentFeatures = [
    {
      id: "results",
      title: t.cardResultTitle,
      desc: t.cardResultDesc,
      icon: "TrendingUp",
      badge: lang === "gu" ? "ઓનલાઇન માર્કશીટ" : "Instant Search",
      color: "from-blue-600 to-indigo-700",
      accent: "bg-blue-50 text-blue-700",
      actionLabel: lang === "gu" ? "પરિણામ તપાસો" : "Check Result Now"
    },
    {
      id: "notices",
      title: t.cardNoticeTitle,
      desc: t.cardNoticeDesc,
      icon: "AlertCircle",
      badge: lang === "gu" ? "નવીનતમ સર્ક્યુલર" : "Live Updates",
      color: "from-amber-600 to-orange-600",
      accent: "bg-amber-50 text-amber-700",
      actionLabel: lang === "gu" ? "નોટિસ બોર્ડ જુઓ" : "Open Notice Board"
    },
    {
      id: "academics",
      title: t.cardSyllabusTitle,
      desc: t.cardSyllabusDesc,
      icon: "BookOpen",
      badge: lang === "gu" ? "NEP ૨૦૨૦ માન્ય" : "NEP Curriculum",
      color: "from-emerald-600 to-teal-700",
      accent: "bg-emerald-50 text-emerald-700",
      actionLabel: lang === "gu" ? "સિલેબસ ડાઉનલોડ" : "Explore Syllabus"
    },
    {
      id: "scholarships",
      title: lang === "gu" ? "સરકારી શિષ્યવૃત્તિ (MYSY)" : "Scholarships & Aid",
      desc: lang === "gu" ? "MYSY અને ડિજિટલ ગુજરાત પોસ્ટ-મેટ્રિક સહાય માટે જરૂરી દસ્તાવેજો." : "Complete guide for MYSY, SC/ST/OBC Digital Gujarat & Free-ship card schemes.",
      icon: "Award",
      badge: lang === "gu" ? "૧૦૦% સહાય" : "Govt Portals",
      color: "from-purple-600 to-indigo-800",
      accent: "bg-purple-50 text-purple-700",
      actionLabel: lang === "gu" ? "સ્કોલરશિપ ગાઇડ" : "View Scholarships"
    }
  ];

  return (
    <section id="student-hub" className="py-16 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Icon name="Users" className="w-3.5 h-3.5" />
              <span>{lang === "gu" ? "વિદ્યાર્થી સુવિધા કેન્દ્ર" : "Student Support Services"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.studentHubTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
              {t.studentHubSubtitle}
            </p>
          </div>

          {/* Quick Search Box */}
          <div className="w-full md:w-80">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
              />
              <Icon
                name="Search"
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <Icon name="X" className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentFeatures.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigateSection(item.id)}
              className="glass-card bg-white rounded-2xl p-6 flex flex-col justify-between cursor-pointer border border-slate-200/80 hover:border-blue-300 group"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon name={item.icon} className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.accent}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors">
                <span>{item.actionLabel}</span>
                <Icon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
