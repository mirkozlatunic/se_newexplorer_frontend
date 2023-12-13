import React, { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../hooks/useForm";
import "./SignUpModal.css";

const SignUpModal = ({
  handleCloseModal,
  isOpen,
  onSignInModal,
  onSubmit,
  isModalLoading,
  serverErrors,
}) => {
  const { values, errors, handleChange, isValid, resetForm } =
    useFormWithValidation({ email: "", password: "", name: "" });
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
      title="Sign Up"
      modalName="signUp"
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
            required
            value={values.password}
            onChange={handleChange}
          />
          <span className="form__error" id="password-input-error">
            {errors.password}
          </span>
        </label>
        <label className="form__label" htmlFor="name">
          Username
          <input
            className="form__input-text"
            type="text"
            name="name"
            id="name-input"
            placeholder="Enter your username"
            minLength="2"
            value={values.name}
            onChange={handleChange}
            required
          />
          <span className="form__error" id="name-input-error">
            {errors.name}
          </span>
        </label>
      </div>
      <span className="form__error-duplicate" id="duplicate-input-error">
        {serverErrors.conflictError}
      </span>
      <button
        className="modal__submit-button"
        type="submit"
        disabled={!isValid}
      >
        {isModalLoading ? "Signing up..." : "Sign up"}
      </button>
      <button
        className="modal__redirect-button"
        type="button"
        onClick={onSignInModal}
      >
        <span className="modal__redirect-button-alt">or</span> Sign in
      </button>
    </PopupWithForm>
  );
};

export default SignUpModal;
