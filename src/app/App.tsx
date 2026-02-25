import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { DataResultsSection } from './components/DataResultsSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { PortalSection } from './components/PortalSection';
import { DashboardCtaSection } from './components/DashboardCtaSection';
import { LifecycleSection } from './components/LifecycleSection';
import { MethodologySection } from './components/MethodologySection';
import { TechnologySection } from './components/TechnologySection';
import { PartnersSection } from './components/PartnersSection';
import { TargetRevenueSection } from './components/TargetRevenueSection';
import { TeamSection } from './components/TeamSection';
import { PricingSection } from './components/PricingSection';
import { CareersSection } from './components/CareersSection';
import { FaqSection } from './components/FaqSection';
import { CompatibilitySection } from './components/CompatibilitySection';
import { Footer } from './components/Footer';
import imgRectangle from "@/assets/320b8c287414bc6a4263c44fb04247eb957ea265.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-[86.22%_9.78%_9.67%_-3.02%] opacity-50 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[72.84%_29.52%_23.04%_-22.76%] opacity-50 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[57.9%_1.67%_37.99%_3.23%] opacity-50 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[67.66%_-7.92%_26.68%_-20.42%] opacity-50 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[28.86%_4.9%_67.03%_0] opacity-50 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute inset-[47.13%_22.08%_48.76%_-17.19%] opacity-50 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <MetricsSection />
        <ComparisonSection />
        <DataResultsSection />
        <CtaBannerSection />
        <PortalSection />
        <DashboardCtaSection />
        <LifecycleSection />
        <MethodologySection />
        <TechnologySection />
        <PartnersSection />
        <TargetRevenueSection />
        <TeamSection />
        <PricingSection />
        <CareersSection />
        <FaqSection />
        <CompatibilitySection />
        <Footer />
      </div>
    </div>
  );
}