import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TelegramSection } from "@/components/TelegramSection";
import { InfoTable } from "@/components/InfoTable";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TelegramSection />
        <InfoTable />
        <FeaturesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
