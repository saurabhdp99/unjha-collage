import UrbanHeader from "@/components/UrbanHeader";
import UrbanHeroSlider from "@/components/UrbanHeroSlider";
import UrbanHomeGrid from "@/components/UrbanHomeGrid";
import UrbanDepartments from "@/components/UrbanDepartments";
import UrbanPrincipalDesk from "@/components/UrbanPrincipalDesk";
import UrbanStatsAndFacilities from "@/components/UrbanStatsAndFacilities";
import UrbanGallery from "@/components/UrbanGallery";
import FAQSection from "@/components/FAQSection";
import UrbanFooter from "@/components/UrbanFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <UrbanHeader />
      <main className="flex-1">
        <UrbanHeroSlider />
        <UrbanHomeGrid />
        <UrbanDepartments />
        <UrbanPrincipalDesk />
        <UrbanStatsAndFacilities />
        <UrbanGallery />
        <FAQSection />
      </main>
      <UrbanFooter />
    </div>
  );
}
