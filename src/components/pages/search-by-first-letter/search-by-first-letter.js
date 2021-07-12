import { useLocation } from "react-router-dom";

import { useFetchCocktailByUrl } from "../../../hooks/useFetchCocktailByUrl";

import ListCocktails from "../../list-cocktails/list-cocktails";
import Preloader from "../../preloader/preloader";
import PageNotCoctails from "../not-cocktails/not-coctails";

import { getSearchUrlByFirstLetter } from "../../../utils/getUrlsForFetch/getUrySearchByFirstLetter";

import "./search-by-first-letter.css";

const SearchByFirstLetter = () => {
  const location = useLocation();
  const searchQueryLetter = location.search.replace("?f=", "");

  const {
    data: drinksByFirstLetter,
    isLoading,
    cocktailsNotFound,
  } = useFetchCocktailByUrl(getSearchUrlByFirstLetter(searchQueryLetter));
  return isLoading ? (
    <Preloader />
  ) : cocktailsNotFound ? (
    <PageNotCoctails />
  ) : (
    <ListCocktails arrCocktails={drinksByFirstLetter} />
  );
};

export default SearchByFirstLetter;
