import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Filters = ({ title, slugify }) => {
  const filters = ["gaming", "animaux", "nature", "nourriture", "autre"];
  const slugyfiedTitle = `/${slugify(title)}`;

  const navigate = useNavigate();

  const handleRadioChange = (filter) => {
    navigate(`${slugyfiedTitle}?category=${filter}`);
  };

  if (useLocation().pathname === slugyfiedTitle) {
    return (
      <div className="filterBar flex">
        {filters.map((filter, index) => (
          <div key={index}>
            <input
              type="radio"
              name="filter"
              id={filter}
              onChange={() => handleRadioChange(filter)}
            />
            <label htmlFor={filter}>{filter}</label>
          </div>
        ))}
      </div>
    );
  }

  return;
};

export default Filters;
