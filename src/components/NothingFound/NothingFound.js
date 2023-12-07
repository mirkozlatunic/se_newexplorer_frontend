import React from "react";
import "./NothingFound.css";
import NothingFoundPicture from "../../images/nothing-found.png";

const NothingFound = () => {
  return (
    <div className="nothing">
      <img src={NothingFoundPicture} alt="nothing-found" />
      <p className="nothing__title">Nothing found</p>
      <p className="nothing__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NothingFound;
