import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__section">
        <div className="preloader__circle"></div>
        <p className="preloader__info">Searching for news...</p>
      </div>
    </div>
  );
};

export default Preloader;
