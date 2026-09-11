"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "@/data/collegeData";

export default function UrbanGallery() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-3 mb-4">
          <div>
            <h2 className="section-title">Photo Gallery</h2>
            <p className="section-sub">Campus, labs, events & sports</p>
          </div>
          <Link href="/gallery" className="text-[13px] font-semibold text-[#1e3a5f] underline underline-offset-4 shrink-0">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {galleryItems.slice(0, 4).map((g) => (
            <div key={g.image} className="card overflow-hidden">
              <div className="relative h-36">
                <Image src={g.image} alt={g.title} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <p className="p-2.5 text-[12px] font-semibold leading-snug line-clamp-2">{g.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
