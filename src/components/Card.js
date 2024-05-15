import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Slugify from "./../service/Slugify";
import Modal from "./Modal";

const Card = ({ element, section }) => {
  const imageUrl = element.image;

  const styleObject = {
    background: `url(${imageUrl}) center/cover`,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="card">
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
        section={section}
      />
      <div className="cardImage" style={styleObject} onClick={openModal}></div>
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
