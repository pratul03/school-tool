import { DashBoardPreview } from "@/components/frontend/dashboard-preview";
import FeaturesGrid from "@/components/frontend/features-grid";
import { HeroSection } from "@/components/frontend/hero-section";
import { LogoTicker } from "@/components/frontend/logo-ticker";
import PricingSection from "@/components/frontend/pricing-card";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoTicker />
      <DashBoardPreview />
      <FeaturesGrid />
      <PricingSection />
    </main>
  );
}
