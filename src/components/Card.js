import React from "react";

const Card = ({ element }) => {
  const styleObject = {
    background: `url(${element.image}) center/cover`,
  };

  return (
    <div className="card">
      <div className="cardImage" style={styleObject}></div>
      <div className="cardSeparator"></div>
      <h3>{element.category}</h3>
      <p>{element.description}</p>
    </div>
  );
};

export default Card;
