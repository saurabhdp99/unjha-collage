"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { collegeInfo } from "@/data/collegeData";

export default function UrbanFooter() {
  return (
    <footer className="bg-[#152a45] text-slate-300">
      <div className="container-shell py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold text-sm mb-3">{collegeInfo.name}</h4>
          <p className="text-[13px] leading-relaxed">
            {collegeInfo.campus}, {collegeInfo.address}
          </p>
          <p className="text-[12px] mt-2">
            HNGU Code: {collegeInfo.hnguCode} | AISHE: {collegeInfo.aisheCode}
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-3">Quick Links</h4>
          <ul className="grid gap-1.5 text-[13px]">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/departments" className="hover:text-white">Departments</Link></li>
            <li><Link href="/notices" className="hover:text-white">Notices</Link></li>
            <li><Link href="/facilities" className="hover:text-white">Facilities</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-3">Contact</h4>
          <ul className="space-y-1.5 text-[13px]">
            <li className="flex gap-2"><Icon name="Phone" className="w-4 h-4 shrink-0 mt-0.5" />{collegeInfo.phone}</li>
            <li className="flex gap-2"><Icon name="Mail" className="w-4 h-4 shrink-0 mt-0.5" />{collegeInfo.email}</li>
            <li className="flex gap-2"><Icon name="Clock" className="w-4 h-4 shrink-0 mt-0.5" />{collegeInfo.officeHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-4 text-[12px] flex flex-col sm:flex-row justify-between gap-1">
          <p>© {new Date().getFullYear()} {collegeInfo.shortName}, Unjha. All rights reserved.</p>
          <p>{collegeInfo.affiliation}</p>
        </div>
      </div>
    </footer>
  );
}
