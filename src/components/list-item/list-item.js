import { Link } from "react-router-dom";

import "./list-item.css";

const ListItem = ({ drink }) => {
  return (
    <Link
      className="link-list-item-cocktail"
      to={{
        pathname: "/cocktail/" + drink.idDrink,
      }}
    >
      <div className="list-item-cocktail">
        <img src={drink.strDrinkThumb + "/preview"} className="img-list-item" />
        <span className="span-list-item">{drink.strDrink}</span>
      </div>
    </Link>
  );
};

export default ListItem;
