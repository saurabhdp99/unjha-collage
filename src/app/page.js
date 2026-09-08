"use client";

import React, { useState } from "react";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanHeroSlider from "@/components/UrbanHeroSlider";
import UrbanHomeGrid from "@/components/UrbanHomeGrid";
import UrbanDepartments from "@/components/UrbanDepartments";
import UrbanPrincipalDesk from "@/components/UrbanPrincipalDesk";
import UrbanStatsAndFacilities from "@/components/UrbanStatsAndFacilities";
import ScholarshipSection from "@/components/ScholarshipSection";
import UrbanGallery from "@/components/UrbanGallery";
import AlumniAndRecruiters from "@/components/AlumniAndRecruiters";
import FAQSection from "@/components/FAQSection";
import UrbanFooter from "@/components/UrbanFooter";

export default function Home() {
  const [lang, setLang] = useState("en"); // 'en' | 'gu'

  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans selection:bg-[#800000] selection:text-white">
      {/* 1. MEHSANA URBAN STYLE HEADER WITH STATUTORY BAR & BURGUNDY NAVBAR */}
      <UrbanHeader
        lang={lang}
        setLang={setLang}
        onNavigateSection={handleNavigateSection}
      />

      {/* MAIN BODY CONTENT */}
      <main className="flex-1 w-full">
        {/* 2. HERO SLIDER BANNER WITH MARQUEE FLASH NEWS */}
        <UrbanHeroSlider
          lang={lang}
          onNavigateSection={handleNavigateSection}
        />

        {/* 3. SIGNATURE 3-COLUMN MEHSANA URBAN HOMEPAGE GRID (About | Notices | Quick Links) */}
        <UrbanHomeGrid
          lang={lang}
          onNavigateSection={handleNavigateSection}
        />

        {/* 4. ACADEMIC DEPARTMENTS & NEP 2020 COURSES */}
        <UrbanDepartments
          lang={lang}
        />

        {/* 5. PRESIDENT & PRINCIPAL'S DESK + IQAC NAAC SECTION */}
        <UrbanPrincipalDesk lang={lang} />

        {/* 6. INSTITUTIONAL STATS & 6-CARD CAMPUS FACILITIES */}
        <UrbanStatsAndFacilities lang={lang} />

        {/* 7. GUJARAT GOVT SCHOLARSHIPS (MYSY & DIGITAL GUJARAT) */}
        <ScholarshipSection lang={lang} />

        {/* 8. PHOTO & EVENT GALLERY */}
        <UrbanGallery lang={lang} />

        {/* 9. RECRUITERS & ALUMNI SPOTLIGHT */}
        <AlumniAndRecruiters lang={lang} />

        {/* 10. STUDENT & PARENT FAQ */}
        <FAQSection lang={lang} />
      </main>

      {/* 11. 4-COLUMN INSTITUTIONAL FOOTER */}
      <UrbanFooter
        lang={lang}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
