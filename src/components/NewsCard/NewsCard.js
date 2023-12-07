import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import saveNormal from "../../images/save-normal.svg";
import saveHover from "../../images/save-hover.svg";
import saveMarked from "../../images/save-marked.svg";
import trashClicked from "../../images/trash-clicked.svg";
import trashUnclicked from "../../images/trash-unclicked.svg";
import Dog from "../../images/dog-in-forest.png";
import "./NewsCard.css";

const NewsCard = () => {
  return (
    <li className="card">
      <img src={Dog} alt="card scenery" className="card__image" />
      <div className="card__picture-section">
        <p className="card__category">Nature</p>
        {/* <p className="card__button-text_hidden">Remove from saved</p> */}
        <button className="card__button">
          <img
            src={saveNormal}
            alt="card button"
            className="card__button-image"
          />
        </button>
      </div>
      <div className="card__info">
        <p className="card__date">November 4, 2020</p>
        <h2 className="card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h2>
        <p className="card__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className="card__author">treehugger</p>
      </div>
    </li>
  );
};

export default NewsCard;
