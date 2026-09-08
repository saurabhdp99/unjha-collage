"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { collegeInfo } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function Header({ lang, setLang, onNavigateSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks = [
    { id: "home", label: t.navHome },
    { id: "about", label: t.navAbout },
    { id: "academics", label: t.navAcademics },
    { id: "admissions", label: t.navAdmissions },
    { id: "student-hub", label: t.navStudents },
    { id: "results", label: t.navResults, highlight: true },
    { id: "facilities", label: t.navFacilities },
    { id: "scholarships", label: t.navScholarships },
    { id: "iqac", label: "IQAC / NAAC" },
    { id: "contact", label: t.navContact },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md bg-white">
      {/* Top Statutory & Affiliation Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Affiliation & Accreditations */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-center md:text-left">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-400">
              <Icon name="Award" className="w-3.5 h-3.5" />
              NAAC 'B' (2.75)
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300">
              {lang === "gu" ? `HNGU કોલેજ કોડ: ${collegeInfo.hnguCode}` : `HNGU Code: ${collegeInfo.hnguCode}`}
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300">AISHE: {collegeInfo.aisheCode}</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-medium hidden lg:inline">
              {collegeInfo.ugcStatus}
            </span>
          </div>

          {/* Right: Helpline & Language Switcher */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${collegeInfo.helpline}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <Icon name="Phone" className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono">{collegeInfo.helpline}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "gu" : "en")}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-sm text-xs"
              title="Toggle Language"
            >
              <Icon name="Globe" className="w-3.5 h-3.5" />
              <span>{t.langToggle}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* College Logo / Title */}
        <div 
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 flex items-center justify-center text-amber-400 shadow-md border-2 border-amber-400/80 group-hover:scale-105 transition-transform shrink-0">
            <Icon name="GraduationCap" className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div>
            <div className="text-base sm:text-lg md:text-xl font-extrabold text-blue-950 tracking-tight leading-tight group-hover:text-blue-800 transition-colors">
              {lang === "gu" ? collegeInfo.gujaratiName : collegeInfo.name}
            </div>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-2 mt-0.5">
              <span>{collegeInfo.trustName}</span>
              <span className="inline-block w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-blue-700 font-semibold">{collegeInfo.affiliation}</span>
            </div>
          </div>
        </div>

        {/* Right side spacer */}
        <div className="hidden xl:flex items-center gap-3"></div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navbar Links (Desktop) */}
      <nav className="hidden xl:block bg-blue-950 border-t border-blue-900/60 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <ul className="flex items-center gap-1 text-sm font-medium text-slate-100">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-3 hover:bg-blue-900 hover:text-amber-300 transition-colors flex items-center gap-1.5 ${
                    link.highlight ? "text-amber-400 font-bold bg-blue-900/60" : ""
                  }`}
                >
                  {link.highlight && <Icon name="Award" className="w-4 h-4 text-amber-400" />}
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick("results")}
              className="px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors flex items-center gap-1.5"
            >
              <Icon name="TrendingUp" className="w-3.5 h-3.5" />
              {lang === "gu" ? "HNGU રીઝલ્ટ" : "HNGU Results"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 text-white border-t border-slate-800 shadow-2xl px-4 py-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  link.highlight
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "hover:bg-slate-800 text-slate-200"
                }`}
              >
                <span>{link.label}</span>
                <Icon name="ChevronRight" className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
