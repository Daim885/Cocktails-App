import "./basket-content.css";

const BasketContent = ({ arrCocktails, removeCocktail }) => {
  return (
    <ol className="list-content-basket">
      {arrCocktails.map((cocktail, index) => (
        <li key={cocktail + index}>
          <span>{cocktail}</span>
          <button
            className="button-remove-cocktail"
            key={"b" + cocktail}
            onClick={() => removeCocktail(cocktail)}
          >
            x
          </button>
        </li>
      ))}
    </ol>
  );
};

export default BasketContent;
