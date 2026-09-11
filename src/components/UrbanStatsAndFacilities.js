"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icons";
import { facilities, collegeInfo } from "@/data/collegeData";

export default function UrbanStatsAndFacilities() {
  return (
    <>
      {/* Simple stats */}
      <section className="bg-[#1e3a5f] text-white">
        <div className="container-shell py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {collegeInfo.stats.map((s) => (
            <div key={s.label} className="text-center border border-white/15 rounded-lg py-3 px-2">
              <Icon name={s.icon} className="w-5 h-5 mx-auto text-amber-300" />
              <p className="font-bold text-lg mt-1">{s.value}</p>
              <p className="text-[11px] text-slate-300 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white border-b border-slate-200">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-3 mb-4">
            <div>
              <h2 className="section-title">Facilities</h2>
              <p className="section-sub">Labs, library, sports & NSS at MRS Campus</p>
            </div>
            <Link href="/facilities" className="text-[13px] font-semibold text-[#1e3a5f] underline underline-offset-4 shrink-0">
              View All
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.slice(0, 3).map((f) => (
              <div key={f.id} className="card overflow-hidden">
                <div className="relative h-40">
                  <Image src={f.image} alt={f.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[15px] leading-snug">{f.title}</h3>
                  <p className="text-[13px] text-slate-600 mt-1 line-clamp-3">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
