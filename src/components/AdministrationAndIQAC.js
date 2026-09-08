"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { administration } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function AdministrationAndIQAC({ lang }) {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState("principal");

  return (
    <section id="about" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Icon name="Award" className="w-3.5 h-3.5" />
            <span>{lang === "gu" ? "સંચાલન અને ગુણવત્તા" : "Leadership & IQAC"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.adminTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.adminSubtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("principal")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === "principal"
                ? "bg-blue-950 text-amber-400 shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Icon name="Users" className="w-4 h-4" />
            <span>{lang === "gu" ? "આચાર્યશ્રીનો સંદેશ" : "Principal's Desk"}</span>
          </button>

          <button
            onClick={() => setActiveTab("iqac")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === "iqac"
                ? "bg-blue-950 text-amber-400 shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Icon name="ShieldCheck" className="w-4 h-4" />
            <span>{lang === "gu" ? "IQAC & NAAC ગુણવત્તા સેલ" : "IQAC & NAAC Accreditation"}</span>
          </button>

          <button
            onClick={() => setActiveTab("committees")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === "committees"
                ? "bg-blue-950 text-amber-400 shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Icon name="ShieldCheck" className="w-4 h-4" />
            <span>{lang === "gu" ? "વૈધાનિક સમિતિઓ (Anti-Ragging / CWDC)" : "Statutory Committees"}</span>
          </button>
        </div>

        {/* Tab 1: Principal Desk */}
        {activeTab === "principal" && (
          <div className="glass-panel bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Principal Photo Avatar / Profile */}
              <div className="w-full lg:w-72 shrink-0 text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-2xl bg-gradient-to-tr from-blue-950 via-slate-900 to-indigo-900 border-4 border-amber-400/80 shadow-xl flex items-center justify-center text-amber-400 mb-4">
                  <Icon name="GraduationCap" className="w-20 h-20 text-amber-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-blue-950">
                  {administration.principalName}
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  {administration.principalDesignation}
                </p>
                <div className="mt-3 inline-block px-3 py-1 bg-blue-50 text-blue-900 text-[11px] font-bold rounded-full border border-blue-100">
                  {lang === "gu" ? collegeInfo.gujaratiName : collegeInfo.name}
                </div>
              </div>

              {/* Principal Message Content */}
              <div className="w-full">
                <div className="text-amber-500 mb-2">
                  <svg className="w-8 h-8 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  {administration.principalMessage}
                </p>

                {/* Vision & Mission */}
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950 mb-2">
                    {lang === "gu" ? "કોલેજ વિઝન (Vision):" : "Institutional Vision:"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 font-medium">
                    {administration.vision}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950 mb-2">
                    {lang === "gu" ? "ધ્યેય (Mission):" : "Key Missions:"}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                    {administration.mission.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: IQAC & NAAC */}
        {activeTab === "iqac" && (
          <div id="iqac" className="glass-panel bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-center">
                <div className="text-2xl font-black text-blue-950 mb-1">NAAC 'B' Grade</div>
                <div className="text-xs text-blue-800 font-semibold">{administration.naacCycle}</div>
              </div>
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100 text-center">
                <div className="text-sm font-bold text-amber-950 mb-1">IQAC Coordinator</div>
                <div className="text-xs text-amber-800 font-semibold">{administration.iqacCoordinator}</div>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                <div className="text-sm font-bold text-emerald-950 mb-1">UGC 2(f) & 12(B)</div>
                <div className="text-xs text-emerald-800 font-semibold">UGC Permanent Recognition</div>
              </div>
            </div>

            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {lang === "gu" ? "IQAC અહેવાલો અને ગુણવત્તા પ્રમાણપત્રો:" : "IQAC Reports & Quality Assurance Documents:"}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {administration.iqacReportLinks.map((rep, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Icon name="FileText" className="w-5 h-5 text-blue-900 group-hover:text-blue-700" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-950">
                      {rep.title}
                    </span>
                  </div>
                  <button className="p-2 rounded-lg text-blue-900 bg-white border border-slate-200 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Icon name="Download" className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Statutory Committees */}
        {activeTab === "committees" && (
          <div className="glass-panel bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Anti Ragging */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-red-100 text-red-900 w-fit mb-4">
                  <Icon name="ShieldCheck" className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {lang === "gu" ? "રેગિંગ વિરોધી સમિતિ" : "Anti-Ragging Committee"}
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Zero tolerance against ragging as per UGC & Supreme Court regulations. 24x7 monitoring.
                </p>
                <div className="text-xs font-semibold text-red-700">
                  Toll-Free: 1800-180-5522
                </div>
              </div>

              {/* Grievance Cell */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-900 w-fit mb-4">
                  <Icon name="Users" className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {lang === "gu" ? "વિદ્યાર્થી ફરિયાદ નિવારણ સેલ" : "Student Grievance Cell"}
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Fair and prompt redressal of academic and administrative student grievances.
                </p>
                <div className="text-xs font-semibold text-blue-900">
                  Email: {collegeInfo.email}
                </div>
              </div>

              {/* CWDC */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-purple-100 text-purple-900 w-fit mb-4">
                  <Icon name="Award" className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {lang === "gu" ? "મહિલા વિકાસ સેલ (CWDC)" : "Collegiate Women Dev Cell"}
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Dedicated counseling, gender sensitization, and safety cell for female students & staff.
                </p>
                <div className="text-xs font-semibold text-purple-800">
                  Incharge: Prof. Neetaben Patel
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
