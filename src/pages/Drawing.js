import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

import manetteSmall from "../assets/img/dessin/manette-small.jpg";
import portableSmall from "../assets/img/dessin/portable-small.jpg";
import natureSmall from "../assets/img/dessin/nature-small.jpg";
import psySmall from "../assets/img/dessin/psy-small.jpg";

const Drawing = () => {
  const drawingElements = [
    { image: manetteSmall, category: "Gaming", description: "description" },
    { image: portableSmall, category: "Gaming", description: "description" },
    { image: natureSmall, category: "Nature", description: "description" },
    { image: psySmall, category: "Autre", description: "description" },
    { image: manetteSmall, category: "Gaming", description: "description" },
    { image: portableSmall, category: "Gaming", description: "description" },
  ];

  return (
    <div>
      <Navigation />

      <Section elements={drawingElements} title="Dessin" />
    </div>
  );
};

export default Drawing;
