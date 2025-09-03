import HeroSection from "@/components/sections/hero";
import TrustIndicators from "@/components/sections/trust-indicators";
import CoreFeatures from "@/components/sections/core-features";
import L1TechniciansSection from "@/components/sections/l1-technicians";
import EfficiencyStats from "@/components/sections/efficiency-stats";
import IntegrationsSection from "@/components/sections/integrations";
import BlogInsights from "@/components/sections/blog-insights";
import ResultsMetrics from "@/components/sections/results-metrics";
import ProvenResults from "@/components/sections/proven-results";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustIndicators />
      <CoreFeatures />
      <div className="py-16 bg-white">
        <div className="container">
          <L1TechniciansSection />
          <div className="mt-16">
            <EfficiencyStats />
          </div>
        </div>
      </div>
      <IntegrationsSection />
      <BlogInsights />
      <ResultsMetrics />
      <ProvenResults />
      <CtaSection />
      <Footer />
    </main>
  );
}