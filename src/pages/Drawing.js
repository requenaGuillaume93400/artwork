import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

import fishSmall from "../assets/img/drawing/fish-small.png";
import japanSmall from "../assets/img/drawing/japan-small.jpg";
import hexagonSmall from "../assets/img/drawing/hexagon-small.jpg";
import spiralSmall from "../assets/img/drawing/spiral-small.jpg";

const Drawing = () => {
  const drawingElements = [
    { image: fishSmall, category: "Gaming", description: "description" },
    { image: japanSmall, category: "Gaming", description: "description" },
    { image: hexagonSmall, category: "Nature", description: "description" },
    { image: spiralSmall, category: "Autre", description: "description" },
    { image: fishSmall, category: "Gaming", description: "description" },
    { image: japanSmall, category: "Gaming", description: "description" },
  ];

  return (
    <div>
      <Navigation />

      <Section elements={drawingElements} title="Dessin" />
    </div>
  );
};

export default Drawing;
