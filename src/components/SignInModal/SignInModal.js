import React, { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../hooks/useForm";
import "./SignInModal.css";

const SignInModal = ({
  handleCloseModal,
  isOpen,
  onSignUpModal,
  onSubmit,
  isModalLoading,
}) => {
  const { values, errors, handleChange, isValid, resetForm } =
    useFormWithValidation({ email: "", password: "" });
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  };
  return (
    <PopupWithForm
      title="Sign In"
      modalName="SigIn"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <div>
        <label className="form__label" htmlFor="email">
          Email
          <input
            className="form__input-text"
            type="email"
            name="email"
            id="email-input"
            placeholder="Enter Email"
            required
            value={values.email}
            onChange={handleChange}
            autoFocus
          />
          <span className="form__error" id="email-input-error">
            {errors.email}
          </span>
        </label>
        <label className="form__label" htmlFor="password">
          Password
          <input
            className="form__input-text"
            type="text"
            name="password"
            id="password-input"
            placeholder="Enter Password"
            minLength="1"
            maxLength="8"
            value={values.password}
            onChange={handleChange}
            required
          />
          <span className="form__error" id="password-input-error">
            {errors.password}
          </span>
        </label>
      </div>
      <button
        className="modal__submit-button"
        type="submit"
        disabled={!isValid}
      >
        {isModalLoading ? "Signing in..." : "Sign in"}
      </button>
      <button
        className="modal__redirect-button"
        type="button"
        onClick={onSignUpModal}
      >
        <span className="modal__redirect-button-alt">or</span> Sign up
      </button>
    </PopupWithForm>
  );
};

export default SignInModal;
