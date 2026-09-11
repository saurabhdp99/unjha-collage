"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icons";
import { notices, collegeInfo } from "@/data/collegeData";

export default function UrbanHomeGrid() {
  const latest = notices.slice(0, 5);

  return (
    <section className="section-pad">
      <div className="container-shell grid lg:grid-cols-2 gap-5 items-start">
        {/* About */}
        <div className="card p-5">
          <h2 className="section-title">About the College</h2>
          <p className="section-sub">Estd. {collegeInfo.established} | {collegeInfo.campus}</p>
          <div className="relative h-44 rounded overflow-hidden border border-slate-200 mt-3">
            <Image
              src="/images/campus_front.jpg"
              alt="College campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            <strong className="text-slate-900">{collegeInfo.name}</strong>, {collegeInfo.campus},
            Unjha (Dist. Mehsana) is a government college {collegeInfo.affiliation}. B.Sc. in
            Chemistry, Physics, Mathematics and Botany is offered in Gujarati & English medium.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-3 text-[13px]">
            <p className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
              <strong>HNGU Code:</strong> {collegeInfo.hnguCode}
            </p>
            <p className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
              <strong>AISHE:</strong> {collegeInfo.aisheCode}
            </p>
          </div>
          <Link href="/about" className="btn-primary w-full mt-4">
            Read More <Icon name="ArrowRight" className="w-4 h-4" />
          </Link>
        </div>

        {/* Notices */}
        <div className="card p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="section-title">Notices & Circulars</h2>
              <p className="section-sub">Latest updates for students</p>
            </div>
            <Link href="/notices" className="text-[13px] font-semibold text-[#1e3a5f] underline underline-offset-4 shrink-0">
              View All
            </Link>
          </div>
          <ul className="divide-y divide-slate-100 mt-2">
            {latest.map((n) => (
              <li key={n.id} className="py-2.5 flex gap-3">
                <div className="text-[11px] font-bold text-slate-500 w-20 shrink-0">{n.date}</div>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold leading-snug flex items-start gap-1.5">
                    {n.isUrgent && (
                      <span className="text-[10px] font-bold bg-red-600 text-white px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                        NEW
                      </span>
                    )}
                    <span className="line-clamp-2">{n.title}</span>
                  </p>
                  <p className="text-[12px] text-slate-500 mt-0.5">
                    {n.category} | PDF • {n.fileSize}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/notices" className="btn-outline w-full mt-3">
            All Notices & Circulars
          </Link>
        </div>
      </div>
    </section>
  );
}
