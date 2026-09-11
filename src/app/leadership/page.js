import Image from "next/image";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { administration, collegeInfo } from "@/data/collegeData";

export const metadata = { title: "Principal's Desk" };

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Principal's Desk" sub="Message, vision, mission & IQAC" crumbs={["Principal's Desk"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 card p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <span className="relative w-24 h-28 rounded overflow-hidden border border-slate-200 shrink-0">
                <Image src="/images/principal.jpg" alt={administration.principalName} fill sizes="120px" className="object-cover object-top" />
              </span>
              <div>
                <h2 className="font-bold text-lg">{administration.principalName}</h2>
                <p className="text-[13px] text-slate-500">{administration.principalDesignation}</p>
                <p className="text-[13px] text-slate-500">{collegeInfo.shortName}, Unjha</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">“{administration.principalMessage}”</p>

            <h3 className="font-bold mt-6">Vision</h3>
            <p className="text-sm text-slate-600 mt-1">{administration.vision}</p>

            <h3 className="font-bold mt-4">Mission</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 mt-1 space-y-1.5">
              {administration.mission.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="card p-5">
              <h3 className="font-bold">Management</h3>
              <p className="text-sm text-slate-600 mt-1">{collegeInfo.trustName}</p>
              <p className="text-[13px] text-slate-500 mt-1">Higher Education Department, Gujarat</p>
              <div className="relative w-full h-40 rounded overflow-hidden border border-slate-200 mt-3">
                <Image src="/images/president.jpg" alt="Management" fill sizes="100vw" className="object-cover object-top" />
              </div>
            </div>
            <div className="card p-5">
              <h3 className="font-bold">IQAC</h3>
              <p className="text-[13px] text-slate-600 mt-1">Coordinator: {administration.iqacCoordinator}</p>
              <p className="text-[13px] text-slate-600 mt-1">{administration.naacCycle}</p>
              <ul className="list-disc pl-5 text-[13px] text-slate-600 mt-2 space-y-1">
                {administration.iqacReportLinks.map((r, i) => (
                  <li key={i}>{r.title}</li>
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
