"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { faqList } from "@/data/collegeData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f7fb] text-[#0a2540] border border-[#e2ebf5] text-xs font-bold uppercase tracking-wider mb-2">
            <Icon name="HelpCircle" className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
            Student & Parent Helpdesk FAQ
          </h2>
          <p className="text-[#53657d] text-sm mt-1">
            Clear answers on admissions, HNGU university rules, scholarships, and campus facilities.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition-all hover:border-[#d97706] shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[#0a192f] text-sm sm:text-base hover:text-[#0a2540] transition-colors"
                >
                  <span>{item.q}</span>
                  <div className={`p-1.5 rounded-lg transition-all ${isOpen ? "rotate-180 bg-[#0a2540] text-[#fde68a]" : "bg-slate-100 text-[#53657d]"}`}>
                    <Icon name="ChevronDown" className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#53657d] leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
