import React from "react";
import Card from "./Card";
import { NavLink, useLocation } from "react-router-dom";
import Filters from "./Filters";

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

  const urlParams = useLocation();
  const searchParams = new URLSearchParams(urlParams.search);
  const categoryParam = searchParams.get("category");

  function showCards(element, index) {
    const normalizedCategoryParam = categoryParam
      ? categoryParam.toLowerCase()
      : null;
    const normalizedElementCategory = element.category.toLowerCase();

    if (
      !normalizedCategoryParam ||
      normalizedElementCategory === normalizedCategoryParam
    ) {
      return <Card element={element} key={index} />;
    }

    return null;
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
      <Filters title={title} slugify={slugify} />
      <div className="flex">
        {elements.map((element, index) => showCards(element, index))}
      </div>
    </div>
  );
};

export default Section;
