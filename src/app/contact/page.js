import UrbanHeader from "@/components/UrbanHeader";
import UrbanFooter from "@/components/UrbanFooter";
import PageHeader from "@/components/PageHeader";
import { collegeInfo, faqList } from "@/data/collegeData";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <PageHeader title="Contact Us" sub="Address, phone, email & office hours" crumbs={["Contact Us"]} />
      <main className="flex-1 section-pad">
        <div className="container-shell grid lg:grid-cols-2 gap-5 items-start">
          <div className="card p-5 sm:p-6">
            <h2 className="section-title">College Address</h2>
            <div className="text-sm text-slate-600 mt-3 space-y-2">
              <p><strong>Name:</strong> {collegeInfo.name}</p>
              <p><strong>Address:</strong> {collegeInfo.address}</p>
              <p><strong>City / District:</strong> {collegeInfo.city}, {collegeInfo.district} — {collegeInfo.pincode}, {collegeInfo.state}</p>
              <p><strong>Phone / Fax:</strong> {collegeInfo.phone}</p>
              <p><strong>Email:</strong> {collegeInfo.email}</p>
              <p><strong>Office Hours:</strong> {collegeInfo.officeHours}</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeInfo.address)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-4"
            >
              Open in Google Maps
            </a>
            <p className="text-[12px] text-slate-500 mt-3">
              For admission visit the Admission Helpdesk at MRS Campus with 12th Science marksheet
              and school leaving certificate.
            </p>
          </div>

          <div className="card p-5 sm:p-6">
            <h2 className="section-title">FAQs</h2>
            <p className="section-sub">Common questions from students & parents</p>
            <div className="mt-3 space-y-3">
              {faqList.map((f, i) => (
                <div key={i} className="border-b border-slate-100 pb-3 last:border-0">
                  <p className="text-sm font-semibold">Q{i + 1}. {f.q}</p>
                  <p className="text-[13px] text-slate-600 mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <UrbanFooter />
    </div>
  );
}
