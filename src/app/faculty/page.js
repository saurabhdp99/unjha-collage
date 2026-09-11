import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { facultyList } from "@/data/collegeData";

export const metadata = { title: "Faculty" };

const DEPTS = ["All", "Chemistry", "Physics", "Mathematics", "Botany", "Library", "Sports", "Office"];

export default function FacultyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Faculty & Staff" sub="Department-wise teaching & non-teaching staff" crumbs={["Faculty"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell">
          {DEPTS.filter((d) => d !== "All").map((dept) => {
            const members = facultyList.filter((f) => f.department === dept);
            if (members.length === 0) return null;
            return (
              <div key={dept} className="mb-6">
                <h2 className="font-bold text-lg border-b border-slate-200 pb-2 mb-3">
                  {dept === "Office" ? "Office Establishment" : `Department of ${dept}`}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {members.map((f) => (
                    <div key={f.name} className="card p-4">
                      <p className="font-bold text-[15px]">{f.name}</p>
                      <p className="text-[13px] text-[#1e3a5f] font-semibold">{f.designation}</p>
                      <p className="text-[13px] text-slate-600 mt-1">{f.qualification}</p>
                      <p className="text-[12px] text-slate-500">Experience: {f.experience}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <p className="text-[12px] text-slate-500">
            Dummy staff list in competitor pattern (MASC Mehsana / MNC Visnagar show dept-wise staff with
            qualification). Replace names with office record. Guest faculty updated every term.
          </p>
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
