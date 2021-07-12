export const getOrderCocktailsFromLS = () => {
  const orderCocktails = window.localStorage.getItem("orderCocktails");
  if (orderCocktails === null) {
    return [];
  }
  return JSON.parse(orderCocktails);
};

export const saveCocktailToLS = (cocktail) => {
  const cocktails = getOrderCocktailsFromLS();
  cocktails.unshift(cocktail);
  window.localStorage.setItem("orderCocktails", JSON.stringify(cocktails));
};

export const removeCocktailsFromLS = () => {
  window.localStorage.removeItem("orderCocktails");
};

export const removeCocktailFromLS = (removeCocktail) => {
  const cocktails = getOrderCocktailsFromLS();
  removeCocktailsFromLS();
  cocktails.splice(cocktails.indexOf(removeCocktail), 1);
  window.localStorage.setItem("orderCocktails", JSON.stringify(cocktails));
};
