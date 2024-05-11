import React from "react";

const Card = ({ element }) => {
  const styleObject = {
    background: `url(${element}) center/cover`,
  };

  return <div className="card" style={styleObject}></div>;
};

export default Card;
