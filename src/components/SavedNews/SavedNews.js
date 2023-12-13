import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

const SaveNews = ({ isLoggedIn, savedNews, handleRemoveArticle }) => {
  return (
    <div className="saved__news-container">
      {savedNews.map((newsItem, index) => {
        const isSaved = true;
        return (
          <NewsCard
            isLoggedIn={isLoggedIn}
            newsItem={newsItem}
            key={index}
            isSaved={isSaved}
            handleRemoveArticle={handleRemoveArticle}
          />
        );
      })}
    </div>
  );
};

export default SaveNews;
