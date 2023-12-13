import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import SearchForm from "../SearchForm/SearchForm";

import { CurrentUserContext } from "../../context/CurrentUserContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Route exact path="/">
          <Header isLoggedIn={isLoggedIn} />
          <Main />
        </Route>
        <Preloader />
        <NothingFound />
        <About />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
