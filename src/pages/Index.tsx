import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import VisionSection from "@/components/VisionSection";
import LeadershipCard from "@/components/LeadershipCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CapabilitiesSection />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <VisionSection />
        </div>
        <aside className="md:col-span-4">
          <div className="sticky top-24">
            <LeadershipCard />
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
