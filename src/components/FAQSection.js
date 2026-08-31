"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { faqList } from "@/data/collegeData";

export default function FAQSection({ lang }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Icon name="HelpCircle" className="w-3.5 h-3.5" />
            <span>{lang === "gu" ? "સામાન્ય પ્રશ્નોત્તરી" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === "gu" ? "વારંવાર પૂછાતા પ્રશ્નો (FAQ)" : "Student & Parent Helpdesk FAQ"}
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            {lang === "gu"
              ? "પ્રવેશ, HNGU પરીક્ષાઓ, પરિણામો અને સ્કોલરશિપ સંબંધિત પ્રશ્નોના જવાબો."
              : "Clear answers on admissions, HNGU university rules, scholarships, and campus facilities."}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-900 transition-colors"
                >
                  <span>{lang === "gu" ? item.qGu : item.q}</span>
                  <div className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 transition-transform ${isOpen ? "rotate-180 bg-blue-100 text-blue-900" : ""}`}>
                    <Icon name="ChevronDown" className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {lang === "gu" ? item.aGu : item.a}
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
