import { Link } from "react-router-dom";

import SearchField from "../search-field/search-field";
import Basket from "../basket/basket";

import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <Link to="/">your cocktail</Link>
      </div>
      <div className="right-side">
        <SearchField />
        <Basket />
      </div>
    </div>
  );
};

export default Header;
