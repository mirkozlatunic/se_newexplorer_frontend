import React, { useContext } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const Navigation = (isLoggedIn, onSignInModal, onLogout) => {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);

  return (
    <div>
      <header className="navigation">
        <Link to="/">
          <div
            className={
              location.pathname === "/"
                ? "navigation__leftside"
                : "naviation__leftside-saved-news"
            }
          >
            <h2>NewsExplorer</h2>
          </div>
        </Link>
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
