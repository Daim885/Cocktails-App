import { Route, Switch } from "react-router-dom";

import MainPage from "../pages/main-page/main-page";
import SearchByName from "../pages/search-by-name/search-by-name";
import SearchByFirstLetter from "../pages/search-by-first-letter/search-by-first-letter";
import CoctailPage from "../pages/cockteil-page/cocktail-page";
import PageNotCoctails from "../pages/not-cocktails/not-coctails";

import "./page-content.css";

const PgaeContent = () => {
  return (
    <div className="page-content">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/search_by_name" component={SearchByName} />
        <Route path="/search_by_first_letter" component={SearchByFirstLetter} />
        <Route path="/cocktail/:id" component={CoctailPage} />{" "}
        <Route path="/not_found" component={PageNotCoctails} />
      </Switch>
    </div>
  );
};

export default PgaeContent;
