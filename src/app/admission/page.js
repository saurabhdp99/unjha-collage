import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { admissionInfo, academicPrograms, collegeInfo } from "@/data/collegeData";

export const metadata = { title: "Admission" };

export default function AdmissionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Admission" sub="B.Sc. admission via GCAS + HNGU counselling" crumbs={["Admission"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-5">
            <div className="card p-5">
              <h2 className="section-title">How to Apply</h2>
              <p className="section-sub">{admissionInfo.portal}</p>
              <ol className="list-decimal pl-5 mt-3 space-y-1.5 text-sm text-slate-600">
                {admissionInfo.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
              <a href={admissionInfo.portalUrl} target="_blank" rel="noreferrer" className="btn-primary mt-4">
                Open GCAS Portal
              </a>
            </div>

            <div className="card p-5">
              <h2 className="section-title">Eligibility & Seats</h2>
              <div className="mt-3 divide-y divide-slate-100">
                {academicPrograms.map((p) => (
                  <div key={p.id} className="py-2.5 text-sm">
                    <p className="font-bold">{p.name} — {p.intake} seats</p>
                    <p className="text-slate-600 mt-0.5">{p.eligibility} | {p.medium}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <h2 className="section-title">Documents Required</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-600">
                {admissionInfo.documents.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="card p-5">
              <h3 className="font-bold">Fees</h3>
              <p className="text-sm text-slate-600 mt-1">{admissionInfo.feesNote}</p>
            </div>
            <div className="card p-5">
              <h3 className="font-bold">Helpdesk</h3>
              <p className="text-sm text-slate-600 mt-1">
                {collegeInfo.campus}, Unjha<br />
                Phone: {collegeInfo.phone}<br />
                {collegeInfo.officeHours}
              </p>
            </div>
          </div>
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
