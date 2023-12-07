import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = () => {
  return (
    <ul className="cards">
      <NewsCard />
    </ul>
  );
};

export default NewsCardList;
