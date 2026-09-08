"use client";

import React from "react";
import { Icon } from "./Icons";
import { collegeInfo } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function Footer({ lang, onNavigateSection }) {
  const t = translations[lang];

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center text-amber-400 border border-amber-400/80 shrink-0">
                <Icon name="GraduationCap" className="w-7 h-7" />
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">
                  {lang === "gu" ? collegeInfo.gujaratiName : collegeInfo.name}
                </div>
                <div className="text-xs text-amber-400 font-semibold mt-0.5">
                  Govt. of Gujarat • {collegeInfo.campus}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {lang === "gu"
                ? "હેમચંદ્રાચાર્ય ઉત્તર ગુજરાત યુનિવર્સિટી (HNGU), પાટણ સંલગ્ન ઉત્તર ગુજરાતનું અગ્રણી સરકારી વિજ્ઞાન મહાવિદ્યાલય."
                : "Dedicated to scientific excellence, empirical research, and youth empowerment in North Gujarat under Hemchandracharya North Gujarat University (HNGU), Patan."}
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Icon name="Award" className="w-4 h-4 text-amber-400" />
                <span>Government Science College</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="w-4 h-4 text-emerald-400" />
                <span>Education Department, Govt. of Gujarat</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheck" className="w-4 h-4 text-blue-400" />
                <span>AISHE Code: {collegeInfo.aisheCode} | HNGU: {collegeInfo.hnguCode}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {lang === "gu" ? "ઝડપી લિંક્સ" : "Quick Navigation"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection("about")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ChevronRight" className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.navAbout}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("academics")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ChevronRight" className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.navAcademics}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("results")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-bold text-amber-300"
                >
                  <Icon name="ChevronRight" className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.navResults}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("notices")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ChevronRight" className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.latestNotices}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("facilities")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ChevronRight" className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.navFacilities}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("scholarships")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ChevronRight" className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.navScholarships}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("contact")}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-blue-400 font-bold"
                >
                  <Icon name="ChevronRight" className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.navContact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & External Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {lang === "gu" ? "યુનિવર્સિટી અને પોર્ટલ્સ" : "HNGU & Govt Portals"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.ngu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ExternalLink" className="w-3.5 h-3.5 text-slate-500" />
                  <span>HNGU Patan Official Website</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.digitalgujarat.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ExternalLink" className="w-3.5 h-3.5 text-slate-500" />
                  <span>Digital Gujarat Scholarship Portal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://mysy.guj.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ExternalLink" className="w-3.5 h-3.5 text-slate-500" />
                  <span>MYSY Portal Gujarat</span>
                </a>
              </li>
              <li>
                <a
                  href="https://baou.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ExternalLink" className="w-3.5 h-3.5 text-slate-500" />
                  <span>BAOU Open University</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.ugc.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ExternalLink" className="w-3.5 h-3.5 text-slate-500" />
                  <span>University Grants Commission (UGC)</span>
                </a>
              </li>
              <li>
                <a
                  href="http://naac.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="ExternalLink" className="w-3.5 h-3.5 text-slate-500" />
                  <span>NAAC Quality Council</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {lang === "gu" ? "કેમ્પસ સરનામું અને સંપર્ક" : "Contact & Location"}
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Icon name="MapPin" className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{collegeInfo.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Icon name="Phone" className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{collegeInfo.phone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Icon name="Printer" className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fax: <span className="font-mono">{collegeInfo.fax}</span></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Icon name="Mail" className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${collegeInfo.email}`} className="hover:text-amber-400 transition-colors">
                  {collegeInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Icon name="Clock" className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{collegeInfo.officeHours}</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-medium">
                {lang === "gu" ? "પ્રવેશ & પરિણામ હેલ્પડેસ્ક:" : "Admissions & Results Helpline:"}
              </div>
              <div className="text-sm font-bold text-amber-400 font-mono mt-0.5">
                {collegeInfo.helpline}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} {collegeInfo.name}, Unjha. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Use</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">RTI Statutory Declaration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
