import React from "react";
import DetailsCard from "../detailsCard/DetailsCard";
const FeatureCards = [
  {
    key: "1",
    title: "Product Enhancement:",
    bulletPoints: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
  },
  {
    key: "2",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "3",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "4",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "5",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "6",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "7",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "8",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "9",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
  {
    key: "10",
    title: "Marketing Kickoff:",
    bulletPoints: [
      "Launch of targeted marketing campaigns.",
      "Community engagement initiatives.",
    ],
  },
];

const RoadOne = () => {
  return (
    <div className="grid grid-cols-5 gap-4 gap-y-1 mt-4">
      {FeatureCards.map((card) => (
        <DetailsCard data={card} />
      ))}
    </div>
  );
};

export default RoadOne;
