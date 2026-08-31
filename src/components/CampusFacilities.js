"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { facilities } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function CampusFacilities({ lang }) {
  const t = translations[lang];
  const [activeFacilityId, setActiveFacilityId] = useState(facilities[0].id);

  const activeFacility = facilities.find((f) => f.id === activeFacilityId) || facilities[0];

  return (
    <section id="facilities" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Icon name="LandPlot" className="w-3.5 h-3.5" />
            <span>{lang === "gu" ? "કેમ્પસ આંતરમાળખું" : "Infrastructure & Campus"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.facilitiesTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.facilitiesSubtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {facilities.map((fac) => (
            <button
              key={fac.id}
              onClick={() => setActiveFacilityId(fac.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeFacilityId === fac.id
                  ? "bg-blue-900 text-amber-300 shadow-md scale-105"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Icon name={fac.icon} className="w-4 h-4" />
              <span>{lang === "gu" ? fac.titleGu : fac.title.split("&")[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Facility Feature Showcase */}
        <div className="glass-panel bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Facility Visual Icon Banner */}
            <div className="w-full lg:w-1/2 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-8 sm:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[280px]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <div className="p-3.5 rounded-2xl bg-white/10 w-fit text-amber-400 mb-6 backdrop-blur-md border border-white/10">
                  <Icon name={activeFacility.icon} className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {lang === "gu" ? "કેમ્પસ સુવિધા" : "Campus Amenity"}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {lang === "gu" ? activeFacility.titleGu : activeFacility.title}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-2">
                <Icon name="CheckCircle" className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{activeFacility.stats}</span>
              </div>
            </div>

            {/* Facility Details */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                {activeFacility.stats}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {lang === "gu" ? activeFacility.titleGu : activeFacility.title}
              </h4>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {activeFacility.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === "gu" ? "વિદ્યાર્થીઓ માટે નિઃશુલ્ક" : "Accessible to All Students"}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <Icon name="ShieldCheck" className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{lang === "gu" ? "24/7 સીસીટીવી સુરક્ષા" : "24/7 CCTV & Security"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
