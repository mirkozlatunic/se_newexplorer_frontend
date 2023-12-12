import React, { useState } from "react";
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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navigation isLoggedIn={isLoggedIn} />
      <Header isLoggedIn={isLoggedIn} />
      <Main />
      <Preloader />
      <NothingFound />
      <About />
      <Footer />
    </div>
  );
};

export default App;
