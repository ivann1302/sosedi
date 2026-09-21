import { Header } from "@/components/sections/Header";
import { BlogCarouselSection } from "@/components/sections/BlogCarouselSection";
import { BusinessTermsSection } from "@/components/sections/BusinessTermsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { MapSection } from "@/components/sections/MapSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ThingsAroundSection } from "@/components/sections/ThingsAroundSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <div className="page">
      <Header />

      <main id="main-content">
        <HeroSection />
        <StatsSection />
        <ThingsAroundSection />
        <HowItWorksSection />
        <TrustSection />
        <section
          className="app-thesis"
          aria-label="Идея совместного использования"
        >
          <div className="container">
            <p>
              Хорошие вещи
              <br />
              не должны <span>пылиться.</span>
            </p>
            <span className="handwritten">
              Пусть у них будет больше историй.
            </span>
          </div>
        </section>
        <MapSection />
        <DownloadSection />
        <BusinessTermsSection />
        <BlogCarouselSection />
        <FaqSection />
      </main>

      <FooterSection />
    </div>
  );
}
