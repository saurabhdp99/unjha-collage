"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { academicPrograms } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function AcademicCourses({ lang, onOpenApplyModal }) {
  const t = translations[lang];
  const [activeStream, setActiveStream] = useState("All");
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  const streamFilters = [
    { id: "All", label: lang === "gu" ? "તમામ કોર્સ" : "All Programs" },
    { id: "Commerce", label: lang === "gu" ? "કોમર્સ (B.Com / M.Com)" : "Commerce Stream" },
    { id: "Arts", label: lang === "gu" ? "આર્ટ્સ (B.A. / M.A.)" : "Arts & Humanities" },
    { id: "Management", label: lang === "gu" ? "મેનેજમેન્ટ (BBA)" : "Management (BBA)" },
    { id: "Law", label: lang === "gu" ? "કાયદો (LL.B. Law)" : "Law College (LL.B.)" },
    { id: "Open Learning", label: lang === "gu" ? "BAOU મુક્ત શિક્ષણ" : "BAOU Distance Learning" },
  ];

  const filteredCourses = academicPrograms.filter((course) => {
    if (activeStream === "All") return true;
    return course.stream === activeStream;
  });

  return (
    <section id="academics" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Icon name="GraduationCap" className="w-3.5 h-3.5" />
              <span>{lang === "gu" ? "શૈક્ષણિક વિભાગો" : "Academic Programs"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.coursesTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-3xl">
              {t.coursesSubtitle}
            </p>
          </div>

          <button
            onClick={onOpenApplyModal}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 self-start md:self-auto shrink-0"
          >
            <Icon name="Sparkles" className="w-4 h-4" />
            <span>{lang === "gu" ? "ઓનલાઇન પ્રવેશ તપાસ" : "Admission Inquiry 2025-26"}</span>
          </button>
        </div>

        {/* Stream Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {streamFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveStream(filter.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeStream === filter.id
                  ? "bg-blue-950 text-amber-400 shadow-md border-2 border-blue-950"
                  : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 hover:border-blue-400 transition-all group"
            >
              <div>
                {/* Level + Affiliation */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-900 text-white uppercase tracking-wider">
                    {course.level} • {course.stream}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    {course.duration}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-lg sm:text-xl font-black text-blue-950 group-hover:text-blue-700 transition-colors mb-3">
                  {course.name}
                </h3>

                {/* Key Metrics */}
                <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl mb-4 border border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">{lang === "gu" ? "પ્રવેશ ક્ષમતા (Intake):" : "Intake Seats:"}</span>
                    <span className="font-bold text-slate-800">{course.intake} Students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">{lang === "gu" ? "શિક્ષણનું માધ્યમ:" : "Medium of Instruction:"}</span>
                    <span className="font-semibold text-blue-900">{course.medium}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-200">
                    <span className="text-slate-500 font-medium shrink-0">{lang === "gu" ? "લાયકાત:" : "Eligibility:"}</span>
                    <span className="font-medium text-slate-700 text-right">{course.eligibility}</span>
                  </div>
                </div>

                {/* Subjects Preview */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {lang === "gu" ? "મુખ્ય વિષયો / સ્પેશિયલાઇઝેશન:" : "Core Disciplines & Topics:"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.slice(0, 4).map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2 py-1 rounded-md font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                    {course.subjects.length > 4 && (
                      <span className="text-[11px] bg-blue-50 text-blue-800 px-2 py-1 rounded-md font-bold">
                        +{course.subjects.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCourseForModal(course)}
                  className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Icon name="BookOpen" className="w-3.5 h-3.5 text-blue-700" />
                  <span>{lang === "gu" ? "વિગતવાર સિલેબસ" : "Full Syllabus"}</span>
                </button>

                <button
                  onClick={onOpenApplyModal}
                  className="px-3.5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Icon name="CheckCircle" className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === "gu" ? "પ્રવેશ મેળવો" : "Apply"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Syllabus Detail Modal */}
        {selectedCourseForModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    {selectedCourseForModal.level} • {selectedCourseForModal.duration}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                    {selectedCourseForModal.name}
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                    {selectedCourseForModal.hnguAffiliation}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <Icon name="X" className="w-6 h-6" />
                </button>
              </div>

              {/* Complete Subjects List */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {lang === "gu" ? "અભ્યાસક્રમ વિષયોની સૂચિ (NEP ૨૦૨૦):" : "Curriculum Structure & Core Courses:"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCourseForModal.subjects.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Highlights */}
              <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Icon name="Award" className="w-4 h-4 text-amber-700" />
                  <span>{lang === "gu" ? "કોર્સની વિશેષતાઓ અને ઇન્ડસ્ટ્રી જોડાણ:" : "Program Highlights & Industry Tie-Ups:"}</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-amber-950">
                  {selectedCourseForModal.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <Icon name="Check" className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  {lang === "gu" ? "બંધ કરો" : "Close"}
                </button>
                <button
                  onClick={() => {
                    setSelectedCourseForModal(null);
                    onOpenApplyModal();
                  }}
                  className="px-5 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Icon name="Sparkles" className="w-4 h-4 text-amber-400" />
                  <span>{lang === "gu" ? "આ કોર્સ માટે અરજી કરો" : "Apply for this Program"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
