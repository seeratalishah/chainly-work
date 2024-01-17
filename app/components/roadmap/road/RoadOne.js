import React from "react";
import DetailsCard from "../detailsCard/DetailsCard";
const FeatureCards = [
  {
    key: "1",
    title1: "Product Enhancement:",
    bulletPoints: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
  },
  {
    key: "2",
    title1: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "3",
    title1: "Beta Testing:",
    bulletPoints: [
      "Wider release of the platform for beta testing.",
      "Gathering feedback for further improvements.",
    ],
  },
  {
    key: "4",
    title1: "Official Launch:",
    bulletPoints: [
      "MVP Launch of Chain Work.",
      "Marketing blitz to coincide with the official release.",
    ],
  },
  {
    key: "5",
    title1: "Feedback Analysis:",
    bulletPoints: [
      "In-depth analysis of user feedback post-launch.",
      "Iterative product improvements.",
    ],
  },
  {
    key: "6",
    title1: "Market Research:",
    bulletPoints: [
      "In-depth analysis of user preferences and market trends.",
      "Identification of potential strategic partnerships.",
    ],
  },
  {
    key: "7",
    title1: "Development Sprint:",
    bulletPoints: [
      "Integration of blockchain and DeFi technologies.",
      "Beta testing with a select group of users.",
    ],
  },
  {
    key: "8",
    title1: "Strategic Partnerships:",
    bulletPoints: [
      "Formalization of partnerships identified in Month 1-2.",
      "Collaborative marketing efforts.",
    ],
  },
  {
    key: "9",
    title1: "User Acquisition:",
    bulletPoints: [
      "Integration of blockchain and DeFi technologies.",
      "Onboarding campaigns for freelancers and bussiness.",
    ],
  },
  {
    key: "10",
    title1: "Community Events:",
    bulletPoints: [
      "Hosting webinars and events to engage the community.",
      "Nurturing a sense of belonging within the user base.",
    ],
  },
];

const RoadOne = () => {
  return (
      <div className="road-one grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 gap-y-1 mt-4">
     {FeatureCards.map((card) => (
        <DetailsCard key={card.key} data={card} />
      ))}
    </div>
  );
};

export default RoadOne;
