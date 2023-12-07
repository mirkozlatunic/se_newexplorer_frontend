import React from "react";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = () => {
  return (
    <div className="main">
      <h2 className="main__title">Search results</h2>
      <NewsCardList />
      <div>
        <button className="main__button">Show more</button>
      </div>
    </div>
  );
};

export default Main;
