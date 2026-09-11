"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";
import { collegeInfo } from "@/data/collegeData";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/admission", label: "Admission" },
  { href: "/departments", label: "Departments" },
  { href: "/faculty", label: "Faculty" },
  { href: "/notices", label: "Notices" },
  { href: "/student-corner", label: "Student Corner" },
  { href: "/facilities", label: "Facilities" },
  { href: "/iqac", label: "IQAC" },
  { href: "/leadership", label: "Principal's Desk" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function UrbanHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Top strip */}
      <div className="bg-[#152a45] text-slate-200 text-[11px] sm:text-xs">
        <div className="container-shell flex items-center justify-between gap-3 py-1.5">
          <p className="truncate">
            Govt. of Gujarat | HNGU Code: {collegeInfo.hnguCode} | AISHE: {collegeInfo.aisheCode}
          </p>
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <span>{collegeInfo.phone}</span>
            <span>{collegeInfo.email}</span>
          </div>
          <a href={`tel:${collegeInfo.helpline}`} className="sm:hidden font-semibold shrink-0">
            {collegeInfo.helpline}
          </a>
        </div>
      </div>

      {/* Brand */}
      <div className="bg-white border-b border-slate-200">
        <div className="container-shell flex items-center justify-between gap-3 py-3">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <span className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center shrink-0">
              <Icon name="GraduationCap" className="w-6 h-6 text-white" />
            </span>
            <span className="min-w-0">
              <span className="block text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {collegeInfo.name}
              </span>
              <span className="block text-[11px] sm:text-xs text-slate-600">
                {collegeInfo.affiliation} | {collegeInfo.campus}, Unjha
              </span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded border border-slate-300"
            aria-label="Toggle menu"
          >
            <Icon name={mobileOpen ? "X" : "Menu"} className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:block bg-[#1e3a5f]" aria-label="Primary">
          <div className="container-shell flex items-center flex-wrap">
            {NAV.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`px-4 py-2.5 text-[13px] font-semibold border-r border-white/10 first:border-l ${
                    active ? "bg-[#0f2038] text-amber-300" : "text-white hover:bg-white/10"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden bg-[#1e3a5f] animate-fadeIn" aria-label="Mobile">
            {NAV.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-semibold border-t border-white/10 ${
                    active ? "bg-[#0f2038] text-amber-300" : "text-white"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
