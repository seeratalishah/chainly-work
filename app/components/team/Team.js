import React from "react";
import Card from "../whyUs/card/Card";

const teamCards = [
  {
    key: "01",
    items: [
      { title: "Skillful Synergy:", desc: "Users can search for and invite freelancers with specific skills to join their project team." },
    ],
  },
  {
    key: "02",
    items: [
      { title: "Effortless Coordinates:", desc: "Built-in Collaboration tools for seamless communication and project management." },
    ],
  },
  {
    key: "03",
    items: [
      { title: "Secure Synergy:", desc: "Smart Contract-based agreement to ensure transport and secure transactions between team members and clients." },
    ],
  },
  {
    key: "04",
    items: [
      { title: "Growth Navigator:", desc: "Performance tracking and feedback system to help team members grow and clients find the best talent." },
    ],
  },
];

const Team = () => {
  return (
    <div className="p-8">
      <h1 className="text-center text-4xl font-bold mb-6">Team-Building Feature</h1>
      <p className="text-center text-xs mb-7">Build Successful Project Teams with Smart Contracts and Collaborations Tools.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            teamCards.map((card) => <Card data={card} />)
        }
      </div>
    </div>
  );
};

export default Team;
