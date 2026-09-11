import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { academicPrograms } from "@/data/collegeData";

export const metadata = { title: "Departments" };

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader
        title="Departments"
        sub="B.Sc. programs affiliated to HNGU Patan (College Code: 879)"
        crumbs={["Departments"]}
      />
      <main className="flex-1 section-pad">
        <div className="container-shell grid gap-5">
          {academicPrograms.map((p) => (
            <article key={p.id} id={p.id} className="card p-5 sm:p-6 scroll-mt-32">
              <p className="text-[12px] font-semibold text-slate-500">
                {p.level} | {p.stream} | {p.hnguAffiliation}
              </p>
              <h2 className="text-lg sm:text-xl font-bold mt-1">{p.name}</h2>

              <div className="grid sm:grid-cols-4 gap-2 mt-3 text-[13px]">
                <p className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
                  <strong>Duration:</strong> {p.duration}
                </p>
                <p className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
                  <strong>Intake:</strong> {p.intake} seats
                </p>
                <p className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
                  <strong>Medium:</strong> {p.medium}
                </p>
                <p className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
                  <strong>Eligibility:</strong> {p.eligibility}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-bold text-sm mb-2">Subjects / Syllabus Topics</h3>
                  <ul className="list-disc pl-5 text-[13px] text-slate-600 space-y-1">
                    {p.subjects.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2">Department Highlights</h3>
                  <ul className="list-disc pl-5 text-[13px] text-slate-600 space-y-1">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <p className="text-[12px] text-slate-500 mt-3">
                    Note: Detailed unit-wise syllabus, timetable and practical batches are shared
                    department-wise after admission. Contact college office for the latest HNGU
                    syllabus PDF.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
