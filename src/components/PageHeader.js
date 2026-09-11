import React from "react";
import Link from "next/link";

export default function PageHeader({ title, sub, crumbs = [] }) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="container-shell py-6">
        <p className="text-[12px] text-slate-500">
          <Link href="/" className="hover:underline">Home</Link>
          {crumbs.map((c) => (
            <span key={c}> &gt; {c}</span>
          ))}
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mt-1">{title}</h1>
        {sub && <p className="text-sm text-slate-600 mt-1">{sub}</p>}
      </div>
    </div>
  );
}
