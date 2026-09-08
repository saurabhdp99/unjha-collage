"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { collegeInfo } from "@/data/collegeData";

export default function UrbanHeader({ onNavigateSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { id: "home", label: "Home" },
    {
      id: "about",
      label: "About Us",
      dropdown: [
        { id: "about", label: "College Profile" },
        { id: "about", label: "Vision & Mission" },
        { id: "principal-desk", label: "Principal's Desk" },
        { id: "principal-desk", label: "Management Board" },
        { id: "iqac-section", label: "IQAC & NAAC" },
      ],
    },
    {
      id: "departments",
      label: "Departments",
      dropdown: [
        { id: "departments", label: "Department of Chemistry (B.Sc.)" },
        { id: "departments", label: "Department of Physics (B.Sc.)" },
        { id: "departments", label: "Department of Mathematics (B.Sc.)" },
        { id: "departments", label: "Department of Botany (B.Sc.)" },
      ],
    },
    {
      id: "student-corner",
      label: "Student Corner",
      dropdown: [
        { id: "notice-section", label: "Live Notice Board" },
        { id: "departments", label: "NEP Syllabus & Timetable" },
        { id: "committees-section", label: "Anti-Ragging Committee" },
        { id: "committees-section", label: "Women Development Cell" },
      ],
    },
    { id: "notice-section", label: "Notices", highlight: true },
    { id: "facilities-section", label: "Campus & Facilities" },
    { id: "gallery-section", label: "Gallery" },
    { id: "contact-section", label: "Contact Us" },
  ];

  const handleItemClick = (sectionId) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="w-full bg-white border-b border-sky-100/80 sticky top-0 z-50 font-sans">
      {/* 1. TOP STATUTORY & CONTACT BAR */}
      <div className="bg-slate-900 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Accreditation Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-300">
            <span className="font-semibold text-sky-300 flex items-center gap-1">
              <Icon name="Award" className="w-3.5 h-3.5 text-amber-400" />
              Govt. Science College
            </span>
            <span className="text-slate-600">|</span>
            <span>HNGU Code: <strong className="text-white font-mono">{collegeInfo.hnguCode}</strong></span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline">AISHE: <strong className="text-white font-mono">{collegeInfo.aisheCode}</strong></span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-emerald-400 font-medium hidden md:inline">{collegeInfo.campus}, Unjha</span>
          </div>

          {/* Right Action Helpline */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${collegeInfo.helpline}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-sky-300 transition-colors"
            >
              <Icon name="Phone" className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono text-xs font-semibold">{collegeInfo.helpline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. GRAND COLLEGE BRANDING HEADER */}
      <div className="bg-gradient-to-r from-white via-sky-50/30 to-white border-b border-slate-200/80 py-3 sm:py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & College Details */}
          <div
            onClick={() => handleItemClick("home")}
            className="flex items-center gap-3.5 sm:gap-4 cursor-pointer text-center md:text-left"
          >
            {/* Luminous Light Blue Crest */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 border-2 border-sky-200 flex items-center justify-center text-white shrink-0">
              <Icon name="GraduationCap" className="w-8 h-8 sm:w-9 sm:h-9 text-sky-100" />
            </div>

            <div>
              {/* Trust / Governance Subheading */}
              <div className="text-[11px] sm:text-xs font-bold text-sky-700 tracking-wide uppercase">
                Government of Gujarat • MRS Highschool Campus, Unjha (Dist. Mehsana)
              </div>

              {/* Main College Name */}
              <h1 className="text-base sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                {collegeInfo.name}
              </h1>

              {/* Affiliation & Motto */}
              <div className="text-[11px] sm:text-xs text-slate-600 font-medium flex flex-wrap items-center justify-center md:justify-start gap-2 mt-0.5">
                <span className="text-sky-700 font-semibold">
                  Affiliated to HNGU Patan (College Code: {collegeInfo.hnguCode})
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
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-sky-50 text-sky-800 hover:bg-sky-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN HORIZONTAL NAVIGATION BAR */}
      <nav className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-700 text-white border-y border-sky-500/50 hidden lg:block">
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
                  className={`px-3.5 py-3 hover:bg-sky-600/90 hover:text-sky-100 transition-colors flex items-center gap-1 border-r border-sky-500/40 ${
                    item.highlight ? "bg-amber-500 text-slate-950 hover:bg-amber-400 font-black" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <Icon name="ChevronDown" className="w-3.5 h-3.5 text-sky-200 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Dropdown Menu - Low Shadow & Crisp Hairline Border */}
                {item.dropdown && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-800 rounded-b-xl border border-slate-200 border-t-2 border-t-sky-600 py-1.5 z-50 animate-fadeIn">
                    {item.dropdown.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleItemClick(sub.id)}
                        className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors border-b border-slate-100 last:border-0 flex items-center justify-between group/sub"
                      >
                        <span>{sub.label}</span>
                        <Icon name="ChevronRight" className="w-3 h-3 text-slate-300 group-hover/sub:text-sky-600 group-hover/sub:translate-x-0.5 transition-all" />
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
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 p-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-slate-800/80 pb-1">
                <button
                  onClick={() => handleItemClick(item.id)}
                  className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold flex items-center justify-between text-slate-100 hover:bg-slate-800"
                >
                  <span>{item.label}</span>
                  <Icon name="ChevronRight" className="w-4 h-4 text-sky-400" />
                </button>

                {/* Mobile Submenu */}
                {item.dropdown && (
                  <div className="pl-4 py-1 space-y-1">
                    {item.dropdown.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleItemClick(sub.id)}
                        className="w-full text-left py-1.5 px-3 text-xs text-slate-300 hover:text-sky-300 font-medium block"
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
