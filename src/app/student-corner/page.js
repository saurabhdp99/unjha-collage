import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { studentCornerLinks, scholarships, downloads, achievements } from "@/data/collegeData";
import { Icon } from "@/components/Icons";

export const metadata = { title: "Student Corner" };

export default function StudentCornerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Student Corner" sub="Results, syllabus, scholarships, downloads" crumbs={["Student Corner"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-5">
            <div className="card p-5">
              <h2 className="section-title">Important Links</h2>
              <div className="grid sm:grid-cols-2 gap-2.5 mt-3">
                {studentCornerLinks.map((l) => (
                  <a
                    key={l.title}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-slate-200 rounded-lg p-3.5 hover:border-[#1e3a5f] transition-colors"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wide text-[#1e3a5f]">{l.tag}</span>
                    <span className="block font-bold text-sm mt-0.5 flex items-center gap-1">
                      {l.title} <Icon name="ExternalLink" className="w-3.5 h-3.5" />
                    </span>
                    <span className="block text-[13px] text-slate-600 mt-0.5">{l.desc}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <h2 className="section-title">Scholarships (Digital Gujarat)</h2>
              <ul className="divide-y divide-slate-100 mt-2">
                {scholarships.map((s) => (
                  <li key={s.name} className="py-2.5 text-sm">
                    <p className="font-bold">{s.name}</p>
                    <p className="text-slate-600">{s.for}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="card p-5">
              <h3 className="font-bold">Downloads / Forms</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {downloads.map((d) => (
                  <li key={d.title} className="flex justify-between gap-2 border-b border-slate-100 pb-2">
                    <span>{d.title}</span>
                    <span className="text-slate-500 text-[12px] shrink-0">{d.size}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-bold">Achievements</h3>
              <ul className="mt-2 space-y-2.5 text-sm">
                {achievements.map((a) => (
                  <li key={a.title}>
                    <p className="font-semibold leading-snug">{a.title}</p>
                    <p className="text-[12px] text-slate-500">{a.who} | {a.year}</p>
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
