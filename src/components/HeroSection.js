"use client";

import React from "react";
import { Icon } from "./Icons";
import { collegeInfo, marqueeAnnouncements } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function HeroSection({ lang, onNavigateSection }) {
  const t = translations[lang];

  return (
    <div className="w-full">
      {/* Live Marquee Ticker */}
      <div className="bg-amber-500 text-slate-950 text-xs sm:text-sm font-semibold py-2 px-4 border-b border-amber-600 overflow-hidden flex items-center shadow-sm">
        <div className="flex items-center gap-2 pr-4 border-r border-amber-700/40 shrink-0 font-bold uppercase tracking-wider text-blue-950">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
          <Icon name="AlertCircle" className="w-4 h-4 text-blue-950" />
          <span>{lang === "gu" ? "તાજી જાહેરાતો" : "Latest Updates"}</span>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full pl-4">
          <div className="animate-marquee inline-block">
            {marqueeAnnouncements.map((announcement, index) => (
              <span key={index} className="mx-6 inline-flex items-center gap-2 cursor-pointer hover:underline">
                {announcement}
                <span className="text-amber-800 font-normal">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Visual Section */}
      <section className="relative hero-radial-bg text-white py-16 sm:py-20 lg:py-24 px-4 overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-700/60 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md">
                <Icon name="Award" className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === "gu" 
                    ? `શિક્ષણ વિભાગ, ગુજરાત સરકાર • એમ. આર. એસ. કેમ્પસ` 
                    : `Govt. of Gujarat • MRS Highschool Campus, Unjha`}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-slate-300">HNGU Code: {collegeInfo.hnguCode}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                {lang === "gu" ? (
                  <>
                    <span className="text-white">વિજ્ઞાન શિક્ષણ અને</span>{" "}
                    <span className="gold-gradient-text">સંશોધન શ્રેષ્ઠતા</span>{" "}
                    <span className="text-blue-200">ઊંઝા કેમ્પસ</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">Advancing Science,</span>{" "}
                    <span className="gold-gradient-text">Inspiring Excellence</span>{" "}
                    <span className="text-blue-200">in North Gujarat</span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                {lang === "gu"
                  ? "હેમચંદ્રાચાર્ય ઉત્તર ગુજરાત યુનિવર્સિટી (HNGU), પાટણ સંલગ્ન ડૉ. આશાબેન પટેલ સરકારી વિજ્ઞાન કોલેજ, ઊંઝા. એમ. આર. એસ. હાઇસ્કૂલ કેમ્પસ ખાતે અદ્યતન સાયન્સ લેબ્સ અને અનુભવી અધ્યાપકો સાથે B.Sc. વિજ્ઞાન શિક્ષણનું કેન્દ્ર."
                  : "Premier government science institution under Hemchandracharya North Gujarat University (HNGU), Patan. Located at MRS Highschool Campus, Unjha, fostering excellence in Chemistry, Physics, Mathematics, and Botany with modern laboratory infrastructure."}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigateSection("academics")}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <Icon name="BookOpen" className="w-5 h-5" />
                  <span>{t.exploreCourses}</span>
                </button>

                <button
                  onClick={() => onNavigateSection("results")}
                  className="px-6 py-3.5 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base border border-blue-700/80 shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 backdrop-blur-md"
                >
                  <Icon name="TrendingUp" className="w-5 h-5 text-amber-400" />
                  <span>{t.checkResults}</span>
                </button>

                <button
                  onClick={() => onNavigateSection("academics")}
                  className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium text-sm sm:text-base border border-slate-700 shadow-sm transition-all flex items-center gap-2"
                >
                  <Icon name="BookOpen" className="w-4 h-4 text-blue-400" />
                  <span>{t.exploreCourses}</span>
                </button>
              </div>
            </div>

            {/* Right Card / Highlight Box */}
            <div className="w-full lg:w-96 glass-panel rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/10 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-900">
                    <Icon name="Building" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {lang === "gu" ? "સંચાલક મંડળ" : "Governing Body"}
                    </div>
                    <div className="text-sm font-bold text-blue-950">
                      {collegeInfo.trustName}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <Icon name="CheckCircle" className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">
                      {lang === "gu" ? "HNGU કાયમી માન્યતા" : "Permanent HNGU Affiliation"}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {lang === "gu" ? `કોલેજ કોડ: ${collegeInfo.hnguCode} • પાટણ યુનિવર્સિટી` : `College Code: ${collegeInfo.hnguCode} • Patan University`}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <Icon name="GraduationCap" className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">
                      {lang === "gu" ? "NEP ૨૦૨૦ અભ્યાસક્રમ" : "NEP 2020 Framework"}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {lang === "gu" ? "B.Com, B.A, M.Com, M.A, BBA, LL.B." : "UG & PG 4-Year Honors Degree"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <Icon name="Award" className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">
                      {lang === "gu" ? "સરકારી શિષ્યવૃત્તિ સહાય" : "100% Scholarship Support"}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {lang === "gu" ? "MYSY & ડિજિટલ ગુજરાત પોર્ટલ" : "MYSY & Digital Gujarat Portal"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Admission Link */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={() => onNavigateSection("admissions")}
                  className="w-full py-2.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>{lang === "gu" ? "પ્રવેશ માર્ગદર્શિકા ૨૦૨૫-૨૬" : "Admissions Guide 2025-26"}</span>
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Key Stats Counter Grid */}
          <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {collegeInfo.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-4 rounded-xl text-center backdrop-blur-sm transition-transform hover:-translate-y-1"
              >
                <div className="inline-flex p-2 rounded-lg bg-blue-950 text-amber-400 mb-2">
                  <Icon name={stat.icon} className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
