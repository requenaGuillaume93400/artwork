import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

// Dessin folder
import fishSmall from "../assets/img/dessin/fish-small.png";
import japanSmall from "../assets/img/dessin/japan-small.jpg";
import hexagonSmall from "../assets/img/dessin/hexagon-small.jpg";
import spiralSmall from "../assets/img/dessin/spiral-small.jpg";

// Crochet
import childSmall from "../assets/img/crochet/childs-small.jpg";
import mouseSmall from "../assets/img/crochet/mouse-small.jpg";

// Point de croix
import flowerSmall from "../assets/img/point-de-croix/flower-small.jpg";
import womanSmall from "../assets/img/point-de-croix/woman-small.jpg";

// Autre
import eclairSmall from "../assets/img/autre/eclair-small.jpg";
import flowersSmall from "../assets/img/autre/flowers-small.jpg";
import lightningSmall from "../assets/img/autre/lightning-small.jpg";

const Home = () => {
  const drawingElements = [
    { image: fishSmall, category: "Gaming", description: "description" },
    { image: japanSmall, category: "Gaming", description: "description" },
    { image: hexagonSmall, category: "Nature", description: "description" },
    { image: spiralSmall, category: "Autre", description: "description" },
  ];
  const hookElements = [
    { image: childSmall, category: "category", description: "description" },
    { image: mouseSmall, category: "Animaux", description: "description" },
  ];
  const crossStitchElements = [
    { image: flowerSmall, category: "Autre", description: "description" },
    { image: womanSmall, category: "Autre", description: "description" },
  ];
  const otherElements = [
    { image: eclairSmall, category: "Nourriture", description: "description" },
    { image: flowersSmall, category: "Autre", description: "description" },
    { image: lightningSmall, category: "Autre", description: "description" },
  ];

  return (
    <div>
      <Navigation />

      <Section elements={drawingElements} title="Dessin" />
      <Section elements={hookElements} title="Crochet" />
      <Section elements={crossStitchElements} title="Point de croix" />
      <Section elements={otherElements} title="Autre" />
    </div>
  );
};

export default Home;
