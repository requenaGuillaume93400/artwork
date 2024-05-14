import React from "react";

const Modal = ({ isOpen, closeModal, imageUrl }) => {
  const fileName = imageUrl.split(".")[0].split("/").pop();
  const newFileName = fileName.replace(/-small/, "-medium");
  const newUrl = imageUrl.replace(fileName, newFileName);

  //   alert(newUrl);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={newUrl} alt={fileName} />
        <p>Modal content goes here.</p>
      </div>
    </div>
  );
};

export default Modal;
