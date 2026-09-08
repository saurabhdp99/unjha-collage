"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "./Icons";
import { administration, collegeInfo } from "@/data/collegeData";

export default function UrbanPrincipalDesk() {
  return (
    <section id="principal-desk" className="py-14 bg-[#f8fbff] border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700 mb-1">
            Leadership & Management
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            From The Principal & President's Desk
          </h2>
          <div className="w-16 h-1 bg-sky-600 mx-auto mt-2.5 rounded-full"></div>
        </div>

        {/* 2-Card Layout: Principal Desk & Management Desk with REAL PHOTOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Principal's Desk */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-sky-400 shrink-0 relative">
                  <Image
                    src="/images/principal.jpg"
                    alt={administration.principalName}
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-sky-700 tracking-wider">
                    Principal's Desk
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    {administration.principalName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {administration.principalDesignation}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-4 italic">
                "{administration.principalMessage}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-sky-800">{administration.principalName}</span>
              <span className="italic">{collegeInfo.shortName}</span>
            </div>
          </div>

          {/* Card 2: Management / Trust Vision */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-sky-400 shrink-0 relative">
                  <Image
                    src="/images/president.jpg"
                    alt="Trust President"
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-sky-700 tracking-wider">
                    Government Body
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    {collegeInfo.trustName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Higher Education Department, Gujarat
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/60">
                  <span className="font-bold text-amber-950 block mb-0.5">Institutional Vision:</span>
                  <p className="leading-relaxed text-amber-900 text-xs">{administration.vision}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-1.5">Core Institutional Missions:</span>
                  <ul className="space-y-1 text-xs">
                    {administration.mission.slice(0, 3).map((m, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-sky-800">Govt. of Gujarat • Higher Education</span>
              <span className="italic">MRS Highschool Campus, Unjha, Dist. Mehsana</span>
            </div>
          </div>
        </div>

        {/* IQAC & Statutory Badges Bar */}
        <div id="iqac-section" className="bg-white rounded-xl border border-slate-200/80 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="p-3.5 rounded-xl bg-sky-50 text-sky-700 shrink-0">
                <Icon name="Award" className="w-8 h-8 text-sky-600" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Internal Quality Assurance Cell</span>
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  NAAC Cycle-2 Accredited ('B' Grade, CGPA 2.75)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  IQAC Coordinator: {administration.iqacCoordinator} • AAA Audit Certified
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              {administration.iqacReportLinks.slice(0, 2).map((rep, idx) => (
                <button
                  key={idx}
                  className="px-3.5 py-2 rounded-lg bg-sky-50/60 hover:bg-sky-600 hover:text-white text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 border border-sky-100"
                >
                  <Icon name="FileText" className="w-3.5 h-3.5 text-sky-600 group-hover:text-white" />
                  <span>{rep.title.split("(")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
