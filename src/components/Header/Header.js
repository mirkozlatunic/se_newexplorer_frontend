import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__section">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__text">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <div className="header__search">
          <input className="header__input" placeholder="Enter topic"></input>
          <button className="header__button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
