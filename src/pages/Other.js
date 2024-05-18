import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

import patisserieSmall from "../assets/img/autre/patisserie-small.jpg";
import flowersSmall from "../assets/img/autre/flowers-small.jpg";
import foudreSmall from "../assets/img/autre/foudre-small.jpg";

const Other = () => {
  const otherElements = [
    {
      image: patisserieSmall,
      category: "Nourriture",
      description: "description",
    },
    { image: flowersSmall, category: "Autre", description: "description" },
    { image: foudreSmall, category: "Autre", description: "description" },
  ];

  return (
    <div>
      <Navigation />

      <Section elements={otherElements} title="Autre" />
    </div>
  );
};

export default Other;
