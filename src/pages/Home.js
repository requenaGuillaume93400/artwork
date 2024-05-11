import React from "react";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

// Drawing folder
import fishSmall from "../assets/img/drawing/fish-small.png";
import japanSmall from "../assets/img/drawing/japan-small.jpg";
import hexagonSmall from "../assets/img/drawing/hexagon-small.jpg";
import spiralSmall from "../assets/img/drawing/spiral-small.jpg";

// Hook
import childSmall from "../assets/img/hook/childs.jpg";
import mouseSmall from "../assets/img/hook/mouse.jpg";

// Cross stitch
import flowerSmall from "../assets/img/cross-stitch/flower.jpg";
import womanSmall from "../assets/img/cross-stitch/woman.jpg";

// Other
import eclairSmall from "../assets/img/other/eclair.jpg";
import flowersSmall from "../assets/img/other/flowers.jpg";
import lightningSmall from "../assets/img/other/lightning.jpg";

const Home = () => {
  const drawingElements = [fishSmall, japanSmall, hexagonSmall, spiralSmall];
  const hookElements = [childSmall, mouseSmall];
  const crossStitchElements = [flowerSmall, womanSmall];
  const otherElements = [eclairSmall, flowersSmall, lightningSmall];

  return (
    <div>
      <Navigation />

      <Section elements={drawingElements} title="Drawing" />
      <Section elements={hookElements} title="Hook" />
      <Section elements={crossStitchElements} title="Cross Stitch" />
      <Section elements={otherElements} title="Other" />
    </div>
  );
};

export default Home;
