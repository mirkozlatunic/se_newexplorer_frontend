import React from "react";
import "./Footer.css";
import github from "../../images/github.svg";
import facebook from "../../images/fb.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <p className="footer__copyright">
          © 2021 Supersite, Powered by News API
        </p>
        <div className="footer__right">
          <div className="footer__content">
            <p to="/" className="footer__link">
              Home
            </p>
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__name footer__link"
            >
              Practicum
            </a>
          </div>
          <div className="footer__icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__name footer__link"
            >
              <img src={github} className="footer__icon" alt="github icon" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__name footer__link"
            >
              <img
                src={facebook}
                className="footer__icon"
                alt="facebook icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
