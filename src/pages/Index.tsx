import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesBenefitsSection from "@/components/FeaturesBenefitsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesBenefitsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
