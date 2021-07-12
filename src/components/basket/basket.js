import { useState, useContext, useEffect } from "react";

import { CocktailsContext } from "../context/contextCountCocktails";

import { RiShoppingBasket2Line } from "react-icons/ri";

import ModalBasket from "../../modal-window-basket/modal-window-baskte";
import BasketContent from "../basket-content/basket-content";

import "./basket.css";

const Basket = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { arrCocktails, removeCocktail, removeCocktails } =
    useContext(CocktailsContext);

  const openBasketModalWindow = () => {
    return arrCocktails.length === 0
      ? alert("Спочатку оберіть коктейль")
      : setIsOpenModal(true);
  };

  const submitBasket = () => {
    console.log(arrCocktails);
    removeCocktails();
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (arrCocktails.length === 0) setIsOpenModal(false);
  }, [arrCocktails]);

  return (
    <div className="basket-box">
      <RiShoppingBasket2Line
        className="basket-icon"
        onClick={openBasketModalWindow}
      />
      {arrCocktails.length === 0 ? null : (
        <div className="circle">
          <div className="count-cocktails">{arrCocktails.length}</div>
        </div>
      )}
      <ModalBasket
        isOpen={isOpenModal}
        Title="Замовленні коктейлі: "
        closeModalWindow={() => setIsOpenModal(false)}
        submitModalWindow={submitBasket}
        Content={
          <BasketContent
            arrCocktails={arrCocktails}
            removeCocktail={removeCocktail}
          />
        }
      />
    </div>
  );
};

export default Basket;
