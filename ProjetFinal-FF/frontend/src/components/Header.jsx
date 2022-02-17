import React from "react";
import "../css/components/Header.css";
import background from "../assets/géoréso-bcg.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <h1 className="titles">
          Blog <br className="br" />
          <br className="br" />
          Géoréso
        </h1>
      </div>
      <img className="bcg-homepage" src={background} alt="backgound-blog" />
    </div>
  );
}
