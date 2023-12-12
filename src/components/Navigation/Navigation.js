import React, { useContext } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import LogoutButton from "../../images/logout-button.svg";

const Navigation = (isLoggedIn, onSignInModal, onLogout) => {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);

  return (
    <div>
      <header className="navigation">
        <Link to="/" className="navigation__link">
          <div
            className={
              location.pathname === "/"
                ? "navigation__leftside"
                : "naviation__leftside-saved-news"
            }
          >
            <div>NewsExplorer</div>
          </div>
        </Link>
        <div className="navigation__rightside">
          <Link to="/" className="navigation__link">
            <div
              className={
                location.pathname === "/"
                  ? "navigation__button"
                  : "navigation__button-saved-news"
              }
            >
              Home
            </div>
          </Link>
          {!isLoggedIn && (
            <Link to="/saved-news" className="navigation__link">
              <div
                className={
                  location.pathname === "/saved-news"
                    ? "navigation__button-saved-news"
                    : "navigation__button"
                }
              >
                Saved Articles
              </div>
            </Link>
          )}
          {!isLoggedIn ? (
            <button
              className={
                location.pathname === "/"
                  ? "navigation__logout-button"
                  : "navigation__logout-button-saved-news"
              }
              onClick={onLogout}
            >
              {currentUser ? currentUser.name : ""}
              <img
                src={LogoutButton}
                alt="logout"
                className="navigation__button-logout"
              />
            </button>
          ) : (
            <div>
              <button
                className="navigation__reg-button"
                type="text"
                onClick={onSignInModal}
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navigation;
