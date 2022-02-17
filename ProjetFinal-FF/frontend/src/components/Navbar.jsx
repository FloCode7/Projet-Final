import React, { useContext, useState } from "react";
import "../css/components/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "../css/index.css";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = (e) => {
    // e.preventDefault();
    setShowLinks(!showLinks);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar-logo">
        <img src={logo} alt="logo Géoréso" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="link navbar-link">
            Accueil
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/write" className="link navbar-link">
            Écrire
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/settings" className="link navbar-link">
            Mon profil
          </Link>
        </li>
        {!user ? (
          <>
            <li className="navbar-item">
              <a href="/register " className="link navbar-link nav-register">
                S'inscrire
              </a>
            </li>
            <li className="navbar-item">
              <a href="/login " className="link navbar-link nav-login">
                Se connecter
              </a>
            </li>
          </>
        ) : (
          <li className="navbar-item nav-logout" onClick={handleLogout}>
            {user && "Se déconnecter"}
          </li>
        )}
      </ul>
      <button className="navbar-burger" onClick={handleShowLinks}>
        <span className="burger-line"></span>
      </button>
    </div>
  );
}
