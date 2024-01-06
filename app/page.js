import Features from "./components/features/Features";
import HeroSection from "./components/heroSection/HeroSection";
import Layout from "./components/layout/Layout";
import MarketOverview from "./components/marketOverview/MarketOverview";
import MarketResearch from "./components/marketResearch/MarketResearch";
import RoadMap from "./components/roadmap/roadMap";
import Slider from "./components/slider/Slider";
import TargetMarket from "./components/targetMarket/TargetMarket";
import TargetFreelance from "./components/targetMarketFreelance/TargetFreelance";
import Team from "./components/team/Team";
import WebThreeIntegration from "./components/webThreeIntegration/WebThreeIntegration";
import WhyUs from "./components/whyUs/WhyUs";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col space-y-10 ">
        <HeroSection />
        <div className="container mx-auto">
          <WhyUs />
          <Features />
          <MarketOverview />
          <MarketResearch />
          <TargetMarket />
          <TargetFreelance />
          <WebThreeIntegration />
          <Team />
          <RoadMap />
          <Slider />
        </div>
      </div>
    </Layout>
  );
}
