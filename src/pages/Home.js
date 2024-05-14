import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

// Drawing folder
import fishSmall from "../assets/img/drawing/fish-small.png";
import japanSmall from "../assets/img/drawing/japan-small.jpg";
import hexagonSmall from "../assets/img/drawing/hexagon-small.jpg";
import spiralSmall from "../assets/img/drawing/spiral-small.jpg";

// Hook
import childSmall from "../assets/img/hook/childs-small.jpg";
import mouseSmall from "../assets/img/hook/mouse-small.jpg";

// Cross stitch
import flowerSmall from "../assets/img/cross-stitch/flower-small.jpg";
import womanSmall from "../assets/img/cross-stitch/woman-small.jpg";

// Other
import eclairSmall from "../assets/img/other/eclair-small.jpg";
import flowersSmall from "../assets/img/other/flowers-small.jpg";
import lightningSmall from "../assets/img/other/lightning-small.jpg";

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
