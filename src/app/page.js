"use client";

import React from "react";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanHeroSlider from "@/components/UrbanHeroSlider";
import UrbanHomeGrid from "@/components/UrbanHomeGrid";
import UrbanDepartments from "@/components/UrbanDepartments";
import UrbanPrincipalDesk from "@/components/UrbanPrincipalDesk";
import UrbanStatsAndFacilities from "@/components/UrbanStatsAndFacilities";
import UrbanGallery from "@/components/UrbanGallery";
import FAQSection from "@/components/FAQSection";
import UrbanFooter from "@/components/UrbanFooter";

export default function Home() {
  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans selection:bg-[#0a2540] selection:text-[#fef3c7]">
      {/* 1. MEHSANA URBAN STYLE HEADER WITH STATUTORY BAR & LIGHT BLUE NAVBAR */}
      <UrbanHeader
        onNavigateSection={handleNavigateSection}
      />

      {/* MAIN BODY CONTENT */}
      <main className="flex-1 w-full">
        {/* 2. CLEAN COLLEGE CAMPUS HERO BANNER */}
        <UrbanHeroSlider
          onNavigateSection={handleNavigateSection}
        />

        {/* 3. 2-COLUMN HOMEPAGE GRID (About The College | Circulars & Notices) */}
        <UrbanHomeGrid
          onNavigateSection={handleNavigateSection}
        />

        {/* 4. ACADEMIC DEPARTMENTS & NEP 2020 COURSES */}
        <UrbanDepartments />

        {/* 5. PRESIDENT & PRINCIPAL'S DESK + IQAC NAAC SECTION */}
        <UrbanPrincipalDesk />

        {/* 6. CAMPUS FACILITIES & RESOURCES */}
        <UrbanStatsAndFacilities />

        {/* 7. PHOTO & EVENT GALLERY */}
        <UrbanGallery />

        {/* 8. STUDENT & PARENT FAQ */}
        <FAQSection />
      </main>

      {/* 9. 3-COLUMN INSTITUTIONAL FOOTER */}
      <UrbanFooter
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
