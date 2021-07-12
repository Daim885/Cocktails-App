import { useState, useEffect } from "react";

import Api from "../class-api/class-api";

export const useFetchCocktailByUrl = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cocktailsNotFound, setCocktailsNotFound] = useState(false);

  useEffect(() => {
    const FethcData = async () => {
      setIsLoading(true);
      const fetchDrinks = await Api.fetchCocktailByUrl(url);
      setData(fetchDrinks.drinks === null ? [] : fetchDrinks.drinks);
      setCocktailsNotFound(fetchDrinks.drinks === null ? true : false);
      setIsLoading(false);
    };
    FethcData();
  }, []);
  return { data, isLoading, cocktailsNotFound };
};
