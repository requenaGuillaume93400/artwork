import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slugify from "./../service/Slugify";

const Filters = ({ title, category }) => {
  const filters = ["gaming", "animaux", "nature", "nourriture", "autre"];
  const slugyfiedTitle = `/${Slugify(title)}`;

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
              checked={category === filter}
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
