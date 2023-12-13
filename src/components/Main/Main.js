import React from "react";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

const Main = ({
  isLoggedIn,
  searchResults,
  isSearching,
  isPageLoading,
  savedNews,
}) => {
  return (
    <div className="main">
      <h2 className="main__title">Search results</h2>
      <NewsCardList
        isLoggedIn={isLoggedIn}
        searchResults={searchResults}
        isPageLoading={isPageLoading}
        isSearching={isSearching}
        savedNews={savedNews}
      />
    </div>
  );
};

export default Main;
