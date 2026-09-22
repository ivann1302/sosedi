import { Header } from "@/components/sections/Header";
import { BusinessTermsSection } from "@/components/sections/BusinessTermsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { MapSection } from "@/components/sections/MapSection";
import { ThingsAroundSection } from "@/components/sections/ThingsAroundSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <div className="page page--home">
      <Header
        appearance="home"
        ctaLabel="Скачать приложение"
        navLinks={[
          { label: "Каталог", href: "/#things" },
          { label: "Как это работает", href: "/#how-it-works" },
          { label: "Для бизнеса", href: "/business" },
          { label: "О нас", href: "/#trust" },
        ]}
      />

      <main id="main-content">
        <HeroSection />
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
        <FaqSection />
      </main>

      <FooterSection />
    </div>
  );
}
