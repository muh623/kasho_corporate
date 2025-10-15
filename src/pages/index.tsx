import dynamic from "next/dynamic";
import { HeaderBar } from "@/components/index/HeaderBar";
import { MissionSection } from "@/components/index/MissionSection";
import { ServicesSection } from "@/components/index/ServicesSection";
import { SolutionsSection } from "@/components/index/SolutionsSection";
import { CasesSection } from "@/components/index/CasesSection";
import { NewsRecruitSection } from "@/components/index/NewsRecruitSection";
import { ContactSection } from "@/components/index/ContactSection";
import { Footer } from "@/components/index/Footer";

const Hero = dynamic(() => import("@/components/index/Hero"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f8] text-[#1d1d1f]">
      <HeaderBar />
      <Hero />
      <MissionSection />
      <ServicesSection />
      <SolutionsSection />
      <CasesSection />
      <NewsRecruitSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
