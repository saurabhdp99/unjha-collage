import Image from "next/image";
import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { galleryItems } from "@/data/collegeData";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Gallery" sub="Campus, labs, library, sports & events" crumbs={["Gallery"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((g) => (
            <figure key={g.image} className="card overflow-hidden">
              <div className="relative h-40 sm:h-48">
                <Image src={g.image} alt={g.title} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </div>
              <figcaption className="p-3">
                <p className="text-[13px] font-semibold leading-snug">{g.title}</p>
                <p className="text-[12px] text-slate-500 mt-0.5">{g.category} | {g.date}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
