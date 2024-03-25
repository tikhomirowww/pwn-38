import React, { useState } from "react";
import styles from "./modal.module.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
