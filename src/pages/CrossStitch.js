import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

import flowerSmall from "../assets/img/point-de-croix/flower-small.jpg";
import womanSmall from "../assets/img/point-de-croix/woman-small.jpg";

const CrossStitch = () => {
  const crossStitchElements = [
    { image: flowerSmall, category: "Autre", description: "description" },
    { image: womanSmall, category: "Autre", description: "description" },
  ];

  return (
    <div>
      <Navigation />

      <Section elements={crossStitchElements} title="Point de croix" />
    </div>
  );
};

export default CrossStitch;
