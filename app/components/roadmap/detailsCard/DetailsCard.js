import { useTheme } from "next-themes";
import React from "react";

const DetailsCard = ({ data }) => {
    const {theme, setTheme} = useTheme();
  return (
    <div className={`px-4 py-2 flex flex-col space-y-2`}>
      <h2 className="text-sm font-bold font-quicksand">{data.title1}</h2>
      <div className="flex flex-col space-y-2">
      {data.bulletPoints.map((item) => (
        <p className={`${theme === "dark" ? "bullet-text-dark" : "bullet-text-light"} text-xs font-quicksand`}>{item}</p>
      ))}
      </div>
    </div>
  );
};

export default DetailsCard;
