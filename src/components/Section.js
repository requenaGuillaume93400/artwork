import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Section = ({ elements, title }) => {
  function slugify(str) {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  return (
    <div>
      <h2>
        <NavLink
          to={`/${slugify(title)}`}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>{title}</li>
        </NavLink>
      </h2>
      <div className="flex">
        {elements.map((element, index) => (
          <Card element={element} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section;
