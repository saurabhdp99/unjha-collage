import Image from "next/image";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { facilities } from "@/data/collegeData";

export const metadata = { title: "Facilities" };

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Facilities" sub="Labs, library & campus resources at MRS Campus" crumbs={["Facilities"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((f) => (
            <article key={f.id} className="card overflow-hidden">
              <div className="relative h-44">
                <Image src={f.image} alt={f.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-[15px] leading-snug">{f.title}</h2>
                <p className="text-[13px] text-slate-600 mt-1.5 leading-relaxed">{f.description}</p>
                <p className="text-[12px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 mt-3">
                  {f.stats}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
