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
  handleSaveArticle,
  handleUnsaveArticle,
  handleRemoveArticle,
  handleSignInModal,
}) => {
  return (
    <>
      {isPageLoading === false ? (
        <NewsCardList
          isLoggedIn={isLoggedIn}
          searchResults={searchResults}
          isPageLoading={isPageLoading}
          isSearching={isSearching}
          savedNews={savedNews}
          handleSaveArticle={handleSaveArticle}
          handleUnsaveArticle={handleUnsaveArticle}
          handleRemoveArticle={handleRemoveArticle}
          handleSignInModal={handleSignInModal}
        />
      ) : (
        <Preloader />
      )}
      <About />
    </>
  );
};

export default Main;
