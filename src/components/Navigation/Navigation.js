import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <header className="navigation">
        <div className="navigation__leftside">
          <div>NewsExplorer</div>
        </div>
        <div className="navigation__rightside">
          <div className="navigation__home">Home</div>
          <div>
            <button className="navigation__reg-button" type="text">
              Sign In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
