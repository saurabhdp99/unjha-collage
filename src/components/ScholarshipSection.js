"use client";

import React from "react";
import { Icon } from "./Icons";
import { scholarshipData } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function ScholarshipSection({ lang }) {
  const t = translations[lang];

  return (
    <section id="scholarships" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Icon name="Award" className="w-3.5 h-3.5" />
            <span>{lang === "gu" ? "સરકારી શિષ્યવૃત્તિ સહાય" : "Financial Aid & Scholarships"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.scholarshipTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.scholarshipSubtitle}
          </p>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {scholarshipData.map((scheme, idx) => (
            <div
              key={idx}
              className="glass-card bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                    {scheme.provider}
                  </span>
                  <Icon name="CheckCircle" className="w-5 h-5 text-emerald-600" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {lang === "gu" ? scheme.nameGu : scheme.name}
                </h3>

                {/* Eligibility & Benefits */}
                <div className="space-y-2.5 text-xs sm:text-sm bg-slate-50 p-4 rounded-xl mb-4 border border-slate-100">
                  <div>
                    <span className="font-bold text-slate-700 block mb-0.5">
                      {lang === "gu" ? "પાત્રતા (Eligibility Criteria):" : "Eligibility Criteria:"}
                    </span>
                    <p className="text-slate-600 leading-snug">{scheme.eligibility}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-bold text-emerald-800 block mb-0.5">
                      {lang === "gu" ? "સહાય લાભ (Benefits):" : "Financial Benefits:"}
                    </span>
                    <p className="text-slate-700 leading-snug font-medium">{scheme.benefits}</p>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {lang === "gu" ? "જરૂરી દસ્તાવેજો (Documents Needed):" : "Required Documents:"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {scheme.documents.map((doc, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {lang === "gu" ? "રૂમ નં. ૦૪ પર વેરિફિકેશન" : "Verification at Room No. 04"}
                </span>

                {scheme.portalUrl !== "#" ? (
                  <a
                    href={scheme.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>{lang === "gu" ? "સત્તાવાર પોર્ટલ" : "Official Portal"}</span>
                    <Icon name="ExternalLink" className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => alert(lang === "gu" ? "ઊંઝા કેળવણી મંડળ સ્કોલરશિપ માટે કોલેજ ઓફિસનો સંપર્ક કરવો." : "Please visit college administration counter for Trust Scholarship form.")}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                  >
                    {lang === "gu" ? "કોલેજ કાઉન્ટર ફોર્મ" : "College Office Form"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Support Callout */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-amber-400 text-slate-950 font-bold shrink-0">
              <Icon name="HelpCircle" className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {lang === "gu" ? "સ્કોલરશિપ ફોર્મ ભરવામાં સહાયતા જોઈએ છે?" : "Need Help with Scholarship Registration?"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {lang === "gu"
                  ? "અમારા શિષ્યવૃત્તિ સહાય ડેસ્ક (રૂમ નં. ૦૪) ની મુલાકાત લો અથવા કોલેજ હેલ્પલાઇન પર સંપર્ક કરો."
                  : "Visit our dedicated Student Scholarship Helpdesk (Room No. 04) or contact our administrative helpline."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919428012345"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Icon name="Phone" className="w-4 h-4" />
              <span>{lang === "gu" ? "હેલ્પલાઇન કોલ કરો" : "Call Helpdesk"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
