"use client";

import React from "react";
import { Icon } from "./Icons";
import { collegeInfo } from "@/data/collegeData";

export default function UrbanFooter({ lang, onNavigateSection, onOpenApplyModal }) {
  return (
    <footer id="contact-section" className="bg-[#112233] text-slate-300 pt-12 pb-8 border-t-4 border-[#800000] font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main 4-Column Grid (Mehsana Urban College Footer Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: College Emblem & Profile */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#800000] border-2 border-amber-500 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                <Icon name="GraduationCap" className="w-7 h-7 text-amber-300" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm sm:text-base leading-tight">
                  {lang === "gu" ? collegeInfo.gujaratiName : collegeInfo.name}
                </h4>
                <div className="text-[11px] text-amber-400 font-semibold mt-0.5">
                  Est. 1965 • {collegeInfo.trustName}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-4 text-justify">
              {lang === "gu"
                ? "હેમચંદ્રાચાર્ય ઉત્તર ગુજરાત યુનિવર્સિટી (HNGU), પાટણ સંલગ્ન ઉત્તર ગુજરાતનું અગ્રણી ઉચ્ચ શિક્ષણ સંસ્થાન."
                : "A premier institution of higher learning in North Gujarat affiliated to Hemchandracharya North Gujarat University (HNGU), Patan."}
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">NAAC:</span>
                <span>Accredited 'B' Grade (CGPA 2.75)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">UGC:</span>
                <span>Recognized 2(f) & 12(B) Permanent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-300 font-bold">Codes:</span>
                <span>HNGU: 021 | AISHE: {collegeInfo.aisheCode}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3.5 border-b border-slate-700 pb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span>{lang === "gu" ? "ઝડપી લિંક્સ" : "Quick Navigation"}</span>
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => onNavigateSection("about")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ChevronRight" className="w-3 h-3 text-slate-500" />
                  <span>About College Profile</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("departments")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ChevronRight" className="w-3 h-3 text-slate-500" />
                  <span>Academic Departments & NEP</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("facilities-section")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300 font-bold">
                  <Icon name="ChevronRight" className="w-3 h-3 text-amber-400" />
                  <span>Campus & Infrastructure</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("notice-section")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ChevronRight" className="w-3 h-3 text-slate-500" />
                  <span>Digital Notice Board</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("scholarship-section")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ChevronRight" className="w-3 h-3 text-slate-500" />
                  <span>MYSY & Digital Gujarat Scholarships</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("iqac-section")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Icon name="ChevronRight" className="w-3 h-3 text-emerald-400" />
                  <span>IQAC & NAAC Reports</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: HNGU & Government Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3.5 border-b border-slate-700 pb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
              <span>{lang === "gu" ? "યુનિવર્સિટી & સરકારી પોર્ટલ્સ" : "HNGU & Useful Portals"}</span>
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="https://www.ngu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ExternalLink" className="w-3 h-3 text-slate-500" />
                  <span>HNGU Patan Official Portal</span>
                </a>
              </li>
              <li>
                <a href="https://www.digitalgujarat.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ExternalLink" className="w-3 h-3 text-slate-500" />
                  <span>Digital Gujarat Scholarships</span>
                </a>
              </li>
              <li>
                <a href="https://mysy.guj.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ExternalLink" className="w-3 h-3 text-slate-500" />
                  <span>MYSY Portal Gujarat</span>
                </a>
              </li>
              <li>
                <a href="https://baou.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ExternalLink" className="w-3 h-3 text-slate-500" />
                  <span>BAOU Open University (1502)</span>
                </a>
              </li>
              <li>
                <a href="http://naac.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Icon name="ExternalLink" className="w-3 h-3 text-slate-500" />
                  <span>NAAC Quality Portal</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Details */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3.5 border-b border-slate-700 pb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span>{lang === "gu" ? "કેમ્પસ સરનામું અને સંપર્ક" : "Contact & Location"}</span>
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{collegeInfo.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Phone" className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{collegeInfo.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Mail" className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${collegeInfo.email}`} className="hover:text-amber-400">
                  {collegeInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Clock" className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{collegeInfo.officeHours}</span>
              </div>
            </div>

            {/* Helpline Box */}
            <div className="mt-4 p-2.5 rounded-lg bg-[#1b3557] border border-slate-700 text-center">
              <div className="text-[10px] text-slate-300 font-bold uppercase">Emergency Helpline</div>
              <div className="text-sm font-black text-amber-400 font-mono">{collegeInfo.helpline}</div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & RTI Bar */}
        <div className="pt-6 border-t border-slate-800 text-xs flex flex-col md:flex-row items-center justify-between gap-3 text-slate-400">
          <div>
            © {new Date().getFullYear()} {collegeInfo.name}, Unjha. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="hover:text-slate-300 cursor-pointer">RTI Statutory Info</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Anti-Ragging Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">NIRF & IQAC Data</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
