import React from "react";
import "./SuccessModal.css";

const SuccessModal = ({ modalName, handleCloseModal, onSignInModal }) => {
  return (
    <div className={`modal modal__type-${modalName}`}>
      <div className="modal__success-content">
        <h3 className="modal__success-title">
          Registration successfully completed!
        </h3>
        <button
          className="modal__close-button"
          type="button"
          onClick={handleCloseModal}
        />
        <button
          className="modal__success-button"
          type="button"
          onClick={onSignInModal}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
