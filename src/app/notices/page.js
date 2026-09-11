"use client";

import React, { useState, useMemo } from "react";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { notices } from "@/data/collegeData";

const FILTERS = ["All", "HNGU Exams", "Admissions", "Academic", "Events & Science", "Circulars"];

export default function NoticesPage() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    return notices.filter((n) => {
      const okF = filter === "All" || n.category === filter;
      const q = query.trim().toLowerCase();
      const okQ =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q);
      return okF && okQ;
    });
  }, [filter, query]);

  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Notices" sub="Exams, admissions, academic & circulars" crumbs={["Notices"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell max-w-4xl">
          <div className="card p-4 flex flex-col sm:flex-row gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search notices..."
              className="flex-1 rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#1e3a5f]"
            />
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap border ${
                    filter === f
                      ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                      : "bg-white border-slate-300"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="card mt-4 divide-y divide-slate-100">
            {list.length === 0 && (
              <p className="p-6 text-sm text-center text-slate-500">No notices found.</p>
            )}
            {list.map((n) => (
              <div key={n.id} className="p-4">
                <p className="text-[12px] text-slate-500">
                  {n.date} | {n.category} | PDF • {n.fileSize}
                  {n.isUrgent && (
                    <span className="ml-2 text-[10px] font-bold bg-red-600 text-white px-1.5 py-0.5 rounded">
                      NEW
                    </span>
                  )}
                </p>
                <h3 className="font-bold text-[15px] mt-1 leading-snug">{n.title}</h3>
                <p className="text-[13px] text-slate-600 mt-1">{n.summary}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-slate-500 mt-3">
            Showing {list.length} of {notices.length} notices. For attested copies visit college office.
          </p>
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
