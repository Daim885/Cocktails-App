import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./search-field.css";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="search cocktail"
        className="input-search-cocktail"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      ></input>

      <Link
        className="button-search-cocktail"
        to={{
          pathname: "/search_by_name",
          search: "?s=" + searchQuery,
        }}
      >
        <span className="name-button-search">search</span>
      </Link>
    </div>
  );
};

export default SearchField;
