"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { notices, collegeInfo, administration } from "@/data/collegeData";

export default function UrbanHomeGrid({
  lang,
  onNavigateSection,
}) {
  const [activeNoticeTab, setActiveNoticeTab] = useState("All");

  const noticeTabs = [
    { id: "All", label: lang === "gu" ? "તમામ" : "All" },
    { id: "HNGU Exams", label: lang === "gu" ? "પરીક્ષા" : "Exams" },
    { id: "Admissions", label: lang === "gu" ? "પ્રવેશ" : "Admissions" },
    { id: "Scholarships", label: lang === "gu" ? "સ્કોલરશિપ" : "Scholarships" },
  ];

  const filteredNotices = notices.filter((n) => {
    if (activeNoticeTab === "All") return true;
    return n.category === activeNoticeTab;
  });

  const quickLinks = [
    {
      title: lang === "gu" ? "શૈક્ષણિક અભ્યાસક્રમો (NEP)" : "Academic Programs (NEP)",
      icon: "BookOpen",
      color: "bg-[#800000] text-white",
      action: () => onNavigateSection("departments"),
      badge: "NEP 2020",
    },
    {
      title: lang === "gu" ? "પ્રવેશ માર્ગદર્શન & હેલ્પડેસ્ક" : "Admission Inquiry & Helpdesk",
      icon: "Phone",
      color: "bg-[#1b3557] text-white",
      action: () => onNavigateSection("contact-section"),
      badge: "Campus",
    },
    {
      title: lang === "gu" ? "કેમ્પસ સુવિધાઓ & લાઇબ્રેરી" : "Campus Facilities & Library",
      icon: "LandPlot",
      color: "bg-[#d97706] text-white",
      action: () => onNavigateSection("facilities-section"),
    },
    {
      title: lang === "gu" ? "MYSY & ડિજિટલ ગુજરાત સ્કોલરશિપ" : "MYSY / Govt Scholarships",
      icon: "Award",
      color: "bg-[#0f3b2e] text-white",
      action: () => onNavigateSection("scholarship-section"),
    },
    {
      title: lang === "gu" ? "NEP ૨૦૨૦ અભ્યાસક્રમ (Syllabus)" : "NEP 2020 Syllabus",
      icon: "BookOpen",
      color: "bg-slate-800 text-white",
      action: () => onNavigateSection("departments"),
    },
    {
      title: lang === "gu" ? "રેગિંગ વિરોધી & ફરિયાદ નિવારણ" : "Anti-Ragging & Grievance",
      icon: "ShieldCheck",
      color: "bg-red-800 text-white",
      action: () => onNavigateSection("committees-section"),
    },
    {
      title: lang === "gu" ? "BAOU મુક્ત શિક્ષણ કેન્દ્ર (1502)" : "BAOU Study Centre",
      icon: "GraduationCap",
      color: "bg-indigo-900 text-white",
      action: () => onNavigateSection("departments"),
    },
  ];

  return (
    <section className="py-10 bg-[#f8fafc] border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* 3-COLUMN MEHSANA URBAN COLLEGE HOMEPAGE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ================= COLUMN 1: ABOUT & COLLEGE PROFILE (~4 Cols) ================= */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
            {/* Header */}
            <div className="border-b-2 border-[#800000] pb-2.5 mb-4 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-[#1b3557] uppercase tracking-wide flex items-center gap-2">
                <Icon name="Building" className="w-5 h-5 text-[#800000]" />
                <span>{lang === "gu" ? "કોલેજ પરિચય" : "About The College"}</span>
              </h3>
              <span className="text-[11px] font-bold text-slate-400 font-mono">ESTD. 2020</span>
            </div>

            {/* Campus Image Preview */}
            <div className="rounded-lg overflow-hidden border border-slate-200 mb-3.5 shadow-sm relative h-36">
              <img
                src="/images/campus_front.jpg"
                alt="Dr. Ashaben Patel Government Science College Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-white text-[11px] font-semibold flex items-center justify-between">
                <span>MRS Highschool Campus, Unjha</span>
                <span className="text-amber-300 font-mono">Code: {collegeInfo.hnguCode}</span>
              </div>
            </div>

            {/* Brief Introduction */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-4">
              {lang === "gu" ? (
                <>
                  <strong className="text-[#1b3557]">{collegeInfo.gujaratiName}</strong>{" "}
                  હેમચંદ્રાચાર્ય ઉત્તર ગુજરાત યુનિવર્સિટી (HNGU), પાટણ સંલગ્ન ઉત્તર ગુજરાતનું અગ્રણી સરકારી વિજ્ઞાન મહાવિદ્યાલય છે. એમ. આર. એસ. હાઇસ્કૂલ કેમ્પસ, ઊંઝા (જી. મહેસાણા) ખાતે સ્થિત આ સંસ્થા અદ્યતન લેબોરેટરીઝ અને વિજ્ઞાન શાખામાં ઉચ્ચ શિક્ષણ પ્રદાન કરે છે.
                </>
              ) : (
                <>
                  <strong className="text-[#1b3557]">{collegeInfo.name}</strong>, located at MRS Highschool Campus, Unjha (Dist. Mehsana), is a premier government science institution affiliated to Hemchandracharya North Gujarat University (HNGU), Patan, dedicated to excellence in pure and applied sciences.
                </>
              )}
            </p>

            {/* Key Quality Accreditations Box */}
            <div className="space-y-2 text-xs bg-[#f1f5f9] p-3.5 rounded-lg border border-slate-200 mb-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600">Institution Type:</span>
                <span className="font-bold text-[#800000]">Government Science College</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600">Governance:</span>
                <span className="font-bold text-emerald-700">Higher Education Dept, Gujarat</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600">HNGU College Code:</span>
                <span className="font-bold text-[#1b3557] font-mono">{collegeInfo.hnguCode} (Patan Univ)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600">AISHE Code:</span>
                <span className="font-bold text-slate-800 font-mono">{collegeInfo.aisheCode}</span>
              </div>
            </div>

            <button
              onClick={() => onNavigateSection("about")}
              className="w-full py-2 rounded-lg bg-[#1b3557] hover:bg-[#294a73] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{lang === "gu" ? "સંપૂર્ણ માહિતી વાંચો" : "Read Full Profile & History"}</span>
              <Icon name="ArrowRight" className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* ================= COLUMN 2: LATEST NOTICES & CIRCULARS (~5 Cols) ================= */}
          <div id="notice-section" className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
            {/* Header */}
            <div className="border-b-2 border-[#800000] pb-2.5 mb-3 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-[#1b3557] uppercase tracking-wide flex items-center gap-2">
                <Icon name="AlertCircle" className="w-5 h-5 text-[#800000]" />
                <span>{lang === "gu" ? "પરિપત્રો / નોટિસ બોર્ડ" : "Circulars & Notices"}</span>
              </h3>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-[11px] font-bold animate-pulse">
                ● Live Updates
              </span>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1 border-b border-slate-200 pb-2 mb-3 overflow-x-auto scrollbar-none">
              {noticeTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveNoticeTab(tab.id)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                    activeNoticeTab === tab.id
                      ? "bg-[#800000] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                    className="p-3 rounded-lg border border-slate-200 hover:border-blue-400 bg-[#f8fafc] hover:bg-white transition-all flex items-start gap-3 group"
                  >
                    {/* Date Calendar Box */}
                    <div className="w-11 h-11 rounded-lg bg-[#1b3557] group-hover:bg-[#800000] transition-colors text-white flex flex-col items-center justify-center shrink-0 shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 leading-none">{month}</span>
                      <span className="text-sm font-black leading-none mt-0.5">{day}</span>
                    </div>

                    {/* Notice Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        {notice.isUrgent && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-red-600 text-white uppercase">
                            NEW
                          </span>
                        )}
                        <span className="text-[10px] font-bold text-[#800000] bg-red-50 px-2 py-0.5 rounded">
                          {notice.category}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-blue-900 leading-snug line-clamp-2">
                        {notice.title}
                      </h4>

                      <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-slate-100 text-[11px] text-slate-400">
                        <span>PDF • {notice.fileSize}</span>
                        <span className="text-[#1b3557] font-bold group-hover:underline flex items-center gap-1">
                          <Icon name="Download" className="w-3 h-3" />
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
                className="text-xs font-bold text-[#800000] hover:underline"
              >
                {lang === "gu" ? "તમામ પરિપત્રો આર્કાઇવ જુઓ →" : "View All Circulars Archive →"}
              </button>
            </div>
          </div>

          {/* ================= COLUMN 3: QUICK LINKS & STUDENT PORTAL (~3 Cols) ================= */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            {/* Header */}
            <div className="border-b-2 border-[#800000] pb-2.5 mb-4 flex items-center justify-between">
              <h3 className="text-base font-black text-[#1b3557] uppercase tracking-wide flex items-center gap-2">
                <Icon name="Users" className="w-5 h-5 text-[#800000]" />
                <span>{lang === "gu" ? "ઉપયોગી લિંક્સ" : "Quick Links"}</span>
              </h3>
              <span className="text-xs font-bold text-amber-600">Services</span>
            </div>

            {/* Quick Links List */}
            <div className="space-y-2">
              {quickLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={link.action}
                  className="w-full text-left p-2.5 rounded-lg border border-slate-200 hover:border-[#1b3557] bg-[#f8fafc] hover:bg-slate-100 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`p-1.5 rounded-md ${link.color} shrink-0`}>
                      <Icon name={link.icon} className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#1b3557] truncate">
                      {link.title}
                    </span>
                  </div>

                  {link.badge ? (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-500 text-slate-950 uppercase shrink-0">
                      {link.badge}
                    </span>
                  ) : (
                    <Icon name="ChevronRight" className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Helpline Callout Box */}
            <div className="mt-4 p-3 rounded-lg bg-gradient-to-br from-[#1b3557] to-[#0f233a] text-white text-xs text-center">
              <div className="font-bold text-amber-300 text-[11px] uppercase">
                {lang === "gu" ? "વિદ્યાર્થી સહાય ડેસ્ક" : "Admissions & Results Help"}
              </div>
              <div className="text-sm font-black font-mono mt-0.5 text-white">
                {collegeInfo.helpline}
              </div>
              <div className="text-[10px] text-slate-300 mt-0.5">Mon - Sat: 8:00 AM - 4:30 PM</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
