import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

// Dessin folder
import manetteSmall from "../assets/img/dessin/manette-small.jpg";
import portableSmall from "../assets/img/dessin/portable-small.jpg";
import natureSmall from "../assets/img/dessin/nature-small.jpg";
import psySmall from "../assets/img/dessin/psy-small.jpg";

// Crochet
import childSmall from "../assets/img/crochet/childs-small.jpg";
import mouseSmall from "../assets/img/crochet/mouse-small.jpg";

// Point de croix
import flowerSmall from "../assets/img/point-de-croix/flower-small.jpg";
import womanSmall from "../assets/img/point-de-croix/woman-small.jpg";

// Autre
import patisserieSmall from "../assets/img/autre/patisserie-small.jpg";
import flowersSmall from "../assets/img/autre/flowers-small.jpg";
import foudreSmall from "../assets/img/autre/foudre-small.jpg";

const Home = () => {
  const drawingElements = [
    { image: manetteSmall, category: "Gaming", description: "description" },
    { image: portableSmall, category: "Gaming", description: "description" },
    { image: natureSmall, category: "Nature", description: "description" },
    { image: psySmall, category: "Autre", description: "description" },
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

      <Section elements={drawingElements} title="Dessin" />
      <Section elements={hookElements} title="Crochet" />
      <Section elements={crossStitchElements} title="Point de croix" />
      <Section elements={otherElements} title="Autre" />
    </div>
  );
};

export default Home;
