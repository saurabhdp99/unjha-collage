import Image from "next/image";
import Link from "next/link";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanHeroSlider from "@/components/UrbanHeroSlider";
import UrbanHomeGrid from "@/components/UrbanHomeGrid";
import UrbanDepartments from "@/components/UrbanDepartments";
import UrbanPrincipalDesk from "@/components/UrbanPrincipalDesk";
import UrbanStatsAndFacilities from "@/components/UrbanStatsAndFacilities";
import UrbanGallery from "@/components/UrbanGallery";
import FAQSection from "@/components/FAQSection";
import UrbanFooter from "@/components/UrbanFooter";
import { studentCornerLinks, facultyList } from "@/data/collegeData";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <main className="flex-1">
        <UrbanHeroSlider />
        <UrbanHomeGrid />
        <UrbanDepartments />

        {/* New: what competitors have and we missed */}
        <section className="section-pad bg-white border-y border-slate-200">
          <div className="container-shell grid lg:grid-cols-2 gap-5">
            <div className="card p-5">
              <h2 className="section-title">Student Corner</h2>
              <p className="section-sub">Results, syllabus, scholarships — like MASC Mehsana / MNC Visnagar</p>
              <ul className="divide-y divide-slate-100 mt-2">
                {studentCornerLinks.slice(0, 4).map((l) => (
                  <li key={l.title} className="py-2 text-sm">
                    <a href={l.url} target="_blank" rel="noreferrer" className="font-semibold hover:underline">
                      {l.title} ↗
                    </a>
                    <p className="text-[13px] text-slate-600">{l.desc}</p>
                  </li>
                ))}
              </ul>
              <Link href="/student-corner" className="btn-primary w-full mt-3">
                Open Student Corner
              </Link>
            </div>
            <div className="card p-5">
              <h2 className="section-title">Faculty</h2>
              <p className="section-sub">Dept-wise staff with qualification</p>
              <ul className="divide-y divide-slate-100 mt-2">
                {facultyList.slice(0, 4).map((f) => (
                  <li key={f.name} className="py-2 text-sm flex gap-3 items-center">
                    <span className="relative w-16 h-20 rounded overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                      <Image
                        src={f.image || "/images/faculty-male.svg"}
                        alt={f.name}
                        fill
                        sizes="64px"
                        className="object-cover object-top"
                      />
                    </span>
                    <span>
                      <p className="font-bold">{f.name}</p>
                      <p className="text-[13px] text-slate-600">
                        {f.designation}, {f.department} — {f.qualification}
                      </p>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <Link href="/faculty" className="btn-outline">
                  All Faculty
                </Link>
                <Link href="/admission" className="btn-primary">
                  Admission
                </Link>
              </div>
            </div>
          </div>
        </section>

        <UrbanPrincipalDesk />
        <UrbanStatsAndFacilities />
        <UrbanGallery />
        <FAQSection />
      </main>
      <UrbanFooter />
    </div>
  );
}
