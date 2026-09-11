"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { administration } from "@/data/collegeData";

export default function UrbanPrincipalDesk() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-3 mb-4">
          <div>
            <h2 className="section-title">Principal&apos;s Desk</h2>
            <p className="section-sub">Message from the Principal</p>
          </div>
          <Link href="/leadership" className="text-[13px] font-semibold text-[#1e3a5f] underline underline-offset-4 shrink-0">
            Read More
          </Link>
        </div>

        <div className="card p-5 grid sm:grid-cols-[140px_1fr] gap-4">
          <div className="relative w-32 h-36 sm:w-full sm:h-44 rounded overflow-hidden border border-slate-200 mx-auto">
            <Image
              src="/images/principal.jpg"
              alt={administration.principalName}
              fill
              sizes="160px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <h3 className="font-bold">{administration.principalName}</h3>
            <p className="text-[13px] text-slate-500">{administration.principalDesignation}</p>
            <p className="text-sm text-slate-600 leading-relaxed mt-2 line-clamp-4">
              “{administration.principalMessage}”
            </p>
            <Link href="/leadership" className="inline-block mt-2 text-[13px] font-semibold text-[#1e3a5f] hover:underline underline-offset-4">
              Read full message →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
