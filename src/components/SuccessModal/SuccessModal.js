import React from "react";
import "./SuccessModal.css";

const SuccessModal = (modalName, onClose) => {
  return (
    <div className={`modal modal__type-${modalName}`}>
      <div className="modal__success-content">
        <h3 className="modal__success-title">
          Registration successfully completed!
        </h3>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <button className="modal__success-button" type="button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
