import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = () => {
  return (
    <ul className="cards">
      <NewsCard />
      <button className="cards__button">Show more</button>
    </ul>
  );
};

export default NewsCardList;
