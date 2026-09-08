"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { collegeInfo } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function UrbanHeader({
  lang,
  setLang,
  onNavigateSection,
  activeSection,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const t = translations[lang];

  const menuItems = [
    { id: "home", label: lang === "gu" ? "મુખ્ય પૃષ્ઠ" : "Home" },
    {
      id: "about",
      label: lang === "gu" ? "અમારા વિશે" : "About Us",
      dropdown: [
        { id: "about", label: lang === "gu" ? "કોલેજ પરિચય" : "College Profile" },
        { id: "about", label: lang === "gu" ? "વિઝન અને મિશન" : "Vision & Mission" },
        { id: "principal-desk", label: lang === "gu" ? "આચાર્યશ્રીનો સંદેશ" : "Principal's Desk" },
        { id: "principal-desk", label: lang === "gu" ? "સંચાલક મંડળ" : "Management Board" },
        { id: "iqac-section", label: "IQAC & NAAC" },
      ],
    },
    {
      id: "departments",
      label: lang === "gu" ? "વિભાગો & અભ્યાસક્રમો" : "Departments",
      dropdown: [
        { id: "departments", label: "Department of Chemistry (B.Sc.)" },
        { id: "departments", label: "Department of Physics (B.Sc.)" },
        { id: "departments", label: "Department of Mathematics (B.Sc.)" },
        { id: "departments", label: "Department of Botany (B.Sc.)" },
        { id: "departments", label: "BAOU Open Learning Centre (1502)" },
      ],
    },
    {
      id: "student-corner",
      label: lang === "gu" ? "વિદ્યાર્થી કોર્નર" : "Student Corner",
      dropdown: [
        { id: "notice-section", label: lang === "gu" ? "ડિજિટલ નોટિસ બોર્ડ" : "Live Notice Board" },
        { id: "scholarship-section", label: lang === "gu" ? "MYSY & ડિજિટલ ગુજરાત સ્કોલરશિપ" : "Scholarships (MYSY / Govt)" },
        { id: "departments", label: lang === "gu" ? "NEP ૨૦૨૦ સિલેબસ & ટાઈમટેબલ" : "NEP Syllabus & Timetable" },
        { id: "committees-section", label: lang === "gu" ? "રેગિંગ વિરોધી સેલ (Anti-Ragging)" : "Anti-Ragging Committee" },
        { id: "committees-section", label: lang === "gu" ? "મહિલા વિકાસ સેલ (CWDC)" : "Women Development Cell" },
      ],
    },
    { id: "notice-section", label: lang === "gu" ? "સર્ક્યુલર / નોટિસ" : "Notices", highlight: true },
    { id: "facilities-section", label: lang === "gu" ? "કેમ્પસ સુવિધાઓ" : "Campus & Facilities" },
    { id: "scholarship-section", label: lang === "gu" ? "શિષ્યવૃત્તિ" : "Scholarships" },
    { id: "gallery-section", label: lang === "gu" ? "ગેલેરી" : "Gallery" },
    { id: "contact-section", label: lang === "gu" ? "સંપર્ક" : "Contact Us" },
  ];

  const handleItemClick = (sectionId) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 font-sans">
      {/* 1. TOP STATUTORY & CONTACT BAR (Mehsana Urban College Style) */}
      <div className="bg-[#1b3557] text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-[#294a73]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Accreditation Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-200">
            <span className="font-semibold text-amber-300 flex items-center gap-1">
              <Icon name="Award" className="w-3.5 h-3.5" />
              Govt. Science College
            </span>
            <span className="text-slate-400">|</span>
            <span>HNGU Code: {collegeInfo.hnguCode}</span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="hidden sm:inline">AISHE: {collegeInfo.aisheCode}</span>
            <span className="text-slate-400 hidden md:inline">|</span>
            <span className="text-emerald-300 font-medium hidden md:inline">{collegeInfo.campus}, Unjha</span>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${collegeInfo.helpline}`}
              className="flex items-center gap-1 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <Icon name="Phone" className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-xs">{collegeInfo.helpline}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "en" ? "gu" : "en")}
              className="px-2 py-0.5 rounded bg-white text-[#1b3557] font-bold text-[11px] hover:bg-amber-100 transition-colors flex items-center gap-1"
            >
              <Icon name="Globe" className="w-3 h-3 text-[#1b3557]" />
              <span>{t.langToggle}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. GRAND COLLEGE BRANDING HEADER (Mehsana Urban College Traditional Header) */}
      <div className="bg-gradient-to-r from-[#f8fafc] via-white to-[#f1f5f9] border-b border-slate-200 py-3 sm:py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & College Details */}
          <div
            onClick={() => handleItemClick("home")}
            className="flex items-center gap-3.5 sm:gap-4 cursor-pointer text-center md:text-left"
          >
            {/* Traditional College Crest */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#800000] border-2 border-amber-500 shadow-md flex items-center justify-center text-amber-400 shrink-0">
              <Icon name="GraduationCap" className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300" />
            </div>

            <div>
              {/* Trust / Governance Subheading */}
              <div className="text-[11px] sm:text-xs font-bold text-[#800000] tracking-wide uppercase">
                {lang === "gu"
                  ? "શિક્ષણ વિભાગ, ગુજરાત સરકાર • એમ. આર. એસ. હાઇસ્કૂલ કેમ્પસ, ઊંઝા (જી. મહેસાણા)"
                  : "Government of Gujarat • MRS Highschool Campus, Unjha (Dist. Mehsana)"}
              </div>

              {/* Main College Name */}
              <h1 className="text-base sm:text-xl lg:text-2xl font-black text-[#1b3557] tracking-tight leading-snug">
                {lang === "gu" ? collegeInfo.gujaratiName : collegeInfo.name}
              </h1>

              {/* Affiliation & Motto */}
              <div className="text-[11px] sm:text-xs text-slate-600 font-medium flex flex-wrap items-center justify-center md:justify-start gap-2 mt-0.5">
                <span className="text-[#800000] font-semibold">
                  {lang === "gu" ? `હેમચંદ્રાચાર્ય ઉત્તર ગુજરાત યુનિવર્સિટી (HNGU) સંલગ્ન (કોડ: ${collegeInfo.hnguCode})` : `Affiliated to HNGU Patan (College Code: ${collegeInfo.hnguCode})`}
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="italic text-slate-500 font-serif">
                  "સા વિદ્યા યા વિમુક્તયે" (Knowledge Leads to Liberation)
                </span>
              </div>
            </div>
          </div>

          {/* Right Action / Mobile Menu Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
              aria-label="Toggle Navigation"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN HORIZONTAL NAVIGATION BAR (Mehsana Urban Burgundy / Navy Bar with Dropdowns) */}
      <nav className="bg-[#800000] text-white shadow-inner hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center flex-wrap text-xs sm:text-[13px] font-bold">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3.5 py-3 hover:bg-[#600000] hover:text-amber-300 transition-colors flex items-center gap-1 border-r border-red-900/50 ${
                    item.highlight ? "bg-[#b45309] text-white hover:bg-[#92400e]" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <Icon name="ChevronDown" className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-2xl rounded-b-xl border-t-2 border-amber-500 py-2 z-50 animate-fadeIn">
                    {item.dropdown.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleItemClick(sub.id)}
                        className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-[#f8fafc] hover:text-[#800000] transition-colors border-b border-slate-100 last:border-0 flex items-center justify-between group/sub"
                      >
                        <span>{sub.label}</span>
                        <Icon name="ChevronRight" className="w-3 h-3 text-slate-300 group-hover/sub:text-[#800000] group-hover/sub:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 4. MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1b3557] text-white border-t border-[#294a73] p-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-slate-700/60 pb-1">
                <button
                  onClick={() => handleItemClick(item.id)}
                  className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold flex items-center justify-between text-slate-100 hover:bg-[#294a73]"
                >
                  <span>{item.label}</span>
                  <Icon name="ChevronRight" className="w-4 h-4 text-amber-400" />
                </button>

                {/* Mobile Submenu */}
                {item.dropdown && (
                  <div className="pl-4 py-1 space-y-1">
                    {item.dropdown.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleItemClick(sub.id)}
                        className="w-full text-left py-1.5 px-3 text-xs text-slate-300 hover:text-amber-300 font-medium block"
                      >
                        • {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
