import React from "react";
import DetailsCard from "../detailsCard/DetailsCard";
const FeatureCards = [
  {
    key: "1",
    title1: "Product Enhancement:",
    bulletPoints1: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
    title2: "Product Enhancement:",
    bulletPoints2: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
  },
  {
    key: "2",
    title1: "Product Enhancement:",
    bulletPoints1: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
    title2: "Product Enhancement:",
    bulletPoints2: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
  },
  {
    key: "3",
    title1: "Product Enhancement:",
    bulletPoints1: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
    title2: "Product Enhancement:",
    bulletPoints2: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
  },
  {
    key: "4",
    title1: "Product Enhancement:",
    bulletPoints1: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
    title2: "Product Enhancement:",
    bulletPoints2: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
  },
  {
    key: "5",
    title1: "Product Enhancement:",
    bulletPoints1: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
    title2: "Product Enhancement:",
    bulletPoints2: [
      "UI/UX improvements based on initial user feedback.",
      "Testing and implementation of additional features.",
    ],
  },
];

const RoadOne = ({ currentStep }) => {
  return (
    <div className="grid grid-cols-5 gap-4 gap-y-1 mt-4">
     {FeatureCards.slice(0, currentStep + 1).map((card) => (
        <DetailsCard key={card.key} data={card} />
      ))}
    </div>
  );
};

export default RoadOne;
