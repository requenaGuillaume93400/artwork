import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

import childSmall from "../assets/img/hook/childs.jpg";
import mouseSmall from "../assets/img/hook/mouse.jpg";

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
