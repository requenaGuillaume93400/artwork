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
          to="/drawing"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Drawing</li>
        </NavLink>
        <NavLink
          to="/hook"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Hook</li>
        </NavLink>
        <NavLink
          to="/cross-stitch"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Cross-stitch</li>
        </NavLink>
        <NavLink
          to="/other"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Other</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
