import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

import eclairSmall from "../assets/img/other/eclair.jpg";
import flowersSmall from "../assets/img/other/flowers.jpg";
import lightningSmall from "../assets/img/other/lightning.jpg";

const Other = () => {
  const otherElements = [
    { image: eclairSmall, category: "Nourriture", description: "description" },
    { image: flowersSmall, category: "Autre", description: "description" },
    { image: lightningSmall, category: "Autre", description: "description" },
  ];

  return (
    <div>
      <Navigation />

      <Section elements={otherElements} title="Autre" />
    </div>
  );
};

export default Other;
