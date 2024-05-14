import React from "react";
import { NavLink } from "react-router-dom";
import Slugify from "./../service/Slugify";

const Card = ({ element, section }) => {
  const styleObject = {
    background: `url(${element.image}) center/cover`,
  };

  return (
    <div className="card">
      <div className="cardImage" style={styleObject}></div>
      <div className="cardSeparator"></div>
      <h3>
        <NavLink
          to={`/${section}?category=${Slugify(element.category)}`}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          {element.category}
        </NavLink>
      </h3>
      <p>{element.description}</p>
    </div>
  );
};

export default Card;
