import React from "react";
import Card from "./Card";

const Section = ({ elements, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="separator"></div>
      <div className="flex">
        {elements.map((element, index) => (
          <Card element={element} key={index} />
        ))}
      </div>

      <div className="separator mb"></div>
    </div>
  );
};

export default Section;
