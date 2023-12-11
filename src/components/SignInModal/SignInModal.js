import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./SignInModal.css";

const SignInModal = () => {
  return (
    <PopupWithForm title="Sign In" modalName="SigIn">
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
            autoFocus
          />
          <span className="form__error" id="email-input-error">
            {/* {errors.email} */}
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
          />
          <span className="form__error" id="password-input-error">
            {/* {errors.password} */}
          </span>
        </label>
      </div>
      <button className="modal__submit-button" type="submit">
        {/* {isModalLoading ? "Signing in..." : "Sign in"} */}Sign in
      </button>
      <button className="modal__redirect-button" type="button">
        <span className="modal__redirect-button-alt">or</span> Sign up
      </button>
    </PopupWithForm>
  );
};

export default SignInModal;
