import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <div className="page">
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
      </main>
    </div>
  );
}
