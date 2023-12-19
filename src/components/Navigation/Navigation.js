import React, { useContext, useState, useEffect } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import LogoutButton from "../../images/logout-button.svg";
import LogoutButtonWhite from "../../images/logout-button-white.svg";

const Navigation = ({ isLoggedIn, onSignInModal, onLogout }) => {
  const reactLocation = useLocation();
  const currentLocation = reactLocation.pathname;
  const currentUser = useContext(CurrentUserContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuOpen(false);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header className={`navigation ${isMobileMenuOpen ? "menu-open" : ""}`}>
        <Link to="/" className="navigation__link">
          <div
            className={
              currentLocation === "/"
                ? "navigation__leftside"
                : "navigation__leftside-saved-news"
            }
          >
            <div>NewsExplorer</div>
          </div>
        </Link>
        <div className="navigation__rightside">
          <div
            className="navigation__hamburger-menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </div>
          {isMobileMenuOpen && (
            // Render hamburger menu for mobile
            // Add onClick handler to toggle mobile menu state
            <div
              className="mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Link to="/" className="navigation__link-home">
                <div
                  className={
                    currentLocation === "/"
                      ? "navigation__button navigation__link-home-active"
                      : "navigation__link-home-saved-news"
                  }
                >
                  Home
                </div>
              </Link>
              {isLoggedIn && (
                <Link to="/saved-news" className="navigation__link-saved-news">
                  <div
                    className={
                      currentLocation === "/saved-news"
                        ? "navigation__button-saved-news navigation__link-saved-news-active"
                        : "navigation__button"
                    }
                  >
                    Saved articles
                  </div>
                </Link>
              )}
              {isLoggedIn ? (
                <button
                  className={
                    currentLocation === "/"
                      ? "navigation__logout-button"
                      : "navigation__logout-button-saved-news"
                  }
                  onClick={onLogout}
                >
                  {currentUser ? currentUser.name : ""}Elise
                  <img
                    src={
                      currentLocation === "/saved-news"
                        ? LogoutButton
                        : LogoutButtonWhite
                    }
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
          )}
        </div>
      </header>
    </div>
  );
};

export default Navigation;
