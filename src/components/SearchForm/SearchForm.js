import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSubmit }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearchValid, setIsSearchValid] = useState(true);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKeyword === "") {
      setIsSearchValid(false);
      setValidationError("Please enter a search keyword");
    } else {
      setIsSearchValid(true);
      onSubmit(searchKeyword);
    }
    setSearchKeyword("");
  };

  const handleSearchKeywordChange = (evt) => setSearchKeyword(evt.target.value);
  return (
    <div className="search__form">
      <form className="search__form-content" onSubmit={handleSubmit}>
        <input
          className="search__form-input"
          type="text"
          placeholder="Search something..."
          minLength={2}
          maxLength={30}
          name="search"
          value={searchKeyword}
          onChange={handleSearchKeywordChange}
        />
        <button
          className="search__form-button"
          name="search"
          title="Search"
          type="submit"
        ></button>
      </form>
      <span
        className={
          isSearchValid ? "search__form-error-inactive" : "search__form-error"
        }
      >
        {validationError}
      </span>
    </div>
  );
};

export default SearchForm;
