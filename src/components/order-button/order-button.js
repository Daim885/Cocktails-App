import { useContext } from "react";

import { CocktailsContext } from "../context/contextCountCocktails";

import "./order-button.css";

const OrderButton = ({ cocktail }) => {
  const { addCoctailToArr } = useContext(CocktailsContext);

  return (
    <button
      className="button-order-cocktail"
      onClick={() => addCoctailToArr(cocktail)}
    >
      Замовити
    </button>
  );
};

export default OrderButton;
