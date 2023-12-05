import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__leftside">
          <div>NewsExplorer</div>
        </div>
        <div className="header__rightside">
          <div className="header__home">Home</div>
          <div>
            <button className="header__reg-button" type="text">
              Sign In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
