import Features from "./components/features/Features";
import HeroSection from "./components/heroSection/HeroSection";
import Layout from "./components/layout/Layout";
import MarketOverview from "./components/marketOverview/MarketOverview";
import MarketResearch from "./components/marketResearch/MarketResearch";
import TargetMarket from "./components/targetMarket/TargetMarket";
import Team from "./components/team/Team";
import WebThreeIntegration from "./components/webThreeIntegration/WebThreeIntegration";
import WhyUs from "./components/whyUs/WhyUs";
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhyUs />
      <Features />
      <MarketOverview />
      <MarketResearch />
      <TargetMarket />
      <WebThreeIntegration />
      <Team />
    </Layout>
  );
}
