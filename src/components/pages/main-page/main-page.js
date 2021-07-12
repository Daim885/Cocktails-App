import { useFetchRandomCoctail } from "../../../hooks/useFetchRandomCocktail";

import OrderButton from "../../order-button/order-button";
import Preloader from "../../preloader/preloader";

import "./main-page.css";

const MainPage = () => {
  const { data: randomDrink, isLoading } = useFetchRandomCoctail();
  return isLoading ? (
    <Preloader />
  ) : (
    <div>
      <h2 className="title-main-page">
        Для вибору коктейлю скористайтесь пошуком або фільтром
      </h2>

      {randomDrink[0] && (
        <div className="special-offer">
          <h3 className="special-offer-title">Персональна рекомендація:</h3>
          <img
            className="special-offer-img"
            src={randomDrink[0].strDrinkThumb}
          />
          <div className="special-offer-description">
            <span className="special-offer-name-cocktail">
              {randomDrink[0].strDrink}
            </span>
            <OrderButton cocktail={randomDrink[0].strDrink} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
