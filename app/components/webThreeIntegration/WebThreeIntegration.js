import React from "react";
import Card from "./card/Card";

const webThreeCards = [
  {
    key: "01",
    title: "Smart Contracts",
    bulletPoints: [
      "Encoding collaborations terms",
      "Escrowing payments",
      "Automating fund releases",
    ],
  },
  {
    key: "02",
    title: "Native Utility token",
    bulletPoints: [
      "Governance",
      "Incentivizing",
      "Community Building",
    ],
  },
  {
    key: "03",
    title: "Blockchain Verification",
    bulletPoints: [
      "Governance",
      "Incentivizing",
    ],
  },
  {
    key: "04",
    title: "Oracles",
    bulletPoints: [
      "Integrating off-chain data",
      "Automated payment releases",
    ],
  },
  {
    key: "05",
    title: "Privacy Preservation",
    bulletPoints: [
      "Confidential Computing",
      "Zero - Knowledge Proofs",
    ],
  },
  {
    key: "06",
    title: "IPFS and Filecoin",
    bulletPoints: [
      "Distributed storage",
      "Avoiding central points of failure",
    ],
  },
];

const WebThreeIntegration = () => {
  return (
    <div className="p-8  my-12">
      <h1 className="text-center text-4xl font-bold mb-6">Web3 Integration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            webThreeCards.map((card) => <Card data={card} />)
        }
      </div>
    </div>
  );
};

export default WebThreeIntegration;
