import { useParams } from "react-router-dom";

import { useFetchCocktailByUrl } from "../../../hooks/useFetchCocktailByUrl";

import { getUrlSearchById } from "../../../utils/getUrlsForFetch/getUrlSearchById";

import OrderButton from "../../order-button/order-button";
import Preloader from "../../preloader/preloader";

import "./cocktail-page.css";

const CoctailPage = () => {
  const { id: searchId } = useParams("id");

  const { data: drinkById, isLoading } = useFetchCocktailByUrl(
    getUrlSearchById(searchId)
  );

  return isLoading ? (
    <Preloader />
  ) : (
    <div>
      {drinkById[0] && (
        <div className="cocktail-page-content">
          <span className="cocktail-page-name">{drinkById[0].strDrink}</span>
          <img className="cocktail-page-img" src={drinkById[0].strDrinkThumb} />
          <OrderButton cocktail={drinkById[0].strDrink} />
        </div>
      )}
    </div>
  );
};

export default CoctailPage;
