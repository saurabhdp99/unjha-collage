"use client";

import React from "react";
import { Icon } from "./Icons";
import { collegeInfo } from "@/data/collegeData";

export default function UrbanFooter({ onNavigateSection }) {
  return (
    <footer id="contact-section" className="bg-[#071a2e] text-slate-300 pt-12 pb-8 border-t-4 border-[#d97706] font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Col 1: College Emblem & Profile */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#071a2e] via-[#0a2540] to-[#14385e] border-2 border-[#d97706] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Icon name="GraduationCap" className="w-7 h-7 text-[#fde68a]" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm sm:text-base leading-tight">
                  {collegeInfo.name}
                </h4>
                <div className="text-[11px] text-[#fde68a] font-semibold mt-0.5">
                  Govt. of Gujarat • {collegeInfo.campus}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4 text-justify">
              A premier Government Science College in North Gujarat affiliated to Hemchandracharya North Gujarat University (HNGU), Patan.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-[#fde68a] font-bold">Category:</span>
                <span>Government Science College</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#d97706] font-bold">Govt:</span>
                <span>Education Department, Gujarat</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#fde68a] font-bold">Codes:</span>
                <span>HNGU: {collegeInfo.hnguCode} | AISHE: {collegeInfo.aisheCode}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3.5 border-b border-[#14385e] pb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#d97706] rounded-full"></span>
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection("about")} className="hover:text-[#fde68a] transition-colors flex items-center gap-1.5">
                  <Icon name="ChevronRight" className="w-3 h-3 text-[#d97706]" />
                  <span>About College Profile</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("departments")} className="hover:text-[#fde68a] transition-colors flex items-center gap-1.5">
                  <Icon name="ChevronRight" className="w-3 h-3 text-[#d97706]" />
                  <span>B.Sc. Science Departments</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("facilities-section")} className="hover:text-[#fde68a] transition-colors flex items-center gap-1.5 font-bold text-white">
                  <Icon name="ChevronRight" className="w-3 h-3 text-[#d97706]" />
                  <span>Laboratories & Campus</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("notice-section")} className="hover:text-[#fde68a] transition-colors flex items-center gap-1.5">
                  <Icon name="ChevronRight" className="w-3 h-3 text-[#d97706]" />
                  <span>Digital Notice Board</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("iqac-section")} className="hover:text-[#fde68a] transition-colors flex items-center gap-1.5 font-bold text-[#fde68a]">
                  <Icon name="ChevronRight" className="w-3 h-3 text-[#d97706]" />
                  <span>IQAC & Academic Excellence</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Campus Contact Details */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3.5 border-b border-[#14385e] pb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#d97706] rounded-full"></span>
              <span>Contact & Location</span>
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-white block">{collegeInfo.campus}</span>
                  <span className="text-slate-300 block">{collegeInfo.address}</span>
                  <span className="text-[#fde68a] text-[11px] font-semibold block">
                    City: {collegeInfo.city} • Dist: {collegeInfo.district} (PIN: {collegeInfo.pincode})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Phone" className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>Phone: <span className="font-mono text-white font-bold">{collegeInfo.phone}</span></span>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Printer" className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>College Fax: <span className="font-mono text-white">{collegeInfo.fax}</span></span>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Mail" className="w-4 h-4 text-[#d97706] shrink-0" />
                <a href={`mailto:${collegeInfo.email}`} className="hover:text-[#fde68a] text-white">
                  {collegeInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Icon name="Clock" className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>{collegeInfo.officeHours}</span>
              </div>
            </div>

            {/* Helpline Box */}
            <div className="mt-4 p-2.5 rounded-lg bg-[#0a2540] border border-[#14385e] text-center shadow-inner">
              <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">College Helpdesk & Inquiry</div>
              <div className="text-sm font-black text-[#fde68a] font-mono">{collegeInfo.helpline}</div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & RTI Bar */}
        <div className="pt-6 border-t border-[#14385e] text-xs flex flex-col md:flex-row items-center justify-between gap-3 text-slate-400">
          <div>
            © {new Date().getFullYear()} {collegeInfo.name}, Unjha. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="hover:text-[#fde68a] cursor-pointer transition-colors">RTI Statutory Info</span>
            <span>•</span>
            <span className="hover:text-[#fde68a] cursor-pointer transition-colors">Anti-Ragging Policy</span>
            <span>•</span>
            <span className="hover:text-[#fde68a] cursor-pointer transition-colors">NIRF & IQAC Data</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
