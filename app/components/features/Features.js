import React from "react";
import Card from "./card/Card";

const FeatureCards = [
    {
      key: "1",
      imageUrl: "/efficiency.png",
      title: "Efficiency:", 
      desc: "Instant payouts and streamlined processes enhance user experience.",
    },
    {
      key: "2",
      imageUrl: "/globalReach.png",
      title: "Global Reach:", 
      desc: "Connect with clients and freelancers worldwide without currency conversion concerns.",
    },
    {
      key: "3",
      imageUrl: "/security.png",
      title: "Trust and Security:", 
      desc: "Decentralized identity verification and a secure escrow system build trust.",
    },
    {
      key: "4",
      imageUrl: "/innovation.png",
      title: "Innovation:", 
      desc: "Utilize Smart Contracts and blockchain technology for seamless transactions.",
    },
  ];
  

const Features = () => {
  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold mb-6">Why Chainly.work is Your Ultimate Freelancing Solution</h1>
      <div class="grid grid-cols-4 gap-4">
        {
            FeatureCards.map((card) => <Card data={card} />)
        }
      </div>
    </div>
  );
};

export default Features;
