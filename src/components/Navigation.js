import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/dessin"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Dessin</li>
        </NavLink>
        <NavLink
          to="/crochet"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Crochet</li>
        </NavLink>
        <NavLink
          to="/point-de-croix"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Point de croix</li>
        </NavLink>
        <NavLink
          to="/autre"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Autre</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
