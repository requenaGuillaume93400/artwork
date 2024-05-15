import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

import childSmall from "../assets/img/crochet/childs-small.jpg";
import mouseSmall from "../assets/img/crochet/mouse-small.jpg";

const Hook = () => {
  const hookElements = [
    { image: childSmall, category: "category", description: "description" },
    { image: mouseSmall, category: "Animaux", description: "description" },
  ];

  return (
    <div>
      <Navigation />

      <Section elements={hookElements} title="Crochet" />
    </div>
  );
};

export default Hook;
