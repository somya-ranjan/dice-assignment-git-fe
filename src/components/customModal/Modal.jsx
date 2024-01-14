import React, { useEffect } from "react";
import "./style.scss";
const Modal = ({ isOpen, onClose, children, title }) => {
  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscKey);

    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={`overlay ${isOpen ? "open" : ""}`} onClick={closeModal}>
      <div
        className={`modal ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close" onClick={closeModal}>
          &times;
        </div>
        <h2 className="modal_title">{title}</h2>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
