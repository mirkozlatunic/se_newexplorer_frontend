import React, { useState } from "react";
import "./NewsCardList.css";
import NothingFound from "../NothingFound/NothingFound";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({
  isLoggedIn,
  searchResults,
  isPageLoading,
  isSearching,
  savedNews,
  handleSaveArticle,
  handleUnsaveArticle,
  handleRemoveArticle,
  handleSignInModal,
}) => {
  let [cardView, setCardView] = useState(3);
  const handleSearchRes = () => setCardView(cardView + 3);

  return !isPageLoading && isSearching && searchResults.length === 0 ? (
    <NothingFound />
  ) : !isPageLoading && isSearching && searchResults.length >= 3 ? (
    <section className="newscardslist">
      <h2 className="newscardslist__title">Search results</h2>
      <ul className="newscardslist__container">
        {searchResults.slice(0, cardView).map((newsItem, index) => {
          const isSaved =
            savedNews.find((savedItem) => {
              return savedItem.link === newsItem.url;
            }) != null;
          return (
            <NewsCard
              key={index}
              newsItem={newsItem}
              isLoggedIn={isLoggedIn}
              isSaved={isSaved}
              handleSaveArticle={handleSaveArticle}
              handleUnsaveArticle={handleUnsaveArticle}
              handleRemoveArticle={handleRemoveArticle}
              handleSignInModal={handleSignInModal}
            />
          );
        })}
      </ul>
      {cardView <= searchResults.length ? (
        <button
          className="newscardslist__button"
          type="button"
          onClick={handleSearchRes}
        >
          Show more
        </button>
      ) : (
        ""
      )}
    </section>
  ) : (
    ""
  );
};

export default NewsCardList;
