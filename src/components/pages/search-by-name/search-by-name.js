import { useLocation } from "react-router";

import { useFetchCocktailByUrl } from "../../../hooks/useFetchCocktailByUrl";

import ListCocktails from "../../list-cocktails/list-cocktails";
import Preloader from "../../preloader/preloader";
import PageNotCoctails from "../not-cocktails/not-coctails";

import { getUrlSearchByNameCocktails } from "../../../utils/getUrlsForFetch/getUrlSearchByNameCocktails";

import "./search-by-name.css";

const SearchByName = () => {
  const location = useLocation();
  const searchQuery = location.search.replace("?s=", "");

  const {
    data: drinksByName,
    isLoading,
    cocktailsNotFound,
  } = useFetchCocktailByUrl(getUrlSearchByNameCocktails(searchQuery));
  return isLoading ? (
    <Preloader />
  ) : cocktailsNotFound ? (
    <PageNotCoctails />
  ) : (
    <ListCocktails arrCocktails={drinksByName} />
  );
};

export default SearchByName;
