"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { academicPrograms } from "@/data/collegeData";

export default function UrbanDepartments() {
  return (
    <section className="section-pad bg-white border-y border-slate-200">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-3 mb-4">
          <div>
            <h2 className="section-title">Departments & Programs</h2>
            <p className="section-sub">B.Sc. programs affiliated to HNGU Patan</p>
          </div>
          <Link href="/departments" className="text-[13px] font-semibold text-[#1e3a5f] underline underline-offset-4 shrink-0">
            View All
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {academicPrograms.map((p) => (
            <div key={p.id} className="card p-4 flex flex-col">
              <span className="w-10 h-10 rounded bg-[#1e3a5f]/10 flex items-center justify-center">
                <Icon name="BookOpen" className="w-5 h-5 text-[#1e3a5f]" />
              </span>
              <h3 className="font-bold text-[15px] leading-snug mt-2">{p.name}</h3>
              <p className="text-[13px] text-slate-600 mt-1">Intake: {p.intake} seats</p>
              <p className="text-[13px] text-slate-600">{p.duration}</p>
              <p className="text-[12px] text-slate-500 mt-1 line-clamp-2">{p.eligibility}</p>
              <Link
                href={`/departments#${p.id}`}
                className="mt-3 text-[13px] font-semibold text-[#1e3a5f] hover:underline underline-offset-4"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
