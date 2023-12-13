import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ isLoggedIn, savedNews, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  //   const currentUserArticles = savedNews.filter(
  //     (article) => article.owner === currentUser?._id
  //   );
  //   const keywordArray = currentUserArticles.map((card) => card.keyword);

  //   const getKeywordString = (articleData) => {
  //     if (keywordArray.length === 1) {
  //       return `${keywordArray[0]}`;
  //     }
  //     if (keywordArray.length > 1) {
  //       const count = {};
  //       for (let keyword of articleData) {
  //         if (count[keyword]) {
  //           count[keyword]++;
  //         } else {
  //           count[keyword] = 1;
  //         }
  //       }
  //       const savedArticleKeywords = [];
  //       for (const item in count) {
  //         savedArticleKeywords.push([item, count[item]]);
  //       }
  //       savedArticleKeywords.sort((a, b) => {
  //         return b[1] - a[1];
  //       });

  //       if (savedArticleKeywords.length === 1) {
  //         return `${savedArticleKeywords[0][0]}`;
  //       } else if (savedArticleKeywords.length === 2) {
  //         return `${savedArticleKeywords[0][0]} and ${savedArticleKeywords[1][0]}`;
  //       } else {
  //         return `${savedArticleKeywords[0][0]}, ${
  //           savedArticleKeywords[1][0]
  //         }, and ${savedArticleKeywords.length - 2} more`;
  //       }
  //     } else {
  //       return null;
  //     }
  //   };

  //   const keywordString = getKeywordString(keywordArray);

  return (
    <div className="saved-news-header__container">
      <Navigation
        className="saved-news-header__navigation"
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <div className="saved-news-header__content">
        <p className="saved-news-header__title">Saved articles</p>
        <h2 className="saved-news-header__counter">
          {/*{currentUser.name}*/}Elise, you have
          {/*{currentUserArticles.length}*/} 10 saved articles
        </h2>
        <p className="saved-news-header__keywords">
          By keywords: <b>{/*{keywordString}*/}Nature, etc</b>
        </p>
      </div>
    </div>
  );
};

export default SavedNewsHeader;
