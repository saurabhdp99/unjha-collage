import Image from "next/image";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { facultyList } from "@/data/collegeData";

export const metadata = { title: "Faculty" };

const DEPTS = ["Chemistry", "Physics", "Mathematics", "Botany", "Library", "Sports", "Office"];

export default function FacultyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Faculty & Staff" sub="Department-wise teaching & non-teaching staff" crumbs={["Faculty"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell">
          {DEPTS.map((dept) => {
            const members = facultyList.filter((f) => f.department === dept);
            if (members.length === 0) return null;
            return (
              <div key={dept} className="mb-6">
                <h2 className="font-bold text-lg border-b border-slate-200 pb-2 mb-3">
                  {dept === "Office" ? "Office Establishment" : `Department of ${dept}`}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {members.map((f) => (
                    <div key={f.name} className="card p-4 flex gap-4 items-center">
                      <span className="relative w-28 h-32 rounded-md overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                        <Image
                          src={f.image || "/images/faculty-male.svg"}
                          alt={f.name}
                          fill
                          sizes="112px"
                          className="object-cover object-top"
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-base leading-snug">{f.name}</p>
                        <p className="text-sm text-[#1e3a5f] font-semibold mt-0.5">{f.designation}</p>
                        <p className="text-[13px] text-slate-600 mt-1">{f.qualification}</p>
                        <p className="text-[12px] text-slate-500 mt-0.5">Exp: {f.experience}</p>
                        <p className="text-[12px] text-slate-500">{f.department}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <p className="text-[12px] text-slate-500">
            Photos: Principal photo is real. Other photos are placeholder — replace
            <span className="font-mono"> image </span> in <span className="font-mono">facultyList</span> with
            real staff photo (e.g. <span className="font-mono">/images/faculty-rabari.jpg</span>) when office provides it.
          </p>
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
