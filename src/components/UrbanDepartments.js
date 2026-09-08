"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { academicPrograms } from "@/data/collegeData";

export default function UrbanDepartments() {
  const [activeStream, setActiveStream] = useState("All");
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  const streamFilters = [
    { id: "All", label: "All Science Depts" },
    { id: "bsc-chem", label: "Chemistry" },
    { id: "bsc-phy", label: "Physics" },
    { id: "bsc-math", label: "Mathematics" },
    { id: "bsc-bot", label: "Botany" },
  ];

  const filteredPrograms = academicPrograms.filter((p) => {
    if (activeStream === "All") return true;
    return p.id === activeStream;
  });

  return (
    <section id="departments" className="py-14 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with Light Blue theme styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-slate-200 pb-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700 mb-1">
              Academic Faculties & Departments
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Programs of Study & NEP 2020 Structure
            </h2>
          </div>

          {/* Stream Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {streamFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStream(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeStream === tab.id
                    ? "bg-sky-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200/80 hover:border-sky-400 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Strip */}
              <div className="bg-gradient-to-r from-sky-700 to-sky-800 group-hover:from-sky-600 group-hover:to-sky-700 transition-colors text-white p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-sky-200">
                    {course.level} • {course.stream}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight mt-0.5">
                    {course.name}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-white/15 text-sky-100">
                  <Icon name="GraduationCap" className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="space-y-2 text-xs bg-sky-50/40 p-3 rounded-lg border border-sky-100/60 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">Duration:</span>
                      <span className="font-bold text-slate-800">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">Intake Capacity:</span>
                      <span className="font-bold text-sky-700">{course.intake} Seats</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-semibold">Medium:</span>
                      <span className="font-bold text-slate-800">{course.medium}</span>
                    </div>
                    <div className="pt-1.5 border-t border-slate-200 text-slate-600">
                      <span className="font-semibold text-slate-500 block mb-0.5">Eligibility:</span>
                      <p className="leading-snug">{course.eligibility}</p>
                    </div>
                  </div>

                  {/* Core Subjects List */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Core Subjects & Specializations:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {course.subjects.slice(0, 3).map((sub, sIdx) => (
                        <span key={sIdx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {sub}
                        </span>
                      ))}
                      {course.subjects.length > 3 && (
                        <span className="text-[11px] bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 rounded font-bold">
                          +{course.subjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCourseForModal(course)}
                    className="w-full py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Icon name="BookOpen" className="w-3.5 h-3.5 text-sky-200" />
                    <span>View Curriculum & Syllabus</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Syllabus Detail Modal */}
        {selectedCourseForModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border border-slate-200 border-t-4 border-t-sky-600">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 mb-4">
                <div>
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                    {selectedCourseForModal.level} • {selectedCourseForModal.duration}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    {selectedCourseForModal.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold">{selectedCourseForModal.hnguAffiliation}</div>
                </div>
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <Icon name="X" className="w-6 h-6" />
                </button>
              </div>

              {/* Complete Subjects List */}
              <div className="mb-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Full Subjects & Curriculum Topics:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCourseForModal.subjects.map((sub, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-sky-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="p-3.5 bg-amber-50 rounded-lg border border-amber-200 mb-4 text-xs text-amber-950">
                <div className="font-bold text-amber-900 mb-1 flex items-center gap-1">
                  <Icon name="Award" className="w-4 h-4 text-amber-700" />
                  <span>Program Highlights:</span>
                </div>
                <ul className="space-y-1">
                  {selectedCourseForModal.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-1.5">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
