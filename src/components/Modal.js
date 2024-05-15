import React from "react";

const Modal = ({ isOpen, closeModal, imageUrl, section }) => {
  const fileName = imageUrl.split(".")[0].split("/").pop();
  const newFileName = fileName.replace(/-small/, "-medium");
  const imagePath = `img/${section}/${newFileName}.jpg`;

  console.log(imagePath);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={imagePath} alt={fileName} />
      </div>
    </div>
  );
};

export default Modal;
