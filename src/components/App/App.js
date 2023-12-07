import "./App.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Main />
      <Preloader />
      <NothingFound />
      <About />
      <Footer />
    </div>
  );
};

export default App;
