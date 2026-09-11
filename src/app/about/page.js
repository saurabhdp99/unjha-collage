import Image from "next/image";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { collegeInfo, administration } from "@/data/collegeData";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="About Us" sub="College profile, vision & mission" crumbs={["About Us"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 card p-5 sm:p-6">
            <h2 className="section-title">College Profile</h2>
            <div className="relative h-52 sm:h-64 rounded overflow-hidden border border-slate-200 mt-3">
              <Image src="/images/campus_front.jpg" alt="College campus" fill sizes="100vw" className="object-cover" />
            </div>
            <div className="text-sm text-slate-600 leading-relaxed mt-4 space-y-3">
              <p>
                <strong className="text-slate-900">{collegeInfo.name}</strong> is located at{" "}
                {collegeInfo.address}. The college was established in {collegeInfo.established} by
                the Government of Gujarat and is {collegeInfo.affiliation} (College Code:{" "}
                {collegeInfo.hnguCode}, AISHE: {collegeInfo.aisheCode}).
              </p>
              <p>
                At present the college offers B.Sc. programs in Chemistry, Physics, Mathematics and
                Botany in Gujarati and English medium under NEP 2020 structure. Practical training
                is given through departmental laboratories, central library with INFLIBNET N-LIST
                access, computer lab, botanical garden, sports ground and NSS unit at MRS Campus.
              </p>
              <p>
                Students from Unjha, Mehsana district and nearby talukas study here. Admissions are
                done through centralized GCAS / HNGU counselling on merit of 12th Science.
              </p>
            </div>

            <h3 className="font-bold mt-6 mb-2">Basic Details</h3>
            <div className="grid sm:grid-cols-2 gap-2 text-[13px]">
              {[
                ["Name", collegeInfo.name],
                ["Campus", collegeInfo.campus],
                ["Address", collegeInfo.address],
                ["Affiliation", collegeInfo.affiliation],
                ["HNGU Code / AISHE", `${collegeInfo.hnguCode} / ${collegeInfo.aisheCode}`],
                ["Status", collegeInfo.ugcStatus],
                ["Medium", "Gujarati & English"],
                ["Office", collegeInfo.officeHours],
              ].map(([k, v]) => (
                <p key={k} className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
                  <strong>{k}:</strong> {v}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="card p-5">
              <h3 className="font-bold">Vision</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{administration.vision}</p>
            </div>
            <div className="card p-5">
              <h3 className="font-bold">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 mt-1 space-y-1.5">
                {administration.mission.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-bold">At a Glance</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {collegeInfo.stats.map((s) => (
                  <li key={s.label} className="flex justify-between gap-2 border-b border-slate-100 pb-1.5">
                    <span className="text-slate-600">{s.label}</span>
                    <strong>{s.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
