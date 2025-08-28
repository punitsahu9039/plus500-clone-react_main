import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CMESection from "@/components/CMESection";
import AcademySection from "@/components/AcademySection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import SponsorshipsSection from "@/components/SponsorshipsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CMESection />
      <AcademySection />
      <StatsSection />
      <WhyUsSection />
      <SponsorshipsSection />
      <Footer />
    </div>
  );
};

export default Index;
