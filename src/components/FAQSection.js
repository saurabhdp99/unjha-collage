"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { faqList } from "@/data/collegeData";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad bg-white border-t border-slate-200">
      <div className="container-shell max-w-3xl">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-sub text-center">Admission, affiliation, results & facilities</p>

        <div className="space-y-2 mt-4">
          {faqList.slice(0, 5).map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-left text-sm font-semibold"
                >
                  {f.q}
                  <Icon name="ChevronDown" className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="px-4 pb-4 text-[13px] text-slate-600 leading-relaxed">{f.a}</p>}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <Link href="/contact" className="btn-outline">
            Ask at Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
}
