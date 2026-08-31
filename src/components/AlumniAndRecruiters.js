"use client";

import React from "react";
import { Icon } from "./Icons";
import { recruitersAndAlumni } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function AlumniAndRecruiters({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Icon name="TrendingUp" className="w-3.5 h-3.5" />
            <span>{lang === "gu" ? "પ્લેસમેન્ટ અને એલ્યુમનાઇ" : "Placements & Career Success"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.alumniTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.alumniSubtitle}
          </p>
        </div>

        {/* Recruiters Grid */}
        <div className="mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-6">
            {lang === "gu" ? "પ્રમુખ ભરતીકારો અને ઇન્ડસ્ટ્રી પાર્ટનર્સ:" : "Our Key Corporate & Banking Hiring Partners:"}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recruitersAndAlumni.recruiters.map((rec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-center items-center min-h-[90px]"
              >
                <div className="font-extrabold text-blue-950 text-sm sm:text-base">{rec.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{rec.sector}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recruitersAndAlumni.alumni.map((alum, idx) => (
            <div
              key={idx}
              className="glass-card bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-950 text-amber-400 font-bold flex items-center justify-center text-sm shrink-0 border-2 border-amber-400">
                    {alum.name.split(" ").slice(-1)[0][0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{alum.name}</h4>
                    <div className="text-xs text-blue-900 font-semibold">{alum.batch}</div>
                  </div>
                </div>

                <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-3 border border-emerald-100">
                  {alum.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{alum.quote}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1 text-[11px] font-bold text-blue-900">
                <Icon name="Award" className="w-3.5 h-3.5 text-amber-500" />
                <span>{lang === "gu" ? "ગૌરવશાળી ભૂતપૂર્વ વિદ્યાર્થી" : "Distinguished Alumnus"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
