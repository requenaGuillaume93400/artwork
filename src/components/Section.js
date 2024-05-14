import React from "react";
import Card from "./Card";
import { NavLink, useLocation } from "react-router-dom";
import Filters from "./Filters";
import Slugify from "./../service/Slugify";

const Section = ({ elements, title }) => {
  const urlParams = useLocation();
  const searchParams = new URLSearchParams(urlParams.search);
  const categoryParam = searchParams.get("category");
  const normalizedCategoryParam = categoryParam
    ? categoryParam.toLowerCase()
    : null;

  function showCards(element, index, slugifiedTitle) {
    const normalizedElementCategory = element.category.toLowerCase();

    if (
      !normalizedCategoryParam ||
      normalizedElementCategory === normalizedCategoryParam
    ) {
      return <Card element={element} key={index} section={slugifiedTitle} />;
    }

    return null;
  }

  const slugifiedTitle = Slugify(title);

  return (
    <div>
      <h2>
        <NavLink
          to={`/${slugifiedTitle}`}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>{title}</li>
        </NavLink>
      </h2>
      <Filters title={title} category={normalizedCategoryParam} />
      <div className="flex">
        {elements.map((element, index) =>
          showCards(element, index, slugifiedTitle)
        )}
      </div>
    </div>
  );
};

export default Section;
