import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = ({ isLoggedIn, onSignInModal, onLogout, onSubmit }) => {
  return (
    <div className="header">
      <Navigation
        isLoggedIn={isLoggedIn}
        onSignInModal={onSignInModal}
        onLogout={onLogout}
      />
      <div className="header__section">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__text">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <div className="header__search">
          <SearchForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Header;
