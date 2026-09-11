import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { committees, administration, collegeInfo } from "@/data/collegeData";

export const metadata = { title: "IQAC & Committees" };

export default function IqacPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="IQAC & Committees" sub="Quality cell, statutory committees, NAAC / AISHE" crumbs={["IQAC"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 card p-5 sm:p-6">
            <h2 className="section-title">Statutory Committees</h2>
            <p className="section-sub">As displayed by HNGU colleges (anti-ragging, CWDC, grievance mandatory)</p>
            <div className="divide-y divide-slate-100 mt-2">
              {committees.map((c) => (
                <div key={c.name} className="py-3">
                  <p className="font-bold text-[15px]">{c.name}</p>
                  <p className="text-[13px] text-slate-600 mt-0.5">
                    <strong>Coordinator:</strong> {c.coordinator}
                  </p>
                  <p className="text-[13px] text-slate-600"><strong>Members:</strong> {c.members}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="card p-5">
              <h3 className="font-bold">IQAC</h3>
              <p className="text-[13px] text-slate-600 mt-1">Coordinator: {administration.iqacCoordinator}</p>
              <p className="text-[13px] text-slate-600 mt-1">{administration.naacCycle}</p>
              <p className="text-[13px] text-slate-600 mt-1">
                HNGU Code: {collegeInfo.hnguCode} | AISHE: {collegeInfo.aisheCode}
              </p>
            </div>
            <div className="card p-5">
              <h3 className="font-bold">Reports / Minutes (dummy)</h3>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-[13px] text-slate-600">
                {administration.iqacReportLinks.map((r, i) => (
                  <li key={i}>{r.title}</li>
                ))}
                <li>IQAC meeting minutes 2024-25</li>
                <li>Best practices: lab safety + botanical garden</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
