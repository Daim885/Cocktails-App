import ListItem from "../list-item/list-item";

import "./list-cocktails.css";

const ListCocktails = ({ arrCocktails }) => {
  return (
    <div className="list-cocktails">
      {arrCocktails.map((cocktail) => (
        <ListItem
          key={cocktail.idDrink}
          drink={{
            idDrink: cocktail.idDrink,
            strDrink: cocktail.strDrink,
            strDrinkThumb: cocktail.strDrinkThumb,
          }}
        />
      ))}
    </div>
  );
};

export default ListCocktails;
