"use client"
import { useTheme } from "next-themes";
import Features from "./components/features/Features";
import FindWork from "./components/findWork/FindWork";
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
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useTheme();

  // Set the initial theme to 'dark' when the application first renders
  useEffect(() => {
    setTheme('dark');
  }, []);
  return (
    <Layout>
      <HeroSection />
      <div class="container mx-auto flex flex-col space-y-10">
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
      <FindWork />
    </Layout>
  );
}
