import { useState } from "react";

import {
  getOrderCocktailsFromLS,
  saveCocktailToLS,
  removeCocktailFromLS,
  removeCocktailsFromLS,
} from "../work-with-ls/work-with-ls";

import Header from "../components/header/header";
import PgaeContent from "../components/page-content/pgae-content";
import Footer from "../components/footer/footer";

import { CocktailsContextProvider } from "../components/context/contextCountCocktails";

import "./app.css";

const App = () => {
  const [arrCocktails, setArrCocktails] = useState(getOrderCocktailsFromLS());

  const addCoctailToArr = (cocktail) => {
    saveCocktailToLS(cocktail);
    setArrCocktails([...arrCocktails, cocktail]);
  };

  const removeCocktail = (cocktail) => {
    removeCocktailFromLS(cocktail);
    setArrCocktails(getOrderCocktailsFromLS());
  };

  const removeCocktails = () => {
    removeCocktailsFromLS();
    setArrCocktails([]);
  };

  return (
    <CocktailsContextProvider
      value={{ arrCocktails, addCoctailToArr, removeCocktail, removeCocktails }}
    >
      <div className="wrapper">
        <Header />
        <PgaeContent />
        <Footer />
      </div>
    </CocktailsContextProvider>
  );
};

export default App;
