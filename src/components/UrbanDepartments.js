"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { academicPrograms } from "@/data/collegeData";

export default function UrbanDepartments() {
  const [activeStream, setActiveStream] = useState("All");
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);


  const filteredPrograms = academicPrograms.filter((p) => {
    if (activeStream === "All") return true;
    return p.id === activeStream;
  });

  return (
    <section id="departments" className="py-14 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-[#0a2540] pb-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#d97706] mb-1">
              Academic Faculties & Departments
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
              Programs of Study & NEP 2020 Structure
            </h2>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200/80 hover:border-[#d97706] shadow-sm transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Strip */}
              <div className="bg-gradient-to-r from-[#071a2e] via-[#0a2540] to-[#14385e] group-hover:from-[#0a2540] group-hover:to-[#1e4b7a] transition-colors text-white p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#fde68a]">
                    {course.level} • {course.stream}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight mt-0.5">
                    {course.name}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-white/10 text-[#fde68a]">
                  <Icon name="GraduationCap" className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="space-y-2 text-xs bg-[#f4f7fb] p-3 rounded-lg border border-[#e2ebf5] mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#53657d] font-semibold">Duration:</span>
                      <span className="font-bold text-[#0a192f]">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#53657d] font-semibold">Intake Capacity:</span>
                      <span className="font-bold text-[#0a2540]">{course.intake} Seats</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#53657d] font-semibold">Medium:</span>
                      <span className="font-bold text-[#0a192f]">{course.medium}</span>
                    </div>
                    <div className="pt-1.5 border-t border-slate-200 text-[#53657d]">
                      <span className="font-semibold text-[#0a192f] block mb-0.5">Eligibility:</span>
                      <p className="leading-snug">{course.eligibility}</p>
                    </div>
                  </div>

                  {/* Core Subjects List */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-[#0a192f] uppercase tracking-wider mb-1.5">
                      Core Subjects & Specializations:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {course.subjects.slice(0, 3).map((sub, sIdx) => (
                        <span key={sIdx} className="text-[11px] bg-slate-100 text-[#0a192f] px-2 py-0.5 rounded font-medium">
                          {sub}
                        </span>
                      ))}
                      {course.subjects.length > 3 && (
                        <span className="text-[11px] bg-[#fffbeb] text-[#b45309] border border-[#fde68a] px-2 py-0.5 rounded font-bold">
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
                    className="w-full py-2.5 rounded-lg bg-[#0a2540] hover:bg-[#14385e] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 group/btn"
                  >
                    <Icon name="BookOpen" className="w-3.5 h-3.5 text-[#fde68a]" />
                    <span>View Curriculum & Syllabus</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Syllabus Detail Modal */}
        {selectedCourseForModal && (
          <div className="fixed inset-0 z-50 bg-[#071a2e]/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border border-slate-200 border-t-4 border-t-[#0a2540] shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 mb-4">
                <div>
                  <span className="text-xs font-bold text-[#d97706] uppercase tracking-wider">
                    {selectedCourseForModal.level} • {selectedCourseForModal.duration}
                  </span>
                  <h3 className="text-xl font-black text-[#0a192f] mt-0.5">
                    {selectedCourseForModal.name}
                  </h3>
                  <div className="text-xs text-[#53657d] font-semibold">{selectedCourseForModal.hnguAffiliation}</div>
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
                <h4 className="text-xs font-bold text-[#0a192f] uppercase tracking-wider mb-2">
                  Full Subjects & Curriculum Topics:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCourseForModal.subjects.map((sub, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-[#0a192f] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#0a2540] text-[#fde68a] flex items-center justify-center text-[10px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="p-3.5 bg-[#fffbeb] rounded-lg border border-[#fde68a] mb-4 text-xs text-[#78350f]">
                <div className="font-bold text-[#b45309] mb-1 flex items-center gap-1.5">
                  <Icon name="Award" className="w-4 h-4 text-[#d97706]" />
                  <span>Program Highlights:</span>
                </div>
                <ul className="space-y-1">
                  {selectedCourseForModal.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-1.5">
                      <span className="text-[#d97706] font-bold">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="px-5 py-2.5 rounded-lg bg-[#0a2540] hover:bg-[#14385e] text-white text-xs font-bold transition-colors shadow-sm"
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
