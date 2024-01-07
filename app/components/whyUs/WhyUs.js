import React from "react";

import Card from "./card/Card";

const whyUsCards = [
  {
    key: "01",
    items: [
      { title: "Enhanced Security Measures:", desc: "Our platform prioritizes the security of users' funds by implementing a revolutionary escrow account system." },
      { title: "Selling Feature: Secure Escrow System", desc: "Rely on our secure escrow system for fair and secure transactions." },
    ],
  },
  {
    key: "02",
    items: [
      { title: "Instant Fund Release:", desc: "Users experience immediate access to funds upon project completion, eliminating holding periods." },
      { title: "Selling Feature: Instant Payouts", desc: "Enjoy instant earnings upon completing a project, enhancing user experience." },
    ],
  },
  {
    key: "03",
    items: [
      { title: "Currency Conversion Solutions:", desc: "Eradicate unfavorable currency conversion rates for international users." },
      { title: "Selling Feature: Global Accessibility", desc: "Seamlessly connect globally with fair and optimal currency exchange rates." },
    ],
  },
  {
    key: "04",
    items: [
      { title: "Decentralized Withdrawals:", desc: "Eliminate third-party involvement for international fund withdrawals." },
      { title: "Selling Feature: Decentralized Identity Verification", desc: "Ensure secure and decentralized identity verification for user privacy." },
    ],
  },
  {
    key: "05",
    items: [
      { title: "Immutable Transparency on the Blockchain:", desc: "Prioritize transparency with a blockchain-based system for secure records." },
      { title: "Selling Feature: Blockchain-based Reputation System", desc: "Showcase a transparent and immutable reputation system for user trust." },
      { title: "Selling Feature: Smart Contract Agreements", desc: "Streamline contracts with automated execution and payment releases." },
      { title: "Selling Feature: Smart Contract Agreements", desc: "Streamline contracts with automated execution and payment releases." },
      { title: "Selling Feature: Innovative Dispute Resolution Mechanism", desc: "Ensure fair and efficient dispute resolution through blockchain technology." },
      { title: "Selling Feature: Regular Updates and Feature Enhancements", desc: "Stay ahead with continuous improvements based on user feedback." },
    ],
  },
];

const WhyUs = () => {
  return (
    <div className="p-8 my-12">
      <h1 className="text-center text-4xl font-bold mb-10 font-gilroy">Why Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
            whyUsCards.map((card) => <Card data={card} />)
        }
      </div>
    </div>
  );
};

export default WhyUs;
