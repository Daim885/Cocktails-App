import { Link } from "react-router-dom";

import { alphabet } from "../../constants/alphabet";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {alphabet.map((letter) => (
        <span key={"link" + letter}>
          <Link
            to={{
              pathname: "/search_by_first_letter",
              search: "?f=" + letter,
            }}
            key={letter}
          >
            {letter}
          </Link>
          {letter !== "z" ? <span key={"/" + letter}>/</span> : null}
        </span>
      ))}
    </div>
  );
};

export default Footer;
