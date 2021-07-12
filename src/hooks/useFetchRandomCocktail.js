import { useState, useEffect } from "react";

import Api from "../class-api/class-api";

export const useFetchRandomCoctail = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchDrinks = await Api.fetchRandomCocktail();
      setData(fetchDrinks.drinks);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading };
};
